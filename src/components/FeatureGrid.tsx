interface Props {
  items: { title: string; paragraphs: string[] }[];
}

/** «Почему мы?»: пронумерованные карточки. */
export default function FeatureGrid({ items }: Props) {
  return (
    <ol className="feature-grid">
      {items.map((item, index) => (
        <li key={item.title} className="feature">
          <span className="feature__number" aria-hidden="true">
            {index + 1}
          </span>
          <h3>{item.title}</h3>
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </li>
      ))}
    </ol>
  );
}
