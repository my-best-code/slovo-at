// До подключения домена сайт живёт в подпапке (<аккаунт>.github.io/<репозиторий>/),
// поэтому внутренние ссылки строим только через href(), а не пишем '/…' напрямую.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Внутренняя ссылка с учётом базового пути: href('/impressum/') */
export function href(path: string): string {
  return `${base}${path}`;
}

/** Абсолютный адрес для canonical, OG, sitemap, llms.txt. */
export function absolute(path: string, site: URL | undefined): string {
  return new URL(href(path), site).toString();
}
