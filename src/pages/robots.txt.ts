import type { APIRoute } from 'astro';
import { PRODUCTION_ORIGIN } from '../data/site';
import { absolute } from '../lib/urls';

// Явно разрешаем ИИ-ботов: и тех, что собирают данные для обучения,
// и тех, что ищут ответы для пользователей прямо сейчас.
const aiBots = [
  'GPTBot', // OpenAI, обучение
  'OAI-SearchBot', // поиск в ChatGPT
  'ChatGPT-User', // ChatGPT открывает страницу по запросу пользователя
  'ClaudeBot', // Anthropic, обучение
  'Claude-SearchBot', // поиск в Claude
  'Claude-User', // Claude открывает страницу по запросу пользователя
  'PerplexityBot', // поиск Perplexity
  'Perplexity-User',
  'Google-Extended', // Gemini
  'Applebot-Extended', // Apple Intelligence
];

export const GET: APIRoute = ({ site }) => {
  // Тестовый деплой на *.github.io закрываем от индексации целиком.
  if (site?.origin !== PRODUCTION_ORIGIN) {
    return new Response('User-agent: *\nDisallow: /\n');
  }

  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiBots.map((bot) => `User-agent: ${bot}`),
    'Allow: /',
    '',
    `Sitemap: ${absolute('/sitemap-index.xml', site)}`,
    '',
  ];
  return new Response(lines.join('\n'));
};
