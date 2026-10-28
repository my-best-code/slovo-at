import type { ImageKey } from '../lib/images';

/** Карточка направления: фото, заголовок-ссылка, короткий текст. */
export interface ServiceCard {
  title: string;
  path: string;
  text: string;
  image: ImageKey;
  alt: string;
}

/** Блок «фото + описание» на страницах курсов. Строки поддерживают разметку rich(). */
export interface CourseBlock {
  title: string;
  image: ImageKey;
  alt: string;
  paragraphs: string[];
  list?: string[];
}
