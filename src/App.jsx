import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import { Home } from './Components/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
