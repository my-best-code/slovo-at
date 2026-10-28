interface Props {
  items: { title: string; text: string }[];
}

/** Экзамены карточками. */
export default function ExamCards({ items }: Props) {
  return (
    <ul className="exam-cards">
      {items.map((item) => (
        <li key={item.title} className="exam-card">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
