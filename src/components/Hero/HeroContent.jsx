import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, Trophy, Bot } from 'lucide-react';

const HeroContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#485db5] to-[#ef5b4f]"
      >
        WSRO INDIA
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 relative inline-block"
      >
        <span className="text-[#485db5]">World</span>{" "}
        <span className="text-[#ef5b4f]">STEM &</span>{" "}
        <span className="text-[#485db5]">Robotics</span>{" "}
        <span className="text-[#ef5b4f]">Olympiad</span>
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] transform origin-left animate-expandWidth" />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
      >
        {[
          { icon: Bot, title: "Advanced Robotics", desc: "State-of-the-art robotics challenges" },
          { icon: Cpu, title: "STEM Innovation", desc: "Cutting-edge technology integration" },
          { icon: Trophy, title: "Global Competition", desc: "International recognition & rewards" },
          { icon: Rocket, title: "Future Skills", desc: "Next-gen technical expertise" }
        ].map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="backdrop-blur-sm bg-white/60 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#485db5]/20"
          >
            <div className="flex flex-col items-center text-center">
              <Icon className="w-8 h-8 mb-2 text-[#ef5b4f]" />
              <h3 className="text-sm font-semibold text-[#485db5] mb-1">{title}</h3>
              <p className="text-xs text-gray-600">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-gray-700 leading-relaxed backdrop-blur-sm bg-white/60 p-6 rounded-xl shadow-lg"
      >
        Join India's premier robotics competition platform where innovation meets excellence. 
        Experience cutting-edge challenges, world-class mentorship, and the future of STEM education.
      </motion.p>
    </motion.div>
  );
};

export default HeroContent;