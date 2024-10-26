import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PWABadge from "./PWABadge.jsx";
import "./App.css";
import Paper from "./Paper.jsx";

function App() {
  return (
    <>
      <Router>
        <Paper />
      </Router>
      <PWABadge />
    </>
  );
}

export default App;
