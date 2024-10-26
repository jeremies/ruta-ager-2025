import * as React from "react";
import Typography from "@mui/material/Typography";
import PregariaDia1 from "./PregariaDia1";
import PregariaDia2 from "./PregariaDia2";
import PregariaDia3 from "./PregariaDia3";

export default function Pregaria({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Pregària
      </Typography>
      {day == 1 && <PregariaDia1 />}
      {day == 2 && <PregariaDia2 />}
      {day == 3 && <PregariaDia3 />}
    </div>
  );
}
