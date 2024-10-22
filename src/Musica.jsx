import * as React from "react";
import Typography from "@mui/material/Typography";
import Iframe from "./Iframe";

export default function Musica() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        «La Felicidad», Izaro
      </Typography>
      <Iframe src="https://www.youtube.com/embed/rzp5foKF9Ps?si=cjNCefGdubEb1Cgg" />
      <Typography variant="h5" gutterBottom>
        Sálvame, Íñigo Quintero
      </Typography>
      <Iframe src="https://www.youtube.com/embed/6UAinV-h6VI?si=m2cGsK1G4yZoiTg_" />
      <Typography variant="h5" gutterBottom>
        «Sé que no estic sol», Worship.cat{" "}
      </Typography>
      <Iframe src="https://www.youtube.com/embed/HdV20_4pdDo?si=IL0xGCUFkVLPVsAZ" />
      TODOjmc separar Podcasts
      <Iframe src="https://rezandovoy.org/reproductor/especial/2559-camino-de-santiago-01---al-salir-al-camino" />
    </div>
  );
}
