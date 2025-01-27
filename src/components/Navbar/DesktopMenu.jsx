import React from 'react';
import { Notebook as Robot } from 'lucide-react';

const DesktopMenu = ({ navLinks }) => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative group px-4 py-2 text-sm font-medium text-gray-700 rounded-lg
            hover:text-primary transition-all duration-300 ease-out"
        >
          <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
            {link.label}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0
            group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="absolute inset-0 bg-primary/5 rounded-lg transform scale-95 opacity-0
            group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
          {link.label === 'COMPETITION' && (
            <Robot className="absolute -top-1 -right-1 w-3 h-3 text-secondary opacity-0 group-hover:opacity-100
              transition-opacity duration-300 animate-float" />
          )}
        </a>
      ))}
    </div>
  );
};

export default DesktopMenu;