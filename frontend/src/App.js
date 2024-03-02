import React, { useState, useEffect } from "react";
import Home from "./Components/Home.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
