import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PWABadge from "./PWABadge.jsx";
import "./App.css";
import TabNavigation from "./TabNavigation.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>contact</div>} />
        </Routes>
        <TabNavigation />
      </Router>
      <PWABadge />
    </>
  );
}

export default App;
