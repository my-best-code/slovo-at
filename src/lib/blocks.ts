// Готовые данные для повторяющихся блоков: собираются из словаря и src/data/site.ts.
import { site, phoneHref } from '../data/site';
import { getDict, localePath, type Lang } from '../i18n';
import type { ServiceCard } from '../i18n/types';
import { picture } from './images';
import { pageHref, rich } from './rich';
import { absolute } from './urls';

/** Блок «Записаться на занятия» с формой. */
export function bookingProps(lang: Lang, siteUrl: URL | undefined) {
  const { common } = getDict(lang);
  return {
    title: common.booking.title,
    phone: { label: common.booking.phoneLabel, display: site.phone, href: phoneHref },
    email: { label: common.booking.emailLabel, address: site.email },
    socials: site.socials,
    socialsLabel: common.booking.socialsLabel,
    form: {
      action: site.form.action,
      accessKey: site.form.accessKey,
      redirect: absolute(localePath(lang, '/thanks/'), siteUrl),
      fromName: site.name,
      text: common.booking.form,
    },
  };
}

/** Плашка «Свяжитесь с нами». withPhone — вариант с телефоном, all — заголовок «По всем вопросам…». */
export function contactStripProps(lang: Lang, { withPhone = false, all = false } = {}) {
  const { common } = getDict(lang);
  return {
    title: all ? common.contactStrip.titleAll : common.contactStrip.title,
    email: site.email,
    emailLabel: common.contactStrip.emailLabel,
    phone: withPhone ? { label: common.contactStrip.phoneLabel, display: site.phone, href: phoneHref } : undefined,
  };
}

/** Карточки направлений. */
export async function serviceCardsProps(lang: Lang, items: ServiceCard[]) {
  const { common } = getDict(lang);
  return {
    moreLabel: common.more,
    items: await Promise.all(
      items.map(async (item) => ({
        title: item.title,
        href: pageHref(item.path, lang),
        html: rich(item.text, lang),
        picture: await picture(item.image, item.alt, 400, '(max-width: 720px) 100vw, 400px'),
      })),
    ),
  };
}
