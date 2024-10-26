import * as React from "react";
import ReactPlayer from "react-player/lazy";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Typography } from "@mui/material";

export default function Player({ title, media }) {
  const [url, setUrl] = React.useState(media[0].url);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
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
