import * as React from "react";
import Player from "./Player";

const media = [
  {
    label: "«Al salir al camino», Rezando voy",
    url: "https://rezando.es/public/rezandovoy/oraciones/2559/o.mp3",
  },
  {
    label: "«2x01 Objetivo: la felicidad», por Marian Rojas",
    url: "https://www.youtube.com/watch?v=F0zT5MNkq9g",
  },
];
export default function Media() {
  return <Player title={"Podcasts / vídeos / altres:"} media={media} />;
}
