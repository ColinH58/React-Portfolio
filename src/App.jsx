import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import { Home, NavBar, Blog, Resume, Projects, Contact } from './Components/index'

function App() {
  return (
    <div>
      <Routes>
        <NavBar />
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
