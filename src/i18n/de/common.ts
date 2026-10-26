// Общие тексты: меню, подвал, служебные подписи. Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const common: Dict['common'] = {
  skipLink: "Zum Inhalt springen",
  menu: "Menü",
  navLabel: "Navigationsmenü",
  nav: [
    {
      label: "Über uns",
      path: "/ueber/"
    },
    {
      label: "Team",
      path: "/team/",
      mobileOnly: true
    },
    {
      label: "Gruppen",
      path: "/groups/"
    },
    {
      label: "Einzelunterricht",
      path: "/individual/"
    },
    {
      label: "Prüfungsvorbereitung",
      path: "/exams/"
    }
  ],
  navCta: {
    label: "Kontakt",
    path: "/contacts/"
  },
  languageLabel: "Sprache",
  socialsLabel: "Soziale Netzwerke",
  booking: {
    title: "Zum Unterricht anmelden",
    phoneLabel: "Telefon:",
    emailLabel: "E-Mail:",
    socialsLabel: "Wir in den sozialen Netzwerken:",
    form: {
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      levelLegend: "Wie schätzen Sie Ihr Deutschniveau ein?",
      levels: [
        "Ich habe noch nie Deutsch gelernt",
        "Grundstufe (A1 abgeschlossen)",
        "Fortgeschrittene Grundstufe (A2 abgeschlossen)",
        "Mittelstufe (B1)",
        "Fließend (B2)",
        "Andere Angabe"
      ],
      otherLevel: "Andere Angabe: beschreiben Sie Ihr Niveau",
      message: "Nachricht",
      submit: "Anmelden",
      required: "Pflichtfeld",
      subject: "Neue Anmeldung über slovo.at"
    }
  },
  contactStrip: {
    titleAll: "Bei allen Fragen erreichen Sie uns auf dem Weg, der Ihnen am besten passt:",
    title: "Kontaktieren Sie uns auf dem Weg, der Ihnen am besten passt:",
    emailLabel: "E-Mail:",
    phoneLabel: "Telefon:"
  },
  more: "Mehr erfahren",
  thanks: {
    title: "Vielen Dank!",
    text: "Ihre Daten wurden erfolgreich gesendet. Wir melden uns so bald wie möglich bei Ihnen.",
    back: "Zur Startseite"
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite gibt es nicht oder nicht mehr.",
    home: "Zur Startseite"
  },
  footer: {
    copyright: "© Alle Rechte vorbehalten.",
    emailLabel: "e-mail us:",
    legalLabel: "Rechtliches",
    impressum: "Impressum",
    datenschutz: "Datenschutz"
  }
};
