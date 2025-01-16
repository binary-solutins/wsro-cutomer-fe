import React from 'react';

const CardIcon = ({ Icon }) => {
  return (
    <div className="
      relative
      w-16 h-16 mb-6
      flex items-center justify-center
      bg-gradient-to-br from-[#485db5]/10 to-[#ef5b4f]/10
      rounded-lg
      overflow-hidden
      group-hover:scale-110 transition-transform duration-500
    ">
      <Icon className="
        w-8 h-8
        text-[#485db5]
        group-hover:text-[#ef5b4f]
        transition-colors duration-300
      "/>
      <div className="
        absolute inset-0
        bg-gradient-to-br from-[#485db5]/20 to-[#ef5b4f]/20
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "/>
    </div>
  );
};

export default CardIcon;