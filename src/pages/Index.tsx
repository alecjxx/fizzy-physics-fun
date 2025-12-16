import Bubbles from '@/components/Bubbles';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AISection from '@/components/AISection';
import GamesSection from '@/components/GamesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Bubbles />
      <Navbar />
      <main>
        <HeroSection />
        <GamesSection />
        <AISection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
