import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PWABadge from "./PWABadge.jsx";
import "./App.css";
import TabNavigation from "./TabNavigation.jsx";
import AppBar from "./AppBar.jsx";
import { Box, Paper, Toolbar } from "@mui/material";
import Pregaria from "./Pregaria.jsx";
import Musica from "./Musica.jsx";
import Media from "./Media.jsx";
import Ruta from "./Ruta.jsx";

const DAY = "day";

function App() {
  const [day, setDay] = useState(() => {
    const d = window.localStorage.getItem(DAY);
    return d ?? 1;
  });

  const setDayWithLocalStorage = (d) => {
    setDay(d);
    window.localStorage.setItem(DAY, d);
  };
  return (
    <>
      <Router>
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
            </Routes>
          </Box>
          <TabNavigation />
        </Paper>
      </Router>
      <PWABadge />
    </>
  );
}

export default App;
