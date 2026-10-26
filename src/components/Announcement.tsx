interface Props {
  title: string;
  lines: string[];
  button: { label: string; href: string };
  headingLevel?: 'h2' | 'h3';
}

/** Карточка с объявлением о новых курсах (главная, «Групповые курсы»). Строки — готовый HTML. */
export default function Announcement({ title, lines, button, headingLevel = 'h2' }: Props) {
  const Heading = headingLevel;
  return (
    <div className="announcement">
      <Heading className="announcement__title">{title}</Heading>
      <p dangerouslySetInnerHTML={{ __html: lines.join('<br />') }} />
      <a className="button" href={button.href}>
        {button.label}
      </a>
    </div>
  );
}
