// Главная страница. Немецкий перевод: машинный, его должен вычитать владелец.
import type { Dict } from '..';

export const home: Dict['home'] = {
  meta: {
    title: "Deutschkurse online aus Salzburg – SLOVO Sprachschule",
    description: "Online-Deutschschule aus Salzburg: Gruppenkurse, Einzelunterricht und Vorbereitung auf die Prüfungen Goethe, ÖSD, ÖIF und telc."
  },
  hero: {
    eyebrow: "Online-Deutschschule",
    title: "Willkommen!",
    text: "Lernen Sie mit Freude Deutsch – von überall in Europa, gemeinsam mit [uns](/team/)\nund fühlen Sie sich in Deutschland, Österreich und der Schweiz wohl"
  },
  announcement: {
    title: "Neue Kurse:",
    lines: [
      "Reguläre [Gruppenkurse](/groups/):",
      "**B2.1** Montag und Mittwoch, 9:15–10:45, ab 6. Juli",
      "**B1+** Wiederholung und Festigung des Niveaus B1, Dienstag und Donnerstag, 9:15–10:45, ab 7. Juli"
    ],
    button: {
      label: "Anmelden",
      path: "/book/"
    }
  },
  why: {
    title: "Warum wir?",
    items: [
      {
        title: "Atmosphäre",
        paragraphs: [
          "Unsere Mission ist es, unseren Kundinnen und Kunden zu helfen. Wir lernen in einer freundlichen Atmosphäre, in der Sie jederzeit jede Frage stellen können."
        ]
      },
      {
        title: "Erfahrung",
        paragraphs: [
          "Wir unterrichten seit 2012 Deutsch und kennen uns darin bestens aus. Deshalb haben wir wirklich viel Erfahrung im Unterrichten. Außerdem bereiten wir auf Prüfungen vor.",
          "Wir haben Menschen geholfen, nach Deutschland, Österreich oder in die Schweiz zu ziehen – und sind dann selbst nach Österreich gezogen.",
          "Deshalb wissen wir nicht nur aus dem Lehrbuch, wie man den jeweiligen Stoff am besten erklärt und übt"
        ]
      },
      {
        title: "Verständnis",
        paragraphs: [
          "Deutsch ist nicht die leichteste Sprache.",
          "Deshalb erklären wir Ihnen manche Themen und Fragen auf Russisch."
        ]
      },
      {
        title: "Lernen Sie, wie es Ihnen passt",
        paragraphs: [
          "Wenn Ihnen das Tempo in der Gruppe schwerfällt, können wir Ihnen Einzelunterricht anbieten.",
          "Sie können zum Beispiel einen Block aus mehreren Einheiten zu einem bestimmten Thema buchen oder Lücken schließen (falls Sie einmal Gruppenstunden verpasst haben)."
        ]
      },
      {
        title: "Wir sprechen",
        paragraphs: [
          "Im Unterricht sprechen wir viel Deutsch. In der Gruppe unterhalten Sie sich miteinander – das hilft Ihnen bei der Integration im neuen Land und macht Freude."
        ]
      },
      {
        title: "Finanzen",
        paragraphs: [
          "Wir haben bei den Preisen mitgedacht, damit Sie für einen Kurs nicht ein halbes Monatsgehalt ausgeben müssen."
        ]
      }
    ]
  },
  reviews: {
    title: "Bewertungen",
    items: [
      {
        text: "Ich finde, die beste Bewertung ist das Ergebnis. Bei Wladimir habe ich die Niveaus A2 und B1 gelernt und danach die Prüfung zum Goethe-Zertifikat bestanden. Heute arbeite ich in Deutschland. Wir haben in kleinen Gruppen gelernt, jede und jeder wurde individuell betreut, und der Unterricht fand in einer freundschaftlichen Atmosphäre statt.",
        author: "Wsewolod F., Bad Segeberg, Deutschland"
      },
      {
        text: "Eine Sprache zu lernen ist ein schwieriger Prozess, doch er wird leichter, wenn man auf eine „Quelle“ neuen Wissens trifft, die viel über die Sprache erzählt. Dank Ihnen konnte ich mein Sprachniveau und mein Sprechen verbessern, viel Neues lernen und das Gelernte besser festigen.",
        author: "Platon B., Wien, Österreich"
      },
      {
        text: "Ich habe mit Wladimir wunderbare Erfahrungen gemacht. Nach zwei Jahren Pause beim Deutschlernen hat er mir geholfen, mein Wissen aufzufrischen und mich auf die ÖSD-Prüfung C1 vorzubereiten, die ich für das Studium an der Wirtschaftsuniversität Wien erfolgreich bestanden habe. Wladimir erklärt den Stoff hervorragend und gestaltet den Unterricht interessant und spannend. Ich bin ihm für seine Professionalität und Unterstützung sehr dankbar. Ein ausgezeichneter Lehrer, den ich ohne Zögern weiterempfehlen kann!",
        author: "Sofja S., Wien, Österreich"
      }
    ]
  },
  about: {
    title: "Über uns",
    path: "/ueber/",
    image: "lakeMountains",
    alt: "Bergsee in Österreich bei Sonnenuntergang",
    paragraphs: [
      "SLOVO ist eine Online-Deutschschule aus Salzburg. [Wir](/team/) unterrichten Deutsch und bereiten auf internationale Prüfungen in Österreich und Deutschland vor, zum Beispiel ÖSD, ÖIF, Goethe-Zertifikat und telc.",
      "Im Unterricht besprechen wir Situationen aus dem echten Leben.",
      "Die Deutschschule SLOVO steht für Qualität und Effizienz.",
      "Lernen Sie Deutsch mit Freude – wir helfen Ihnen dabei!"
    ]
  },
  services: [
    {
      title: "Gruppenkurse",
      path: "/groups/",
      text: "Online-Unterricht in Kleingruppen mit 4 bis 8 Personen",
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
