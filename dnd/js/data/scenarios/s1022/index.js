// 1022 AA《无冕之年》剧本包：把各段拼起来。
import { META } from './meta.js';
import { CODEX } from './codex.js';
import { ENEMIES } from './enemies.js';
import { ITEMS } from './items.js';
import { SCENES as PROLOGUES_A } from './prologues_a.js';
import { SCENES as PROLOGUES_B } from './prologues_b.js';
import { SCENES as ACT1 } from './act1.js';
import { SCENES as ACT2 } from './act2.js';
import { SCENES as ACT3 } from './act3.js';
import { SCENES as ACT4 } from './act4.js';
import { SCENES as FINALE } from './finale.js';

export default {
  ...META,
  codex: CODEX,
  enemies: ENEMIES,
  items: ITEMS,
  scenes: { ...PROLOGUES_A, ...PROLOGUES_B, ...ACT1, ...ACT2, ...ACT3, ...ACT4, ...FINALE },
};
