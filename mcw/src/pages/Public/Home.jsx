import HeroSection from '../../../components/HeroSection/HeroSection';
import ServicesSection from '../../../components/ServicesSection/ServicesSection';
import HowToUse from '../../../components/HowToUse/HowToUse';
import Outstanding from '../../../components/Outstanding/Outstanding';
import WorkerSection from '../../../components/WorkerSection/WorkerSection';
import Fluxo from '../../../components/Fluxo/Fluxo';
import PayInfo from '../../../components/PayInfo/PayInfo';
import ScrollRevealWrapper from '../../../components/ScrollRevealWrapper/ScrollRevealWrapper';

function Home() {
  return (
    <main>
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
      
    </main>
  );
}

export default Home;