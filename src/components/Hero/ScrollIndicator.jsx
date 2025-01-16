import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-8 h-12 rounded-full border-2 border-white/80 p-1 backdrop-blur-sm">
        <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-scrollDown" />
      </div>
    </div>
  );
};

export default ScrollIndicator;