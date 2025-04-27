import * as React from "react";

import Player from "./Player";

const musicaDia1 = [
  {
    label: "Cançó «Beneiré el Senyor», Worship.cat",
    url: "https://www.youtube.com/watch?v=fsj_msYI1CI",
  },
  {
    label: "Cançó «Oceans». Hillson.",
    url: "https://www.youtube.com/watch?v=1m_sWJQm2fs",
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
