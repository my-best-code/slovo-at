interface Props {
  title: string;
  text: string;
  cta: { label: string; href: string };
}

export default function Hero({ title, text, cta }: Props) {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p className="hero__text">{text}</p>
        <a className="button" href={cta.href}>
          {cta.label}
        </a>
      </div>
    </section>
  );
}
