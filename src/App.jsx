import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import PWABadge from "./PWABadge.jsx";
import "./App.css";
import Paper from "./Paper.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#701147",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Paper />
        </Router>
        <PWABadge />
      </ThemeProvider>
    </>
  );
}

export default App;
