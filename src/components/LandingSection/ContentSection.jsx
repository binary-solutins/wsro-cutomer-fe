import React from 'react';
import Title from './Title';
import Description from './Description';

import { useNavigate } from 'react-router-dom';

const ContentSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 sm:space-y-10">
      <Title />
      <Description />
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => navigate('/competition')} 
          className="bg-[#485db5] text-white px-8 py-4 rounded-lg text-lg font-semibold
            hover:bg-[#5b6fc7] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
            hover:shadow-[#485db5]/30 relative overflow-hidden group"
          style={{ animationDelay: '0.4s' }}>
          <span className="relative z-10">Join Competition</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </button>
        <button 
          onClick={() => navigate('/gallery')} 
          className="border-2 border-[#ef5b4f] text-[#ef5b4f] px-8 py-4 rounded-lg text-lg font-semibold
            hover:bg-[#ef5b4f] hover:text-white transition-all duration-300 transform hover:-translate-y-1
            hover:shadow-lg backdrop-blur-sm relative overflow-hidden group"
          style={{ animationDelay: '0.6s' }}>
          <span className="relative z-10">Explore Us</span>
          <div className="absolute inset-0 bg-[#ef5b4f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-0" />
        </button>
      </div>
    </div>
  );
};

export default ContentSection