
import './App.css';
// import Head from './Head.js'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Search from './Search'
import Header from './Header'
import DashBoard from './DashBoard'
import Community from './Community'
import SignUp from './SignUp'


function App() {
  return (
    
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
       
      
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/community" element={<Community />} />
        
      </Routes> 
    </Router>
  );
}

export default App;
