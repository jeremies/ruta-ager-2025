import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PregariaDia2() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Evangeli (Mt 5,1-12)
        </AccordionSummary>
        <AccordionDetails>
          En veure les multituds, Jesús pujà a la muntanya, s'assegué, i se li
          acostaren els deixebles. Llavors, prenent la paraula, començà a
          instruir-los dient:
          <br />
          --Feliços els pobres en l'esperit: d'ells és el Regne del cel!
          <br /> »Feliços els qui ploren, perquè seran consolats.
          <br /> »Feliços els humils, perquè posseiran la terra.
          <br /> »Feliços els qui tenen fam i set de ser justos, perquè seran
          saciats.
          <br /> »Feliços els compassius, perquè seran compadits.
          <br /> »Feliços els nets de cor, perquè veuran Déu.
          <br /> »Feliços els qui treballen per la pau, perquè seran anomenats
          fills de Déu.
          <br />
          »Feliços els perseguits pel fet de ser justos, perquè d’ells és el
          Regne del cel.
          <br />
          »Feliços vosaltres quan, per causa meva, us insultaran, us perseguiran
          i escamparan contra vosaltres tota mena de calúmnies. Alegreu-vos-en i
          celebreu-ho, perquè la vostra recompensa és gran en el cel. També així
          van perseguir els profetes que us han precedit.
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Col·loqui amb Déu{" "}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Senyor, crec que mai oblidaré aquell dia, assegut al teu costat, entre
        els teus amics. Les teves paraules han canviat la meva vida. Vull rebre
        aquest do del Regne de Déu i participar-hi activament. Per això
        necessito que canviïs moltes coses a la meva vida: el meu cor no és el
        d'un pobre, i ho hauria de ser; tu saps que passo de llarg davant del
        dolor i el plor, fins i tot de moltes persones que són a prop meu,
        necessito un cor compassiu; saps que em desentenc de moltes situacions
        conflictives, perquè tinc por de lluitar per la veritat i la justícia,
        necessito aquest coratge profètic que tu tens; saps que la meva mirada
        no és neta ni transparent, per això necessito la claredat de la teva
        mirada. Com m'agradaria que la gent que entrés en contacte amb mi i amb
        els cristians de la meva comunitat, en veure'ns, exclamés: va! com
        s'assemblen a Jesús! la seva mirada, els seus sentiments, la seva
        lucidesa, el seu tarannà ferm i pacífic… Senyor, pren el meu fang, pren
        el nostre fang, i modela'l una altra vegada perquè s'ompli de vida, de
        la teva Vida: una vida que traspua Regne de Déu.
      </Typography>
    </div>
  );
}
