import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Ruta({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Per a la ruta
      </Typography>
      {day == 1 && (
        <>
          <Typography variant="h5" gutterBottom>
            - Fes memòria dels moments més feliços de la teva vida
          </Typography>
          <Typography variant="h5" gutterBottom>
            - Comparteix-ho amb la teva parella de recés
          </Typography>
        </>
      )}
      {day == 2 && (
        <>
          <Typography variant="h5" gutterBottom>
            - Havent sentit les paraules de Jesús: t’has sentit identificat?
            t’has sentit interpel·lat? desperten alguna cosa en tu?
          </Typography>
          <Typography variant="h5" gutterBottom>
            - Per parelles: qui és Jesús per a tu? què signifiquen per a tu les
            benaurances del Senyor? Compartiu les vostres respostes amb la
            parella del recés.
          </Typography>
        </>
      )}
    </div>
  );
}
