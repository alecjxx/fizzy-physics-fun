import { Search, Atom } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AtomicOrbit from './AtomicOrbit';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularTopics = [
    'Quantum Mechanics',
    'Thermodynamics',
    'Relativity',
    'Electromagnetism',
    'Wave Theory'
  ];

  return (
    <section id="search" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Atom className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Physics Search Engine</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">FIZZY</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Explore the universe of physics! Search any topic and let our AI explain it through your personal interests.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mb-6">
              <div className="glass-card p-2 flex items-center gap-2 fizzy-glow-blue">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-primary" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search physics topics..."
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg py-3"
                  />
                </div>
                <Button variant="fizzy" size="lg">
                  Search
                </Button>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {popularTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSearchQuery(topic)}
                  className="px-3 py-1.5 rounded-full bg-muted/30 text-muted-foreground text-sm hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/30"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Atomic Animation */}
          <div className="hidden lg:flex justify-center items-center relative">
            <AtomicOrbit size={320} />
            {/* Decorative spheres */}
            <div className="absolute -top-8 right-8 w-16 h-16 rounded-full bg-secondary/80 fizzy-glow-orange animate-float" />
            <div className="absolute bottom-8 -left-4 w-20 h-20 rounded-full bg-accent/80 fizzy-glow-pink animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-foreground animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
