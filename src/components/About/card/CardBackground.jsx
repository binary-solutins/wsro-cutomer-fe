import React from 'react';

const CardBackground = () => {
  return (
    <>
      {/* Ambient Glow */}
      <div className="
        absolute inset-0 -z-10
        bg-gradient-to-br from-[#485db5]/20 via-[#ef5b4f]/20 to-white/20
        rounded-xl blur-xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      "/>

      {/* Circuit Pattern Background */}
      <div className="
        absolute inset-0 
        bg-[url('/circuit-pattern.svg')]
        opacity-10 mix-blend-overlay
        rounded-xl
      "/>
    </>
  );
};

export default CardBackground;