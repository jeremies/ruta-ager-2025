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
<div class="s"> Paràbola del fill pròdig 
</div><div class="p"> 
</div><div class="p"> --Un home tenia dos fills. 
<span class="v">12&nbsp;</span>Un dia, el més jove digué al pare: 
</div><div class="p"> »--Pare, dóna'm la part de l'herència que em toca. 
</div><div class="p"> »Ell els va repartir els béns. 
<span class="v">13&nbsp;</span>Al cap d'uns quants dies, el més jove va vendre's tot el que tenia i se'n va anar amb els diners en un país llunyà. 
</div><div class="p"> »Un cop allí, dilapidà la seva fortuna portant una vida dissoluta. 
<span class="v">14&nbsp;</span>Quan s'ho hagué malgastat tot, vingué una gran fam en aquell país i començà a passar necessitat. 
<span class="v">15&nbsp;</span>Llavors es va llogar a un propietari d'aquell país, que l'envià als seus camps a pasturar porcs. 
<span class="v">16&nbsp;</span>Tenia ganes d'atipar-se de les garrofes que menjaven els porcs, però ningú no li'n donava. 
<span class="v">17&nbsp;</span>Llavors reflexionà i es digué: "Quants jornalers del meu pare tenen pa de sobres i jo aquí m'estic morint de fam! 
<span class="v">18&nbsp;</span>Aniré a trobar el meu pare i li diré: Pare, he pecat contra el cel i contra tu. 
<span class="v">19&nbsp;</span>Ja no mereixo que em diguin fill teu; tracta'm com un dels teus jornalers." 
<span class="v">20&nbsp;</span>I se n'anà a trobar el seu pare. 
</div><div class="p"> »Encara era lluny, que el seu pare el veié i es commogué, corregué a tirar-se-li al coll i el besà. 
<span class="v">21&nbsp;</span>El fill li digué: 
</div><div class="p"> »--Pare, he pecat contra el cel i contra tu. Ja no mereixo que em diguin fill teu. 
</div><div class="p"> 
<span class="v">22&nbsp;</span>»Però el pare digué als seus criats: 
</div><div class="p"> »--De pressa, porteu el vestit millor i poseu-l'hi, poseu-li també l'anell i les sandàlies, 
<span class="v">23&nbsp;</span>porteu el vedell gras i mateu-lo, mengem i celebrem-ho, 
<span class="v">24&nbsp;</span>perquè aquest fill meu era mort i ha tornat a la vida, estava perdut i l'hem retrobat. 
</div><div class="p"> »I es posaren a celebrar-ho. 
</div><div class="p"> 
<span class="v">25&nbsp;</span>»Mentrestant, el fill gran era al camp. Quan, de tornada, s'acostava a la casa, va sentir músiques i balls 
<span class="v">26&nbsp;</span>i cridà un dels criats per preguntar-li què era allò. 
<span class="v">27&nbsp;</span>Ell li digué: 
</div><div class="p"> »--El teu germà ha tornat. El teu pare l'ha retrobat en bona salut i ha fet matar el vedell gras. 
</div><div class="p"> 
<span class="v">28&nbsp;</span>»El germà gran s'indignà i no volia entrar. Llavors el seu pare va sortir i el pregava. 
<span class="v">29&nbsp;</span>Però ell li respongué: 
</div><div class="p"> »--Fa molts anys que et serveixo sense desobeir mai ni un de sol dels teus manaments, i tu encara no m'has donat un cabrit per a fer festa amb els meus amics. 
<span class="v">30&nbsp;</span>En canvi, quan ha tornat aquest fill teu després de consumir els teus béns amb prostitutes, has fet matar el vedell gras. 
</div><div class="p"> 
<span class="v">31&nbsp;</span>»El pare li contestà: 
</div><div class="p"> »--Fill, tu sempre ets amb mi, i tot el que és meu és teu. 
<span class="v">32&nbsp;</span>Però calia celebrar-ho i alegrar-se, perquè aquest germà teu era mort i ha tornat a la vida, estava perdut i l'hem retrobat. 
</div></td>
</tr>
</tbody></table>
`;

export default function PregariaDia3() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Lc 15,11-32)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Prendre’s seriosament a Déu
      </Typography>
      <Typography variant="body1" gutterBottom>
        Seràs feliç si em prens seriosament i segueixes els meus camins.
        <br />
        Perquè la teva vida serà plena, serà sòlida, tindrà sentit.
        <br />
        Menjaràs del fruit del teu treball, trobaràs l’alegria i t’anirà bé.
        <br />
        Això no significa que no tinguis problemes, però et guiaré en el camí.
        <br />
        Aquesta és la benedicció que ofereixo a aquell que prengui seriosament
        la meva crida.
        <br />
        Jo et beneiré, i veuràs el progrés dels fills i filles de Déu tots els
        dies de la teva vida.
        <br />
        <br />
        (salm 127 a la manera de Dios, Rezandovoy)
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        El Déu de tots
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ets el Déu dels fràgils, els febles, els impurs,
        <br />
        els que llencen la pedra i els que reben la pedrada.
        <br />
        Els que acullen la bona notícia i els que, <br />
        sobrats, li donen l'esquena.
        <br />
        El Déu dels creients i dels ateus <br />
        que t'ignoren encara que viuen en Tu.
        <br />
        El Déu dels qui etiqueten i els etiquetats,
        <br />
        els que classifiquen i els desclassats,
        <br />
        els fiscals, i els defensors,
        <br />
        els correctes, els incorrectes,
        <br />
        els inamovibles i els que no paren quiets.
        <br />
        El Déu dels clàssics i els transgressors.
        <br />
        El Déu dels gèlids, els tebis i els ardents.
        <br />
        El Déu dels satisfets i els descoratjats,
        <br />
        els valents i els acovardits.
        <br />
        Ets Déu de tots. <br />
        Per què no acabem d'entendre-ho?
        <br />
        <br />
        (José María R. Olaizola, SJ)
        <br />
      </Typography>
    </div>
  );
}
