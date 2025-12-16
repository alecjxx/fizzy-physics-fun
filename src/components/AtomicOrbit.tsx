interface AtomicOrbitProps {
  size?: number;
  className?: string;
}

const AtomicOrbit = ({ size = 300, className = '' }: AtomicOrbitProps) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Center nucleus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary fizzy-glow-blue" />
      
      {/* Orbit ring 1 */}
      <div 
        className="absolute inset-0 border-2 border-foreground/20 rounded-full animate-orbit"
        style={{ transform: 'rotateX(60deg)' }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary fizzy-glow-orange animate-pulse-sphere" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground" />
      </div>
      
      {/* Orbit ring 2 */}
      <div 
        className="absolute inset-4 border-2 border-foreground/20 rounded-full animate-orbit-reverse"
        style={{ transform: 'rotateX(60deg) rotateZ(60deg)' }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent fizzy-glow-pink animate-pulse-sphere" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground" />
      </div>
      
      {/* Orbit ring 3 */}
      <div 
        className="absolute inset-8 border-2 border-foreground/20 rounded-full animate-orbit"
        style={{ transform: 'rotateX(60deg) rotateZ(-60deg)' }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-fizzy-light-blue" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground" />
      </div>
    </div>
  );
};

export default AtomicOrbit;
