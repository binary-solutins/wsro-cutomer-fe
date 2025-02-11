import React from 'react';

import FloatingElements from './FloatingElements';
import ImageOverlay from './ImageOverLay';

const ImageSection = () => {
  return (
    <div className="relative group w-full">
      {/* Animated Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary 
        rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 
        group-hover:duration-200 animate-gradient-x" />
      
      <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden 
        transform group-hover:scale-[1.02] transition-transform duration-500
        border-2 border-primary/30">
        {/* Corner Decorations */}
        {[
          'top-0 left-0 border-t-4 border-l-4',
          'top-0 right-0 border-t-4 border-r-4',
          'bottom-0 left-0 border-b-4 border-l-4',
          'bottom-0 right-0 border-b-4 border-r-4'
        ].map((position, index) => (
          <div key={index} 
            className={`absolute w-6 sm:w-8 h-6 sm:h-8 ${position}
            ${index % 2 === 0 ? 'border-primary' : 'border-secondary'}`} />
        ))}

        <ImageOverlay />
        
        <img
          src="/group.webp"
          alt="Robotics Education"
          className="w-full h-full object-cover"
        />

        <FloatingElements />
      </div>

      {/* Pulse Effect */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-secondary 
        opacity-20 blur-2xl -z-10 animate-pulse" />
    </div>
  );
};

export default ImageSection;