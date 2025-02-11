import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const hasShownPopup = localStorage.getItem('hasShownWelcomePopup');
    
    if (!hasShownPopup) {
      setIsOpen(true);
    
      localStorage.setItem('hasShownWelcomePopup', 'true');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-auto relative overflow-hidden max-h-[90vh]">
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

        <div className="flex flex-col h-full">
          {/* Image container */}
          <div className="w-full h-[400px] sm:h-[600px] md:h-[700px]">
            <Link to={{pathname:'/competitions'}} >
            <img
              src="/welcome.jpg"
              alt="Welcome"
              className="w-full h-full"
            />
            </Link>
          </div>

          {/* Content container */}
          {/* <div className="w-full p-6 bg-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome!</h2>
            <button 
              onClick={() => {
                // Add your register logic here
                setIsOpen(false);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto mx-auto block"
            >
              Register Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;