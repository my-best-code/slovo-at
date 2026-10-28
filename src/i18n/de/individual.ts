// Страница «Индивидуальные занятия» (/de/individual/). Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const individual: Dict['individual'] = {
  meta: {
    title: "Einzelunterricht",
    description: "Deutsch-Einzelunterricht online im eigenen Tempo und zu Ihrer Wunschzeit: 60 Minuten für 50 €, Pakete mit 4 und 8 Einheiten zum Vorteilspreis."
  },
  cover: {
    title: "Einzelunterricht",
    image: "coverCourses",
    alt: "Heller Raum: Regal mit Bilderrahmen und Holzschale"
  },
  lead: "Bei uns können Sie auch einzeln lernen –\nin Ihrem eigenen Tempo, wann es Ihnen passt!",
  concept: {
    title: "Konzept:",
    image: "whiteboard",
    alt: "Zwei Männer besprechen Notizen am Whiteboard",
    paragraphs: [
      "Einzelunterricht zu Zeiten, die Ihnen passen.",
      "Eine Einheit dauert 60 Minuten."
    ],
    list: [
      "1 Einheit = 50 €",
      "Paket mit 4 Einheiten = ~~200~~ 180 €",
      "Paket mit 8 Einheiten = ~~400~~ 350 €"
    ]
  }
};
