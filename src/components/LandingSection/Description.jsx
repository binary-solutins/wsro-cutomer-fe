import React from 'react';

const Description = () => {
  return (
    <div className="space-y-4 sm:space-y-6 text-gray-300 animate-fadeIn max-w-xl" 
      style={{ animationDelay: '0.2s' }}>
      <p className="text-base sm:text-lg leading-relaxed text-justify">
      Welcome to the World STEM & Robotics Olympiad (WSRO), India’s top robotics education platform and a global leader in organizing robotics and STEM competitions. We are dedicated to helping young minds develop the skills and creativity needed to become the innovators of the future.
      </p>
      <p className="text-base sm:text-lg leading-relaxed text-justify">
      In partnership with the Happiness Reserves Foundation (HRF) in Ahmedabad, WSRO hosts international competitions and provides hands-on STEM and robotics programs. Our mission is to inspire students, nurture their potential, and prepare them to take on the challenges of tomorrow with confidence and innovation.
      </p>
      <div className="flex flex-wrap gap-6 text-lg sm:text-xl font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-secondary">50000+</span>
          <span>Students</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">300+</span>
          <span>Schools</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-secondary">5000+</span>
          <span>Teams</span>
        </div>
      </div>
    </div>
  );
};

export default Description;