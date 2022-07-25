import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import {
  Home,
  Blog,
  Resume,
  Projects,
} from "./Components/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
