import React from 'react';

const FooterLink = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-secondary transition-colors duration-300 
        relative group"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary 
          group-hover:w-full transition-all duration-300" />
      </span>
    </a>
  );
};

export default FooterLink;