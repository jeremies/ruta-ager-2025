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
<div class="s"> Jesús i Zaqueu 
</div><span class="c">19</span> 
<div class="p"> 
<span class="v">1&nbsp;</span>Jesús va entrar a Jericó i travessava la ciutat. 
<span class="v">2&nbsp;</span>Hi havia un home que es deia Zaqueu, cap de publicans. Era un home ric. 
<span class="v">3&nbsp;</span>Zaqueu buscava de veure qui era Jesús, però la gentada li ho impedia, perquè era petit d'estatura. 
<span class="v">4&nbsp;</span>Llavors s'avançà corrent i es va enfilar dalt d'un sicòmor per poder veure Jesús, que havia de passar per allí. 
<span class="v">5&nbsp;</span>Quan Jesús va arribar en aquell indret, alçà els ulls i li digué: 
</div><div class="p"> --Zaqueu, baixa de pressa, que avui m'haig d'hostatjar a casa teva. 
</div><div class="p"> 
<span class="v">6&nbsp;</span>Ell baixà de pressa i el va acollir amb alegria. 
<span class="v">7&nbsp;</span>Tots els qui ho van veure murmuraven contra Jesús i deien: 
</div><div class="p"> --Ha anat a allotjar-se a casa d'un pecador! 
</div><div class="p"> 
<span class="v">8&nbsp;</span>Però Zaqueu, dret davant el Senyor, li digué: 
</div><div class="p"> --Senyor, dono als pobres la meitat dels meus béns, i als qui he exigit més diners del compte, els en restitueixo quatre vegades més. 
</div><div class="p"> 
<span class="v">9&nbsp;</span>Jesús li digué: 
</div><div class="p"> --Avui ha entrat la salvació en aquesta casa; perquè també aquest home és fill d'Abraham. 
<span class="v">10&nbsp;</span>El Fill de l'home ha vingut a buscar i salvar allò que s'havia perdut. 
</div></td>
</tr>
<tr><td><br>
</tr>
</tbody></table>
`;

export default function PregariaDia3() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Lectura (Lc 19,1-10)
        </AccordionSummary>
        <AccordionDetails>
          <div dangerouslySetInnerHTML={{ __html: evangeli }}></div>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Vocació
      </Typography>
      <Typography variant="body1" gutterBottom>
        Prendre la meva vida per a que la converteixis en pa. Prendre la meva
        vida per a donar-te-la. Prendre la meva vida per a repetir el teu gest i
        posar-me als peus de la Humanitat. Prendre la meva vida per a
        retornar-te allò que vas sembrar en mi. Em parteixo per a no tancar-me i
        aïllar-me. Em parteixo i em buido, i així poder ésser. Em parteixo per a
        celebrar en memòria teva. Em parteixo per a que no es faci la meva
        voluntat. Em parteixo per a desplegar-me en la teva abundància. Em
        parteixo en els sentits nous que mai he conegut. Em parteixo en els
        altres i em descobreixo cada cop més encès. Em parteixo sense retenir i
        sense especular. Em parteixo en aquesta terra on mana llet i mel. Camino
        cap a Jerusalem i a prop de l’altra riba.
        <br />
        <br />
        «Vocación», per Marcos Alemán. Cf. Rezando voy.
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Vocació de guarir
      </Typography>
      <Typography variant="body1" gutterBottom>
        Només en Tu trobo el meu descans.
        <br />
        Tu ets, Senyor,
        <br />
        l’oli i l’ ungüent de les meves ferides,
        <br />
        l’arbre que em dona l’ombra,
        <br />
        l’aigua fresca en la meva sequedat,
        <br />
        ets la mà que m’aixeca i em sosté,
        <br />
        les arrels on comencen a créixer les flors,
        <br />
        les ales que em fan volar lliurement.
        <br />
        El món camina malalt i amb el cap baix.
        <br />
        Odi, injustícia, pobres i violència <br />
        són els seus principals mals.
        <br />
        Segueix cridant a homes i a dones
        <br />
        que tinguin per vocació guarir:
        <br />
        guarir tristeses, guarir històries,
        <br />
        guarir famílies, guarir l’Església,
        <br />
        guarir ferides, guarir la terra.
        <br />
        A Tu aixeco els meus ulls,
        <br />
        estimat Metge de l’ànima.
        <br />
        En tu espero i poso tota la meva confiança. <br />
        <br />
        Fermín Negre
        <br />
      </Typography>
      <Typography sx={{ marginTop: 3 }} variant="h5" gutterBottom>
        Existe y resuena
      </Typography>
      <Typography variant="body1" gutterBottom>
        Existe desde el principio
        <br />
        y resuena hasta en los abismos.
        <br />
        Comienza con un balbuceo
        <br />
        y tiene tanta fuerza, que grita.
        <br />
        Jamás hueca
        <br />
        y cuando se pronuncia es danza, fiesta.
        <br />
        Sin el Espíritu es letra muerta.
        <br />
        Si se escucha y se pone en práctica,
        <br />
        bienaventuranza viviente
        <br />
        en los gestos,
        <br />
        en la vida, en las calles.
        <br />
        Es profecía, caricia, pasión,
        <br />
        dolor y resurrección.
        <br />
        Llevarla es pura vocación,
        <br />
        anunciarla es mandato, mandato de amor.
        <br />
        Saborearla se vuelve vital.
        <br />
        Es de todos, por eso, de Dios.
        <br />
        Dime, Palabra hecha carne:
        <br />
        en mi vida, ¿qué palabra tuya soy?
        <br />
        <br />
        Malvi Baldellou. Cf. Rezando voy
        <br />
      </Typography>
    </div>
  );
}
