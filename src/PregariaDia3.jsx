import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./biblija.scss";
import fillProdig from "./fill-prodig.jpeg";
import { Box } from "@mui/material";

const evangeli = `
<table class="biblija" width="100%">
<tbody><tr class="tr-odd">
<td class="text" width="100%" valign="bottom">
<!-- GEN 01GEN.ctn Catalan UBS-EuMeRSC 5 Feb 2001,<a   href="javascript:openref('/biblija.cgi?set=15&amp;l=ca&amp;pos=1&amp;qall=0&amp;idq=0&amp;idp0=25&amp;m=%4D%63+1');"> MC 1</a>/Jul/2003 
--><div class="mt1"> Gènesi 
</div><div class="ms"> Els orígens (1-11) 
</div><div class="s"> La creació 
</div><span class="c">1</span> 
<div class="p"> 
<span class="v">1&nbsp;</span>Al principi, Déu va crear el cel i la terra. 
<span class="v">2&nbsp;</span>La terra era caòtica i desolada, les tenebres cobrien la superfície de l'oceà, i l'Esperit de Déu planava sobre les aigües. 
</div><div class="p"> 
<span class="v">3&nbsp;</span>Déu digué: 
</div><div class="p"> --Que existeixi la llum. 
</div><div class="p"> I la llum va existir. 
<span class="v">4&nbsp;</span>Déu veié que la llum era bona, i separà la llum de les tenebres. 
<span class="v">5&nbsp;</span>Déu va donar a la llum el nom de dia, i a les tenebres, el de nit. 
</div><div class="p"> Hi hagué un vespre i un matí, i fou el primer dia. 
</div><div class="p"> 
<span class="v">6&nbsp;</span>Déu digué: 
</div><div class="p"> --Que hi hagi un firmament enmig de les aigües, per a separar unes aigües de les altres. 
</div><div class="p"> 
<span class="v">7&nbsp;</span>I va ser així. Déu va fer la volta del firmament i va separar les aigües que hi ha a sota la volta de les que hi ha a sobre. 
<span class="v">8&nbsp;</span>Déu donà a la volta del firmament el nom de cel. 
</div><div class="p"> Hi hagué un vespre i un matí, i fou el segon dia. 
</div><div class="p"> 
<span class="v">9&nbsp;</span>Déu digué: 
</div><div class="p"> --Que les aigües de sota el cel s'apleguin en un sol indret i apareguin els continents. 
</div><div class="p"> I va ser així. 
<span class="v">10&nbsp;</span>Déu donà als continents el nom de terra, i a les aigües aplegades, el de mar. Déu veié que tot això era bo. 
</div><div class="p"> 
<span class="v">11&nbsp;</span>Déu digué: 
</div><div class="p"> --Que la terra produeixi vegetació, herbes que facin llavor i arbres de tota mena que donin fruit amb la seva llavor, per tota la terra. 
</div><div class="p"> I va ser així. 
<span class="v">12&nbsp;</span>La terra produí la vegetació, les herbes de tota mena que fan la seva llavor i els arbres de tota mena que donen fruit amb la seva llavor. Déu veié que tot això era bo. 
</div><div class="p"> 
<span class="v">13&nbsp;</span>Hi hagué un vespre i un matí, i fou el tercer dia. 
</div><div class="p"> 
<span class="v">14&nbsp;</span>Déu digué: 
</div><div class="p"> --Que hi hagi a la volta del cel uns llumeners per a separar el dia de la nit i assenyalar les festivitats, els dies i els anys, 
<span class="v">15&nbsp;</span>i que des de la volta del cel il·luminin la terra. 
</div><div class="p"> I va ser així. 
<span class="v">16&nbsp;</span>Déu va fer els dos grans llumeners: un de més gran que governés el dia i un de més petit que governés la nit; va fer també les estrelles. 
<span class="v">17&nbsp;</span>Déu els col·locà a la volta del cel perquè il·luminessin la terra, 
<span class="v">18&nbsp;</span>governessin el dia i la nit i separessin la llum de les tenebres. Déu veié que tot això era bo. 
</div><div class="p"> 
<span class="v">19&nbsp;</span>Hi hagué un vespre i un matí, i fou el quart dia. 
</div><div class="p"> 
<span class="v">20&nbsp;</span>Déu digué: 
</div><div class="p"> --Que les aigües produeixin éssers vius que s'hi moguin i animals alats que volin entre la terra i la volta del cel. 
</div><div class="p"> 
<span class="v">21&nbsp;</span>Déu va crear els grans monstres marins, els éssers vius de tota mena que es mouen dintre l'aigua, i tota mena d'animals alats. Déu veié que tot això era bo. 
<span class="v">22&nbsp;</span>Déu els beneí dient-los: 
</div><div class="p"> --Sigueu fecunds, multipliqueu-vos i ompliu les aigües dels mars, i que els animals alats es multipliquin a la terra. 
</div><div class="p"> 
<span class="v">23&nbsp;</span>Hi hagué un vespre i un matí, i fou el cinquè dia. 
</div><div class="p"> 
<span class="v">24&nbsp;</span>Déu digué: 
</div><div class="p"> --Que la terra produeixi éssers vius de tota mena: bestioles i tota mena d'animals domèstics i feréstecs. 
</div><div class="p"> I va ser així. 
<span class="v">25&nbsp;</span>Déu va fer tota mena d'animals feréstecs i domèstics i tota mena de cucs i bestioles. Déu veié que tot això era bo. 
</div><div class="p"> 
<span class="v">26&nbsp;</span>Déu digué: 
</div><div class="p"> --Fem l'home a imatge nostra, semblant a nosaltres, i que sotmeti els peixos del mar, els ocells del cel, el bestiar, i tota la terra amb les bestioles que s'hi arrosseguen. 
</div><div class="p"> 
<span class="v">27&nbsp;</span>Déu va crear l'home a imatge seva, el va crear a imatge de Déu, creà l'home i la dona. 
<span class="v">28&nbsp;</span>Déu els beneí dient-los: 
</div><div class="p"> --Sigueu fecunds i multipliqueu-vos, ompliu la terra i domineu-la; sotmeteu els peixos del mar, els ocells del cel i totes les bestioles que s'arrosseguen per terra. 
</div><div class="p"> 
<span class="v">29&nbsp;</span>Déu digué encara: 
</div><div class="p"> --Mireu, us dono totes les herbes que fan llavor arreu de la terra i tots els arbres que donen fruit amb la seva llavor, perquè siguin el vostre aliment. 
<span class="v">30&nbsp;</span>A tots els animals de la terra, a tots els ocells del cel i a totes les bestioles que s'arrosseguen, a tots els éssers vius de la terra, els dono l'herba verda per aliment. 
</div><div class="p"> I va ser així. 
</div><div class="p"> 
<span class="v">31&nbsp;</span>Déu veié que tot el que havia fet era molt bo. 
</div><div class="p"> Hi hagué un vespre i un matí, i fou el sisè dia. 
</div></td>
</tr>
</tbody></table>
`;

export default function PregariaDia3() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Gn 1,1-31)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Em poso a les teves mans
      </Typography>
      <Typography variant="body1" gutterBottom>
        Pare, em poso a les teves mans.
        <br />
        Fes de mi el que vulguis.
        <br />
        Sigui el que sigui, et dono les gràcies.
        <br />
        Estic disposat a tot.
        <br />
        Ho accepto tot,
        <br />
        sempre que la teva voluntat
        <br />
        es compleixi en mi
        <br />
        i en totes les teves criatures.
        <br />
        <br />
        No desitjo altra cosa, Déu meu.
        <br />
        Poso la meva ànima a les teves mans,
        <br />
        te la dono, Déu meu,
        <br />
        amb tot l'amor del meu cor,
        <br />
        perquè t'estimo
        <br />
        i m’és una necessitat d’amor 
        <br />
        donar-me,
        <br />
        posar-me a les teves mans
        <br />
        sense reserves,
        <br />
        amb una confiança infinita,
        <br />
        perquè tu ets el meu Pare.
        <br />
        <br />
        Charles de Foucauld
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Si fos net de cor descobriria...
      </Typography>
      <Typography variant="body1" gutterBottom>
        Que tots som obra de Déu, portem alguna cosa de bona al cor.
        <br />
        Que tots valem la pena, i ens queda alguna cosa de la imatge de Déu.
        <br />
        Que a tothom cal donar-li una altra oportunitat.
        <br />
        <br />
        Que tots som dignes d’amor, justícia, llibertat, perdó.
        <br />
        Que tots som dignes de compassió, respecte i drets.
        <br />
        Que totes les criatures són les meves germanes.
        <br />
        Que la creació és obra meravellosa de Déu.
        <br />
        <br />
        Que no hi ha raó per aixecar barreres, tancar fronteres.
        <br />
        Que no hi ha raó per cap tipus de discriminació.
        <br />
        Que no hi ha raó per al fanatisme ni per no dialogar amb algú.
        <br />
        Que no hi ha raó per maleir, jutjar i condemnar ningú.
        <br />
        Que no hi ha raó per matar, ni per al racisme.
        <br />
        <br />
        Que tots els ancians tenen un cabal de saviesa, i els joves, d’ideals.
        <br />
        Que els adolescents tenen un cabal de plans, i els infants, d’amor.
        <br />
        Que les dones tenen un cabal de fortalesa, i els malalts, de paciència.
        <br />
        Que els pobres tenen un cabal de riquesa,
        <br />
        i els discapacitats, de capacitats.
        <br />
        <br />
        Que hi ha raó per estendre ponts, donar a tothom la pau, treballar per
        la pau,
        <br />
        estimar i defensar la creació.
        <br />
        Que hi ha raó per ser germans i seguir sent amics.
        <br />
        Que hi ha raó per somriure a tothom.
        <br />
        Que hi ha raó per desitjar un bon dia a tothom, donar la mà a tothom,
        <br />
        intentar de nou fer-ho tot millor.
        <br />
        <br />
        Que hi ha raó per seguir vivint, per viure en comunitat.
        <br />
        Que hi ha raó per estar atent al que diuen els altres.
        <br />
        Que hi ha raó per servir, estimar, sofrir.
        <br />
        Que hi ha raó per a moltes coses més.
        <br />
        <br />
        Rezando voy
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Del catecisme de l’Església Catòlica
      </Typography>
      <Typography variant="body1" gutterBottom>
        356: «De totes les criatures visibles, només l’home és capaç de conèixer
        i d’estimar el seu Creador. ... És l’única criatura sobre la terra que
        Déu ha volgut per ella mateixa.»
        <br />
        <br />
        357: «Sent creat a imatge de Déu, l’home té la dignitat d’una persona;
        no és només quelcom, sinó algú. Pot conèixer-se a si mateix, donar-se
        lliurement i entrar en comunió amb les altres persones.»
        <br />
        <br />
        358: Déu crea l'home perquè el conegui, l'estimi i retorni al seu amor.
        <br />
        <br />
        369: «L’home i la dona són creats, és a dir, volguts per Déu, en una
        igualtat perfecta en tant que persones humanes. ... En el seu "ser home"
        i "ser dona" reflecteixen la saviesa i la bondat del Creador.»
        <br />
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Caminaré
      </Typography>
      <Typography variant="body1" gutterBottom>
        Caminaré sempre en la teva presència
        <br />
        pel camí de la vida.
        <br />
        Et lliuro, Senyor, la meva vida,
        <br />
        fes-la fecunda.
        <br />
        Et lliuro la meva voluntat,
        <br />
        fes-la idèntica a la teva.
        <br />
        Caminaré amb els peus descalços,
        <br />
        amb l’única joia
        <br />
        de saber que ets el meu tresor.
        <br />
        Pren les meves mans, fes-les acollidores.
        <br />
        Pren el meu cor, fes-lo ardent.
        <br />
        Pren els meus peus, fes-los incansables.
        <br />
        Pren els meus ulls, fes-los transparents.
        <br />
        Pren les meves hores grises, fes-les novetat.
        <br />
        Fes-te company inseparable
        <br />
        de les meves caigudes i tribulacions.
        <br />
        I ensenya’m a gaudir en el camí
        <br />
        de les petites coses que em regales,
        <br />
        sabent sempre anar més enllà
        <br />
        sense quedar-me a les cunetes dels camins.
        <br />
        Pren els meus cansaments, fes-los teus.
        <br />
        Pren les meves dreceres, fes-les el teu camí.
        <br />
        Pren les meves mentides, fes-les veritat.
        <br />
        Pren les meves morts, fes-les vida.
        <br />
        Pren la meva pobresa, fes-la la teva riquesa.
        <br />
        Pren la meva obediència, fes-la el teu goig.
        <br />
        Pren el meu no-res, fes-ne allò que vulguis.
        <br />
        Pren la meva família, fes-la teva.
        <br />
        Pren els meus pecats,
        <br />
        pren les meves faltes d’amor,
        <br />
        les meves eternes omissions,
        <br />
        les meves permanents desil·lusions,
        <br />
        les meves hores d’amargors.
        <br />
        Camina, Senyor, amb mi;
        <br />
        acosta’t a les meves petjades.
        <br />
        Fes-me nou en la donació,
        <br />
        alegria en l’entrega,
        <br />
        joia desbordant en donar la vida,
        <br />
        en gastar-se en el teu servei.
        <br />
        Amén.
        <br />
        <br />
        Rezando voy
      </Typography>
    </div>
  );
}
