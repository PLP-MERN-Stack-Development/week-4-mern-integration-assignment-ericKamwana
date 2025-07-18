import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import Home from './pages/Home'; // ← we'll create this later

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page Placeholder</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
