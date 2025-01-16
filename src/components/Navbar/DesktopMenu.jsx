import React from 'react';
import { useNavigate } from 'react-router-dom';

const DesktopMenu = ({ navLinks }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <button
          key={link.href}
          onClick={() => navigate(link.href)}
          className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary
            group transition-all duration-300 ease-out rounded-lg"
        >
          <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
            {link.label}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0
            group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="absolute inset-0 bg-gray-50 rounded-lg transform scale-95 opacity-0
            group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
        </button>
      ))}
    </div>
  );
};

export default DesktopMenu;