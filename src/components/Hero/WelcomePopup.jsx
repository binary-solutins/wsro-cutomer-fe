import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col font-poppins"
          >
            {/* Header / Logo section */}
            <div className="bg-[#e9ecf0] py-5 px-6 flex justify-center border-b border-gray-200">
              <img
                src="/logo.webp"
                alt="WSRO Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Inner modal body containing the notification */}
            <div className="p-6 md:p-8 bg-white flex flex-col space-y-6">
              {/* Notice Container */}
              <div className="border border-[#b9cfe3] rounded-lg overflow-hidden bg-[#f4f7fb] shadow-sm">
                {/* Notice Header */}
                <div className="bg-[#dae8f5] text-[#1c2e42] text-center font-bold text-lg md:text-xl py-3.5 border-b border-[#b9cfe3] tracking-wide uppercase">
                  IMPORTANT NOTICE
                </div>

                {/* Notice Body */}
                <div className="p-6 md:p-8 text-center text-gray-800 space-y-6 text-sm md:text-[15px] leading-relaxed">
                  <p className="font-semibold text-gray-900 text-base md:text-[17px]">
                    Due to the current situation and ongoing uncertainty, the World STEM and Robotics Olympiad in Singapore is being kept on hold until further notice.
                  </p>
                  <p className="text-gray-700">
                    We will continue to monitor the situation and share further updates once there is more clarity.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    We appreciate the understanding and cooperation of all participants, schools, partners, and stakeholders.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-[#f0f3f6] hover:bg-[#e2e8f0] text-[#4a5568] font-semibold rounded-md border border-gray-300 text-sm transition-all duration-200 hover:shadow-sm cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-[#3182ce] hover:bg-[#2b6cb0] text-white font-semibold rounded-md text-sm transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  Okay
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
