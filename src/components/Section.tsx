import type { ReactNode } from 'react';

interface Props {
  id?: string;
  title: string;
  muted?: boolean;
  children: ReactNode;
}

export default function Section({ id, title, muted = false, children }: Props) {
  return (
    <section id={id} className={muted ? 'section section--muted' : 'section'} aria-labelledby={id && `${id}-title`}>
      <div className="container">
        <h2 id={id && `${id}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
