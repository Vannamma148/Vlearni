import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Protected Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Redirect to login if no route matches */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
