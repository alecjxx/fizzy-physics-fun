import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-fizz">
              <Sparkles className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-primary/60 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          <span className="bubble-text">Fizzy</span>
          <span className="text-foreground"> Physics</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Pop the bubble on physics! Search any topic and let our AI explain it through your interests.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="glass-card p-2 flex items-center gap-2 fizzy-glow">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-primary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any physics topic..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg py-3"
              />
            </div>
            <Button variant="fizzy" size="lg" className="px-8">
              Search
            </Button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="text-muted-foreground text-sm">Popular:</span>
          {popularTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSearchQuery(topic)}
              className="px-4 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/30"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
