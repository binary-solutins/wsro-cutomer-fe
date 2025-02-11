import React from 'react';
import { X, ChevronRight, Notebook as Robot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  const navigate = useNavigate();

  return (
    <>
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-white via-white to-primary/5 
          shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-500 ease-out z-50`}
      >
        <div className="p-4 h-full flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')] 
            opacity-5 bg-cover bg-center" />
          
          <div className="relative">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-primary/10 rounded-full transition-all duration-300
                hover:rotate-90 transform group"
            >
              <X className="w-6 h-6 text-primary group-hover:text-secondary" />
            </button>
          </div>
          
          <div className="flex-1 pt-8 relative">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => {
                  navigate(link.href);
                  onClose();
                }}
                className="w-full group flex items-center justify-between px-4 py-4 text-gray-700 
                  hover:bg-primary/5 rounded-lg transition-all duration-300 ease-out relative
                  animate-fadeSlideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-primary transform group-hover:translate-x-1
                  transition-transform duration-300" />
                {link.label === 'COMPETITION' && (
                  <Robot className="absolute top-1 right-12 w-3 h-3 text-secondary opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 animate-float" />
                )}
              </button>
            ))}
          </div>

          <div className="py-4 px-4 relative">
            <a href='/competitions'>
            <button  className="w-full relative overflow-hidden group bg-primary text-white py-3 px-6 
              rounded-lg font-medium transform hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="relative z-10">REGISTRATION</span>
              <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-500 origin-left" />
              <span className="absolute -inset-3 bg-white/30 rotate-12 transform translate-x-full 
                group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </button>
            </a>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-out z-40
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
    </>
  );
};

export default MobileMenu;