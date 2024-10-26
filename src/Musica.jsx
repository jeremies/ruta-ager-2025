import * as React from "react";

import Player from "./Player";

const media = [
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
export default function Musica() {
  return <Player title={"Música"} media={media} />;
}
