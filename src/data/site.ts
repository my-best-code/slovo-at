// Общие данные сайта: название, контакты, меню, список страниц.
// Всё, что помечено [PLATZHALTER …], нужно заменить до переключения DNS
// (проверка: npm run check:launch).

export const PRODUCTION_ORIGIN = 'https://slovo.at';

export const site = {
  name: 'Slovo',
  tagline: '[PLATZHALTER: kurzer Slogan]',
  description:
    '[PLATZHALTER: Ein Satz, worum es auf der Website geht – bis 160 Zeichen, erscheint in Google und in Link-Vorschauen.]',
  lang: 'de',
  locale: 'de_AT',

  // Для JSON-LD: 'Organization' или 'LocalBusiness' (если есть адрес, куда приходят клиенты).
  schemaType: 'Organization' as 'Organization' | 'LocalBusiness',
  legalName: '[PLATZHALTER: Firmenname oder Vor- und Nachname]',
  email: '[PLATZHALTER]@slovo.at',
  phone: null as string | null,
  address: {
    street: '[PLATZHALTER: Straße und Hausnummer]',
    postalCode: '[PLATZHALTER: PLZ]',
    city: '[PLATZHALTER: Ort]',
    country: 'AT',
  },
  // Профили в соцсетях — попадают в JSON-LD (sameAs).
  socials: [] as string[],

  // Картинка для превью ссылок, 1200×630, лежит в public/. Например: '/og.png'.
  ogImage: null as string | null,
};

// Пункты меню. Адреса — с завершающим слэшем.
export const nav = [
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'Angebot', href: '/#angebot' },
  { label: 'Kontakt', href: '/#kontakt' },
];

// Все страницы сайта с кратким описанием — из этого списка собирается llms.txt.
// Новую страницу добавляйте и сюда.
export const pages = [
  { title: 'Startseite', path: '/', summary: site.description },
  { title: 'Impressum', path: '/impressum/', summary: 'Angaben gemäß § 5 ECG, § 14 UGB und § 25 MedienG.' },
  { title: 'Datenschutzerklärung', path: '/datenschutz/', summary: 'Informationen zur Verarbeitung personenbezogener Daten.' },
];
