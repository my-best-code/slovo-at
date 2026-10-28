import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { getDict, langs, localePath, type Lang } from '../i18n';
import { absolute } from '../lib/urls';

// Краткая карта сайта для ИИ-ассистентов (формат llms.txt: https://llmstxt.org).
// Собирается из словарей src/i18n — отдельно этот файл править не нужно.
// Новую страницу добавьте в список ниже.
const pageKeys = [
  ['home', '/'],
  ['ueber', '/ueber/'],
  ['team', '/team/'],
  ['groups', '/groups/'],
  ['individual', '/individual/'],
  ['exams', '/exams/'],
  ['contacts', '/contacts/'],
  ['book', '/book/'],
] as const;

const headings: Record<Lang, string> = { ru: 'Страницы на русском', de: 'Seiten auf Deutsch' };

export const GET: APIRoute = ({ site: siteUrl }) => {
  const { home } = getDict('ru');
  const lines = [`# ${site.name}`, '', `> ${home.meta.description}`, ''];

  for (const lang of langs) {
    const dict = getDict(lang);
    lines.push(`## ${headings[lang]}`, '');
    for (const [key, path] of pageKeys) {
      const { meta } = dict[key];
      lines.push(`- [${meta.title}](${absolute(localePath(lang, path), siteUrl)}): ${meta.description}`);
    }
    lines.push('');
  }

  lines.push(
    '## Kontakt',
    '',
    `- ${site.legalName}, ${site.address.city}, Österreich`,
    `- E-Mail: ${site.email}`,
    `- Telefon: ${site.phone}`,
    ...site.socials.map((social) => `- ${social.label}: ${social.url}`),
    `- Impressum: ${absolute('/de/impressum/', siteUrl)}`,
    '',
  );
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
