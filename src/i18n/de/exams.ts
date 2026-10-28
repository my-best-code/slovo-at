// Страница «Подготовка к экзаменам» (/de/exams/). Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const exams: Dict['exams'] = {
  meta: {
    title: "Prüfungsvorbereitung",
    description: "Online-Vorbereitung auf Deutschprüfungen: Goethe-Zertifikat, ÖSD, ÖIF und telc – für Aufenthaltstitel, Staatsbürgerschaft, Studium und Beruf."
  },
  cover: {
    title: "Prüfungsvorbereitung",
    image: "library",
    alt: "Treppe zwischen Bücherregalen in einer Bibliothek"
  },
  lead: "Wir bereiten auf Prüfungen für internationale Deutschzertifikate vor:",
  items: [
    {
      title: "Goethe-Zertifikat",
      text: "Deutschprüfung des Goethe-Instituts. In Deutschland als Sprachnachweis für den Aufenthaltstitel und für das Studium anerkannt."
    },
    {
      title: "ÖSD",
      text: "Österreichisches Sprachdiplom Deutsch: österreichische Prüfung, in allen deutschsprachigen Ländern anerkannt"
    },
    {
      title: "ÖIF",
      text: "Integrationsprüfung des Österreichischen Integrationsfonds, erforderlich für einen Aufenthaltstitel in Österreich sowie für die österreichische Staatsbürgerschaft"
    },
    {
      title: "telc",
      text: "telc-Prüfungen als Nachweis der Deutschkenntnisse in Deutschland"
    }
  ]
};
