import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Notes from "./page/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
}

export default App;
