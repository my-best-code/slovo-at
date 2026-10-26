# slovo.at

Сайт-визитка slovo.at: Astro 7 + React-компоненты (TSX), статическая сборка, хостинг на GitHub Pages.
Сайт принадлежит владельцу репозитория. Комментарии в коде пишем по-русски, тексты для посетителей — по-немецки (de-AT).

@AGENTS.md

## Команды

- `npm run dev` — локальный предпросмотр на http://localhost:4321
- `npm run build` — проверка типов (`astro check`) и сборка в `dist/`
- `npm run check:launch` — сборка и проверка, что в сайте не осталось заглушек `[PLATZHALTER …]`

## Где что лежит

| Что | Где |
| --- | --- |
| Название, описание, контакты, адрес, соцсети, OG-картинка | `src/data/site.ts` |
| Пункты меню | `nav` в `src/data/site.ts` |
| Список страниц для llms.txt | `pages` в `src/data/site.ts` |
| Тексты главной | `src/data/home.ts` |
| Impressum, Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Компоненты | `src/components/*.tsx` |
| `<head>`: title, canonical, Open Graph, JSON-LD | `src/components/Seo.astro` |
| Шаблон страницы | `src/layouts/BaseLayout.astro` |
| Цвета, шрифты, отступы | переменные в `:root` в `src/styles/global.css` |
| Редиректы со старых адресов Tilda | `redirects` в `astro.config.mjs` |
| robots.txt, llms.txt | `src/pages/robots.txt.ts`, `src/pages/llms.txt.ts` (собираются из `site.ts`) |
| Картинки | `src/assets/` через `<Image />` из `astro:assets`; favicon и `og.png` — в `public/` |

## Правила

- Компоненты пишем на React (TSX) в `src/components/`. По умолчанию без `client:*`: тогда компонент превращается в HTML без JavaScript. `client:*` ставим, только если без него не работает (меню, форма), и выбираем самый ленивый вариант: `client:visible` или `client:media`, а не `client:load`.
- Внутренние ссылки и пути к файлам из `public/` строим только через `href()` из `src/lib/urls.ts`: до подключения домена сайт живёт в подпапке `<аккаунт>.github.io/<репозиторий>/`. Адреса страниц пишем с завершающим слэшем: `/impressum/`.
- Цвета и отступы берём только из переменных в `global.css`, без захардкоженных значений в компонентах.
- Внешние скрипты, шрифты и встраивания (Google Fonts, Google Analytics, YouTube, Google Maps и т. п.) без согласия владельца не добавляем. По DSGVO им нужен cookie-баннер и раздел в Datenschutz. Шрифты подключаем локально через `@fontsource/*`.
- Репозиторий публичный, поэтому секретов в нём нет и не будет. Публичный ключ формы (Web3Forms access key) — не секрет, его можно держать в коде.
- Если на сайте появляется что-то, что обрабатывает данные посетителей (форма, аналитика, встраивание), обновляем `src/pages/datenschutz.astro`.
- `.github/workflows/` меняем только по явной просьбе.

## SEO-чеклист для новой страницы

- Файл в `src/pages/` на `BaseLayout` с уникальными `title` (до ~60 символов) и `description` (до ~160).
- Ровно один `<h1>`, дальше `h2`/`h3` по порядку.
- У каждой картинки осмысленный `alt` на немецком.
- Страница добавлена в `pages` в `src/data/site.ts` (для llms.txt) и, если нужно, в `nav`.
- Если страница заменяет старую страницу с Tilda — добавлен редирект в `astro.config.mjs`.
- Sitemap собирается сам, вручную его не трогаем.
- После `npm run build` в `dist/<страница>/index.html` есть canonical, `og:*` и JSON-LD.

## Перед коммитом

- `npm run build` проходит без ошибок. **Если сборка падает — не коммитить и не пушить**, сначала починить.
- Изменение проверено в `npm run dev`, в том числе на ширине телефона.
- Коммиты маленькие и с понятным сообщением: каждый push в `main` сразу уходит на сайт.

## Ветки

- `main` — то, что на сайте. Напрямую в `main` не коммитим.
- `dev` — новая версия сайта. Работаем здесь, в `main` попадает через pull request `dev` → `main`.

## Скилл cool-website

В `.claude/skills/cool-website/` лежит сторонний скилл [Arnie936/cool-website](https://github.com/Arnie936/cool-website) (MIT, коммит `3e6fc28`) для страниц со scroll-анимациями. Он написан для Codex, поэтому в Claude Code:

- вместо `mcp__cua_repl` для проверки в браузере используем встроенный браузер (`mcp__Claude_Browser__*`);
- встроенного генератора картинок (`image_gen`) нет: берём материалы с Tilda и от владельца, а если нужна генерация — сначала спрашиваем;
- видео через kie.ai или Higgsfield, а также DataForSEO стоят денег. Без явного согласия владельца их не подключаем и не вызываем, ключи — только в `.env` (он в `.gitignore`).

Файлы скилла не редактируем: обновление — заменой папки на новую версию из репозитория. Скилл собирает обычный HTML в `cool-website/builds/<имя>/`; перенос результата в Astro (`src/`) делается отдельным шагом по правилам этого файла.

## Деплой и откат

- Push в `main` → GitHub Actions (`.github/workflows/deploy.yml`) → через ~1 минуту изменения на сайте. Если сборка упала, ничего не публикуется.
- В pull request Actions только собирает сайт, без публикации.
- Откат: `git revert <коммит>`, затем `git push`.

## DNS в World4You: почту не трогать

Записи MX, SPF (`TXT v=spf1 …`), `protonmail-verification`, DKIM (`protonmail*._domainkey`, CNAME) и `_dmarc` обслуживают почту на Proton. Их не меняем и не удаляем.

## Перед запуском (переключением DNS)

- `npm run check:launch` проходит: заглушек не осталось.
- Владелец проверил Impressum и Datenschutz.
- Пошаговая инструкция — в `README.md`.
