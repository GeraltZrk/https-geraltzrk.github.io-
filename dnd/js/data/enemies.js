// PROVISIONAL
export const ENEMIES = {
  orc: { id: 'orc', name: '兽人战士', type: 'humanoid', hp: 15, ac: 13, init: 1, saves: { str: 3, con: 3 }, attacks: [{ name: '巨斧', hit: 5, dmg: '1d12+3', type: 'slashing' }], xp: 100 },
  goblin: { id: 'goblin', name: '地精', type: 'humanoid', hp: 7, ac: 14, init: 2, attacks: [{ name: '弯刀', hit: 4, dmg: '1d6+2', type: 'slashing' }, { name: '毒镖', hit: 4, dmg: '1d4+2', type: 'piercing', apply: { cond: 'poisoned', turns: 3, save: { abil: 'con', dc: 11 } } }], xp: 50, ai: 'cunning' },
};
