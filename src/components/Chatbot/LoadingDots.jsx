import React from 'react';
import { motion } from 'framer-motion';

const LoadingDots = () => {
  return (
    <div className="flex space-x-2 p-4 bg-gray-100 rounded-2xl rounded-tl-none max-w-[80%]">
      {[1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: dot * 0.2
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;