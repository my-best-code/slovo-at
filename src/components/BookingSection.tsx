// Блок «Записаться на занятия»: контакты слева, форма справа.
// Форма работает без JavaScript: обычная отправка POST на Web3Forms,
// после неё посетитель попадает на страницу «Спасибо».

interface FormText {
  name: string;
  email: string;
  phone: string;
  levelLegend: string;
  levels: string[];
  otherLevel: string;
  message: string;
  submit: string;
  required: string;
  subject: string;
}

interface Props {
  id?: string;
  title: string;
  /** На странице /book/ это главный заголовок (h1), в остальных местах — h2. */
  headingLevel?: 'h1' | 'h2';
  phone: { label: string; display: string; href: string };
  email: { label: string; address: string };
  socials: { label: string; url: string }[];
  socialsLabel: string;
  form: { action: string; accessKey: string; redirect: string; fromName: string; text: FormText };
}

export default function BookingSection({ id, title, headingLevel = 'h2', phone, email, socials, socialsLabel, form }: Props) {
  const t = form.text;
  const Heading = headingLevel;
  return (
    <section id={id} className="section section--cream booking" aria-labelledby={`${id ?? 'booking'}-title`}>
      <div className="container booking__inner">
        <div className="booking__info">
          <Heading id={`${id ?? 'booking'}-title`}>{title}</Heading>
          <p className="booking__contacts">
            {phone.label} <a href={phone.href}>{phone.display}</a>
            <br />
            {email.label} <a href={`mailto:${email.address}`}>{email.address}</a>
          </p>
          <p className="booking__socials-label">{socialsLabel}</p>
          <ul className="socials">
            {socials.map((social) => (
              <li key={social.url}>
                <a href={social.url} rel="noopener">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="booking-form" action={form.action} method="POST" acceptCharset="UTF-8">
          <input type="hidden" name="access_key" value={form.accessKey} />
          <input type="hidden" name="subject" value={t.subject} />
          <input type="hidden" name="from_name" value={form.fromName} />
          <input type="hidden" name="redirect" value={form.redirect} />
          {/* Ловушка для спам-ботов: людям поле не видно. */}
          <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <label className="field">
            <span className="field__label">{t.name}</span>
            <input type="text" name="Name" autoComplete="name" required />
          </label>
          <label className="field">
            <span className="field__label">{t.email}</span>
            <input type="email" name="Email" autoComplete="email" required />
          </label>
          <label className="field">
            <span className="field__label">{t.phone}</span>
            <input type="tel" name="Phone" autoComplete="tel" required />
          </label>

          <fieldset className="field field--choices">
            <legend className="field__label">{t.levelLegend}</legend>
            {t.levels.map((level, index) => (
              <label key={level} className="choice">
                <input type="radio" name={t.levelLegend} value={level} required={index === 0} />
                <span>{level}</span>
              </label>
            ))}
            <label className="field field--nested">
              <span className="visually-hidden">{t.otherLevel}</span>
              <input type="text" name={t.otherLevel} placeholder={t.otherLevel} />
            </label>
          </fieldset>

          <label className="field">
            <span className="field__label">{t.message}</span>
            <textarea name="Message" rows={4} />
          </label>

          <button className="button" type="submit">
            {t.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
