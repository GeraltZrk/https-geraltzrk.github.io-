// PROVISIONAL
export const ABILITIES = {
  second_wind: { id: 'second_wind', name: '回气', desc: '喘口气，恢复 1d10+等级 点生命。', kind: 'feature', quick: true, target: 'self', heal: '1d10+lvl', cost: { uses: 1, per: 'short' } },
  action_surge: { id: 'action_surge', name: '动作如潮', desc: '本回合多行动一次。', kind: 'feature', quick: true, target: 'self', grantAction: true, cost: { res: 'surge', n: 1 } },
  extra_attack: { id: 'extra_attack', name: '额外攻击', desc: '攻击动作可以出手两次。', kind: 'feature', passives: { extraAttack: 1 } },
  fire_bolt: { id: 'fire_bolt', name: '火焰箭', desc: '一道火光，1d10 火焰伤害。', kind: 'spell', level: 0, target: 'enemy', attack: 'spell', dmg: '1d10', dmgByLevel: { 5: '2d10', 11: '3d10' }, dmgType: 'fire' },
  magic_missile: { id: 'magic_missile', name: '魔法飞弹', desc: '必中，3d4+3 力场伤害。', kind: 'spell', level: 1, cost: { slot: 1 }, target: 'enemy', dmg: '3d4+3', dmgType: 'force' },
  sleep: { id: 'sleep', name: '睡眠术', desc: '让至多两个敌人睡过去。', kind: 'spell', level: 1, cost: { slot: 1 }, target: 'enemies', maxTargets: 2, save: { abil: 'wis' }, apply: { cond: 'asleep', turns: 2 }, ai: 'control' },
  scorch: { id: 'scorch', name: '灼热射线', desc: '三道火线，每道 2d6。', kind: 'spell', level: 2, cost: { slot: 2 }, target: 'enemy', attack: 'spell', hits: 3, dmg: '2d6', dmgType: 'fire' },
  fireball: { id: 'fireball', name: '火球术', desc: '所有敌人 8d6 火焰伤害，敏捷豁免减半。', kind: 'spell', level: 3, cost: { slot: 3 }, target: 'enemies', save: { abil: 'dex', half: true }, dmg: '8d6', dmgType: 'fire' },
  sacred_flame: { id: 'sacred_flame', name: '圣火', desc: '1d8 光耀伤害，敏捷豁免。', kind: 'spell', level: 0, target: 'enemy', save: { abil: 'dex' }, dmg: '1d8', dmgType: 'radiant' },
  cure_wounds: { id: 'cure_wounds', name: '疗伤术', desc: '恢复 1d8+施法属性 点生命。', kind: 'spell', level: 1, cost: { slot: 1 }, target: 'ally', heal: '1d8+mod', revive: true, ai: 'heal' },
  healing_word: { id: 'healing_word', name: '治愈真言', desc: '附赠动作，恢复 1d4+施法属性。', kind: 'spell', level: 1, cost: { slot: 1 }, quick: true, target: 'ally', heal: '1d4+mod', revive: true, ai: 'heal' },
};
