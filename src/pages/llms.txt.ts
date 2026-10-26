import type { APIRoute } from 'astro';
import { pages, site } from '../data/site';
import { absolute } from '../lib/urls';

// Краткая карта сайта для ИИ-ассистентов (формат llms.txt: https://llmstxt.org).
// Собирается из src/data/site.ts — отдельно этот файл править не нужно.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Seiten',
    '',
    ...pages.map((page) => `- [${page.title}](${absolute(page.path, siteUrl)}): ${page.summary}`),
    '',
    '## Kontakt',
    '',
    `- E-Mail: ${site.email}`,
    ...(site.phone ? [`- Telefon: ${site.phone}`] : []),
    `- Adresse: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, Österreich`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
