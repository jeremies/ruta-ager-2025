import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PWABadge from "./PWABadge.jsx";
import "./App.css";
import TabNavigation from "./TabNavigation.jsx";
import AppBar from "./AppBar.jsx";
import { Box, Paper, Toolbar } from "@mui/material";
import Home from "./Home.jsx";

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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<div>about</div>} />
              <Route path="/contact" element={<div>contact</div>} />
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
