import type { Lang } from './config';
import * as de from './de';
import * as ru from './ru';

export type Dict = typeof ru;

const dicts: Record<Lang, Dict> = { ru, de };

/** Тексты сайта на нужном языке. */
export function getDict(lang: Lang): Dict {
  return dicts[lang];
}

export * from './config';
