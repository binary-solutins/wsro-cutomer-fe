import React from 'react';

const Background3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated circuit patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${i % 2 ? '#485db5' : '#ef5b4f'}, transparent)`,
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: '200%',
                animation: `moveLeftRight ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${-Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 md:w-12 md:h-12 rounded-lg border backdrop-blur-sm animate-float"
            style={{
              borderColor: i % 2 ? '#485db5' : '#ef5b4f',
              backgroundColor: i % 2 ? 'rgba(72, 93, 181, 0.1)' : 'rgba(239, 91, 79, 0.1)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
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

      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#485db5 0.5px, transparent 0.5px),
            linear-gradient(90deg, #485db5 0.5px, transparent 0.5px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          animation: 'gridMove 20s linear infinite'
        }}
      />
    </div>
  );
};

export default Background3D;