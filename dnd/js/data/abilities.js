// All class abilities and spells.
import { ABILITIES_MARTIAL } from './abilities_martial.js';
import { ABILITIES_SPELLS } from './abilities_spells.js';
import { ABILITIES_CASTERS } from './abilities_casters.js';

export const ABILITIES = { ...ABILITIES_SPELLS, ...ABILITIES_MARTIAL, ...ABILITIES_CASTERS };
