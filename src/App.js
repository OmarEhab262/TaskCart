import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Two from "./pages/Two";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Two" element={<Two />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
