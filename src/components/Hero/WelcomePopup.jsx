import React, { useState } from 'react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true); 

  if (!isOpen) return null; 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white md:h-[600px] rounded-lg w-full max-w-lg mx-auto relative overflow-hidden max-h-[100vh] flex flex-col">
        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

      
        <div className="w-full">
          <img
            src="/wsro_int.jpeg"
            alt="Site Closed"
            className="w-full max-h-[580px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
