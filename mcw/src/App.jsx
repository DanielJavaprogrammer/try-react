import { useState } from "react";
import "./index.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import "@fontsource/poppins"; // weight padrão (400)
import "@fontsource/poppins/500.css";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <div className="bg-linear-to-r from-[#1c3263] to-[#442063] w-full h-screen">
      <Header />
      <HeroSection />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupWorker" element={<Contato />} />
      </Routes> */}
    </div>
  );
}

export default App;
