import React from 'react';

const EventButton = ({ href, icon, text, className }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2.5 text-white rounded-lg 
                 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 ${className}`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default EventButton;