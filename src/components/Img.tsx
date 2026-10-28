import type { Picture } from '../lib/images';

interface Props {
  picture: Picture;
  className?: string;
  eager?: boolean;
}

/** Картинка, заранее подготовленная через picture() из src/lib/images.ts. */
export default function Img({ picture, className, eager = false }: Props) {
  return (
    <img
      className={className}
      src={picture.src}
      srcSet={picture.srcSet}
      sizes={picture.sizes}
      width={picture.width}
      height={picture.height}
      alt={picture.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
