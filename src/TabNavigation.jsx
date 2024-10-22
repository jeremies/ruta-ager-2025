import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from "@mui/material";
import HikingIcon from "@mui/icons-material/Hiking";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChurchIcon from "@mui/icons-material/Church";

export default function TabNavigation() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/");
    if (newValue === 1) navigate("/musica");
    if (newValue === 2) navigate("/contact");
  };

  return (
    <Toolbar>
      <Box>
        <BottomNavigation
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Pregària" icon={<ChurchIcon />} />
          <BottomNavigationAction label="Música" icon={<MusicNoteIcon />} />
          <BottomNavigationAction label="Ruta" icon={<HikingIcon />} />
        </BottomNavigation>
      </Box>
    </Toolbar>
  );
}
