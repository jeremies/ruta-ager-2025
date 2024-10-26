import * as React from "react";

import Player from "./Player";

const musicaDia1 = [
  {
    label: "«La Felicidad», Izaro",
    url: "https://www.youtube.com/watch?v=rzp5foKF9Ps",
  },
  {
    label: "Sálvame, Íñigo Quintero",
    url: "https://www.youtube.com/watch?v=6UAinV-h6VI",
  },
  {
    label: "«Sé que no estic sol», Worship.cat",
    url: "https://www.youtube.com/watch?v=HdV20_4pdDo",
  },
];

const musicaDia2 = [
  {
    label: "«Amigo de publicanos», Cristóbal Fones.",
    url: "https://www.youtube.com/watch?v=lpfijSJUE3k",
  },
  {
    label: "«Pescador de hombres», Tere Larrain.",
    url: "https://www.youtube.com/watch?v=BzJ7p-YoIoM",
  },
  {
    label: "«En lo profundo», Luis Guitarra.",
    url: "https://www.youtube.com/watch?v=_kPlskzdpew",
  },
];

const musicaDia3 = [
  {
    label: "Si no estás, Íñigo Quintero.",
    url: "https://www.youtube.com/watch?v=vldYYjCQ7jc",
  },
  {
    label: "El carrer del perdó. Worship.cat",
    url: "https://www.youtube.com/watch?v=eK584ngrVHM",
  },
  {
    label: "Cruz del perdón, dd.aa.",
    url: "https://www.youtube.com/watch?v=cteVsktDb1M",
  },
  {
    label: "«Oceans», Hillson",
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
