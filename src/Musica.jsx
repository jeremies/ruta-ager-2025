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
export default function Musica({ day }) {
  let media;
  if (day == 1) {
    media = musicaDia1;
  } else if (day == 2) {
    media = musicaDia2;
  }
  return <Player title={"Música"} media={media} />;
}
