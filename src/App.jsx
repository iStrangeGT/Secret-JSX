import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Error from "./pages/Error404";
import Growtopia from "./pages/Growtopia";
import Testimoni from "./pages/Testimoni";
import Packet28GB from "./deskripsi/Packet28GB";
import Packet24GB from "./deskripsi/Packet24GB";
import Packet14GB from "./deskripsi/Packet14GB";
import Packet18GB from "./deskripsi/Packet18GB";
import Packet116GB from "./deskripsi/Packet116GB";
import Indo9GB from "./deskripsi/Indo9GB";
import Indo17GB from "./deskripsi/Indo17GB";
import Indo31GB from "./deskripsi/Indo31GB";
import Indo61GB from "./deskripsi/Indo61GB";
import Feedback from "./pages/Feedback";
import Payment from "./pages/Payment";
import ReadyUP8GB from "./deskripsi/ReadyUP8GB";
import ReadyUP16GB from "./deskripsi/ReadyUP16GB";
import CPPCore from "./deskripsi/CPPCore";
import CPPSource from "./deskripsi/CPPSource";


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
        <Route path="/packet2-8GB" element={<Packet28GB />} />
        <Route path="/packet2-4GB" element={<Packet24GB />} />
        <Route path="/packet1-4GB" element={<Packet14GB />} />
        <Route path="/packet1-8GB" element={<Packet18GB />} />
        <Route path="/packet1-16GB" element={<Packet116GB />} />
        <Route path="/indo-9GB" element={<Indo9GB />} />
        <Route path="/indo-17GB" element={<Indo17GB />} />
        <Route path="/indo-31GB" element={<Indo31GB />} />
        <Route path="/indo-61GB" element={<Indo61GB />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/readyup-8GB" element={<ReadyUP8GB />} />
        <Route path="/readyup-16GB" element={<ReadyUP16GB />} />
        <Route path="/cpp-core" element={<CPPCore />} />
        <Route path="/cpp-source" element={<CPPSource />} />
        
      </Routes>
    </div>
  );
};

export default App;