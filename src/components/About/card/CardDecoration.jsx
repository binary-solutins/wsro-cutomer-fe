import React from 'react';

const CardDecorations = () => {
  return (
    <>
      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#485db5]/30 blur group-hover:bg-[#485db5]/40 transition-colors duration-300"/>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-[#ef5b4f]/30 blur group-hover:bg-[#ef5b4f]/40 transition-colors duration-300"/>
    </>
  );
};

export default CardDecorations;