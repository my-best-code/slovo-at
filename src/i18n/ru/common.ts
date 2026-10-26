// Общие тексты: меню, подвал, служебные подписи.

export const common = {
  skipLink: 'Перейти к содержимому',
  menu: 'Меню',
  navLabel: 'Навигационное меню',
  // mobileOnly — пункт, который на Tilda был только в мобильном меню.
  nav: [
    { label: 'О нас', path: '/ueber/' },
    { label: 'Команда', path: '/team/', mobileOnly: true },
    { label: 'Группы', path: '/groups/' },
    { label: 'Индивидуально', path: '/individual/' },
    { label: 'Подготовка к экзаменам', path: '/exams/' },
  ],
  navCta: { label: 'Контакты', path: '/contacts/' },
  languageLabel: 'Язык',
  socialsLabel: 'Соц. сети',
  notFound: {
    title: 'Страница не найдена',
    text: 'Такой страницы нет или больше нет.',
    home: 'На главную',
  },
  footer: {
    copyright: '© Alle Rechte vorbehalten.',
    emailLabel: 'e-mail us:',
    legalLabel: 'Правовая информация',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
  },
};
