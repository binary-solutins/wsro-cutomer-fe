import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/competitions');
  };

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-secondary/90 text-white relative overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')] 
        opacity-10 bg-cover bg-center" />
      
      {/* Animated Glowing Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent 
          animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent 
          animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent 
          animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center py-2">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm">
            <div className="flex items-center group cursor-pointer">
              <div className="relative p-2">
                <Phone className="w-4 h-4 text-white group-hover:animate-wiggle" />
                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 
                  transition-transform duration-300" />
                <span className="absolute inset-0 bg-secondary/20 rounded-full scale-0 group-hover:scale-150 
                  transition-transform duration-500 delay-100" />
              </div>
              <span className="group-hover:text-white/90 transition-all duration-300 ">
                Have any questions?
                <span className="ml-2 text-white group-hover:text-white">
                  9904463224
                </span>
              </span>
            </div>
            <div className="hidden md:flex items-center group cursor-pointer">
              <div className="relative p-2">
                <MapPin className="w-4 h-4 text-white group-hover:animate-bounce" />
                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 
                  transition-transform duration-300" />
                <span className="absolute inset-0 bg-secondary/20 rounded-full scale-0 group-hover:scale-150 
                  transition-transform duration-500 delay-100" />
              </div>
              <span className="group-hover:text-white/90 transition-all duration-300">
                Shanti Corporate House, Ahmedabad
              </span>
            </div>
          </div>
          <button 
  onClick={handleRegistrationClick} 
  className="relative overflow-hidden group px-6 py-2 rounded-full bg-white text-primary font-medium
    hover:text-white transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 
    hidden md:block">
  <span className="relative z-10">REGISTRATION</span>
  <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100
    transition-transform duration-500 origin-left" />
  <span className="absolute -inset-3 bg-white/30 rotate-12 transform translate-x-full group-hover:translate-x-[-200%] 
    transition-transform duration-1000" />
</button>

        </div>
      </div>
    </div>
  );
};

export default TopBar;