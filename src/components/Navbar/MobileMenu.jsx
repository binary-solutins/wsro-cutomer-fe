import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  const navigate = useNavigate();

  return (
    <>
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-out z-50`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-primary/10 rounded-full transition-colors
                hover:rotate-90 transform duration-300"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 pt-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => {
                  navigate(link.href);
                  onClose();
                }}
                className={`block px-4 py-4 text-gray-700 hover:bg-primary/10 hover:text-primary
                  rounded-lg transition-all duration-300 ease-out
                  transform hover:translate-x-2 relative group
                  ${isOpen ? 'animate-fadeSlideIn' : ''}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: isOpen ? 1 : 0
                }}
              >
                <span className="font-medium">{link.label}</span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-secondary
                  group-hover:h-1/2 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Bottom Registration Button */}
          <div className="py-4 px-4">
            <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium
              hover:bg-primary/90 transform hover:scale-105 active:scale-95
              transition-all duration-300 shadow-md hover:shadow-lg">
              REGISTRATION
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out z-40
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
    </>
  );
};

export default MobileMenu;