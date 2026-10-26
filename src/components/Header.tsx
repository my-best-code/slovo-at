import { useState } from 'react';

interface Props {
  siteName: string;
  homeHref: string;
  links: { label: string; href: string }[];
}

export default function Header({ siteName, homeHref, links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__logo" href={homeHref}>
          {siteName}
        </a>
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="visually-hidden">Menü</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <nav id="site-nav" className="site-nav" data-open={open} aria-label="Hauptnavigation">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
