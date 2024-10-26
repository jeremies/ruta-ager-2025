import * as React from "react";
import Typography from "@mui/material/Typography";
import vallbona from "./vallbona.jpg";
import poblet from "./poblet.jpg";
import pena from "./pena.webp";
import { Box } from "@mui/material";

export default function Ruta({ day }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Per a la ruta
      </Typography>
      {day == 1 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Fes memòria dels moments més feliços de la teva vida
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Comparteix-ho amb la teva parella de recés
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={vallbona} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Monestir de Vallbona de les Monges
            </Typography>
          </Box>
        </>
      )}
      {day == 2 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Havent sentit les paraules de Jesús: t’has sentit identificat?
            t’has sentit interpel·lat? desperten alguna cosa en tu?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Per parelles: qui és Jesús per a tu? què signifiquen per a tu les
            benaurances del Senyor? Compartiu les vostres respostes amb la
            parella del recés.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={poblet} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Monestir de Poblet
            </Typography>
          </Box>
        </>
      )}
      {day == 3 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Si la vida es pot definir com «un camí de retorn»: com et
            relaciones amb el Senyor? Experimentes que aquest és el camí de la
            felicitat? Com ho vius? Has de canviar alguna cosa? Has d’afrontar
            algun interrogant? Com et tracta el Senyor? Com el tractes tu?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Què és el que et qüestiona més d’aquesta paràbola? Per què?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Comparteix les teves respostes amb la parella del recés. De
            baixada per la pista.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={pena} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Mirador de la Pena
            </Typography>
          </Box>
        </>
      )}
    </div>
  );
}
