import * as React from "react";
import ReactPlayer from "react-player/lazy";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Typography } from "@mui/material";

const media = [
  { label: "Sel·lecciona un media", url: "" },
  {
    label: "«Al salir al camino», Rezando voy",
    url: "https://rezando.es/public/rezandovoy/oraciones/2559/o.mp3",
  },
  {
    label: "«2x01 Objetivo: la felicidad», por Marian Rojas",
    url: "https://www.youtube.com/watch?v=F0zT5MNkq9g",
  },
];
export default function Media() {
  const [url, setUrl] = React.useState(() => media[0]);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Podcasts / vídeos / altres:
      </Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <NativeSelect
            inputProps={{
              name: "media",
              id: "uncontrolled-native",
            }}
            onChange={(e) => setUrl(e.target.value)}
          >
            {media.map((med) => (
              <option value={med.url}>{med.label}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>

      <ReactPlayer
        style={{ marginTop: "30px" }}
        width="80vw"
        height="calc(2 * (80vw) /3)"
        controls
        url={url}
      />
    </div>
  );
}
