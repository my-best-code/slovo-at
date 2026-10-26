interface Props {
  items: { text: string; author: string }[];
}

/**
 * Отзывы. На Tilda был слайдер; здесь — карточки рядом, а на телефоне
 * горизонтальная прокрутка пальцем (CSS scroll-snap, без JavaScript).
 */
export default function Reviews({ items }: Props) {
  return (
    <ul className="reviews">
      {items.map((item) => (
        <li key={item.author} className="review">
          <blockquote>
            <p>{item.text}</p>
          </blockquote>
          <p className="review__author">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}
