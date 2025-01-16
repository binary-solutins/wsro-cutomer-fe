import React from 'react';

const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            background: `radial-gradient(circle at center, ${i % 2 ? 'rgba(72, 93, 181, 0.3)' : 'rgba(239, 91, 79, 0.3)'} 0%, transparent 70%)`,
            animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${-Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default GlowingOrbs;