// Find campaign bundles: the registered list, plus any folder named on the command line that is not registered yet.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SCENARIOS } from '../js/data/scenarios/index.js';

const here = path.dirname(fileURLToPath(import.meta.url));

export function resolveScenarios(only = []) {
  const out = SCENARIOS.filter((s) => !only.length || only.includes(s.id)).map((s) => ({ id: s.id, load: s.load }));
  for (const id of only) {
    if (out.some((s) => s.id === id)) continue;
    const file = path.resolve(here, '..', 'js', 'data', 'scenarios', id, 'index.js');
    if (fs.existsSync(file)) out.push({ id, load: () => import(pathToFileURL(file).href) });
    else out.push({ id, load: async () => { throw new Error(`no such campaign folder: ${file}`); } });
  }
  return out;
}
