// Страница «Команда» (/de/team/). Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const team: Dict['team'] = {
  meta: {
    title: "Team",
    description: "Das Team von SLOVO: Wladimir Kusnezow und Swetlana Golowanowa. Erfahrung seit 2012, Prüfer für ÖSD und ÖIF, Online-Unterricht aus Salzburg."
  },
  cover: {
    title: "Team",
    image: "classroom",
    alt: "Lehrer an der Tafel vor einer Gruppe von Lernenden"
  },
  members: [
    {
      name: "Wladimir Kusnezow",
      role: "Gründer, Lehrer",
      image: "teamVladimir",
      alt: "Wladimir Kusnezow",
      bio: [
        "Geboren in Nischni Nowgorod. Abschluss an der Staatlichen Linguistischen Universität Nischni Nowgorod „N. A. Dobroljubow“ in der Fachrichtung „Linguist, Lehrer“. Unterrichtet Deutsch seit 2012.",
        "Von 2012 bis 2018 Lehrer in Deutschkursen und Prüfer für das Goethe-Zertifikat auf den Niveaus A1–C1 am Deutschen Sprachzentrum in Nischni Nowgorod.",
        "Im Studienjahr 2017/18 unterrichtete er Deutsch an der Lobatschewski-Universität Nischni Nowgorod: an der Philologischen Fakultät, der Fakultät für Internationale Beziehungen und der Fakultät für Biologie und Biomedizin.",
        "Von 2018 bis 2023 Methodiker und Lehrer am Österreich Institut in Moskau (österreichisches Außenministerium). Vorsitzender der ÖSD-Prüfungskommission. Promovierter Philologe (Kandidat der Wissenschaften): 2021 verteidigte er seine Dissertation zur Phonetik des Deutschen.",
        "Seit 2023 unterrichtet er Deutsch in Zell am See und Salzburg, Österreich.",
        "Zertifizierter ÖSD-Prüfer für die Niveaus A1–C2, zertifizierter Lehrer und Prüfer (A1–B2) des Österreichischen Integrationsfonds ÖIF."
      ],
      quote: [
        "„Ich lebe die deutsche Sprache und unterrichte sie nicht nur: meine Freunde, Bücher, Musik, Filme, Podcasts …",
        "In meiner Arbeit sind mir einwandfreies Fachwissen und ein herzliches, menschliches Verhältnis zu Lernenden sowie zu Kolleginnen und Kollegen wichtig.",
        "Ich glaube, der Schlüssel zum Erfolg liegt in einer angenehmen Atmosphäre gegenseitigen Respekts zwischen Lehrer und Lernenden.“"
      ]
    },
    {
      name: "Swetlana Golowanowa",
      role: "Administratorin, Lehrerin",
      image: "teamSvetlana",
      alt: "Swetlana Golowanowa",
      bio: [
        "Geboren in Nischni Nowgorod. Abschlüsse an der Higher School of Economics (HSE) und an der Staatlichen Linguistischen Universität Nischni Nowgorod „N. A. Dobroljubow“.",
        "Lehrerin für Deutsch und Russisch als Fremdsprache.",
        "Von 2018 bis 2020 Deutschlehrerin an der Higher School of Economics in Nischni Nowgorod.",
        "Von 2021 bis 2023 Deutschlehrerin am Österreich Institut in Moskau (österreichisches Außenministerium). Ausbildung zur zertifizierten ÖSD-Prüferin A1–A2.",
        "Sie unterrichtete Russisch für österreichische Diplomatinnen und Diplomaten.",
        "Seit 2024 studiert sie an der Universität Salzburg, Österreich, und unterrichtet Deutsch am Sprachenzentrum der Universität.",
        "Sie unterrichtet Deutsch für bilinguale Kinder und für Kinder, die erst vor Kurzem in ein deutschsprachiges Land gezogen sind."
      ],
      quote: [
        "„Deutsch war für mich keine Liebe auf den ersten Blick. Ab der ersten Klasse haben wir uns in der Schule abgemüht: die Wörter im Satz richtig anzuordnen, den richtigen Artikel zu wählen oder wieder ein Gedicht auswendig zu lernen (manche kann ich bis heute).",
        "Doch nach meiner ersten Reise nach Deutschland änderte sich alles: Ich habe mich unwiderruflich in diese Sprache verliebt. Ich konnte all diese Regeln in meinem Kopf ordnen und habe erkannt, wie logisch und wie schön Deutsch ist.",
        "Heute teile ich mein Wissen mit Freude mit meinen Lernenden und helfe ihnen, jeden Stoff und jedes Thema zu verstehen – von „Was sind Subjekt und Prädikat?“ bis „Konjunktiv I im medizinischen Deutsch“.“"
      ]
    }
  ]
};
