// Страница «Записаться на занятия» (/de/book/). Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const book: Dict['book'] = {
  meta: {
    title: "Zum Unterricht anmelden",
    description: "Melden Sie sich für Online-Deutschkurse bei SLOVO an: Gruppen- und Einzelunterricht, Prüfungsvorbereitung."
  },
  services: [
    {
      title: "Gruppenkurse",
      path: "/groups/",
      text: "Online-Unterricht in Kleingruppen mit 3 bis 8 Personen",
      image: "cardGroups",
      alt: "Vier junge Leute schauen gemeinsam auf ein Tablet"
    },
    {
      title: "Einzelunterricht",
      path: "/individual/",
      text: "Online-Unterricht im Einzelformat\nzu Zeiten, die Ihnen passen",
      image: "cardIndividual",
      alt: "Junge Frau telefoniert am Laptop"
    },
    {
      title: "Prüfungsvorbereitung",
      path: "/exams/",
      text: "Wir bereiten auf die Prüfungen Goethe-Zertifikat, telc, ÖSD und ÖIF vor",
      image: "cardExams",
      alt: "Hände über einem Tisch mit Papierblättern während des Unterrichts"
    }
  ]
};
