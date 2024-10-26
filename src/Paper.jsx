import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import TabNavigation from "./TabNavigation.jsx";
import AppBar from "./AppBar.jsx";
import { Box, Paper, Toolbar } from "@mui/material";
import Pregaria from "./Pregaria.jsx";
import Musica from "./Musica.jsx";
import { useLocation } from "react-router-dom";
import Media from "./Media.jsx";
import Ruta from "./Ruta.jsx";
import Canconer from "./Canconer.jsx";

const DAY = "day";

function PaperMain() {
  const location = useLocation();
  const [day, setDay] = useState(() => {
    const d = window.localStorage.getItem(DAY);
    return d ?? 1;
  });

  const setDayWithLocalStorage = (d) => {
    setDay(d);
    window.localStorage.setItem(DAY, d);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza al inicio de la ventana
  }, [day, location]);
  return (
    <>
      <Paper
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <AppBar day={day} setDay={setDayWithLocalStorage} />
        <Box sx={{ padding: 2 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Pregaria day={day} />} />
            <Route path="/musica" element={<Musica day={day} />} />
            <Route path="/media" element={<Media day={day} />} />
            <Route path="/ruta" element={<Ruta day={day} />} />
            <Route path="/canconer" element={<Canconer day={day} />} />
          </Routes>
        </Box>
        <TabNavigation />
      </Paper>
    </>
  );
}

export default PaperMain;
