import * as React from "react";
import Player from "./Player";

const podcastsDia1 = [
  {
    label: "«La vida como peregrinación»",
    url: "https://rezando.es/public/rezandovoy/oraciones/2557/o.mp3",
  },
  {
    label: "«2x01 Objetivo: la felicidad», por Marian Rojas",
    url: "https://www.youtube.com/watch?v=F0zT5MNkq9g",
  },
];

const podcastsDia2 = [
  {
    label: "«Fracasos», Enric Puigrós sj. En Vocesesejota.",
    url: "https://www.youtube.com/watch?v=wcVcw3U5rLY",
  },
  {
    label:
      "«Faltan decisiones, no vocaciones», Nubar Hamparzoumian sj. En Vocesesejota.",
    url: "https://www.youtube.com/watch?v=y7aq7Z0_VTo",
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
