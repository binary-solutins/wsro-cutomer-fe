import React from 'react';

const CardContent = ({ title, content }) => {
  return (
    <>
      <h3 className="
        text-2xl font-bold mb-4
        bg-gradient-to-r from-[#485db5] to-[#ef5b4f]
        bg-clip-text text-transparent
        group-hover:from-[#ef5b4f] group-hover:to-[#485db5]
        transition-all duration-300
      ">
        {title}
      </h3>

      <p className="
        text-gray-600
        group-hover:text-gray-800
        transition-colors duration-300
        leading-relaxed
      ">
        {content}
      </p>
    </>
  );
};

export default CardContent;