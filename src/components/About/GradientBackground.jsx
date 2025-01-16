import React from 'react';

const GradientBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-80"/>
      </div>
    </>
  );
};

export default GradientBackground;