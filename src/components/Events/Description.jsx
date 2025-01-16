import React from 'react';

const Description = ({content}) => {
  return (
    <div className="space-y-4 sm:space-y-6 text-gray-300 animate-fadeIn " 
      style={{ animationDelay: '0.2s' }}>
     
      <p className="text-base sm:text-lg leading-relaxed">
      {content}
      </p>
     
      
    
    </div>
  );
};

export default Description;