import * as React from "react";
import Typography from "@mui/material/Typography";
import santescreus from "./santescreus.jpg";
import poblet from "./poblet.jpg";
import pobletInterior from "./poblet-interior.jpg";
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
            1. Quan caminis cap a Corsà, prega repetidament i sense pressa:
            «Senyor Jesús, tingues pietat de mi».
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            2. Contesta tot caminant, aquests interrogants. Quina imatge d’home
            he interioritzat i, potser, no està d’acord amb l’Evangeli que vull
            viure? Quins són aquells models de persona que m’influencien més i,
            potser, m’impedeixen viure la vida com l’Esperit de Déu em convida?
          </Typography>
        </>
      )}
      {day == 2 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            a) no hi ha títol més gran que el de «ser fill». Com ho vius? Què
            significa per a tu? Comparteix la teva resposta amb un company de
            recés.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            b) et sents fracassat en alguna dimensió essencial de la teva vida?
            Per què? Comparteix-ho amb el teu acompanyant.
          </Typography>{" "}
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            c) quines són les temptacions «d’abandonar la teva fe» o de «no
            viure-la a fons»? repassa-les mentre camines.
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
            - avui ets a Poblet. Els monjos tenen vocació de romandre en un
            lloc. En quin lloc t’agradaria romandre «per sempre»? Quina és, en
            el fons, la teva vocació? Què té preparat Déu per a tu?
            Imagina-ho... comparteix-ho amb el teu acompanyant, si t’ajuda.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            - quina és «la teva vocació personal»?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "80vw" }} src={pobletInterior} />
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
    </div>
  );
}
