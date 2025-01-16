import React from 'react';
import { motion } from 'framer-motion';

const RoboticArm = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full h-full"
      >
        {/* Base */}
        <div className="absolute bottom-0 right-12 w-20 h-20 bg-gradient-to-t from-blue-600 to-blue-400
          rounded-lg shadow-lg shadow-blue-500/50 animate-pulse" />

        {/* Arm segments */}
        <div className="absolute bottom-20 right-16 w-8 h-40 bg-gradient-to-r from-blue-500 to-blue-400
          rounded-lg origin-bottom animate-armSegment1" />
        
        <div className="absolute bottom-56 right-12 w-8 h-32 bg-gradient-to-r from-blue-400 to-blue-300
          rounded-lg origin-bottom animate-armSegment2" />

        {/* Joints */}
        {[20, 56].map((bottom, i) => (
          <div
            key={i}
            className="absolute right-14 w-12 h-12 rounded-full bg-blue-600 border-4 border-blue-300
              shadow-lg shadow-blue-500/50 animate-pulse"
            style={{ bottom: `${bottom}px` }}
          />
        ))}

        {/* Claw */}
        <div className="absolute top-20 right-10 w-16 h-16 animate-claw">
          <div className="absolute top-0 left-0 w-2 h-8 bg-blue-400 rounded-full origin-bottom
            rotate-45 animate-clawPart" />
          <div className="absolute top-0 right-0 w-2 h-8 bg-blue-400 rounded-full origin-bottom
            -rotate-45 animate-clawPart" />
        </div>
      </motion.div>
    </div>
  );
};

export default RoboticArm;