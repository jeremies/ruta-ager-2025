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
    label: "«¿Cómo puedo ser feliz según Jesús?». Capellans mexicans",
    url: "https://www.youtube.com/watch?v=ArARbvGxphU&t=271s",
  },
];

const podcastsDia3 = [
  {
    label: "Reconciliación, rezando voy.",
    url: "https://rezando.es/public/rezandovoy/oraciones/2554/o.mp3",
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
