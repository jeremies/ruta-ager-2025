import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./biblija.scss";

const evangeli = `
<table class="biblija" width="100%">
<tbody><tr class="tr-odd">
<td class="text" width="100%" valign="bottom">
<div class="s"> Guarició del cec Bartimeu 
</div><div class="r"> (<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4D%74+20');">Mt 20</a>,29-34;<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4C%63+18');"> Lc 18</a>,35-43) 
</div><div class="p"> 
<span class="v">46&nbsp;</span>Arribaren a Jericó. Quan Jesús en sortí amb els deixebles i molta gent, el fill de Timeu, Bartimeu, cec i captaire, s'estava assegut vora el camí. 
<span class="v">47&nbsp;</span>Va sentir dir que passava Jesús de Natzaret i començà a cridar: 
</div><div class="p"> --Fill de David, Jesús, tingues pietat de mi! 
</div><div class="p"> 
<span class="v">48&nbsp;</span>Tothom el renyava perquè callés, però ell cridava encara més fort: 
</div><div class="p"> --Fill de David, tingues pietat de mi! 
</div><div class="p"> 
<span class="v">49&nbsp;</span>Jesús s'aturà i digué: 
</div><div class="p"> --Crideu-lo. 
</div><div class="p"> Ells van cridar el cec dient-li: 
</div><div class="p"> --Coratge! Aixeca't, que et crida. 
</div><div class="p"> 
<span class="v">50&nbsp;</span>Ell llançà el mantell, es posà dret d'una revolada i se'n va anar cap a Jesús. 
<span class="v">51&nbsp;</span>Jesús li preguntà: 
</div><div class="p"> --Què vols que faci per tu? 
</div><div class="p"> El cec respongué: 
</div><div class="p"> --Rabuni, fes que hi vegi. 
</div><div class="p"> 
<span class="v">52&nbsp;</span>Jesús li digué: 
</div><div class="p"> --Vés, la teva fe t'ha salvat. 
</div><div class="p"> A l'instant hi veié i el seguia camí enllà. 
</div></td>
</tr>
</tbody></table>
`;

export default function PregariaDia1() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Marc 10,46-52)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Adora i confia
      </Typography>
      <Typography variant="body1" gutterBottom>
        No t’inquietis per les dificultats de la vida,<br></br>
        pels seus alts i baixos,<br></br>
        per les seves decepcions,<br></br>
        pel seu futur més o menys ombrívol.<br></br>
        Desitja allò que Déu desitja.<br></br>
        Ofereix-li enmig d’inquietuds i dificultats<br></br>
        el sacrifici de la teva ànima senzilla que,<br></br>
        malgrat tot, accepta els designis<br></br>
        de la seva providència.<br></br>
        Poc importa que et consideris un fracassat,<br></br>
        si Déu et considera plenament realitzat;<br></br>
        al seu gust.<br></br>
        Entrega’t amb confiança cega en aquest Déu<br></br>
        que et vol per a Ell.<br></br>I que arribarà fins a tu,<br></br>
        encara que no el vegis mai.<br></br>
        Pensa que et trobes a les seves mans,<br></br>
        més fortament sostingut,<br></br>
        quan més decaigut i trist et trobis.<br></br>
        Viu feliç. T’ho prego.<br></br>
        Viu en pau.<br></br>
        Que res no et torbi.<br></br>
        Que res no sigui capaç de prendre’t la pau.<br></br>
        Ni el cansament psíquic.<br></br>
        Ni les teves faltes morals.<br></br>
        Fes que sorgeixi,<br></br>i conserva sempre sobre el teu rostre,
        <br></br>
        un somriure dolç, reflex d’allò<br></br>
        que el Senyor contínuament et dirigeix.<br></br>I al fons de la teva
        ànima col·loca,<br></br>
        abans que res,<br></br>
        com a font d’energia i criteri de veritat,<br></br>
        tot allò que t’ompli de la pau de Déu.<br></br>
        Recorda:<br></br>
        Tot allò que et reprimeixi i t’inquieti és fals.<br></br>
        T’ho asseguro<br></br>
        en nom de les lleis de la vida<br></br>i de les promeses de Déu.
        <br></br>
        Per això, quan et sentis afligit, trist,<br></br>
        adora i confia.<br></br>
        <br />
        <br />
        Teilhard de Chardin.
      </Typography>
    </div>
  );
}
