import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Phone className="w-4 h-4 text-white mr-2 group-hover:animate-wiggle" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 
                  bg-white/20 rounded-full scale-0 group-hover:scale-100 -z-10 transition-transform" />
              </div>
              <span className="group-hover:text-secondary transition-colors duration-300">
                9904463224 / 8128728882
              </span>
            </div>
            <div className="hidden md:flex items-center group cursor-pointer">
              <div className="relative">
                <MapPin className="w-4 h-4 text-white mr-2 group-hover:animate-bounce" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 
                  bg-white/20 rounded-full scale-0 group-hover:scale-100 -z-10 transition-transform" />
              </div>
              <span className="group-hover:text-secondary transition-colors duration-300">
                Shanti Corporate House, Ahmedabad
              </span>
            </div>
          </div>
          <button className="bg-secondary text-white px-6 py-1.5 rounded-full text-sm font-medium
            hover:bg-white hover:text-secondary transform hover:scale-105 active:scale-95
            transition-all duration-300 ease-out shadow-lg hover:shadow-xl
            relative overflow-hidden group">
            <span className="relative z-10">REGISTRATION</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100
              transition-transform origin-left duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;