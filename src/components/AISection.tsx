import { Bot, Music, Gamepad, Palette, Dumbbell, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const interests = [
  { icon: Music, label: 'Music', color: 'text-accent' },
  { icon: Gamepad, label: 'Gaming', color: 'text-secondary' },
  { icon: Palette, label: 'Art', color: 'text-fizzy-coral' },
  { icon: Dumbbell, label: 'Sports', color: 'text-primary' },
  { icon: Utensils, label: 'Cooking', color: 'text-secondary' },
];

const AISection = () => {
  return (
    <section id="ai" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Robot Illustration */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              {/* Robot Body */}
              <div className="w-64 h-72 rounded-3xl bg-gradient-to-b from-primary/30 to-primary/10 border-2 border-primary/40 flex flex-col items-center justify-center animate-wobble glass-card">
                {/* Robot Face */}
                <div className="w-32 h-32 rounded-2xl bg-card border border-primary/30 flex items-center justify-center mb-4">
                  <div className="flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
                    <div className="w-6 h-6 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
                {/* Mouth */}
                <div className="w-16 h-3 rounded-full bg-secondary/60" />
                {/* Antenna */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-12 bg-primary/40 rounded-full" />
                  <div className="w-6 h-6 rounded-full bg-primary absolute -top-2 left-1/2 -translate-x-1/2 animate-pulse-glow" />
                </div>
              </div>
              {/* Floating Bubbles */}
              <div className="absolute -top-4 -right-8 w-8 h-8 rounded-full bg-secondary/30 border border-secondary/50 animate-float" />
              <div className="absolute bottom-8 -left-6 w-6 h-6 rounded-full bg-accent/30 border border-accent/50 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-primary font-display font-semibold text-lg">Meet Fizzy AI</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Physics through <span className="bubble-text">Your Eyes</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Tell Fizzy your interests, and watch physics come alive! Our AI explains complex concepts using analogies from music, gaming, cooking, sports, and more.
            </p>

            {/* Interest Chips */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Select your interests:</p>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label, color }) => (
                  <button
                    key={label}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-muted hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-foreground group-hover:text-primary transition-colors">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button variant="fizzy" size="lg" className="gap-2">
              <Bot className="w-5 h-5" />
              Start Learning with Fizzy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
