import "./index.css";
import ScrollRevealWapper from "./components/ScrollRevealWrapper/ScrollRevealWrapper"
import Header from "./components/Header/Header"
import FooterContact from "./components/FooterContact/FooterContact"
import HeroSection from "./components/heroSection/HeroSection"
import Fluxo from "./components/Fluxo/Fluxo"
import HowToUse from "./components/HowToUse/HowToUse"
import Outstanding from "./components/Outstanding/Outstanding"
import PayInfo from "./components/PayInfo/PayInfo"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import WorkerSection from "./components/WorkerSection/WorkerSection"
function App() {
return (
  <div>
    <ScrollRevealWapper>
      <Header />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <HeroSection />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <ServicesSection />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <HowToUse />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <Outstanding />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <PayInfo />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <WorkerSection />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <Fluxo />
    </ScrollRevealWapper>

    <ScrollRevealWapper>
      <FooterContact />
    </ScrollRevealWapper>
  </div>
)

}

export default App;
