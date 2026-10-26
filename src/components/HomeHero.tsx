interface Props {
  eyebrow: string;
  title: string;
  html: string;
}

/** Приветствие на главной. */
export default function HomeHero({ eyebrow, title, html }: Props) {
  return (
    <section className="home-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="home-hero__text" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}
