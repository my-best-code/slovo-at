import type { ReactNode } from 'react';
import Img from './Img';
import type { Picture } from '../lib/images';

interface Props {
  picture: Picture;
  /** Заголовок обложки. Для внутренних страниц это h1. */
  title: string;
  titleHref?: string;
  as?: 'h1' | 'h2';
  size?: 'page' | 'block';
  eager?: boolean;
  children?: ReactNode;
}

/** Обложка с фото и белым текстом: шапки внутренних страниц и блок «О нас» на главной. */
export default function PhotoCover({ picture, title, titleHref, as = 'h1', size = 'page', eager = false, children }: Props) {
  const Heading = as;
  return (
    <section className={`cover cover--${size}`}>
      <Img className="cover__image" picture={picture} eager={eager} />
      <div className="container cover__content">
        <Heading className="cover__title">{titleHref ? <a href={titleHref}>{title}</a> : title}</Heading>
        {children}
      </div>
    </section>
  );
}
