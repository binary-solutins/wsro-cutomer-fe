import React from 'react';
import CircuitLines from './Background/CircuitLines';
import GeometricShapes from './Background/GeometricShapes';
import GlowingOrbs from './Background/GlowingOrbs';
import AnimatedGrid from './Background/AnimatedGrid';

const SponsorBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      
      <div className="absolute inset-0 opacity-30">
        <CircuitLines />
      </div>

      <GeometricShapes />
      <GlowingOrbs />
      <AnimatedGrid />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
    </>
  );
};

export default SponsorBackground;