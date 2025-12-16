import { Search, Atom, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AtomicOrbit from './AtomicOrbit';
import FormulaResult from './FormulaResult';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const popularTopics = [
    'Kinetic Energy',
    'Newton\'s Second Law',
    'Wave Equation',
    'Gravitational Force',
    'Ohm\'s Law'
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a query",
        description: "Type a physics topic or formula you want to learn about.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('physics-formula', {
        body: { query: searchQuery }
      });

      if (error) throw error;

      if (data?.result) {
        setResult(data.result);
      } else if (data?.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section id="search" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Atom className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Physics Formula Engine</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">FIZZY</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Search any physics topic and instantly get formulas, explanations, and real-world applications!
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
                    onKeyPress={handleKeyPress}
                    placeholder="e.g. kinetic energy, F=ma, wavelength..."
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg py-3"
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  variant="fizzy" 
                  size="lg" 
                  onClick={handleSearch}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Search'
                  )}
                </Button>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="text-muted-foreground text-sm">Try:</span>
              {popularTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setSearchQuery(topic);
                    setResult(null);
                  }}
                  className="px-3 py-1.5 rounded-full bg-muted/30 text-muted-foreground text-sm hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/30"
                  disabled={isLoading}
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

        {/* Results Section */}
        {(result || isLoading) && (
          <div className="mt-12">
            <FormulaResult result={result} isLoading={isLoading} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
