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
  // Блок «Записаться на занятия» с формой (главная, групповые курсы, /book/).
  booking: {
    title: 'Записаться на занятия',
    phoneLabel: 'Телефон:',
    emailLabel: 'Почта:',
    socialsLabel: 'Мы в соцсетях:',
    form: {
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      levelLegend: 'Оцените ваш уровень немецкого',
      levels: [
        'Не изучал/-а немецкий ранее',
        'Базовый (закончен А1)',
        'Начальный продвинутый (закончен А2)',
        'Средний (В1)',
        'Свободное владение (В2)',
        'Свой вариант',
      ],
      otherLevel: 'Свой вариант: опишите ваш уровень',
      message: 'Сообщение',
      submit: 'Записаться',
      required: 'обязательно',
      subject: 'Новая запись на занятия с сайта slovo.at',
    },
  },
  // Плашка внизу страниц. На Tilda было два варианта заголовка.
  contactStrip: {
    titleAll: 'По всем вопросам свяжитесь с нами любым удобным способом:',
    title: 'Свяжитесь с нами любым удобным способом:',
    emailLabel: 'E-mail:',
    phoneLabel: 'Телефон:',
  },
  more: 'Подробнее',
  thanks: {
    title: 'Спасибо!',
    text: 'Данные успешно отправлены. Мы свяжемся с вами в ближайшее время.',
    back: 'На главную',
  },
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
