import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './main/HomePage';
import Cheers from './main/Cheers';
import CakePage from './main/CakePage';
import Message from './main/Message';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cheers" element={<Cheers />} />
        <Route path="/cake" element={<CakePage />} />
        <Route path="/msg" element={<Message />} />

       
      </Routes>
    </Router>
  );
}

export default App;
