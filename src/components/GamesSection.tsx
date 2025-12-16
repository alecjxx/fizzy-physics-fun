import { Gamepad2, Atom, Rocket, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const games = [
  {
    icon: Atom,
    title: 'Particle Puzzle',
    description: 'Build atoms by arranging protons, neutrons, and electrons correctly.',
    color: 'from-primary to-primary/60',
    plays: '2.3k'
  },
  {
    icon: Rocket,
    title: 'Gravity Escape',
    description: 'Navigate through space using gravitational forces to reach safety.',
    color: 'from-secondary to-secondary/60',
    plays: '1.8k'
  },
  {
    icon: Zap,
    title: 'Circuit Rush',
    description: 'Complete electrical circuits before time runs out!',
    color: 'from-accent to-accent/60',
    plays: '3.1k'
  },
  {
    icon: Target,
    title: 'Wave Rider',
    description: 'Match wave frequencies to unlock the next level.',
    color: 'from-fizzy-cyan to-fizzy-amber',
    plays: '1.5k'
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-secondary" />
            <span className="text-secondary font-display font-semibold text-lg">Mini Games</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Learn While You <span className="bubble-text">Play</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master physics concepts through fun, interactive mini-games. No boring lectures here!
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game) => (
            <div
              key={game.title}
              className="group glass-card p-6 hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <game.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{game.plays} plays</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary/10 group-hover:border-primary/50">
                    Play Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="fizzy" size="lg" className="gap-2">
            <Gamepad2 className="w-5 h-5" />
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
