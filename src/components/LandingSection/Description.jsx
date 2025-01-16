import React from 'react';

const Description = () => {
  return (
    <div className="space-y-4 sm:space-y-6 text-gray-300 animate-fadeIn max-w-xl" 
      style={{ animationDelay: '0.2s' }}>
      <p className="text-base sm:text-lg leading-relaxed">
        Welcome to the World Stem & Robotics Olympiad (WSRO), India's premier Robotics Education 
        company and a global leader in organizing robotics and STEM competitions.
      </p>
      <p className="text-base sm:text-lg leading-relaxed">
        In collaboration with HRF, Ahmedabad, WSRO spearheads international competitions, Robotics, 
        and STEM education initiatives, empowering the next generation of innovators.
      </p>
      <div className="flex flex-wrap gap-6 text-lg sm:text-xl font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-secondary">25000+</span>
          <span>Students</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">500+</span>
          <span>Schools</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-secondary">100+</span>
          <span>Cities</span>
        </div>
      </div>
    </div>
  );
};

export default Description;