import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroContent = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/competitions');
  };

  const handleLearnMore = () => {
    navigate('/about-us');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 "
    >
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#485db5] to-[#ef5b4f]"
      >
        WSRO INDIA
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 relative inline-block"
      >
        <span className="text-[#485db5] text-xl sm:text-lg lg:text-3xl">World</span> <span className="text-[#ef5b4f] text-xl sm:text-lg lg:text-3xl">STEM </span>
       
        <span className="text-[#485db5] text-xl sm:text-lg lg:text-3xl">Robotics</span> <span className="text-[#ef5b4f] text-lg sm:text-xl lg:text-3xl">Olympiad</span>
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] transform origin-left animate-expandWidth" />
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl text-gray-700 leading-relaxed backdrop-blur-sm bg-white/60 p-3 sm:p-4 rounded-lg shadow-lg"
      >
        WSRO is one of India's leading Robotics Education company and International robotics & stem competition organizers, which is also into robotics manufacturing, selling & research.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 sm:space-x-4"
      >
        <button 
          onClick={handleGetStarted} 
          className="w-full sm:w-auto bg-[#485db5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
            text-base sm:text-lg font-semibold hover:bg-[#5b6fc7] transition-all duration-300 
            transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#485db5]/30 
            relative overflow-hidden group"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] 
            transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </button>
        
        <button 
          onClick={handleLearnMore} 
          className="w-full sm:w-auto border-2 border-[#ef5b4f] text-[#ef5b4f] 
            px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold
            hover:bg-[#ef5b4f] hover:text-white transition-all duration-300 
            transform hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm 
            relative overflow-hidden group"
        >
          <span className="relative z-10">Learn More</span>
          <div className="absolute inset-0 bg-[#ef5b4f] transform scale-x-0 
            group-hover:scale-x-100 transition-transform origin-left -z-0" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;