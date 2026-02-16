import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronRight, Lock, FileText } from 'lucide-react';

const InternationalCompetitionCard = ({ competition, onItalyClick }) => {
  const handleClick = () => {
    if (competition.id === 'italy-2025') {
      onItalyClick();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-60 overflow-hidden group">
        <img 
          src={competition.image}
          alt={competition.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Trophy className="w-4 h-4 text-[#485db5]" />
          <span className="text-sm font-medium text-gray-800">International</span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {competition.isLocked ? (
            <Lock className="w-4 h-4 text-red-500" />
          ) : (
            <FileText className="w-4 h-4 text-green-500" />
          )}
          <span className="text-sm font-medium text-gray-800">
            {competition.isLocked ? 'Locked' : 'Available'}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{competition.name}</h3>
          <p className="text-gray-600 text-sm">{competition.description}</p>
        </div>

        {competition.isLocked ? (
          <div className="w-full bg-red-500 text-white py-3 px-6 rounded-xl
            font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
            <Lock className="w-5 h-5" />
            <span>Registration Locked</span>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#485db5] to-[#6478d3] text-white py-3 px-6 rounded-xl
              font-semibold shadow-lg shadow-[#485db5]/20 hover:shadow-xl hover:shadow-[#485db5]/30
              transition-all duration-300 flex items-center justify-center gap-2 group"
            onClick={handleClick}
          >
            <span>View Details</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default InternationalCompetitionCard; 