// Перед переключением DNS: в собранном сайте не должно остаться заглушек.
// Запуск: npm run check:launch (сначала собирает сайт, потом проверяет dist/).
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MARKER = 'PLATZHALTER';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (/\.(html|txt|xml|json)$/.test(entry.name)) yield path;
  }
}

let found = 0;
for await (const file of walk(dist)) {
  const count = (await readFile(file, 'utf8')).split(MARKER).length - 1;
  if (count > 0) {
    console.log(`${file.slice(dist.length)}: ${count}`);
    found += count;
  }
}

if (found > 0) {
  console.error(`\nОсталось заглушек [${MARKER} …]: ${found}. Замените их до запуска.`);
  process.exit(1);
}
console.log('Заглушек не осталось.');
