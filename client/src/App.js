import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

//IMPORTING PAGES
import CMS from './pages/CMS/CMS';

//IMPORTING COMPONENTS
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Routes>
          <Route exact path='/' element={<CMS />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
