import "./index.css";
import Header from "./components/Header/Header";
// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Sobre from "./pages/Sobre";
// import Contato from "./pages/Contato";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import HowToUse from "./components/HowToUse/HowToUse";
import Outstanding from "./components/Outstanding/Outstanding";
import WorkerSection from "./components/WorkerSection/WorkerSection";
import Fluxo from "./components/Fluxo/Fluxo";
import PayInfo from "./components/PayInfo/PayInfo";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowToUse />
      <Outstanding />
      <WorkerSection />
      <Fluxo />
      <PayInfo />
    </div>
  );
}

export default App;
