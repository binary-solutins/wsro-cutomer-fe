import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/competitions');
  };

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-secondary/90 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')] opacity-10 bg-cover bg-center" />
      
      {/* Animated Lines */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row justify-between items-center py-3 gap-3 md:gap-6">
        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-sm text-center sm:text-left">
          <div className="flex items-center gap-2 group">
            <Phone className="w-4 h-4 text-white group-hover:animate-wiggle" />
            <span className="group-hover:text-white/90 transition-all duration-300">
              Have any questions? <span className="ml-1 text-white group-hover:text-white">9904463224 / 8128728882</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 group">
            <MapPin className="w-4 h-4 text-white group-hover:animate-bounce" />
            <span className="group-hover:text-white/90 transition-all duration-300">
              Shanti Corporate House, Ahmedabad
            </span>
          </div>
        </div>

        {/* Registration Button */}
        <button 
          onClick={handleRegistrationClick} 
          className="relative px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full bg-white text-primary font-medium hover:text-white transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 overflow-hidden">
          <span className="relative z-10">REGISTRATION</span>
          <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
