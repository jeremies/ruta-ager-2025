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
    label: "«Amigo de publicanos». Cristóbal Fones.",
    url: "https://www.youtube.com/watch?v=lpfijSJUE3k",
  },
  {
    label: "«Tu modo». Cristóbal Fones.",
    url: "https://www.youtube.com/watch?v=5wXCLdnOQj4",
  },
];

const musicaDia3 = [
  {
    label: "«Per sempre». Worship.cat.",
    url: "https://www.youtube.com/watch?v=3DdLTr04jxY",
  },
  {
    label: "«Oceans». Hillsong.",
    url: "https://www.youtube.com/watch?v=1m_sWJQm2fs",
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
