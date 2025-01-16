import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, isBot }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[80%] p-4 rounded-2xl ${
          isBot
            ? 'bg-gray-100 rounded-tl-none'
            : 'bg-primary text-white rounded-tr-none'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;