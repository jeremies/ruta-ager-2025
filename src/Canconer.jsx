import * as React from "react";
import Typography from "@mui/material/Typography";
import CanconerDia1 from "./CanconerDia1";
import CanconerDia2 from "./CanconerDia2";

export default function Canconer() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cançoner
      </Typography>
      <CanconerDia1 />
      <CanconerDia2 />
    </div>
  );
}
