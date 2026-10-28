// Структурированные данные (JSON-LD) для страниц курсов и команды.
// По ним Google и ИИ-ассистенты понимают, что за курсы, сколько стоят и кто преподаёт.
// Общая карточка школы (EducationalOrganization) выводится на каждой странице в Seo.astro.
import { site } from '../data/site';
import { getDict, localePath, type Lang } from '../i18n';
import { absolute } from './urls';

// Цены дублируют тексты в src/i18n/*/groups.ts и individual.ts — меняете там, меняйте и здесь.
const PRICES = {
  groupStandardPerMonth: 160,
  groupIntensive: 720,
  individualSingle: 50,
  individualPack4: 180,
  individualPack8: 350,
};

type JsonLd = Record<string, unknown>;

const organizationRef = (siteUrl: URL | undefined) => ({ '@id': absolute('/#organization', siteUrl) });

function offer(price: number, name: string, url: string): JsonLd {
  return { '@type': 'Offer', name, price, priceCurrency: 'EUR', category: 'Paid', availability: 'https://schema.org/InStock', url };
}

function course(name: string, description: string, url: string, lang: Lang, siteUrl: URL | undefined, offers: JsonLd[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url,
    inLanguage: lang,
    provider: organizationRef(siteUrl),
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online' },
    ...(offers.length > 0 && { offers }),
  };
}

/** Групповые курсы: стандарт и интенсив — два отдельных курса с ценой. */
export function groupCoursesSchema(lang: Lang, siteUrl: URL | undefined): JsonLd[] {
  const { groups } = getDict(lang);
  const url = absolute(localePath(lang, '/groups/'), siteUrl);
  const [standard, intensive] = groups.courses;
  return [
    course(standard.title, groups.meta.description, url, lang, siteUrl, [offer(PRICES.groupStandardPerMonth, standard.title, url)]),
    course(intensive.title, groups.meta.description, url, lang, siteUrl, [offer(PRICES.groupIntensive, intensive.title, url)]),
  ];
}

/** Индивидуальные занятия: одно занятие и пакеты. */
export function individualCourseSchema(lang: Lang, siteUrl: URL | undefined): JsonLd[] {
  const { individual } = getDict(lang);
  const url = absolute(localePath(lang, '/individual/'), siteUrl);
  const [single, pack4, pack8] = individual.concept.list ?? [];
  return [
    course(individual.meta.title, individual.meta.description, url, lang, siteUrl, [
      offer(PRICES.individualSingle, single, url),
      offer(PRICES.individualPack4, pack4.replace(/~~[^~]+~~\s*/, ''), url),
      offer(PRICES.individualPack8, pack8.replace(/~~[^~]+~~\s*/, ''), url),
    ]),
  ];
}

/** Подготовка к экзаменам: цены на сайте не указаны, поэтому без offers. */
export function examsCourseSchema(lang: Lang, siteUrl: URL | undefined): JsonLd[] {
  const { exams } = getDict(lang);
  const url = absolute(localePath(lang, '/exams/'), siteUrl);
  return [course(exams.meta.title, exams.meta.description, url, lang, siteUrl, [])];
}

/** Преподаватели школы. */
export function teamSchema(lang: Lang, siteUrl: URL | undefined): JsonLd[] {
  const { team } = getDict(lang);
  const url = absolute(localePath(lang, '/team/'), siteUrl);
  return team.members.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    url,
    worksFor: { ...organizationRef(siteUrl), name: site.name },
  }));
}
