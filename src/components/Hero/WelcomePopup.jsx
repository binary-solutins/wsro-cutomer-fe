import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true); 

  if (!isOpen) return null; 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white md:h-[800px] rounded-lg w-full max-w-2xl mx-auto relative overflow-hidden max-h-[100vh] flex flex-col">
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
          <Link to="/competitions">
            <img
              src="/welcome.jpg"
              alt="Welcome"
              className="w-full max-h-[650px] object-cover"
            />
          </Link>
        </div>

        
        <div className="p-4 flex justify-center bg-white">
          <Link to="/competitions">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
