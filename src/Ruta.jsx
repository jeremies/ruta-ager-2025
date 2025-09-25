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
            1. La imatge de Déu és fonamental per a la fe. Quina imatge de Déu
            «ha pesat» més en tu en els primers anys de la teva vida? I avui, en
            què ha canviat segons ens han plantejat aquest matí?
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            2. Pensa aquesta frase d’un místic cristià: «anem a Déu sense Déu».
            Què vol dir? Considera-ho mentre camines i prega a Déu sobre la
            imatge que tu tens d’Ell.
          </Typography>{" "}
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            3. Quina imatge de Déu et transmet la creu de Jesús?
          </Typography>
        </>
      )}
      {day == 3 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            1. La Bíblia i la Tradició de l’Església ens diuen que som
            «criatures», i que tenim la capacitat d’estimar «el Creador». Dona
            gràcies per ser com ets, pel teu cos, per la teva psicologia, pels
            teus dons. Dona gràcies per tot allò que, de natura, has rebut.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 3 }} gutterBottom>
            2. La Bíblia i la Tradició de l’Església ens diuen que «som imatge
            de Déu». Tenim una vocació a «reflectir» algun tret del Creador,
            així com entrar en comunió amb Ell i amb els éssers humans. Què et
            fa pensar i pregar la paraula «comunió»? A què et sents unit,
            particularment, en la teva vida? Considera com «estem dissenyats»
            per a la comunió amb tot: la Natura, la família, els amics, la
            societat, la parella... i Déu com a Font de comunió.
          </Typography>
        </>
      )}
    </div>
  );
}
