import * as React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Canconer() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel1">
            1.- LLOAT SIGUEU, OH SENYOR NOSTRE{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            Lloat sigueu, oh senyor nostre. <br />
            Lloat sigueu, oh senyor nostre.
            <br />
            Lloat sigueu, oh senyor nostre.
            <br />
            Lloat sigueu, oh senyor nostre.
            <br />
          </Typography>
          <Typography variant="body1" gutterBottom>
            Per totes les criatures
            <br />
            i pel sol i per la lluna,
            <br />
            pels estels i els vent suau
            <br />
            i pel foc i l’aigua fresca.
            <br />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            Lloat sigueu, oh Senyor nostre...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Per la nostra mare terra <br />
            que ens sosté i ens alimenta, <br />
            per les flors, els fruits i l’herba <br />
            i pel mar i les muntanyes. <br />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            Lloat sigueu, oh Senyor nostre...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Perquè el sentit de la vida
            <br />
            és cantar-vos i lloar-vos
            <br />
            i perquè la nostra vida
            <br />
            sigui sempre cant i dansa.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel2"> 2.- RES NO ENS PODRÀ SEPARAR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Res no ens podrà separar (3) <br />
            de l’amor de Déu. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel3"> 3.- TE SEGUIRÉ </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Te seguiré a donde me lleves <br />
            sin adelantarme sin forzar el paso <br />
            sabiamente ignorante, iré donde no sé <br />
            puesto el corazón en Ti te seguiré.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel4"> 4.- AVE MARIA </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Quantes coses a la vida,
            <br />
            que semblen omplir-ho tot,
            <br />
            i no són més que mentides
            <br />
            que s'amaguen dins el cor.
            <br />
               
            <br />
            Tu has omplert la meva vida
            <br />
            estimant-me de debò.
            <br />
            Jo voldria, Mare bona, ser com tu...
            <br />
            <br />
            En silenci escoltaves
            <br />
            la Paraula de Jesús,
            <br />
            i la feies Pa de vida
            <br />
            amb l'amor teu tan profund,
            <br />
            com llavor que cau a terra
            <br />
            i germina sense por.
            <br />
            Amb el cor ple d'alegria
            <br />
            et vull cantar:
            <br />
            <br />
            AVE MARIA, AVE MARIA
            <br />
            AVE MARIA, AVE MARIA.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel5"> 5.- EL SENYOR ÉS LA MEVA FORÇA </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            El Senyor és la meva força                <br />
            El Senyor és el meu cant                  <br />
            Ell m’ha estat la salvació                    <br />
            En Ell confio i no tinc por                   <br />
            En Ell confio i no tinc por     <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel6">
            {" "}
            6.- L’AJUDA EM VINDRÀ DEL SENYOR{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            L’ajuda em vindrà del Senyor, 
            <br />
            del Senyor, el nostre Déu, 
            <br />
            que ha fet el cel i la terra, 
            <br />
            el cel i la terra.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel7">7.- JO TINC SET DE TU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Jo tinc set de Tu
            <br />
            tinc set del teu amor,
            <br />
            Jo tinc set de Tu,
            <br />
            oh Font de llibertat.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel8"> 8.- QUEDA’T AMB NOSALTRES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Pels camins d'aquesta vida, <br />
            sense veure-ho del tot clar, <br />
            amb el pas feixuc i força capficats. <br />
            Has sortit al nostre encontre, <br />
            t'has posat a caminar i per la nostra conversa has preguntat.
            <br />
            <br />
            Ens expliques l'Escriptura <br />
            com ningú no ho ha fet mai <br />
            i et reveles en el gest de partir el pa… <br />
            Queda't amb nosaltres que el dia ja comença a declinar <br />
            queda't amb nosaltres qui camina amb tu, Jesús, mai no es perdrà.{" "}
            <br />
            <br />
            Quan arriba l'hora baixa Tu fas com el que se'n va, <br />
            però nosaltres insistim entusiasmats. <br />
            Has entrat a casa nostra, <br />
            t'has deixat acomodar i et mirem als ulls amb el cor abrusat. <br />
            <br />
            Ens expliques l'Escriptura <br />
            com ningú no ho ha fet mai
            <br />
            i et reveles en el gest de partir el pa… <br />
            Queda't amb nosaltres <br />
            que el dia ja comença a declinar <br />
            queda't amb nosaltres <br />
            qui camina amb tu, Jesús, mai no es perdrà.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel9"> 9.- TU ETS QUI ENS CRIDA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Tu ets qui ens crida i en silenci venim (2).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel10">10.- NO FIXEU ELS ULLS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            No fixeu els ulls en ningú més que en Ell (2)
            <br />
            No fixeu els ulls en ningú més (2)
            <br />
            No fixeu els ulls en ningú més que en Ell.
            <br />
            <br />
            No adoreu amics…
            <br />
            <br />
            Només Ell és el camí, la veritat (2)
            <br />
            No fixeu els ulls en ningú més (2)
            <br />
            No fixeu els ulls en ningú més que en Ell.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel11"> 11.- AMANDO HASTA EL EXTREMO </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Déjame señor
            <br />
            Mirarte bien por dentro
            <br />
            Entrar en tu corazón
            <br />
            Y dejarme seducir
            <br />
            Y que aumenten mis deseos de querer ser como tú
            <br />
            Conocerte internamente
            <br />
            Amarte y seguirte más
            <br />
            Apostar mi vida junto a ti
            <br />
            Déjame verte señor
            <br />
            <br />
            Amando hasta el extremo
            <br />
            Dejándote la piel
            <br />
            Entregando las entrañas
            <br />
            Tus entrañas de mujer
            <br />
            <br />
            En una toalla y un lebrillo
            <br />
            En un acariciar los pies
            <br />
            En un mirarnos hasta el fondo
            <br />
            Sin nada que reprochar y<br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            <br />
            Yo, el maestro y el señor
            <br />
            Ya no puedo amaros más
            <br />
            Pues como el padre me ha amado
            <br />
            Así os he amado yo
            <br />
            <br />
            Os dejo mi vida entera en este vino y este pan
            <br />
            Este pan que soy yo mismo
            <br />
            Que me parto y que me doy
            <br />
            <br />
            Mi deseo es que os améis de corazón
            <br />
            Yo también os quiero ver
            <br />
            <br />
            Amando hasta el extremo
            <br />
            Dejándoos la piel
            <br />
            Entregando las entrañas
            <br />
            Como lo hace una mujer
            <br />
            <br />
            En una toalla y un lebrillo
            <br />
            En un acariciar los pies
            <br />
            <br />
            En un miraros hasta el fondo
            <br />
            Sin nada que reprochar
            <br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            <br />
            Sí, te doy todo lo que soy
            <br />
            Para que sigas amando
            <br />
            La lucha por la justicia
            <br />
            Entra en esta intimidad
            <br />
            <br />
            Que se llena de personas y rostros que acariciar
            <br />
            Que me impulsa desde dentro a comprometerme más
            <br />
            Todos caben en tu corazón
            <br />
            Quiero seguirte señor
            <br />
            <br />
            Amando hasta el extremo
            <br />
            Dejándome la piel
            <br />
            Entregando las entrañas
            <br />
            Mis entrañas de mujer
            <br />
            <br />
            En una toalla y un lebrillo
            <br />
            En un acariciar los pies
            <br />
            En un miraros hasta el fondo
            <br />
            Sin nada que reprochar
            <br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            <br />
            Y sin nada que pedir, y con tanto para dar
            <br />
            Y sin nada que pedir, y con tanto para dar...
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel12"> 12.- MAGNIFICAT </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Magnificat, Magnificat <br />
            Magnificat anima mea Dominum (2)
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel13"> 13.- CANTA AL·LELUIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Canta al·leluia al Senyor
            <br />
            Canta al·leluia al Senyor
            <br />
            Canta al·leluia, canta al·leluia
            <br />
            Canta al·leluia al Senyor.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel14">
            {" "}
            14.- L’AMOR NO PASSARÀ MAI Canta la teva fe
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Si jo parlés mil llengües però no estimés,
            <br />
            si fos capaç de veure el que vindrà
            <br />
            si fos capaç de moure les muntanyes amb la fe...
            <br />
            no serviria de res!
            <br />
            <br />
            Si jo donés als pobres tot allò que tinc
            <br />
            o fos capaç de vendre'm per esclau,
            <br />
            si pretengués donar-t'ho tot però no t'estimés...
            <br />
            no serviria de res!
            <br />
            valdria tant com un timbal trencat,
            <br />
            un esquellot esquerdat...
            <br />
            <br />
            L'amor és pacient
            <br />
            l'amor és bondadós
            <br />
            l'amor troba el seu goig en la veritat
            <br />
            l'amor ho excusa tot i tot ho creu.
            <br />
            <br />
            L'amor no és envejós
            <br />
            l'amor no és altiu ni orgullós
            <br />
            l'amor no és egoista ni groller
            <br />
            l'amor no passarà mai.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel15"> 15.- ESTO QUE SOY, ESO TE DOY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
             A veces me pregunto ¿porqué yo?
            <br />
            y sólo me respondes porque quiero.
            <br />
            Es un misterio grande que nos llames
            <br />
            así tal como somos a tu encuentro
            <br />
            <br />
            Entonces redescubro una verdad,
            <br />
            mi vida, nuestra vida es un tesoro.
            <br />
            Se trata entonces sólo de ofrecerte
            <br />
            con todo nuestro amor, esto que somos
            <br />
            <br />
            <strong>
              ¿QUÉ TE DARE, QUE TE DAREMOS?,      
              <br />
              SI TODO, TODO ES TU REGALO.      
              <br />
              TE OFRECERE, TE OFRECEREMOS,
              <br />
              ESTO QUE SOMOS... ESTO QUE SOY,
              <br />
              ESO TE DOY
            </strong>
            <br />
            <br />
            Esto que soy, esto es lo que te doy,
            <br />
            esto que somos, es lo que te damos
            <br />
            Tu no desprecias nuestra vida humilde,
            <br />
            se trata de poner todo en tus manos.
            <br />
            <br />
            Aquí van mis trabajos y mi fe,
            <br />
            mis mates, mis bajones y mis  sueños.
            <br />
            Y todas las personas que me diste,
            <br />
            desde mi corazón te las ofrezco.
            <br />
            <br />
            <strong>Estribillo</strong>
            <br />
            Vi tanta gente un domingo de sol,
            <br />
            me conmovió el latir de tantas vidas
            <br />
            Y adiviné tu abrazo gigantesco,
            <br />
            y sé que sus historias recibías.
            <br />
            <br />
            Por eso tu altar luce vino y pan,
            <br />
            son signo y homenaje de la vida.
            <br />
            Misterio de ofrecerte y recibirnos,
            <br />
            humanidad que Cristo diviniza.
            <br />
            <br />
            <strong>Estribillo</strong>
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel15"> 16.- CRISTIANOS DE ORILLA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Cristianos de orilla sin profundidad, por miedo a adentrarse en el
            mar no llegan nunca a embarcar, a embarcar. <br />
            <br />
            Cristianos de orilla sin profundidad, por miedo a adentrarse en el
            mar se quedan en normas que otros dan, y dejan de buscar y respirar.
            <br />
            <br />
            Cristianos de orilla sin profundidad, por miedo a adentrarse en el
            mar se estancan y no avanzan más. Que se te escapa la vida dando
            vueltas por la orilla, que se te escapa la vida.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel15"> 17.- EN MI DEBILIDAD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            En mi debilidad me haces fuerte,<br></br>
            En mi debilidad me haces fuerte.<br></br>
            Sólo en tu amor, me haces fuerte,<br></br>
            Solo en tu vida, me haces fuerte.<br></br>
            En mi debilidad, te haces fuerte en mi.<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography id="panel15"> 18.- TU MODO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1" gutterBottom>
            Jesús al contemplar en tu vida
            <br />
            El modo que tú tienes de tratar a los demás
            <br />
            Me dejo interpelar por tu ternura
            <br />
            Tu forma de amar nos mueve a amar
            <br />
            Tu trato es como el agua cristalina
            <br />
            Que limpia y acompaña el caminar
            <br />
            <br />
            Jesús enséñame tu modo
            <br />
            De hacer sentir al otro más humano
            <br />
            Que tus pasos sean mis pasos
            <br />
            Mi modo de proceder
            <br />
            <br />
            Jesús hazme sentir con tus sentimientos
            <br />
            Mirar con tu mirada
            <br />
            Comprometer mi acción
            <br />
            Donarme hasta la muerte por el reino
            <br />
            Defender la vida hasta la cruz
            <br />
            Amar a cada uno como amigo
            <br />
            Y en la oscuridad llevar tu luz
            <br />
            <br />
            Jesús enséñame tu modo
            <br />
            De hacer sentir al otro más humano
            <br />
            Que tus pasos sean mis pasos
            <br />
            Mi modo de proceder
            <br />
            <br />
            Jesús yo quiero ser compasivo con quien sufre
            <br />
            Buscando la justicia, compartiendo nuestra fe
            <br />
            Que encuentre una auténtica armonía
            <br />
            Entre lo que creo y quiero ser
            <br />
            Mis ojos sean fuente de alegría
            <br />
            Que abrace tu manera de ser
            <br />
            <br />
            Jesús enséñame tu modo
            <br />
            De hacer sentir al otro más humano
            <br />
            Que tus pasos sean mis pasos
            <br />
            Mi modo de proceder
            <br />
            <br />
            Quisiera conocerte, Jesús tal como eres
            <br />
            Tu imagen sobre mi es lo que transformará
            <br />
            Mi corazón en uno como el tuyo
            <br />
            Que sale de sí mismo para dar
            <br />
            Capaz de amar al padre y los hermanos
            <br />
            Que va sirviendo al reino en libertad
            <br />
            <br />
            Jesús enséñame tu modo
            <br />
            De hacer sentir al otro más humano
            <br />
            Que tus pasos sean mis pasos
            <br />
            Mi modo de proceder
            <br />
            Enséñame tu modo Señor
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
