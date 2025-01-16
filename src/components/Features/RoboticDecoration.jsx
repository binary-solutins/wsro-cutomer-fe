import React from 'react';

const RoboticDecoration = () => {
  return (
    <>
      {/* Circuit Lines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{
              top: `${30 + i * 30}%`,
              left: '-100%',
              width: '200%',
              animation: `moveLeftRight ${8 + i * 4}s linear infinite`,
              animationDelay: `${-i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Corner Decorations */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            top: i < 2 ? '-1rem' : 'auto',
            bottom: i >= 2 ? '-1rem' : 'auto',
            left: i % 2 === 0 ? '-1rem' : 'auto',
            right: i % 2 === 1 ? '-1rem' : 'auto',
          }}
        >
          <div className="absolute inset-0 border-2 border-blue-500/20 rounded-lg
            transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
        </div>
      ))}

      {/* Glowing Dots */}
      <div className="absolute -right-2 top-1/2 w-1 h-1 bg-blue-500 rounded-full
        opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
      <div className="absolute -left-2 top-1/2 w-1 h-1 bg-blue-500 rounded-full
        opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-300" />
    </>
  );
};

export default RoboticDecoration;