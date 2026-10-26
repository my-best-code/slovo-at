import type { ImageKey } from '../lib/images';

/** Карточка направления: фото, заголовок-ссылка, короткий текст. */
export interface ServiceCard {
  title: string;
  path: string;
  text: string;
  image: ImageKey;
  alt: string;
}
