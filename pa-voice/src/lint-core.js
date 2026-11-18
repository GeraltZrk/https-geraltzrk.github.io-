/*!
 * PA 话术体检 · lint-core
 * 纯函数，无 DOM 依赖。浏览器（window.PALint）与 Node（require / import）通用。
 * 每条规则都对应《PA 话术手册》里的一条依据，rule.ref 指向手册中的规则编号。
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PALint = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ---------- 基础度量 ---------- */

  // 视觉字宽：汉字/全角 = 1，半角字母数字符号 = 0.5，emoji = 1
  function charWidth(ch) {
    var code = ch.codePointAt(0);
    if (code <= 0x7f) return ch === ' ' ? 0.25 : 0.5;
    return 1;
  }
  function visualLen(str) {
    var n = 0;
    for (var ch of String(str || '')) n += charWidth(ch);
    return Math.round(n * 10) / 10;
  }
  // 把 JS 字符串下标换算成视觉字位（从 0 起）
  function visualIndex(str, idx) {
    return visualLen(String(str).slice(0, idx));
  }
  // 按视觉字宽截断，返回 {shown, cut}
  function truncate(str, budget) {
    str = String(str || '');
    var n = 0, out = '';
    for (var ch of str) {
      var w = charWidth(ch);
      if (n + w > budget) return { shown: out, cut: true, rest: str.slice(out.length) };
      n += w; out += ch;
    }
    return { shown: out, cut: false, rest: '' };
  }

  /* ---------- 表面（消息出现的位置）与字数预算 ----------
   * 数值是「设计预算」而非系统硬限制；来源见手册第 2 章与证据台账。
   */
  var SURFACES = {
    lock:    { name: '锁屏通知',         title: 16, titleHard: 20, body: 40, bodyHard: 50, note: '默认字号一行约 17–20 字；调大字号后约 12–14 字' },
    android: { name: '安卓通知（折叠）', title: 16, titleHard: 20, body: 20, bodyHard: 50, note: '标题恒为 1 行，正文默认也只有 1 行' },
    wechat:  { name: '微信服务通知',     title: 20, titleHard: 20, body: 20, bodyHard: 20, note: '模板字段，一格约 20 个字符，超长会发送失败' },
    watch:   { name: '手表',             title: 9,  titleHard: 11, body: 24, bodyHard: 36, note: '抬腕只看到标题这一行，约 5 秒' },
    island:  { name: '灵动岛 / 实况窗',  title: 4,  titleHard: 6,  body: 3,  bodyHard: 6,  note: '只放得下一个状态词和一个数字' },
    chat:    { name: '对话气泡',         title: 20, titleHard: 24, body: 80, bodyHard: 120, note: '会话内可以稍长，仍然先说结论' }
  };

  /* ---------- 消息类型 ---------- */
  var TYPES = {
    ack:         { name: '接单确认',   needsAction: false, needsDefault: false, allowExclaim: 0 },
    need_info:   { name: '补充信息',   needsAction: true,  needsDefault: false, allowExclaim: 0 },
    progress:    { name: '进展播报',   needsAction: false, needsDefault: false, allowExclaim: 0 },
    opportunity: { name: '机会提醒',   needsAction: true,  needsDefault: true,  allowExclaim: 0 },
    approval:    { name: '求拍板',     needsAction: true,  needsDefault: true,  allowExclaim: 0 },
    deadline:    { name: '到点提醒',   needsAction: true,  needsDefault: true,  allowExclaim: 0 },
    done:        { name: '已办告知',   needsAction: false, needsDefault: false, allowExclaim: 0 },
    blocked:     { name: '受阻求助',   needsAction: true,  needsDefault: false, allowExclaim: 0 },
    nudge:       { name: '轻推',       needsAction: true,  needsDefault: false, allowExclaim: 0 },
    milestone:   { name: '里程碑',     needsAction: false, needsDefault: false, allowExclaim: 1 },
    digest:      { name: '复盘小结',   needsAction: false, needsDefault: false, allowExclaim: 0 },
    rescope:     { name: '建议调整',   needsAction: true,  needsDefault: false, allowExclaim: 0 },
    correction:  { name: '更正',       needsAction: false, needsDefault: false, allowExclaim: 0 },
    pause:       { name: '停止提醒',   needsAction: true,  needsDefault: false, allowExclaim: 0 }
  };

  /* ---------- 正则词库 ---------- */
  var RX = {
    value: /[¥￥]\s?\d[\d,]*(?:\.\d+)?|\d{1,2}[:：]\d{2}|\d{1,2}\s?月\s?\d{1,2}\s?[日号]|\d[\d,]*(?:\.\d+)?\s?(?:元|块|万|%|％|折|分钟|小时|个小时|天|周|个月|次|张|个|位|桌|人|杯|袋|箱|盒|单|条|件|趟|班|词|晚|公里|公斤|千克|斤|克|kg|ml|毫升|升|片|家|h|min)/,
    state: /已(?:替你|帮你|替您|帮您|为你|为您)?[\u4e00-\u9fa5]{1,3}|没(?:排上|排到|抢到|成功|成|订到|通过|下成|用上)|降了|涨了|降到|涨到|降价|便宜了|到货|缺货|没货|售罄|卖完了|下架|有票|有号|有位|延误|停运|停了|取消了|失败|完成|达标|到账|退回|还差|只差|差一个|截止|到期|续费|扣费|更正|卡在|排上|改成|改到|改回|改错|赶不上|订好了|约好了|停掉了|过号|作废|该[\u4e00-\u9fa5]{1,10}了|盯上/,
    opener: /^(?:【[^】]{0,8}】)?\s*(?:温馨提示|友情提示|好消息|坏消息|重要提醒|重要通知|您好|你好|尊敬的|亲爱的|hi|hello|嗨|哈喽|叮咚|报告|注意|太棒了|太好了|太棒啦|哎呀|糟糕|不好了|恭喜|我刚刚|我刚才|我帮你|我帮您|我已经帮|我为您|为您|系统提示|系统通知|提醒您|提醒你|跟你说|告诉你一个|打扰一下)/i,
    process: /^(?:.{0,6})(?:我)?(?:刚刚|刚才|已经)?(?:帮你|帮您|为你|为您|给你)?(?:查了|搜了|看了|分析了|对比了|比较了|检索了|算了一下|算过了|检测到|监测到|发现您|发现你)/,
    honorific: /您/g,
    pet: /亲(?=[，,~～！!。\s]|爱的|亲|$)|宝子|宝宝|宝贝|主人|小主|家人们|集美|姐妹们|小可爱|小伙伴|老板(?=[，,！!~～])/g,
    selfRef: /本助手|小助手|小秘书为|我是您的|我是你的专属/g,
    exclaim: /[！!]/g,
    particle: /(?:哦|噢|喔|呢|啦|呀|哟|嘛|哈|哒|滴|捏|嘞|咯|耶)(?=[，,。！!？?~～、；;\s）)]|$)/g,
    tilde: /[~～]+/g,
    openQ: /怎么选|怎么办|如何处理|你看呢|您看呢|您看怎么|你看怎么|你觉得呢|需要我.{0,14}吗|要不要我.{0,14}吗?|是否需要|要我帮.{0,10}吗/,
    question: /[？?]/g,
    genericBtn: /^(?:确定|确认|取消|知道了|我知道了|好的|好|OK|ok|Ok|是|否|是的|不是|同意|拒绝|查看|详情|查看详情|了解|了解详情|关闭|提交|下一步|继续|返回|立即查看|点击查看|去看看)$/,
    absolute: /全网最低|史上最低|历史最低价?|史低|最低价|最便宜|最优惠|最划算|最优|最佳|第一(?!次|步|时间|单|笔|个|天|周|期|名额)|唯一(?!的?办法|可选)|绝对|100\s?%|百分百|永久|万能|国家级|世界级|顶级|极致|稳赚|保本|零风险|必涨|包过|秒杀全网/g,
    vague: /大约|大概|左右|差不多|若干|一些(?=费用|钱|时间|优惠)|不少|较多|近期|尽快|稍后|过段时间|有所(?:波动|变化|下降|上涨)|适当|酌情/g,
    relTime: /下下?周[一二三四五六日天]|这周[一二三四五六日天]|本周[一二三四五六日天]|下个?礼拜[一二三四五六日天]|大?后天|明早|明晚|明天早上|明天晚上|今晚|今早|月底|月初|年底|半夜|凌晨\s?12\s?点|上午\s?12\s?点|中午\s?12\s?点|晚上\s?12\s?点/g,
    absTime: /\d{1,2}\s?[:：]\s?\d{2}|\d{1,2}\s?月\s?\d{1,2}\s?[日号]|\d{1,2}\s?\/\s?\d{1,2}|\d{1,2}\s?[日号](?!线)|\d{1,2}\s?点/,
    controlling: /必须|务必|一定要|千万(?:不要|别)?|不要半途而废|坚持就是胜利|你应该|您应该|你得|赶紧|赶快|快点|抓紧(?!时间窗口)|立刻马上|别再|不许|再不.{0,8}就/g,
    blame: /(?:由于|因为)(?:你|您)(?:的|没|未|忘|自己)|你(?:又|还|总是|老是)(?:没|忘|不)|你忘了|您忘了|你没有按时|您没有按时|是你(?:自己)?(?:没|忘|选)/g,
    apology: /(?:非常|十分|深表|万分|实在)(?:抱歉|歉意)|给(?:您|你)带来(?:的)?不便|敬请谅解|请(?:您|你)?谅解|感谢(?:您|你)的(?:理解|支持|耐心|配合)|深感抱歉|对此我们/g,
    aiFlavor: /不是.{1,14}而是|值得注意的是|需要注意的是|总的来说|总而言之|综上所述|我(?:完全|非常)?(?:能)?理解(?:你|您)的|稳稳地?接住|接住你|让我们一起|希望(?:这|以上)(?:对你|对您|能)|如果(?:你|您)还有(?:任何)?(?:问题|疑问)|随时告诉我|随时找我|保驾护航|为你赋能|为您赋能|一站式|全方位|精心为(?:你|您)|量身定制|贴心|暖心/g,
    dash: /——/g,
    meme: /yyds|绝绝子|家人们谁懂|谁懂啊|尊嘟假嘟|泰裤辣|遥遥领先|芭比q|栓q|蚌埠住|破防了?|干饭人|打工人|牛马|摆烂|躺平|凡尔赛|显眼包|city不city|班味|老铁|666|奥利给|杀疯了|夺笋|u1s1|xswl|awsl|dddd|哈基米|爷青回|内卷|emo了?|拿捏|狠狠|一整个|咱就是说|真的会谢|栓Q|绝了/gi,
    emoji: /\p{Extended_Pictographic}/gu,
    riskyEmoji: /🙂|🙃|😅|🌹|🙏|😏|🤪|💩|😘|😍|🥺/gu,
    defaultWord: /不操作|不处理|不回复|不回|不用管|不(?:点|确认|付款|选|发|订|取|买|续|改)(?:就|则|，|的话)|不[\u4e00-\u9fa5]{1,3}的话|(?:自动)?(?:续费|扣费|扣款|释放|关单|停网)|原订单照旧|照常|照旧|不动(?:的话)?|否则|到期(?:将|会|后|自动)|过期|默认|自动(?:续|扣|取消|顺延|生效|保留|放弃)|保留|作废|失效|截止|之前|前有效|有效期|先(?:占|锁|留)着|可(?:免费)?(?:取消|退)|随时(?:可)?(?:退|取消|改)|\d+\s?(?:分钟|小时|天)内/,
    multiAsk: /(?:[；。，]\s*另外|顺便|还有一件事|同时请|此外)[^。；]*?(?:吗|？|\?|要不要|能不能|请(?:你|您)?(?:确认|选|回复|看))/,
    drama: /^(?:坏消息|糟糕|不好了|哎呀|完了|出事了|紧急|警告|天哪|我的天)/,
    dramaAny: /哎呀|天哪|糟了|完蛋|吓死|惨了|大事不好/g,
    official: /进行了?(?:操作|处理|检索|查询|比较|比对|确认|支付|核实|办理)|予以|请知悉|特此|敬请(?!谅解)|兹|该(?:订单|产品|套餐|用户|商品|服务|航班)|此(?:次|项|类)|鉴于|届时|烦请|望(?:您|你)|相关(?:事宜|信息|内容)|如下所示|现将|为(?:您|你)提供/g,
    fakeUrgency: /手慢无|速抢|错过(?:再等|不再|就没)|仅剩(?!\d)|马上抢|限时(?!\d)|疯抢|秒杀|抢疯了|再不.{0,6}就(?:没|晚)了|最后(?:机会|一波)/g,
    praise: /太棒(?:了|啦)|真厉害|你真(?:棒|行|牛)|好样的|了不起|优秀|完美|超赞|给你点赞|为你骄傲|继续加油|加油哦?|你最棒|棒棒哒/g,
    saving: /省|便宜|降了|降价|立减|优惠|回血|划算/,
    baseline: /比|较|原价|上次|上回|均价|平时|近\s?\d+\s?天|昨天|上周|上月|划线价|常规价|日常价|同款|到手价|去年|之前/,
    promo: /立省|直降|狂省|巨划算|神价|捡漏|薅羊毛|薅到|白菜价|闭眼入|冲鸭|抢疯|爆款|必囤|必入/g,
    guilt: /我会难过|等了你|想你了|亏大了|会后悔|别怪我|不理我|没理我|辜负|对得起/g,
    midnight: /24\s?[:：]\s?00|(?:凌晨|半夜|晚上|上午|下午|中午)\s?(?:12|十二)\s?点/g,
    rhetorical: /难道|不是吗|你确定不.{0,10}吗|真的不.{0,8}吗|还不.{0,6}吗/g,
    amountAbbr: /\d(?:\.\d+)?\s?[kKwW](?![a-zA-Z])/g,
    unitAbbr: /\d+(?:\.\d+)?\s?(?:hrs?|mins?|h|d)(?![a-zA-Z0-9])/g,
    puff: /信用极好|口碑极好|极好|极佳|超值|性价比(?:极高|超高|之王|爆棚|很高)|闭眼(?:买|订|冲)|放心(?:买|订|冲)|值得信赖|品质保证|隐藏券|隐藏优惠|内部价|独家(?:价|优惠)|良心价|神仙(?:价|店)/g,
    overpromise: /保证(?!金)|一定能|肯定能|包(?:你|您)(?:满意|省)|万无一失|绝不会|稳了|刚好直接|到了就能(?:吃|坐|办)/g,
    courtesy: /(?:今天|最近|这几天)?辛苦(?:了|啦)(?=[，,。！!\s]|$)|忙了一天|累了一天/g,
    passive: /(?:你|您)(?:的[^，。]{1,8})?被(?:取消|拒绝|扣|踢|封|冻结|驳回|退回)/g,
    readMind: /我(?:感觉|觉得|看)(?:你|您)(?:最近|今天|好像|似乎)?|(?:你|您)(?:看起来|好像|似乎)(?:很|有点)?(?:累|忙|烦|焦虑|压力)|看(?:你|您)今天/g,
    zhNumUnit: /[一二三四五六七八九十百千两]{1,5}(?:元|块钱|块|万元|分钟|个?小时|折)(?!以)/g,
    zhNumClock: /(?:早上|上午|中午|下午|晚上|凌晨|今晚|明早|今早|明晚)[一二三四五六七八九十两]{1,3}点(?:半|[一二三四五六七八九十]{1,3}分)?/g
  };

  function findAll(re, text) {
    var out = [], m;
    var flags = re.flags.indexOf('g') === -1 ? re.flags + 'g' : re.flags;
    var r = new RegExp(re.source, flags);
    while ((m = r.exec(text)) !== null) {
      out.push({ text: m[0], index: m.index });
      if (m[0].length === 0) r.lastIndex++;
    }
    return out;
  }

  /* ---------- 规则 ----------
   * level: error（别发）/ warn（改一改）/ info（可以更好）
   * 每条规则返回若干 finding：{ rule, level, field, index, text, msg, fix }
   */
  function mk(rule, level, field, hit, msg, fix) {
    return {
      rule: rule, level: level, field: field,
      index: hit ? hit.index : -1, text: hit ? hit.text : '',
      msg: msg, fix: fix || ''
    };
  }

  var RULES = [
    {
      id: 'LEN', name: '字数预算', ref: 'R06',
      run: function (m, ctx) {
        var out = [], s = ctx.surface;
        var tl = visualLen(m.title), bl = visualLen(m.body);
        if (m.title && tl > s.title) out.push(mk('LEN', tl > s.titleHard ? 'error' : 'warn', 'title', { index: truncate(m.title, s.title).shown.length, text: '' },
          '标题 ' + tl + ' 字，「' + s.name + '」建议 ' + s.title + ' 字以内' + (tl > s.titleHard ? '，硬上限 ' + s.titleHard + ' 字' : ''), '一行说完一个完整的事：对象、变化、数字'));
        if (bl > s.body) out.push(mk('LEN', bl > s.bodyHard ? 'error' : 'warn', 'body', { index: truncate(m.body, s.body).shown.length, text: '' },
          '正文 ' + bl + ' 字，「' + s.name + '」建议 ' + s.body + ' 字以内' + (bl > s.bodyHard ? '，硬上限 ' + s.bodyHard + ' 字' : ''), '只留边界条件和「不操作会怎样」，其余放进明细'));
        return out;
      }
    },
    {
      id: 'ANCHOR', name: '价值锚点前置', ref: 'R04',
      run: function (m, ctx) {
        var head = (m.title ? m.title + ' ' : '') + m.body;
        var mv = RX.value.exec(head), ms = RX.state.exec(head);
        var pos = mv ? visualIndex(head, mv.index) : -1;
        var spos = ms ? visualIndex(head, ms.index) : -1;
        ctx.metrics.firstValuePos = pos;
        ctx.metrics.firstStatePos = spos;
        var best = [pos, spos].filter(function (x) { return x >= 0; }).sort(function (a, b) { return a - b; })[0];
        if (best === undefined) return [mk('ANCHOR', 'warn', 'title', null, '整条消息里找不到一个数字或状态词，扫一眼不知道发生了什么', '第一行写清「到了哪一步、值多少」')];
        if (best > ctx.anchorWithin) return [mk('ANCHOR', 'warn', 'title', null, '第一个有用的信息出现在第 ' + Math.floor(best + 1) + ' 字，前 ' + ctx.anchorWithin + ' 字都在铺垫', '把金额、时间或状态挪到最前面')];
        if (best > ctx.anchorIdeal) return [mk('ANCHOR', 'info', 'title', null, '第一个数字或状态出现在第 ' + Math.floor(best + 1) + ' 字，还能再靠前', '最紧的容器只露前 ' + ctx.anchorIdeal + ' 个字')];
        return [];
      }
    },
    {
      id: 'SUBJECT', name: '标题里的对象', ref: 'R04',
      run: function (m, ctx) {
        // 调用方给出 subject（目标短名或几个关键词）时才查：标题里要认得出说的是哪件事
        if (!ctx.subject || !m.title) return [];
        var keys = [].concat(ctx.subject).filter(Boolean);
        if (!keys.length) return [];
        var pos = -1;
        keys.forEach(function (k) { var i = m.title.indexOf(k); if (i !== -1 && (pos === -1 || i < pos)) pos = i; });
        if (pos === -1) return [mk('SUBJECT', 'warn', 'title', null, '标题里没说这是哪件事（' + keys.slice(0, 3).join(' / ') + '）', '把对象放进标题：「东京直飞降到 ¥2,360」。锁屏上一排通知，先要认得出是哪一件')];
        if (visualIndex(m.title, pos) > ctx.anchorWithin) return [mk('SUBJECT', 'info', 'title', null, '对象出现得太靠后，调大字号时会被截掉', '对象和结果都放进前 ' + ctx.anchorWithin + ' 个字宽')];
        return [];
      }
    },
    {
      id: 'OPENER', name: '开场白', ref: 'R05',
      run: function (m) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          var t = m[f] || '';
          if (f === 'body' && m.title) return; // 有标题时只查标题开头
          var h = RX.opener.exec(t);
          if (h) out.push(mk('OPENER', 'warn', f, { index: 0, text: h[0] }, '「' + h[0] + '」占掉了最贵的开头', '直接从结果说起'));
          var p = RX.process.exec(t);
          if (!h && p) out.push(mk('OPENER', 'warn', f, { index: 0, text: p[0] }, '先讲了过程（' + p[0] + '），结果被挤到后面', '先说结果；过程用一句「比了 N 家」放在后面'));
        });
        return out;
      }
    },
    {
      id: 'DIGIT', name: '数字写法', ref: 'R08',
      run: function (m) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          findAll(RX.zhNumUnit, m[f] || '').concat(findAll(RX.zhNumClock, m[f] || '')).forEach(function (h) {
            if (/^一(?:下|起|些|直|定|点)/.test(h.text)) return;
            out.push(mk('DIGIT', 'warn', f, h, '「' + h.text + '」用了汉字数字，扫读时不显眼', '金额、时间、数量一律用阿拉伯数字'));
          });
        });
        return out;
      }
    },
    {
      id: 'ADDRESS', name: '称呼', ref: 'R28',
      run: function (m, ctx) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          var t = m[f] || '';
          if (/您/.test(t) && /你/.test(t)) {
            out.push(mk('ADDRESS', 'error', f, { index: t.indexOf('您'), text: '您' }, '同一条消息里「你」「您」混用', '全程用「你」，或者整档切到「您」'));
          } else if (!ctx.allowNin) findAll(RX.honorific, t).slice(0, 1).forEach(function (h) {
            out.push(mk('ADDRESS', 'info', f, h, '用了「您」。默认档用「你」；长辈模式、金融政务才整档用「您」', '确认这位用户的称呼档，并保持全程一致'));
          });
          findAll(RX.pet, t).forEach(function (h) {
            out.push(mk('ADDRESS', 'error', f, h, '「' + h.text + '」是电商/直播体，工具型助手用了显得油腻', '删掉称呼，直接说事'));
          });
          findAll(RX.selfRef, t).forEach(function (h) {
            out.push(mk('ADDRESS', 'warn', f, h, '自称「' + h.text + '」多余', '不自称，或只说「我」'));
          });
        });
        return out;
      }
    },
    {
      id: 'EXCLAIM', name: '感叹号', ref: 'R29',
      run: function (m, ctx) {
        var all = (m.title || '') + (m.body || '');
        var hits = findAll(RX.exclaim, all);
        var allow = ctx.type.allowExclaim;
        if (ctx.stakes === 'high') allow = 0;
        if (hits.length > allow) {
          return [mk('EXCLAIM', hits.length > 1 ? 'error' : 'warn', 'body', null,
            '用了 ' + hits.length + ' 个感叹号' + (allow ? '（这类消息最多 ' + allow + ' 个）' : ''), '日常状态变化用句号或不加标点；只有真正的里程碑才配一个感叹号')];
        }
        return [];
      }
    },
    {
      id: 'PARTICLE', name: '语气词', ref: 'R29',
      run: function (m, ctx) {
        var all = (m.title || '') + ' ' + (m.body || '');
        var hits = findAll(RX.particle, all).concat(findAll(RX.tilde, all));
        var allow = ctx.stakes === 'high' ? 0 : 1;
        if (hits.length > allow) {
          return [mk('PARTICLE', ctx.stakes === 'high' ? 'error' : 'warn', 'body', hits[0],
            '句末语气词/波浪号出现 ' + hits.length + ' 次（' + hits.map(function (h) { return h.text; }).join('、') + '）',
            ctx.stakes === 'high' ? '涉钱、涉行程的消息不用语气词' : '最多留一个，且不要放在坏消息里')];
        }
        return [];
      }
    },
    {
      id: 'OPENQ', name: '开放式提问', ref: 'R10',
      run: function (m, ctx) {
        var out = [], acts = m.actions || [];
        var all = (m.title || '') + (m.body || '');
        var hard = /怎么选|怎么办|如何处理|你看呢|您看呢|您看怎么|你看怎么|你觉得呢/.exec(all);
        var soft = RX.openQ.exec(m.body || '');
        if (hard) out.push(mk('OPENQ', 'warn', 'body', { index: hard.index, text: hard[0] }, '「' + hard[0] + '」把决定原样抛回给用户', '给出一个默认方案，让用户只需点头或换一个'));
        else if (soft && acts.length < 2) out.push(mk('OPENQ', 'warn', 'body', { index: soft.index, text: soft[0] }, '「' + soft[0] + '」只有问句，没有给出可点的选项', '把问题配上 2–3 个写明结果的按钮'));
        var q = findAll(RX.question, all);
        ctx.metrics.questions = q.length;
        if (q.length > 0 && acts.length === 0) out.push(mk('OPENQ', 'warn', 'body', null, '问了问题却没有给按钮，用户得自己打字回答', '把问题换成 2–3 个动词按钮'));
        if (q.length > 1 || RX.multiAsk.test(m.body || '')) out.push(mk('OPENQ', 'warn', 'body', null, '一条消息里塞了不止一个决定', '一条消息只推进一个决定，其余分开或合进小结'));
        return out;
      }
    },
    {
      id: 'BUTTON', name: '按钮', ref: 'R11',
      run: function (m, ctx) {
        var out = [], a = m.actions || [];
        ctx.metrics.actions = a.length;
        if (ctx.type.needsAction && a.length === 0) out.push(mk('BUTTON', 'error', 'actions', null, '这类消息需要用户动一下，却没有给动作', '给 1 个推荐动作 + 1 个退路'));
        if (a.length > 3) out.push(mk('BUTTON', 'warn', 'actions', null, '给了 ' + a.length + ' 个按钮，选项越多越难拍板', '收敛到「推荐 + 备选 + 暂不」以内'));
        var limit = a.length >= 3 ? 4 : 6;
        a.forEach(function (label, i) {
          var t = label.trim();
          var soleAck = a.length === 1 && !ctx.type.needsAction && /^(?:知道了|我知道了)$/.test(t);
          if (RX.genericBtn.test(t) && !soleAck) out.push(mk('BUTTON', 'warn', 'actions', { index: i, text: label }, '按钮「' + label + '」不看正文就不知道会发生什么', '写出真实的操作，例如「停掉续费」「改签 16:30」'));
          if (/^(?:立即|马上|一键)/.test(t) || /帮我|为我|给我/.test(t)) out.push(mk('BUTTON', 'info', 'actions', { index: i, text: label }, '按钮「' + label + '」带了人称或促销腔', '按钮不带「我」，不用「立即」「一键」，直接写动作'));
          if (visualLen(t) > limit + 2) out.push(mk('BUTTON', 'info', 'actions', { index: i, text: label }, '按钮「' + label + '」有 ' + visualLen(t) + ' 字，' + a.length + ' 个按钮时每个约 ' + limit + ' 字', '缩成「动词 + 对象」'));
        });
        return out;
      }
    },
    {
      id: 'DEFAULT', name: '不操作会怎样', ref: 'R12',
      run: function (m, ctx) {
        if (!ctx.type.needsDefault) return [];
        if (!RX.defaultWord.test((m.title || '') + (m.body || ''))) {
          return [mk('DEFAULT', 'warn', 'body', null, '没说清「不操作会怎样、能不能反悔」', '补一句：例如「不操作则明早 8:00 自动续费」「周三前可免费取消」')];
        }
        return [];
      }
    },
    {
      id: 'ABSOLUTE', name: '绝对化与举不出证的说法', ref: 'R32',
      run: function (m) {
        var out = [];
        var SCOPE = /(?:近|过去|最近|这)\s?\d+\s?(?:天|周|个月|年)|\d+\s?(?:家|个平台|个渠道|个店)(?:里|中)|我(?:比|查|盯|监测)(?:过|了)?的|直飞里|同款里|期间|本周|本月|这个月|这周|今天|记录到的/;
        ['title', 'body', 'actions'].forEach(function (f) {
          var t = f === 'actions' ? (m.actions || []).join(' ') : (m[f] || '');
          findAll(RX.absolute, t).forEach(function (h) {
            var soft = /^(?:最低价?|最便宜|最优惠|最划算|最优|最佳|历史最低价?)$/.test(h.text);
            var clause = t.slice(Math.max(0, t.lastIndexOf('。', h.index) + 1), (t.indexOf('。', h.index) + 1) || t.length);
            if (soft && SCOPE.test(clause)) {
              out.push(mk('ABSOLUTE', 'info', f, h, '「' + h.text + '」带了范围，可以说', '同一条里或明细里要有数据来源和查询时间'));
            } else {
              out.push(mk('ABSOLUTE', 'error', f, h, '「' + h.text + '」是绝对化说法，举不出证，且有广告法风险', '换成能核对的范围：「近 30 天最低（京东自营，今天 10:00 查）」'));
            }
          });
          findAll(RX.puff, t).forEach(function (h) {
            out.push(mk('ABSOLUTE', 'warn', f, h, '「' + h.text + '」是替别人下的结论，举不出证', '换成能核对的事实：「近 90 天 0 纠纷」「4.9 分，2,300 条评价」'));
          });
          findAll(RX.overpromise, t).forEach(function (h) {
            out.push(mk('ABSOLUTE', 'warn', f, h, '「' + h.text + '」是 PA 兑现不了的承诺', '说现状和估计：「约 20 分钟」「目前有位」，不打包票'));
          });
        });
        return out;
      }
    },
    {
      id: 'BASELINE', name: '比较基准', ref: 'R13',
      run: function (m) {
        var all = (m.title || '') + (m.body || '');
        if (RX.saving.test(all) && RX.value.test(all) && !RX.baseline.test(all)) {
          return [mk('BASELINE', 'info', 'body', null, '说了省多少，却没说跟什么比', '加上基准：「比上周」「比原方案」「比你常买的那家」')];
        }
        return [];
      }
    },
    {
      id: 'VAGUE', name: '含糊说法', ref: 'R15',
      run: function (m) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          findAll(RX.vague, m[f] || '').forEach(function (h) {
            out.push(mk('VAGUE', 'info', f, h, '「' + h.text + '」含糊，用户还得自己去查', '给具体数字、具体时间；拿不准就给区间'));
          });
        });
        return out;
      }
    },
    {
      id: 'TIME', name: '时间歧义', ref: 'R16',
      run: function (m) {
        var out = [];
        var CUE = /前|截止|到期|扣|续费|作废|有效|之前|再报|再提醒|出发|发车|起飞|送达|上门|开抢|放号/;
        ['title', 'body'].forEach(function (f) {
          var t = m[f] || '';
          findAll(RX.relTime, t).forEach(function (h) {
            var after = t.slice(h.index + h.text.length, h.index + h.text.length + 10);
            var near = t.slice(Math.max(0, h.index - 8), h.index + h.text.length + 10).replace(h.text, '');
            if (CUE.test(after.slice(0, 8)) && !RX.absTime.test(near)) {
              out.push(mk('TIME', 'warn', f, h, '「' + h.text + '」不同的人理解不同', '写成日期加钟点，例如「11 月 25 日（周三）23:59 前」「明天 08:00」'));
            }
          });
          findAll(RX.midnight, t).forEach(function (h) {
            out.push(mk('TIME', 'warn', f, h, '「' + h.text + '」算哪一天有歧义', '写成「今天 23:59」或「明天 00:00」'));
          });
          findAll(RX.amountAbbr, t).forEach(function (h) {
            out.push(mk('TIME', 'info', f, h, '「' + h.text + '」用了 k / w 缩写', '金额写全：¥2,100、1.2 万'));
          });
          findAll(RX.unitAbbr, t).forEach(function (h) {
            out.push(mk('TIME', 'info', f, h, '「' + h.text + '」用了英文单位缩写', '时长写全：2 小时、40 分钟、3 天'));
          });
        });
        return out;
      }
    },
    {
      id: 'CONTROL', name: '控制性措辞', ref: 'R38',
      run: function (m) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          findAll(RX.controlling, m[f] || '').forEach(function (h) {
            out.push(mk('CONTROL', 'warn', f, h, '「' + h.text + '」是命令/说教口吻，容易激起逆反', '改成给选择：「想省事的话，可以……」'));
          });
          findAll(RX.blame, m[f] || '').forEach(function (h) {
            out.push(mk('CONTROL', 'error', f, h, '「' + h.text + '」在怪用户', '只说现状和下一步，不追究原因'));
          });
          findAll(RX.passive, m[f] || '').forEach(function (h) {
            out.push(mk('CONTROL', 'info', f, h, '「' + h.text + '」是「被」字句，读起来像用户出了事', '改成主动句：「商家取消了订单，¥268 今天内退回」'));
          });
        });
        return out;
      }
    },
    {
      id: 'DRAMA', name: '渲染情绪', ref: 'R30',
      run: function (m, ctx) {
        var out = [], all = (m.title || '') + (m.body || '');
        var h = RX.drama.exec(m.title || m.body || '');
        if (h) out.push(mk('DRAMA', ctx.stakes === 'high' ? 'error' : 'warn', m.title ? 'title' : 'body', { index: 0, text: h[0] }, '用「' + h[0] + '」开头会先把焦虑递给用户', '坏消息也从事实和补救方案说起'));
        else if (ctx.stakes === 'high') findAll(RX.dramaAny, all).slice(0, 1).forEach(function (x) {
          out.push(mk('DRAMA', 'warn', 'body', x, '高风险消息里出现「' + x.text + '」', '删掉情绪词，只留事实'));
        });
        findAll(RX.fakeUrgency, all).forEach(function (x) {
          out.push(mk('DRAMA', 'warn', 'body', x, '「' + x.text + '」是促销式催促', '紧迫感必须是真的，并写出具体截止时间'));
        });
        findAll(RX.promo, all).forEach(function (x) {
          out.push(mk('DRAMA', 'warn', 'body', x, '「' + x.text + '」是促销腔，会把 PA 变成卖家', '换成事实：「便宜了 ¥185」「比上周低 ¥185」'));
        });
        findAll(RX.guilt, all).forEach(function (x) {
          out.push(mk('DRAMA', 'error', 'body', x, '「' + x.text + '」是在用愧疚或恐惧催人', '只说事实和选项'));
        });
        findAll(RX.rhetorical, all).forEach(function (x) {
          out.push(mk('DRAMA', 'warn', 'body', x, '「' + x.text + '」是反问，带质问或挽留的意味', '改成陈述，或者直接给选项'));
        });
        findAll(RX.readMind, all).forEach(function (x) {
          out.push(mk('DRAMA', 'warn', 'body', x, '「' + x.text + '」把对用户的观察或猜测说出了口', '情境只用来调节长短和时机，不评论用户的状态'));
        });
        findAll(RX.courtesy, all).forEach(function (x) {
          out.push(mk('DRAMA', 'info', 'body', x, '「' + x.text + '」是寒暄，也在暗示 PA 知道用户今天过得怎样', '用户自己说了累，再回应一句；否则直接说事'));
        });
        if (ctx.typeId !== 'milestone') findAll(RX.praise, all).slice(0, 1).forEach(function (x) {
          out.push(mk('DRAMA', 'info', 'body', x, '「' + x.text + '」是空夸，听多了像哄小孩', '夸具体的事实：「连续 14 天」「这个月少花 ¥380」'));
        });
        return out;
      }
    },
    {
      id: 'SERVICE', name: '客服腔 / 官腔', ref: 'R31',
      run: function (m) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          findAll(RX.apology, m[f] || '').forEach(function (h) {
            out.push(mk('SERVICE', 'warn', f, h, '「' + h.text + '」是客服模板话', '出了问题：一句事实 + 一个补救动作，胜过三句道歉'));
          });
          findAll(RX.official, m[f] || '').forEach(function (h) {
            out.push(mk('SERVICE', 'info', f, h, '「' + h.text + '」是公文腔', '换成口语动词：查、比、订、改、退'));
          });
        });
        return out;
      }
    },
    {
      id: 'AIFLAVOR', name: 'AI 味', ref: 'R33',
      run: function (m) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          findAll(RX.aiFlavor, m[f] || '').forEach(function (h) {
            var contrast = /^不是/.test(h.text);
            out.push(mk('AIFLAVOR', contrast ? 'info' : 'warn', f, h,
              contrast ? '「' + h.text + '」是对比句式，已被不少用户当成 AI 口癖' : '「' + h.text + '」是套话或 AI 腔',
              contrast ? '如果是在纠正真实的误解就保留；只是为了抬高语气就直接说后半句' : '删掉，或换成一个具体事实'));
          });
          var d = findAll(RX.dash, m[f] || '');
          if (d.length) out.push(mk('AIFLAVOR', 'info', f, d[0], '用了破折号，短消息里显得拿腔拿调', '拆成两句，或用逗号'));
        });
        return out;
      }
    },
    {
      id: 'MEME', name: '流行梗', ref: 'R45',
      run: function (m, ctx) {
        var out = [];
        ['title', 'body'].forEach(function (f) {
          findAll(RX.meme, m[f] || '').forEach(function (h) {
            out.push(mk('MEME', ctx.stakes === 'high' ? 'error' : 'warn', f, h, '「' + h.text + '」是流行梗，会过期，也分人群', '幽默放在具体换算和生活细节里，不靠热词'));
          });
        });
        return out;
      }
    },
    {
      id: 'EMOJI', name: '表情符号', ref: 'R34',
      run: function (m, ctx) {
        var out = [], all = (m.title || '') + (m.body || '');
        var e = findAll(RX.emoji, all);
        ctx.metrics.emoji = e.length;
        if (ctx.stakes === 'high' && e.length) out.push(mk('EMOJI', 'warn', 'body', e[0], '高风险消息里用了表情符号', '涉钱、涉行程的消息不放表情'));
        else if (e.length > 1) out.push(mk('EMOJI', 'warn', 'body', e[1], '用了 ' + e.length + ' 个表情符号', '最多 1 个，而且要能当视觉锚点用'));
        findAll(RX.riskyEmoji, all).forEach(function (h) {
          out.push(mk('EMOJI', 'warn', 'body', h, '表情「' + h.text + '」在不同年龄层含义相反或显得轻浮', '换掉或删掉'));
        });
        return out;
      }
    },
    {
      id: 'CLAUSE', name: '长句', ref: 'R07',
      run: function (m, ctx) {
        var out = [], body = String(m.body || '');
        body.split(/[。；;！!？?\n]/).forEach(function (sen) {
          if (visualLen(sen) > ctx.sentenceMax) out.push(mk('CLAUSE', 'warn', 'body', { index: body.indexOf(sen), text: sen }, '有一句 ' + visualLen(sen) + ' 字', '一句超过 ' + ctx.sentenceMax + ' 字就拆成两句'));
          else sen.split(/[，,：:、]/).forEach(function (c) {
            if (visualLen(c) > ctx.clauseMax) out.push(mk('CLAUSE', 'info', 'body', { index: body.indexOf(c), text: c }, '有一截 ' + visualLen(c) + ' 字没有停顿', '加一个逗号，或者删掉修饰语'));
          });
        });
        return out;
      }
    }
  ];

  /* ---------- 主入口 ---------- */
  var DEFAULTS = {
    surface: 'lock', type: 'opportunity', stakes: 'mid',
    anchorIdeal: 6,     // 前 6 个字宽：最紧的容器只露这么多
    anchorWithin: 12,   // 前 12 个字宽：一个完整的命题
    clauseMax: 22,      // 一截（两个标点之间）
    sentenceMax: 34,    // 一句
    readCps: 7,         // 估算默读速度：字/秒，仅作估算
    allowNin: false     // 这位用户的称呼档是不是「您」
  };

  function lint(message, options) {
    var o = Object.assign({}, DEFAULTS, options || {});
    var m = {
      title: String(message.title || '').trim(),
      body: String(message.body || '').trim(),
      actions: (message.actions || []).map(function (s) { return String(s).trim(); }).filter(Boolean)
    };
    var ctx = {
      surface: SURFACES[o.surface] || SURFACES.lock,
      typeId: TYPES[o.type] ? o.type : 'opportunity',
      type: TYPES[o.type] || TYPES.opportunity,
      stakes: o.stakes, subject: o.subject, anchorWithin: o.anchorWithin, anchorIdeal: o.anchorIdeal, clauseMax: o.clauseMax, sentenceMax: o.sentenceMax, allowNin: o.allowNin,
      metrics: {}
    };
    var findings = [];
    RULES.forEach(function (r) {
      try { findings = findings.concat(r.run(m, ctx) || []); } catch (e) { /* 单条规则出错不影响其余 */ }
    });
    var chars = visualLen(m.title) + visualLen(m.body);
    var counts = { error: 0, warn: 0, info: 0 };
    findings.forEach(function (f) { counts[f.level]++; });
    var verdict = counts.error ? 'block' : counts.warn > 1 ? 'revise' : counts.warn === 1 ? 'polish' : 'send';
    return {
      message: m,
      metrics: Object.assign({
        chars: chars,
        titleChars: visualLen(m.title),
        bodyChars: visualLen(m.body),
        readSeconds: Math.round((chars / o.readCps) * 10) / 10,
        questions: 0, actions: m.actions.length, emoji: 0, firstValuePos: -1, firstStatePos: -1
      }, ctx.metrics),
      findings: findings,
      counts: counts,
      verdict: verdict,
      verdictText: { block: '别发', revise: '改一改再发', polish: '差一点', send: '可以发' }[verdict]
    };
  }

  return {
    lint: lint, visualLen: visualLen, visualIndex: visualIndex, truncate: truncate,
    SURFACES: SURFACES, TYPES: TYPES, RULES: RULES.map(function (r) { return { id: r.id, name: r.name, ref: r.ref }; }),
    DEFAULTS: DEFAULTS, _RX: RX
  };
});
