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
<div class="s"> Baptisme de Jesús 
</div><div class="r"> (<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4D%63+1');">Mc 1</a>,9-11;<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4C%63+3');"> Lc 3</a>,21-22;<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4A%6E+1');"> Jn 1</a>,32-34) 
</div><div class="p"> 
<span class="v">13&nbsp;</span>Llavors Jesús vingué de Galilea i es va presentar a Joan, vora el Jordà, a fer-se batejar per ell. 
<span class="v">14&nbsp;</span>Però Joan s'hi oposava, dient: 
</div><div class="p"> --Sóc jo el qui necessita ser batejat per tu, i tu véns a mi! 
</div><div class="p"> 
<span class="v">15&nbsp;</span>Jesús li respongué: 
</div><div class="p"> --Deixa'm fer, ara. Convé que complim d'aquesta manera tot el que Déu vol. 
</div><div class="p"> Aleshores Joan el deixà fer. 
</div><div class="p"> 
<span class="v">16&nbsp;</span>Un cop batejat, Jesús sortí de l'aigua. Davant d'ell el cel s'obrí, i Jesús veié l'Esperit de Déu que baixava com un colom i venia damunt d'ell. 
<span class="v">17&nbsp;</span>I una veu digué des del cel: 
</div><div class="p"> --Aquest és el meu Fill, el meu estimat, en qui m'he complagut. 
</div></td>
</tr>
<tr><td><br>
</tr>
</tbody></table>

<table class="biblija" width="100%">
<tbody><tr class="tr-odd">
<td class="text" width="100%" valign="bottom">
<div class="s"> Temptacions de Jesús 
</div><div class="r"> (<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4D%63+1');">Mc 1</a>,12-13;<a href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4C%63+4');"> Lc 4</a>,1-13) 
</div><span class="c">4</span> 
<div class="p"> 
<span class="v">1&nbsp;</span>Aleshores l'Esperit va conduir Jesús al desert perquè el diable el temptés. 
<span class="v">2&nbsp;</span>Jesús dejunà quaranta dies i quaranta nits, i al final tenia fam. 
<span class="v">3&nbsp;</span>El temptador se li acostà i li digué: 
</div><div class="p"> --Si ets Fill de Déu, digues que aquestes pedres es tornin pans. 
</div><div class="p"> 
<span class="v">4&nbsp;</span>Però ell li va respondre: 
</div><div class="p"> --L'Escriptura diu: <span class="itw">L'home no viu només de pa; viu de tota paraula que surt de la boca de Déu.</span> 
</div><div class="p"> 
<span class="v">5&nbsp;</span>Llavors el diable se l'enduu a la ciutat santa, el posa dalt de tot del temple 
<span class="v">6&nbsp;</span>i li diu: 
</div><div class="p"> --Si ets Fill de Déu, tira't daltabaix. Diu l'Escriptura: <span class="itw">Donarà ordre als seus àngels, i et duran a les palmes de les mans perquè els teus peus no ensopeguin amb les pedres.</span> 
</div><div class="p"> 
<span class="v">7&nbsp;</span>Jesús li contestà: 
</div><div class="p"> --També diu l'Escriptura: <span class="itw">No temptis el Senyor, el teu Déu.</span> 
</div><div class="p"> 
<span class="v">8&nbsp;</span>Després el diable se l'enduu dalt d'una muntanya molt alta, li mostra tots els reialmes del món i la seva glòria 
<span class="v">9&nbsp;</span>i li diu: 
</div><div class="p"> --Et donaré tot això si et prosternes i m'adores. 
</div><div class="p"> 
<span class="v">10&nbsp;</span>Li diu Jesús: 
</div><div class="p"> --Vés-te'n, Satanàs! Diu l'Escriptura: <span class="itw">Adora el Senyor, el teu Déu, dóna culte a ell tot sol.</span> 
</div><div class="p"> 
<span class="v">11&nbsp;</span>Llavors el diable el va deixar, i vingueren uns àngels i el servien. 
</div></td>
</tr>
<tr><td><br>
</tr>
</tbody></table>
`;

export default function PregariaDia2() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Mt 3,13-17. 4,1-11)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        A la teva manera
      </Typography>
      <Typography variant="body1" gutterBottom>
        Senyor, ensenya'm la teva manera de tractar amb els deixebles, els
        pecadors, els nens, els fariseus, Pilats, Herodes... Ensenya'm a ser
        compassiu amb els qui pateixen: els pobres, els leprosos, els cecs, els
        paralítics... Mostra'm de quina manera comunicaves les teves emocions
        profundes fins a vessar llàgrimes… Aquesta és la teva imatge que
        contemplo a l'Evangeli: noble, sublim, amable, exemplar, posseïdor de la
        perfecta harmonia entre vida i doctrina. Una manera dura per a tu
        mateix, plena de privacions i treballs, curulla de bondat i amor als
        altres, amb el desig de servir-los. La teva relació constant amb el Pare
        en la pregària, abans de l'alba o mentre els altres dormien, era consol
        i alè per a predicar el Regne. Ensenya'm la teva manera de mirar, tal i
        com vas mirar Pere per a trucar-lo o per a aixecar-lo; o tal i com vas
        mirar el jove ric que no es va decidir a seguir-te; o tal i com vas
        mirar, bondadós, les multituds amuntegades al teu voltant; o amb ira
        quan els teus ulls es fixaven en els hipòcrites. Voldria conèixer-te tal
        i com ets: la imatge del teu rostre em canviarà. Desitjaria veure't com
        Pere quan, esglaiat de sorpresa després de la pesca miraculosa, pren
        consciència de la pròpia condició de pecador en la teva presència.
        <br></br>
        <br></br>
        Adaptació de la pregària de Pedro Arrupe sj. «Invocació a Jesucrist com
        a model». Cf. Rezando voy.
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Senyor Jesús
      </Typography>
      <Typography variant="body1" gutterBottom>
        Senyor Jesús!<br></br>
        La meva força i el meu fracàs ets Tu.<br></br>
        <br></br>
        La meva herència i la meva pobresa.<br></br>
        Tu, la meva justícia.<br></br>
        Jesús,<br></br>
        la meva guerra i la meva pau.<br></br>
        ¡La meva lliure llibertat!<br></br>
        <br></br>
        La meva mort i vida<br></br>
        Tu,<br></br>
        Paraula dels meus crits,<br></br>
        Silenci de la meva espera,<br></br>
        Testimoni dels meus somnis,<br></br>
        Creu de la meva creu.<br></br>
        Causa de la meva amargor,<br></br>
        Perdó del meu egoisme,<br></br>
        Crim del meu procés,<br></br>
        Jutge del meu pobre plor,<br></br>
        Raó de la meva esperança.<br></br>
        <br></br>
        ¡Tu!<br></br>
        La meva terra promesa ets Tu...<br></br>
        La Pasqua de la meva Pasqua ets Tu<br></br>
        Tu ets la nostra glòria per sempre,<br></br>
        Senyor Jesús.<br></br>
        <br></br>
        Pere Casaldàliga
      </Typography>
    </div>
  );
}
