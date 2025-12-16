import { Gamepad2, Bot, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/30 animate-glow-pulse" />
            <Atom className="w-6 h-6 text-primary relative z-10" />
          </div>
          <span className="text-2xl font-display font-bold text-foreground">FIZZY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#search" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Search
          </a>
          <a href="#games" className="text-muted-foreground hover:text-secondary transition-colors font-medium flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" />
            Mini Games
          </a>
          <a href="#ai" className="text-muted-foreground hover:text-accent transition-colors font-medium flex items-center gap-2">
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
