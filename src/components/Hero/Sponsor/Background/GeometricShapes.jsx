import React from 'react';

const GeometricShapes = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 md:w-12 md:h-12 rounded-lg border backdrop-blur-sm"
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
  );
};

export default GeometricShapes;