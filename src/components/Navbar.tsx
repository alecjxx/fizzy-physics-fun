import { Sparkles, Gamepad2, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="text-2xl font-display font-bold bubble-text">Fizzy</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#search" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Search
          </a>
          <a href="#games" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" />
            Mini Games
          </a>
          <a href="#ai" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
            <Bot className="w-4 h-4" />
            Fizzy AI
          </a>
        </div>

        <Button variant="fizzy" size="lg" className="hidden md:flex">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
