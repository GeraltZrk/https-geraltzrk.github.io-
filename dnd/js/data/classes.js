// PROVISIONAL — replaced by the full class list.
export const CLASSES = {
  fighter: { id: 'fighter', name: '战士', short: '刀剑、盔甲和纪律', desc: '靠兵器吃饭的人。', hitDie: 10, primary: 'str', saves: ['str', 'con'], caster: null, tags: ['martial'], abilOrder: ['str', 'con', 'dex', 'wis', 'cha', 'int'],
    skills: { n: 2, from: ['athletics', 'acrobatics', 'intimidation', 'perception', 'survival', 'history', 'insight', 'animal'] },
    startEquip: { weapon: 'longsword', armor: 'chain', offhand: 'shield' }, startItems: { potion: 2 }, startGold: 15,
    resources: { surge: { name: '动作如潮', max: 1, rest: 'short', minLevel: 2 } },
    features: { 1: ['second_wind'], 2: ['action_surge'], 5: ['extra_attack'] } },
  wizard: { id: 'wizard', name: '法师', short: '书本、咒语和代价', desc: '学院派施法者。', hitDie: 6, primary: 'int', saves: ['int', 'wis'], caster: 'full', spellAbility: 'int', tags: ['caster', 'arcane'], abilOrder: ['int', 'con', 'dex', 'wis', 'cha', 'str'],
    skills: { n: 2, from: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'] },
    startEquip: { weapon: 'staff' }, startItems: { potion: 1 }, startGold: 10,
    features: { 1: ['fire_bolt', 'magic_missile', 'sleep'], 3: ['scorch'], 5: ['fireball'] } },
  cleric: { id: 'cleric', name: '牧师', short: '祷词、圣徽和钉头锤', desc: '神的仆人。', hitDie: 8, primary: 'wis', saves: ['wis', 'cha'], caster: 'full', spellAbility: 'wis', tags: ['caster', 'divine'], abilOrder: ['wis', 'con', 'str', 'cha', 'dex', 'int'],
    skills: { n: 2, from: ['history', 'insight', 'medicine', 'persuasion', 'religion'] },
    startEquip: { weapon: 'mace', armor: 'chain', offhand: 'shield' }, startItems: { potion: 1 }, startGold: 10,
    features: { 1: ['sacred_flame', 'cure_wounds', 'healing_word'] } },
};
