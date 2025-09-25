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
<div class="s"> El judici final 
</div><div class="p"> 
<span class="v">31&nbsp;</span>»Quan el Fill de l'home vindrà ple de glòria, acompanyat de tots els àngels, s'asseurà en el seu tron gloriós. 
<span class="v">32&nbsp;</span>Tots els pobles es reuniran davant seu, i ell destriarà la gent els uns dels altres, com un pastor separa les ovelles de les cabres, 
<span class="v">33&nbsp;</span>i posarà les ovelles a la seva dreta i les cabres a la seva esquerra. 
<span class="v">34&nbsp;</span>Aleshores el rei dirà als de la seva dreta: 
</div><div class="p"> »--Veniu, beneïts del meu Pare, rebeu en herència el Regne que ell us tenia preparat des de la creació del món. 
<span class="v">35&nbsp;</span>Perquè tenia fam, i em donàreu menjar; tenia set, i em donàreu beure; era foraster, i em vau acollir; 
<span class="v">36&nbsp;</span>anava despullat, i em vau vestir; estava malalt, i em vau visitar; era a la presó, i vinguéreu a veure'm. 
</div><div class="p"> 
<span class="v">37&nbsp;</span>»Llavors els justos li respondran: 
</div><div class="p"> »--Senyor, ¿quan et vam veure afamat, i et donàrem menjar; o que tenies set, i et donàrem beure? 
<span class="v">38&nbsp;</span>¿Quan et vam veure foraster, i et vam acollir; o que anaves despullat, i et vam vestir? 
<span class="v">39&nbsp;</span>¿Quan et vam veure malalt o a la presó, i vinguérem a veure't? 
</div><div class="p"> 
<span class="v">40&nbsp;</span>»El rei els respondrà: 
</div><div class="p"> »--Us ho asseguro: tot allò que fèieu a un d'aquests germans meus més petits, a mi m'ho fèieu. 
</div><div class="p"> 
<span class="v">41&nbsp;</span>»Després dirà als de la seva esquerra: 
</div><div class="p"> »--Aparteu-vos de mi, maleïts, aneu al foc etern, preparat per al diable i els seus àngels. 
<span class="v">42&nbsp;</span>Perquè tenia fam, i no em donàreu menjar; tenia set, i no em donàreu beure; 
<span class="v">43&nbsp;</span>era foraster, i no em vau acollir; anava despullat, i no em vau vestir; estava malalt o a la presó, i no em vau visitar. 
</div><div class="p"> 
<span class="v">44&nbsp;</span>»Llavors ells li respondran: 
</div><div class="p"> »--Senyor, ¿quan et vam veure afamat o assedegat, foraster o despullat, malalt o a la presó, i no et vam assistir? 
</div><div class="p"> 
<span class="v">45&nbsp;</span>»Ell els contestarà: 
</div><div class="p"> »--Us ho asseguro: tot allò que deixàveu de fer a un d'aquests més petits, m'ho negàveu a mi. 
</div><div class="p"> 
<span class="v">46&nbsp;</span>»I aquests aniran al càstig etern, mentre que els justos aniran a la vida eterna. 
</div></td>
</tr>

</tbody></table>
`;

export default function PregariaDia2() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Mt 25,31-46)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        A
      </Typography>
      <Typography variant="body1" gutterBottom>
        Déu s’acosta a nosaltres
        <br />
        en cada ésser del cosmos,
        <br />
        que és per a nosaltres
        <br />
        llar, aliment,
        <br />
        tasca i horitzó.
        <br />
        <br />
        Comunió còsmica
        <br />
        que ens uneix a Déu
        <br />
        en la vida que ens omple
        <br />
        a través dels sentits,
        <br />
        do i presència seva
        <br />
        en nosaltres sense mesura!
        <br />
        <br />
        Déu lliure i únic
        <br />
        en l’últim racó
        <br />
        de callada intimitat,
        <br />
        on cada persona
        <br />
        es fa consistent.
        <br />
        <br />
        “Solo Dios basta”,
        <br />
        però un Déu
        <br />
        a qui no n’hi ha prou
        <br />
        d’anar ell sol
        <br />
        per tot l’univers.
        <br />
        <br />
        Benjamín González Buelta sj. Rezando voy.
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        B
      </Typography>
      <Typography variant="body1" gutterBottom>
        No pots mirar indiferent
        <br />
        aquest caos que m’habita
        <br />
        I, al seu temps, l’aniràs ordenant.
        <br />
        Es fa la llum i començo a poder mirar
        <br />
        i anomenar allò que m’ocorre.
        <br />
        Però no vols que desaparegui la nit,
        <br />
        i em regales la lluna i els estels.
        <br />
        I en el caos obres horitzons,
        <br />
        sembres vida,
        <br />
        engendres.
        <br />
        Apostes, sempre arriscat,
        <br />
        per nosaltres
        <br />
        l’abundància de tanta vida.
        <br />
        Fes germinar, com en el cosmos,
        <br />
        tot allò que vulguis en nosaltres.
        <br />
        Aquí estem, desitjant que tanta Vida
        <br />
        ens habiti.
        <br />
        <br />
        Matu Hardoy. Rezando voy.
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        C
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sense l’Esperit Sant, Déu és lluny, Crist resta en el passat, l’Evangeli
        és lletra morta, l’Església una simple organització, l’autoritat seria
        dominació, la missió una propaganda, el culte una evocació i l’acció
        cristiana una moral d’esclaus. Però amb la presència de l’Esperit, el
        cosmos s’eleva i gemega en el part del Regne, Crist ressuscitat és
        present, l’Evangeli és potència de vida, l’Església significa la comunió
        trinitària, l’autoritat és un servei d’alliberament, la missió és un
        Pentecostès, la litúrgia és memòria i anticipació, l’acció humana és
        divinitzada.
        <br />
        <br />
        Ignasi IV Hazin, patriarca de l’església greco-ortodoxa d’Antioquia.
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        D
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sempre em van dir que eres a dalt,
        <br />
        que eres poderós, omniscient i jutge.
        <br />
        que legions d’àngels et servien,
        <br />
        i que tenies corona, mantell, anell de rei.
        <br />
        En el teu nom i amb la bíblia, des de segles,
        <br />
        es proclamen reis, papes, presidents.
        <br />
        Se’ls asseu en trons, se’ls reverencia
        <br />
        com a ambaixadors i portaveus teus.
        <br />
        Com imaginar-te, doncs, sense atributs?
        <br />
        Com pensar el món sense jerarquies?
        <br />
        Si tu ets un Déu sense poder, agenollat,
        <br />
        tot trontolla: la fe, la política, l’economia.
        <br />
        Però així vas voler ser, un Déu a l’inrevés.
        <br />
        Sense rang sagrat, sense encens, sense lletanies,
        <br />
        deixant-te a les meves mans com a pa de cada dia,
        <br />
        els teus peus darrere els meus, fins a defallir.
        <br />
        Ja no et vull voler, sense voler d’aquesta manera,
        <br />
        sempre en direcció contrària al càlcul i al rèdit,
        <br />
        servint sense requisits, fins que el cor s’obri
        <br />
        a una mort amb sentit, a una vida sense barreres.
        <br />
        <br />
        Seve Lázaro sj. Rezando voy.
        <br />
      </Typography>
    </div>
  );
}
