import React from 'react';

const Background = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-blue-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.09]" // Increased opacity for better visibility
        style={{
          backgroundImage: `linear-gradient(#3b82f6 2px, transparent 2px), // Increased line thickness
            linear-gradient(90deg, #3b82f6 2px, transparent 2px)`, // Increased line thickness
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-500/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${-Math.random() * 10}s`
          }}
        />
      ))}
    </>
  );
};

export default Background;