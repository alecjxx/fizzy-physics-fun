import GeometricBackground from '@/components/GeometricBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AISection from '@/components/AISection';
import GamesSection from '@/components/GamesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GeometricBackground />
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
