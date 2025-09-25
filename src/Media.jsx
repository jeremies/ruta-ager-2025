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
    label: "«Oración por la creación». Rezando voy.",
    url: "https://rezando.es/public/rezandovoy/oraciones/7/o.mp3",
  },
  {
    label: "«Oración por la paz en Tierra Santa». Rezando voy.",
    url: "https://rezando.es/public/rezandovoy/oraciones/5293/o.mp3",
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
