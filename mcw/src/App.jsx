import "./index.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import HowToUse from "./components/HowToUse/HowToUse";
import Outstanding from "./components/Outstanding/Outstanding";
import WorkerSection from "./components/WorkerSection/WorkerSection";
import Fluxo from "./components/Fluxo/Fluxo";
import PayInfo from "./components/PayInfo/PayInfo";
import FooterContact from "./components/FooterContact/FooterContact";
import ScrollRevealWrapper from "./components/ScrollRevealWrapper/ScrollRevealWrapper";

function App() {
  return (
    <div>
      <Header />

      <ScrollRevealWrapper>
        <HeroSection />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <ServicesSection />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <HowToUse />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <Outstanding />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <WorkerSection />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <Fluxo />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <PayInfo />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <FooterContact />
      </ScrollRevealWrapper>
    </div>
  );
}

export default App;
