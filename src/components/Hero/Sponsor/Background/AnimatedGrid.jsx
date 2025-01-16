import React from 'react';

const AnimatedGrid = () => {
  return (
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
  );
};

export default AnimatedGrid;