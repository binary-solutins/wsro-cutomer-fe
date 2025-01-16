import React from 'react';
import { motion } from 'framer-motion';

const EventSkeleton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      {/* Image Skeleton */}
      <div className="relative h-56 bg-gray-200 animate-pulse">
        {/* Badge Skeletons */}
        <div className="absolute top-4 left-4 h-7 w-24 bg-white/90 rounded-full" />
        <div className="absolute top-4 right-4 h-7 w-32 bg-white/90 rounded-full" />
      </div>

      <div className="p-6 space-y-6">
        {/* Title Skeleton */}
        <div className="h-7 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
        
        <div className="space-y-3">
          {/* Info Skeletons */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Button Skeleton */}
        <div className="h-12 bg-gray-200 rounded-xl w-full animate-pulse" />
      </div>
    </motion.div>
  );
};

export default EventSkeleton;