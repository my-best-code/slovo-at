interface Props {
  title: string;
  email: string;
  emailLabel: string;
  phone?: { label: string; display: string; href: string };
}

/** Плашка «Свяжитесь с нами» внизу страниц. */
export default function ContactStrip({ title, email, emailLabel, phone }: Props) {
  return (
    <section className="contact-strip">
      <div className="container contact-strip__inner">
        <p className="contact-strip__title">{title}</p>
        <p>
          {emailLabel} <a href={`mailto:${email}`}>{email}</a>
          {phone && (
            <>
              <br />
              {phone.label} <a href={phone.href}>{phone.display}</a>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
