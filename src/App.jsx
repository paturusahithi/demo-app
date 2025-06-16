import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import AdminDashboard from './components/admin-dashboard';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={
            <Register />
        } />
        <Route path="/home" element={
            <Home />
        } />
        <Route path="/admin" element={
            <AdminDashboard />
        } />
        <Route path="*" element={<div className="p-4">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
