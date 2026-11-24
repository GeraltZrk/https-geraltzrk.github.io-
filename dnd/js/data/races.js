// PROVISIONAL — replaced by the full race list.
export const RACES = {
  human: { id: 'human', name: '人类', short: '哪儿都有', desc: '坎诺的多数。', abil: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, tags: ['human'], trait: '多才多艺：全属性 +1', names: { m: ['阿尔文', '里昂', '卡斯坦'], f: ['伊尔瑟', '玛丽昂', '科琳'], family: ['银原', '罗伊'] } },
  elf: { id: 'elf', name: '精灵', short: '活得太久', desc: '登陆坎诺的遗民之后。', abil: { dex: 2 }, tags: ['elf', 'longlived'], passives: { skill: { perception: 2 } }, trait: '敏锐感官：察觉 +2', subraces: [{ id: 'moon', name: '月精灵', short: '西方诸国的精灵', abil: { int: 1 } }, { id: 'sun', name: '日精灵', short: '布尔瓦的精灵', abil: { cha: 1 } }], names: { m: ['阿丹', '伊利安'], f: ['娜尔雯', '伊瓦丝'], family: ['希尔穆纳'] } },
};
