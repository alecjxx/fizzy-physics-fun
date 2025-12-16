import { Bot, Music, Gamepad, Palette, Dumbbell, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const interests = [
  { icon: Music, label: 'Music', color: 'text-accent' },
  { icon: Gamepad, label: 'Gaming', color: 'text-secondary' },
  { icon: Palette, label: 'Art', color: 'text-accent' },
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
              <div className="w-64 h-72 rounded-3xl bg-gradient-to-b from-fizzy-deep-blue to-card border-2 border-primary/30 flex flex-col items-center justify-center glass-card">
                {/* Antenna */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-14 bg-primary/60 rounded-full" />
                  <div className="w-8 h-8 rounded-full bg-primary absolute -top-3 left-1/2 -translate-x-1/2 animate-glow-pulse" />
                </div>
                
                {/* Robot Face */}
                <div className="w-36 h-28 rounded-2xl bg-card/80 border border-primary/20 flex flex-col items-center justify-center mb-4 gap-4">
                  <div className="flex gap-8">
                    <div className="w-8 h-8 rounded-full bg-primary animate-pulse-sphere" />
                    <div className="w-8 h-8 rounded-full bg-primary animate-pulse-sphere" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
                
                {/* Mouth */}
                <div className="w-20 h-4 rounded-full bg-secondary/70" />
                
                {/* Body decoration */}
                <div className="flex gap-3 mt-4">
                  <div className="w-4 h-4 rounded-full bg-accent/60" />
                  <div className="w-4 h-4 rounded-full bg-secondary/60" />
                  <div className="w-4 h-4 rounded-full bg-primary/60" />
                </div>
              </div>
              
              {/* Floating Spheres */}
              <div className="absolute -top-4 -right-10 w-10 h-10 rounded-full bg-secondary fizzy-glow-orange animate-float" />
              <div className="absolute bottom-10 -left-8 w-8 h-8 rounded-full bg-accent fizzy-glow-pink animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 -right-6 w-4 h-4 rounded-full bg-foreground animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent" />
              </div>
              <span className="text-accent font-display font-semibold text-lg">Meet Fizzy AI</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Physics through <span className="gradient-text">Your Eyes</span>
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
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/20 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-foreground group-hover:text-primary transition-colors">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button variant="fizzyPink" size="lg" className="gap-2">
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
