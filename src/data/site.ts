// Общие данные школы: название, контакты, соцсети, адрес.
// Тексты на разных языках — в src/i18n/. Всё, что помечено [PLATZHALTER …],
// нужно заменить до переключения DNS (проверка: npm run check:launch).

export const PRODUCTION_ORIGIN = 'https://slovo.at';

export const site = {
  name: 'SLOVO Sprachschule',
  legalName: 'SLOVO Sprachschule e.U.',
  // Для JSON-LD: языковая школа — это EducationalOrganization.
  schemaType: 'EducationalOrganization',
  email: 'info@slovo.at',
  phone: '+43 677 636 91 485',
  address: {
    street: '[PLATZHALTER: Straße und Hausnummer]',
    postalCode: '[PLATZHALTER: PLZ]',
    city: 'Salzburg',
    country: 'AT',
  },
  // Форма записи отправляется через Web3Forms (бесплатно, письма приходят на почту школы).
  // Ключ создан на web3forms.com, заявки приходят на почту, указанную при создании. Ключ публичный.
  form: {
    action: 'https://api.web3forms.com/submit',
    accessKey: '908b8d5d-f865-421d-b9bf-1b67990ccc6b',
  },
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/slovosprachen/' },
    { label: 'Telegram', url: 'https://t.me/slovosprachen' },
  ],
};

/** Номер телефона для ссылки tel: — без пробелов. */
export const phoneHref = `tel:${site.phone.replace(/\s/g, '')}`;
