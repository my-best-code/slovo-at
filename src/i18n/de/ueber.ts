// Страница «О нас» (/de/ueber/). Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const ueber: Dict['ueber'] = {
  meta: {
    title: "Über uns",
    description: "SLOVO ist eine Online-Deutschschule aus Salzburg: Vorbereitung auf ÖIF, ÖSD, Goethe-Zertifikat und telc, Deutsch für echte Alltagssituationen."
  },
  cover: {
    title: "Über uns",
    image: "salzburg",
    alt: "Salzburg bei Sonnenuntergang: die Salzach und die Altstadt"
  },
  lead: "SLOVO ist eine Online-Deutschschule aus Salzburg, Österreich. Wir unterrichten Deutsch und bereiten auf Prüfungen für internationale Zertifikate vor: ÖIF, ÖSD, Goethe-Zertifikat, telc.",
  paragraphs: [
    "Im Unterricht üben wir die Sprache in echten Alltagssituationen (Kennenlernen, Einkaufen, beim Arzt, Freizeit usw.), behandeln die Besonderheiten des Deutschen in Deutschland, Österreich und der Schweiz und erklären die Grammatik anschaulich und verständlich.",
    "Bei uns müssen Sie keine Angst vor Fehlern haben! Fehler sind der Weg zum Erfolg.",
    "Das Wichtigste für uns sind unsere Lernenden und unser [Team](/team/)."
  ]
};
