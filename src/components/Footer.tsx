interface Props {
  legalName: string;
  email: string;
  socials: { label: string; url: string }[];
  impressumHref: string;
  datenschutzHref: string;
  text: {
    copyright: string;
    emailLabel: string;
    legalLabel: string;
    impressum: string;
    datenschutz: string;
    socialsLabel: string;
  };
}

export default function Footer({ legalName, email, socials, impressumHref, datenschutzHref, text }: Props) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p>
            {text.copyright} {legalName}
          </p>
          <p>
            {text.emailLabel} <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <nav aria-label={text.socialsLabel}>
          {socials.map((social) => (
            <a key={social.url} href={social.url} rel="noopener">
              {social.label}
            </a>
          ))}
        </nav>
        <nav aria-label={text.legalLabel}>
          <a href={impressumHref}>{text.impressum}</a>
          <a href={datenschutzHref}>{text.datenschutz}</a>
        </nav>
      </div>
    </footer>
  );
}
