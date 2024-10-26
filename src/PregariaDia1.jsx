import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PregariaDia1() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Evangeli (Rm 12,9-21)
        </AccordionSummary>
        <AccordionDetails>
          (...) Fugiu del mal, abraceu-vos al bé. Estimeu-vos afectuosament amb
          un amor fratern, avanceu-vos a honorar-vos els uns als altres.
          Esforceu-vos a ser sol·lícits. Sigueu fervents d’esperit, serviu el
          Senyor. Que l’esperança us ompli d’alegria. Sigueu pacients en la
          tribulació, constants en l’oració. Feu-vos solidaris de les
          necessitats del poble sant. Practiqueu amb deler l’hospitalitat.
          <br />
          Beneïu els qui us persegueixen. Beneïu, no maleïu. Alegreu-vos amb els
          qui estan alegres, ploreu amb els qui ploren. Viviu d’acord els uns
          amb els altres. No aspireu a grandeses, sinó poseu-vos al nivell dels
          humils. No us tingueu per savis. No torneu a ningú mal per mal; mireu
          de fer el bé a tothom. Si és possible, i fins on depengui de
          vosaltres, estigueu en pau amb tothom. Estimats, no us prengueu la
          justícia per la vostra mà; deixeu que actuï la indignació divina, tal
          com diu l’Escriptura: A mi em toca de passar comptes, jo donaré la
          paga, diu el Senyor. Més aviat, si el teu enemic té fam, dona-li
          menjar; si té set, dona-li beure: serà com si posessis brases sobre el
          seu cap. No et deixis vèncer pel mal; al contrari, venç el mal amb el
          bé.
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        La vida es vida (Teresa de Ávila)
      </Typography>
      <Typography variant="body1" gutterBottom>
        La vida és bellesa, contempla-la
        <br />
        La vida és una oportunitat, aprofita-la
        <br />
        La vida és una benedicció, gaudeix-la
        <br />
        La vida és un somni, fes-lo realitat
        <br />
        La vida és un repte, afronta’l
        <br />
        La vida és un joc, juga’l
        <br />
        La vida és preciosa, cuida-la
        <br />
        La vida és riquesa, conserva-la
        <br />
        La vida és amor, gaudeix-lo
        <br />
        La vida és un misteri, descobreix-lo
        <br />
        La vida és una promesa, compleix-la
        <br />
        La vida és tristesa, supera-la
        <br />
        La vida és un himne, canta’l
        <br />
        La vida és una lluita, accepta-la
        <br />
        La vida és una tragèdia, domina-la
        <br />
        La vida és aventura, viu-la
        <br />
        La vida és felicitat, guanya-la
        <br />
        La vida és vida, defensa-la
      </Typography>
      <Typography variant="h5" gutterBottom>
        Sólo por hoy (Juan XXIII)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Señor Jesús: trataré de ajustarme a la vida. Si sucede algo que me
        desagrade, no me mortificaré, ni me lamentaré, agradeceré que me haya
        sucedido, porque así se puso a prueba mi voluntad de ser feliz. Solo por
        hoy. No criticaré a nadie. Si comienzo a criticar a una persona,
        cambiaré la crítica por apreciaciones sinceras de sus virtudes, olvidaré
        sus defectos y concentraré mi atención en sus virtudes. Solo por hoy. No
        guardaré rencor a nadie. Practicaré la ley del perdón. Asumiré mis
        responsabilidades y no echaré la culpa de mis problemas a otras
        personas. Comprobaré que Dios me ama y me premia con su amor. Trataré de
        pagar un mal con un bien. Al llegar la noche, comprobaré que Dios me
        premió con un día pleno de deliciosa felicidad. Que he sido inmensamente
        feliz. Solo por hoy.
      </Typography>
    </div>
  );
}
