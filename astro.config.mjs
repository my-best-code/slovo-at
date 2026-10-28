// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// В GitHub Actions адрес и базовый путь приходят из actions/configure-pages:
// до подключения домена это https://<аккаунт>.github.io/<репозиторий>,
// после — https://slovo.at. Локально по умолчанию считаем, что это боевой сайт.
const site = process.env.SITE_URL || 'https://slovo.at';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    react(),
    // Служебная страница «Спасибо» после отправки формы в поиск не нужна.
    sitemap({
      filter: (page) => !page.includes('/thanks/'),
      // Русская и немецкая версии одной страницы связываются через hreflang.
      i18n: { defaultLocale: 'ru', locales: { ru: 'ru', de: 'de' } },
    }),
  ],

  // Старые адреса с Tilda → новые страницы. На GitHub Pages это страницы
  // с <meta http-equiv="refresh">, настоящих 301 там нет.
  // Адреса /ueber, /team, /groups, /individual, /exams, /contacts, /book
  // остались прежними (GitHub Pages сам добавит слэш в конце).
  redirects: {
    '/main': '/', // так Tilda называла главную
    '/header': '/', // служебная страница Tilda с меню
  },
});
