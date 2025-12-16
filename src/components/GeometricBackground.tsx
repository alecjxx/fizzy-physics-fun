const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large decorative spheres */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
      
      {/* Floating spheres */}
      <div className="absolute top-20 right-1/4 w-6 h-6 rounded-full bg-secondary animate-float fizzy-glow-orange" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 left-1/5 w-4 h-4 rounded-full bg-accent animate-float fizzy-glow-pink" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 right-1/3 w-5 h-5 rounded-full bg-primary animate-float fizzy-glow-blue" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-3 h-3 rounded-full bg-foreground animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-20 w-4 h-4 rounded-full bg-fizzy-light-blue animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Orbit rings decoration */}
      <div className="absolute top-1/4 left-10 w-32 h-32">
        <div className="w-full h-full border border-primary/20 rounded-full animate-spin-slow" />
        <div className="absolute inset-4 border border-secondary/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>
      
      <div className="absolute bottom-1/4 right-10 w-24 h-24">
        <div className="w-full h-full border border-accent/20 rounded-full animate-spin-slow" />
        <div className="absolute inset-3 border border-primary/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>
      
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default GeometricBackground;
