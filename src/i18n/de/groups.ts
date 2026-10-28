// Страница «Групповые курсы» (/de/groups/). Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const groups: Dict['groups'] = {
  meta: {
    title: "Gruppenkurse",
    description: "Deutsch-Gruppenkurse online in Kleingruppen: Standard 160 €/Monat oder Intensiv 720 € für 6 Wochen. Unterricht in Zoom und Miro, kostenloses Einstufungsgespräch."
  },
  cover: {
    title: "Gruppenkurse",
    image: "coverCourses",
    alt: "Heller Raum: Regal mit Bilderrahmen und Holzschale"
  },
  lead: "Online-Deutschkurse von überall in Europa, die Sie inspirieren, Deutsch zu lernen – und zwar mit Freude!",
  announcement: {
    title: "Aktuell:",
    lines: [
      "Reguläre [Gruppenkurse](/groups/):",
      "**B2.1** Montag und Mittwoch, 9:15–10:45, ab 6. Juli",
      "**B1+** Wiederholung und Festigung des Niveaus B1, Dienstag und Donnerstag, 9:15–10:45, ab 7. Juli"
    ],
    button: {
      label: "Mehr erfahren",
      path: "#courses"
    }
  },
  courses: [
    {
      title: "Gruppenkurs: Standard",
      image: "courseStandard",
      alt: "Junger Mann hängt Blätter an eine Wand",
      paragraphs: [
        "Zweimal pro Woche je 1,5 Stunden",
        "**Umfang:** 72 Unterrichtseinheiten (à 45 Minuten), 4,5 Monate",
        "**Preis:** 160 €/Monat",
        "Mindestteilnehmerzahl: 3"
      ]
    },
    {
      title: "Gruppenkurs: Intensiv",
      image: "courseIntensive",
      alt: "Frau arbeitet am Laptop",
      paragraphs: [
        "Unterricht viermal pro Woche, Montag bis Donnerstag",
        "**Umfang:** 72 Unterrichtseinheiten, 6 Wochen",
        "**Preis:** 720 €"
      ]
    },
    {
      title: "So arbeiten wir:",
      image: "whiteboard",
      alt: "Zwei Männer besprechen Notizen am Whiteboard",
      paragraphs: [],
      list: [
        "Zuerst führen wir mit Ihnen online ein kostenloses Einstufungsgespräch, es dauert 15–30 Minuten.",
        "Danach empfehlen wir Ihnen eine Gruppe und eine Niveaustufe, zum Beispiel A1.1, A2.1, B1.1, B2.1 usw.",
        "Der Unterricht findet in Zoom und auf dem Online-Whiteboard Miro in kleinen Gruppen mit 3 bis 6 Personen statt",
        "Der Unterricht wird aufgezeichnet – falls Sie etwas verpasst haben",
        "Eine Stufe (zum Beispiel A1.1, also die Hälfte des Niveaus A1) dauert im Standardkurs 4,5 Monate und im Intensivkurs 6 Wochen."
      ]
    }
  ]
};
