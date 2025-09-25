import * as React from "react";

import Player from "./Player";

const musicaDia1 = [
  {
    label: "«En mi debilidad me haces fuerte». Brotes de olivo.",
    url: "https://www.youtube.com/watch?v=exV7J7FOWwE",
  },
  {
    label: "«Tuyo soy». Luis Alfredo Díaz.",
    url: "https://www.youtube.com/watch?v=-NpSpixtIs8",
  },
];

const musicaDia2 = [
  {
    label: "Cançó «Tu modo», de Cristobal Fones",
    url: "https://www.youtube.com/watch?v=5wXCLdnOQj4",
  },
  {
    label: "Cançó: «Et seguiré», Worship.cat.",
    url: "https://www.youtube.com/watch?v=5OsC53O_lYU",
  },
];

const musicaDia3 = [
  {
    label: "«Sin miedo», Cristobal Fones sj.",
    url: "https://www.youtube.com/watch?v=PneT5asOq_M",
  },
  {
    label: "«Hágase», Camila Garrido i Cristóbal Fones sj.",
    url: "https://www.youtube.com/watch?v=6TabT1p1MbI",
  },
];

export default function Musica({ day }) {
  let media;
  if (day == 1) {
    media = musicaDia1;
  } else if (day == 2) {
    media = musicaDia2;
  } else if (day == 3) {
    media = musicaDia3;
  }
  return <Player title={"Música"} media={media} />;
}
