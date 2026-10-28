// Все фотографии сайта (перенесены с Tilda) и их подготовка для React-компонентов:
// Astro при сборке ужимает их в WebP нескольких размеров, а компонент получает
// готовые src/srcset. Подписи (alt) — в словарях src/i18n, они зависят от языка.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

import canal from '../assets/images/canal.jpg';
import cardExams from '../assets/images/card-exams.jpg';
import cardGroups from '../assets/images/card-groups.jpg';
import cardIndividual from '../assets/images/card-individual.jpg';
import classroom from '../assets/images/classroom.jpg';
import courseIntensive from '../assets/images/course-intensive.jpg';
import courseStandard from '../assets/images/course-standard.jpg';
import coverCourses from '../assets/images/cover-courses.jpg';
import lakeMountains from '../assets/images/lake-mountains.jpg';
import library from '../assets/images/library.png';
import salzburg from '../assets/images/salzburg.jpg';
import teamSvetlana from '../assets/images/team-svetlana.png';
import teamVladimir from '../assets/images/team-vladimir.jpg';
import whiteboard from '../assets/images/whiteboard.jpg';

export const images = {
  canal,
  cardExams,
  cardGroups,
  cardIndividual,
  classroom,
  courseIntensive,
  courseStandard,
  coverCourses,
  lakeMountains,
  library,
  salzburg,
  teamSvetlana,
  teamVladimir,
  whiteboard,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;

// Качество WebP: на глаз не отличить от исходника, а файлы в 2–3 раза легче, чем по умолчанию.
const WEBP_QUALITY = 70;

export interface Picture {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * Картинка для <img> в React-компоненте.
 * width — ширина, в которой картинка показывается на широком экране (в CSS-пикселях).
 */
export async function picture(key: ImageKey, alt: string, width: number, sizes = `(max-width: ${width}px) 100vw, ${width}px`): Promise<Picture> {
  const src = images[key];
  // Узкие варианты нужны телефонам: без них широкая обложка грузится целиком даже на экране в 400 px.
  const candidates = [480, 800, 1200, width, width * 2].filter((w) => w <= width * 2 && w <= src.width);
  const widths = [...new Set(candidates)].sort((a, b) => a - b);
  const result = await getImage({ src, width: Math.min(width, src.width), widths: widths.length ? widths : [src.width], format: 'webp', quality: WEBP_QUALITY });
  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    sizes,
    width: Number(result.attributes.width),
    height: Number(result.attributes.height),
    alt,
  };
}

/** Адрес картинки для фона обложки или превью в соцсетях. */
export async function imageUrl(key: ImageKey, width: number, format: 'webp' | 'jpg' = 'webp'): Promise<string> {
  const src = images[key];
  const result = await getImage({ src, width: Math.min(width, src.width), format, quality: format === 'webp' ? WEBP_QUALITY : 80 });
  return result.src;
}
