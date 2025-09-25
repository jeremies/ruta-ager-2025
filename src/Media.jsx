import * as React from "react";
import Player from "./Player";

const podcastsDia1 = [
  {
    label: "«Para tiempos de política difícil».",
    url: "https://rezando.es/public/rezandovoy/oraciones/1201/o.mp3",
  },
  {
    label: "«Ante el sinsentido y la violencia».",
    url: "https://rezando.es/public/rezandovoy/oraciones/1026/o.mp3",
  },
];

const podcastsDia2 = [
  {
    label: "«Misericordia». Rezando voy.",
    url: "https://rezando.es/public/rezandovoy/oraciones/1087/o.mp3",
  },
];

const podcastsDia3 = [
  {
    label:
      "«Nace la pregunta. ¿Será real?». Cf. Rezando voy. A partir de la crida que Jesús fa als deixebles de Joan (Jn 1,35-51).",
    url: "https://rezando.es/public/rezandovoy/oraciones/4383/o.mp3",
  },
  {
    label: "Entrevista a Esther Sanz. Bisbat de Lleida. Llegir i/o escoltar.",
    url: "https://www.bisbatlleida.org/sites/default/files/audio/Entrevista%20Esther%20Sanz.mp3",
  },
];

export default function Media({ day }) {
  let media;
  if (day == 1) {
    media = podcastsDia1;
  } else if (day == 2) {
    media = podcastsDia2;
  } else if (day == 3) {
    media = podcastsDia3;
  }
  return <Player title={"Podcasts"} media={media} />;
}
