// Powers granted by the "升神" cheat. Learned when the hero ascends, removed if godhood is stripped.
export const ABILITIES_DIVINE = {
  divine_wrath: { id: 'divine_wrath', name: '神罚', kind: 'feature', target: 'enemies', dmg: '12d10', dmgType: 'radiant',
    desc: '所有敌人受到 12d10 光耀伤害，不用命中，没有豁免。凡人管这叫天谴。' },
  divine_word: { id: 'divine_word', name: '神言', kind: 'feature', quick: true, target: 'enemies', dc: 26, save: { abil: 'wis' }, apply: { cond: 'stunned', turns: 2 },
    desc: '附赠动作。你开口说一个字，所有敌人感知豁免（DC 26），失败者震慑两回合。' },
  divine_grace: { id: 'divine_grace', name: '神恩', kind: 'feature', quick: true, target: 'allies', heal: '999', cleanse: 'all', revive: true,
    desc: '附赠动作。全队生命回满，负面状态全消，倒下的人站起来。' },
};
