interface Props {
  items: { title: string; text: string }[];
}

export default function CardGrid({ items }: Props) {
  return (
    <ul className="card-grid">
      {items.map((item) => (
        <li key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
