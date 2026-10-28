import Img from './Img';
import type { Picture } from '../lib/images';

interface Props {
  items: { title: string; href: string; html: string; picture: Picture }[];
  moreLabel: string;
}

/** Три направления школы карточками: фото, заголовок-ссылка, текст, «Подробнее». */
export default function ServiceCards({ items, moreLabel }: Props) {
  return (
    <ul className="service-cards">
      {items.map((item) => (
        <li key={item.href} className="service-card">
          <Img className="service-card__image" picture={item.picture} />
          <div className="service-card__body">
            <h3>
              <a href={item.href}>{item.title}</a>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: item.html }} />
            <a className="button button--ghost" href={item.href} aria-hidden="true" tabIndex={-1}>
              {moreLabel}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
