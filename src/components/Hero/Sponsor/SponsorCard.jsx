import React from 'react';
import { motion } from 'framer-motion';

const SponsorCard = ({ url, name, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      className="flex-shrink-0 group perspective"
    >
      <div className="relative w-64 h-32 transform-gpu transition-all duration-500 
        group-hover:rotate-y-12 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50
          rounded-xl overflow-hidden border border-[#485db5]/20 backdrop-blur-sm
          shadow-[0_0_15px_rgba(72,93,181,0.5)] group-hover:shadow-[0_0_30px_rgba(239,91,79,0.8)]
          transition-all duration-500">
          
          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#485db5] rounded-full blur-[2px]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#ef5b4f] rounded-full blur-[2px]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ef5b4f] rounded-full blur-[2px]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#485db5] rounded-full blur-[2px]" />
          
          <div className="relative h-full p-4 flex flex-col justify-between">
            <div className="h-20 flex items-center justify-center">
              <img
                src={url}
                alt={name}
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorCard;