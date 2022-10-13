import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Home, Blog, Resume, Projects, Contact, Thanks } from "./Components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
