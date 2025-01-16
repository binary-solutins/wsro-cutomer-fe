import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-auto rounded-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {image.caption && (
            <p className="text-white text-center mt-4 text-lg">{image.caption}</p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ImageModal;