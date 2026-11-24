// PROVISIONAL — setting-specific and magical items.
export const ITEMS_EXTRA = {
  potion: { id: 'potion', name: '治疗药水', desc: '一小瓶红色药剂，喝下去像吞了块炭。', use: { target: 'ally', heal: '2d4+2', revive: true }, value: 50 },
  staff: { id: 'staff', name: '木杖', weapon: { dmg: '1d6', type: 'bludgeoning', props: [] }, value: 2 },
  chain: { id: 'chain', name: '链甲', armor: { base: 16, dexCap: 0, type: 'heavy' }, value: 75 },
};
