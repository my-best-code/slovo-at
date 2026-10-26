# slovo.at

Сайт slovo.at: Astro + React, статическая сборка, хостинг на GitHub Pages. Правила для работы с кодом (в том числе для Claude) — в [CLAUDE.md](CLAUDE.md).

## Локально

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # сборка в dist/
npm run check:launch   # сборка + проверка, что не осталось заглушек [PLATZHALTER …]
```

Нужен Node 24 (см. `.nvmrc`).

## Запуск

### 1. GitHub

1. Создать **публичный** репозиторий на аккаунте владельца сайта и запушить код в `main`.
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Дождаться первого деплоя (вкладка Actions). Сайт откроется на `https://<аккаунт>.github.io/<репозиторий>/`. На этом адресе он закрыт от поисковиков: `noindex` и `Disallow: /` в robots.txt.
4. Подтвердить домен, чтобы его не смог подключить кто-то другой. Настройки **профиля** владельца (не репозитория) → Pages → Add a domain → `slovo.at`. GitHub покажет TXT-запись `_github-pages-challenge-<аккаунт>` — добавить её в World4You и нажать Verify.

### 2. Перед переключением

- Заполнить заглушки: `npm run check:launch` должен пройти.
- Владелец проверил Impressum и Datenschutz.

### 3. Переключение домена

1. Settings репозитория → Pages → Custom domain: `slovo.at` → Save.
2. В DNS World4You:

| Запись | Сейчас | Сделать |
| --- | --- | --- |
| `@` A | `194.48.203.58` (Tilda) | удалить, добавить четыре A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www` | A `194.48.203.58` | удалить A, добавить CNAME `<аккаунт>.github.io` |
| `@` AAAA | нет | по желанию: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| MX, SPF, `protonmail-verification`, DKIM ×3, `_dmarc` | почта Proton | **не трогать** |

3. Подождать, пока GitHub выпустит сертификат (обычно до часа), и включить **Enforce HTTPS**.
4. Actions → Deploy → **Run workflow**. Только после этой пересборки canonical, sitemap и robots.txt получат адрес `https://slovo.at` и сайт откроется для поисковиков. Проверить: `https://slovo.at/robots.txt` должен содержать `Allow: /`.
5. Отправить письмо на адрес `@slovo.at` и ответить с него — почта должна работать как раньше.

### 4. После запуска

- Google Search Console: подтвердить домен TXT-записью, отправить `https://slovo.at/sitemap-index.xml`.
- Bing Webmaster Tools: импортировать сайт из Search Console. На поиск Bing опирается ChatGPT.
- Аналитика — по решению владельца. Если выбрана аналитика с cookies, нужен баннер согласия и раздел в Datenschutz.

## Правки, деплой, откат

- Push в `main` → через ~1 минуту изменения на сайте. Если сборка упала, ничего не публикуется.
- Pull request: Actions только проверяет сборку.
- Откат: `git revert <коммит>` и `git push`.
