import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio'; // Saare sections iske andar hone chahiye
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      {/* Navbar ko Routes se bahar rakhein taaki wo har page par dikhe */}
      <Navbar /> 
      
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;