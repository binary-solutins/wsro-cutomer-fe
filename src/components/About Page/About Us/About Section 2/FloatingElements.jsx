import React from 'react';

const FloatingElements = () => {
  const elements = [
    { color: 'bg-primary/30', size: 'w-12 h-12' },
    { color: 'bg-secondary/30', size: 'w-10 h-10' },
    { color: 'bg-primary/20', size: 'w-8 h-8' },
    { color: 'bg-secondary/20', size: 'w-14 h-14' },
    { color: 'bg-primary/25', size: 'w-16 h-16' },
  ];

  return (
    <>
      {elements.map((element, i) => (
        <div
          key={i}
          className={`absolute ${element.size} ${element.color} rounded-full blur-xl z-30
            animate-float`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`
          }}
        />
      ))}
    </>
  );
};

export default FloatingElements;