import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Error from "./pages/Error404";
import Growtopia from "./pages/Growtopia";
import Testimoni from "./pages/Testimoni";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/error" element={<Error />} />
        <Route path="/growtopia" element={<Growtopia />} />
        <Route path="/testimoni" element={<Testimoni />} />
      </Routes>
    </div>
  );
};

export default App;