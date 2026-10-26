interface Props {
  siteName: string;
  email: string;
  impressumHref: string;
  datenschutzHref: string;
}

export default function Footer({ siteName, email, impressumHref, datenschutzHref }: Props) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {siteName} · <a href={`mailto:${email}`}>{email}</a>
        </p>
        <nav aria-label="Rechtliches">
          <a href={impressumHref}>Impressum</a>
          <a href={datenschutzHref}>Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}
