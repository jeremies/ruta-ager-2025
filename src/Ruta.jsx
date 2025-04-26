import * as React from "react";
import Typography from "@mui/material/Typography";
import santescreus from "./santescreus.jpg";
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
            - Abraham és el pare en la fe. Pensa que va començar el seu
            pelegrinatge «sortint de casa seva». Com surto de casa meva a la
            recerca dels altres? Evito caure en la temptació de quedar-me en la
            meva «zona de confort»? Com la supero?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Quin és el camí que Déu t’ha convidat a recorrer en la teva vida?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={santescreus} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Monestir de Santes Creus
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
            - Qui és Jesús per a tu? Què signifiquen les benaurances del Senyor?
            Comparteix la teva resposta amb algun company de la ruta
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
            - Si la vida es pot definir com «un camí de retorn a Déu»: com et
            relaciones amb el Senyor? Experimentes que aquest és el camí de la
            felicitat? Com ho vius? Has de canviar alguna cosa? Has d’afrontar
            algun interrogant? Com et tracta el Senyor? Com el tractes tu?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Què és el que et qüestiona més d’aquesta paràbola? Per què?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - Comparteix les teves respostes amb algun company
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
