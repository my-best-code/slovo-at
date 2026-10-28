import { useState } from 'react';

interface Link {
  label: string;
  href: string;
  current?: boolean;
  mobileOnly?: boolean;
}

interface LangLink {
  code: string;
  label: string;
  href: string;
  current: boolean;
}

interface Props {
  siteName: string;
  homeHref: string;
  links: Link[];
  cta: Link;
  langs: LangLink[];
  menuLabel: string;
  navLabel: string;
  languageLabel: string;
}

export default function Header({ siteName, homeHref, links, cta, langs, menuLabel, navLabel, languageLabel }: Props) {
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
          <span className="visually-hidden">{menuLabel}</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <nav id="site-nav" className="site-nav" data-open={open} aria-label={navLabel}>
          <ul>
            {links.map((link) => (
              <li key={link.href} className={link.mobileOnly ? 'site-nav__mobile-only' : undefined}>
                <a href={link.href} aria-current={link.current ? 'page' : undefined} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="button site-nav__cta" href={cta.href} aria-current={cta.current ? 'page' : undefined}>
                {cta.label}
              </a>
            </li>
            {langs.length > 1 && (
              <li>
                <ul className="lang-switch" aria-label={languageLabel}>
                  {langs.map((lang) => (
                    <li key={lang.code}>
                      <a href={lang.href} hrefLang={lang.code} lang={lang.code} aria-current={lang.current ? 'true' : undefined}>
                        {lang.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
