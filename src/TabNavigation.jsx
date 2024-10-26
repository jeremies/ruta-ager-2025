import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from "@mui/material";
import HikingIcon from "@mui/icons-material/Hiking";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChurchIcon from "@mui/icons-material/Church";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function TabNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    setValue(
      (() => {
        switch (path) {
          case "/":
            return 0;
          case "/musica":
            return 1;
          case "/media":
            return 2;
          case "/ruta":
            return 3;
        }
      })()
    );
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/");
    if (newValue === 1) navigate("/musica");
    if (newValue === 2) navigate("/media");
    if (newValue === 3) navigate("/ruta");
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
          <BottomNavigationAction label="Vídeos" icon={<PlayArrowIcon />} />
          <BottomNavigationAction label="Ruta" icon={<HikingIcon />} />
        </BottomNavigation>
      </Box>
    </Toolbar>
  );
}
