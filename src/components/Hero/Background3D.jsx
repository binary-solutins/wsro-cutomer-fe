import React from 'react';

const Background3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* Animated circuit grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(72, 93, 181, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(72, 93, 181, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-slide 20s linear infinite',
        }} />
      </div>

      {/* Circuit paths */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`circuit-${i}`}
            className="circuit-line"
            style={{
              top: `${(i + 1) * 12}%`,
              left: '-20%',
              width: '140%',
              color: i % 2 ? '#485db5' : '#ef5b4f',
              animationDelay: `${-i * 1.5}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Hexagonal grid elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute hexagon"
            style={{
              width: `${40 + Math.random() * 40}px`,
              height: `${40 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, 
                ${i % 2 ? '#485db5' : '#ef5b4f'}20, 
                ${i % 2 ? '#485db5' : '#ef5b4f'}40
              )`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-lg"
            style={{
              width: `${30 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center,
                ${i % 2 ? '#485db5' : '#ef5b4f'}40 0%,
                transparent 70%
              )`,
              animation: `pulse-glow ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Tech nodes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 ? '#485db5' : '#ef5b4f',
              boxShadow: `0 0 10px ${i % 2 ? '#485db5' : '#ef5b4f'}`,
              opacity: 0.4,
              animation: `pulse-glow ${2 + Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#485db5" stopOpacity="0" />
            <stop offset="50%" stopColor="#485db5" stopOpacity="1" />
            <stop offset="100%" stopColor="#485db5" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          return (
            <line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
    </div>
  );
};

export default Background3D;