import React from "react";
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

function App() {
  return (
    <>
      <Router>
        <Paper
          sx={{
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          <AppBar />
          <Box sx={{ padding: 2 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Pregaria />} />
              <Route path="/musica" element={<Musica />} />
              <Route path="/media" element={<Media />} />
              <Route path="/ruta" element={<Ruta />} />
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
