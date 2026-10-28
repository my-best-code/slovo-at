// Простая разметка внутри текстов словаря, чтобы ссылки и выделения
// переводились вместе с предложением:
//   [текст](/groups/)  → ссылка (внутренние адреса получают язык и базовый путь)
//   **текст**          → <strong>
//   ~~текст~~          → <s> (старая цена)
//   перенос строки     → <br>
import { localePath, type Lang } from '../i18n/config';
import { href } from './urls';

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function resolve(url: string, lang: Lang): string {
  return url.startsWith('/') ? href(localePath(lang, url)) : url;
}

/** Превращает текст словаря в HTML. Используется только для наших собственных текстов. */
export function rich(text: string, lang: Lang): string {
  return escape(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, url: string) => `<a href="${resolve(url, lang)}">${label}</a>`)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
    .replace(/\n/g, '<br />');
}

/** Адрес внутренней страницы на нужном языке с учётом базового пути. */
export function pageHref(path: string, lang: Lang): string {
  return resolve(path, lang);
}
