import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

//IMPORTING COMPONENTS
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
