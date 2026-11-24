// Data registry. Scenario bundles add their own companions, enemies and items when loaded.
import { CLASSES } from './classes.js';
import { RACES } from './races.js';
import { BACKGROUNDS } from './backgrounds.js';
import { ITEMS } from './items.js';
import { ABILITIES as ABILITIES_ALL } from './abilities.js';
import { ABILITIES_DIVINE } from './abilities_divine.js';
const ABILITIES = { ...ABILITIES_ALL, ...ABILITIES_DIVINE };
import { CONDITIONS } from './conditions.js';
import { ENEMIES } from './enemies.js';
import { CODEX } from './codex.js';

export const DB = {
  classes: CLASSES, races: RACES, backgrounds: BACKGROUNDS, items: ITEMS, abilities: ABILITIES,
  conditions: CONDITIONS, enemies: ENEMIES, companions: {}, codex: CODEX,
};

export function mergeScenarioData(db, sc) {
  Object.assign(db.companions, sc.companions || {});
  Object.assign(db.enemies, sc.enemies || {});
  Object.assign(db.items, sc.items || {});
  Object.assign(db.abilities, sc.abilities || {});
  Object.assign(db.conditions, sc.conditions || {});
}
