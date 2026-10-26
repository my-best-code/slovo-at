import type { APIRoute } from 'astro';
import { site } from '../data/site';

const pages = [
  { title: 'Impressum', path: '/impressum/', summary: 'Angaben gemäß § 5 ECG, § 14 UGB und § 25 MedienG.' },
  { title: 'Datenschutzerklärung', path: '/datenschutz/', summary: 'Informationen zur Verarbeitung personenbezogener Daten.' },
];
import { absolute } from '../lib/urls';

// Краткая карта сайта для ИИ-ассистентов (формат llms.txt: https://llmstxt.org).
// Собирается из src/data/site.ts — отдельно этот файл править не нужно.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const lines = [
    `# ${site.name}`,
    '',
    '> Онлайн-школа немецкого',
    '',
    '## Seiten',
    '',
    ...pages.map((page) => `- [${page.title}](${absolute(page.path, siteUrl)}): ${page.summary}`),
    '',
    '## Kontakt',
    '',
    `- E-Mail: ${site.email}`,
    `- Telefon: ${site.phone}`,
    `- Adresse: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, Österreich`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
