import React from 'react';

const CircuitLines = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
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
  );
};

export default CircuitLines;