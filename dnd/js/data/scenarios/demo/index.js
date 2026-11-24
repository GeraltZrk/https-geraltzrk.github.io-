// Assembles the campaign bundle from its parts.
import { META } from './meta.js';
import { CODEX } from './codex.js';
import { SCENES as ACT1 } from './act1.js';

export default { ...META, codex: CODEX, scenes: { ...ACT1 } };
