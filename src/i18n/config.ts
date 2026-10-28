// Языки сайта. Русский — основной и живёт в корне (старые адреса с Tilda
// не меняются), остальные — в подпапке: /de/…

export const languages = {
  ru: { label: 'Ru', htmlLang: 'ru', ogLocale: 'ru_RU' },
  de: { label: 'De', htmlLang: 'de', ogLocale: 'de_AT' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ru';

export const langs = Object.keys(languages) as Lang[];

/** Путь страницы на нужном языке: localePath('de', '/groups/') → '/de/groups/'. */
export function localePath(lang: Lang, path: string): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
