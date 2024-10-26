import * as React from "react";
import Typography from "@mui/material/Typography";
import CanconerDia1 from "./CanconerDia1";
import CanconerDia2 from "./CanconerDia2";
import CanconerDia3 from "./CanconerDia3";

export default function Canconer({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cançoner
      </Typography>
      {day == 1 && <CanconerDia1 />}
      {day == 2 && <CanconerDia2 />}
      {day == 3 && <CanconerDia3 />}
    </div>
  );
}
