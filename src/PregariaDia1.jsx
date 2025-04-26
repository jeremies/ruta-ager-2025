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
<div class="s"> L'aparició de Mambré 
</div><span class="c">18</span> 
<div class="p"> 
<span class="v">1&nbsp;</span>El Senyor s'aparegué a Abraham a les Alzines de Mambré. Abraham seia a l'entrada de la tenda, quan la calor del dia era més forta, 
<span class="v">2&nbsp;</span>i va veure tres homes drets a prop d'ell. Tan bon punt els veié, corregué a trobar-los des de l'entrada de la tenda, es va prosternar fins a tocar a terra 
<span class="v">3&nbsp;</span>i digué: 
</div><div class="p"> --Senyor, si m'has concedit el teu favor, et prego que no passis de llarg sense aturar-te aquí amb el teu servent. 
<span class="v">4&nbsp;</span>Permeteu que portin aigua per a rentar-vos els peus i reposeu a l'ombra d'aquest arbre. 
<span class="v">5&nbsp;</span>Entretant aniré a buscar alguna cosa per menjar, i refareu les forces abans de continuar el camí. És per això que heu passat prop del vostre servent. 
</div><div class="p"> Ells li van respondre: 
</div><div class="p"> --Fes tal com has dit. 
</div><div class="p"> 
<span class="v">6&nbsp;</span>Abraham entrà de pressa a la tenda i digué a Sara: 
</div><div class="p"> --Corre, pren tres mesures de farina blanca, pasta-la i fes-ne panets. 
</div><div class="p"> 
<span class="v">7&nbsp;</span>Després va córrer cap al ramat, trià un vedell tendre i gras i el donà al mosso perquè el preparés de seguida. 
<span class="v">8&nbsp;</span>Quan l'animal ja era a punt, va prendre mató, llet i la carn del vedell, els ho serví i es quedà dret al costat d'ells a l'ombra de l'alzina, mentre ells menjaven. 
</div><div class="p"> 
<span class="v">9&nbsp;</span>Llavors li van preguntar: 
</div><div class="p"> --On és Sara, la teva esposa? 
</div><div class="p"> Abraham va respondre: 
</div><div class="p"> --És dintre la tenda. 
</div><div class="p"> 
<span class="v">10&nbsp;</span>Un dels hostes va afegir: 
</div><div class="p"> --L'any vinent tornaré per aquest temps i Sara, la teva esposa, haurà tingut un fill. 
</div><div class="p"> Sara ho sentia des de l'entrada de la tenda, darrere d'Abraham. 
</div><div class="p"> 
<span class="v">11&nbsp;</span>Abraham i Sara ja eren vells, carregats d'anys. Sara, que ja havia passat l'edat de tenir fills, 
<span class="v">12&nbsp;</span>es posà a riure per dins tot dient-se: «¿A les meves velleses tornaré a sentir plaer, ara que el meu marit, el meu senyor, també és vell?» 
</div><div class="p"> 
<span class="v">13&nbsp;</span>El Senyor digué a Abraham: 
</div><div class="p"> --Com és que Sara ha rigut pensant que una dona tan vella no pot tenir fills? 
<span class="v">14&nbsp;</span>Hi ha res impossible per al Senyor? L'any vinent tornaré per aquest temps i Sara haurà tingut un fill. 
</div><div class="p"> 
<span class="v">15&nbsp;</span>Sara, mentint per por, va assegurar que no havia rigut, però ell va insistir: 
</div><div class="p"> --Sí que has rigut! 
</div></td>
</tr>
<tr><td><br>
</tr>
</tbody></table>
`;

export default function PregariaDia1() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Gn 18,1-15)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Tríptic familiar
      </Typography>
      <Typography variant="body1" gutterBottom>
        Soc el fill petit quan perdo els meus dies amb històries sense
        substància i sense vida. A vegades jo també marxo de casa cercant fora
        d’ella l’alegria, fins que em faig creus i m’adono que tot el que
        desitjava ho tenia a casa.
        <br />
        <br />
        A vegades, com el fill gran, romanc sense sortir a l’exterior, però el
        meu cor i la meva ment viatgen lluny i fantasiegen amb miralls de fum,
        altres vides, aparadors enganyosos. I així m’instal·lo en la queixa i en
        el ressentiment, en l’obligació del compliment sense estimació. Estic a
        casa, però tinc el cor molt lluny.
        <br />
        <br />
        Per això vinc a Tu, Déu Pare i Déu Mare, per a sentir la teva tendra
        abraçada al fill petit i al fill gran que conviuen en la meva ànima. Fes
        que, en experimentar el teu amor incondicional, les meves mans es
        converteixin en les teves perquè també jo abraci gent sola i les
        tristeses dels fills petits i grans que caminen sense rumb per la vida.
        <br />
        <br />
        Fermín Negre. Cf. Rezando voy
        <br />
        <br />
        <br />
      </Typography>
      <Typography variant="h5" gutterBottom>
        Vocació
      </Typography>
      <Typography variant="body1" gutterBottom>
        De vegades cal ser arbre i fer ombra al caminant que esta cansat. Cal
        ser aigua que alleugi la set de respostes, i foc que arrasi allò injust,
        allò indigne, allò buit. Cal ser roca que abraci els fonaments del que
        és durador, terra que aculli les possibilitats de la llavor, i oceà, on
        puguem capbussar-nos per renéixer plens de llibertat i d'esperança. Cal
        ser cançó que alleugi els buits, i silenci habitat que venci la
        xerrameca. Unes vegades cal ser llar on tornar, i altres vegades porta
        que s'obre a la tempesta. Déu és l'arbre i l'aigua, la roca, la terra i
        el mar. Déu és cant i silenci, llar que acull i porta que ens duu a
        noves històries. Però calen guies que consagrin els seus dies a buscar
        aquest tresor. Hi ha qui es dedica a sembrar, encendre, forjar, regar,
        compartir i acompanyar. Hi ha trobadors que canten amb paraules que no
        són seves, però són, també, canals d'aigua aliena que porten vida
        veritable. Hi ha mestres amb moltes preguntes i poques respostes, que
        ajuden els altres a descobrir el Misteri. Somiadors d'un bé possible que
        converteixen el seu amor en pont, per acostar germà i germà, per a unir
        l'ésser humà amb Déu. Apòstols, amb peus de fang i cor de foc. Que mai
        no ens faltin.
        <br />
        <br />
        «Vocación», per José María R. Olaizola sj. Cf. Rezando voy.
      </Typography>
    </div>
  );
}
