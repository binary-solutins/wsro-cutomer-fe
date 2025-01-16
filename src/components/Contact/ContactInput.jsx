import React from 'react';

const ContactInput = ({ type = 'text', placeholder, rows, required = true }) => {
  const baseClasses = `w-full px-4 py-3 rounded-lg bg-white/80 border-2 border-primary/20 
    text-gray-700 placeholder-gray-500 focus:border-secondary 
    focus:ring-2 focus:ring-secondary/30 transition-all duration-300
    hover:border-primary/40 shadow-sm hover:shadow-md
    ${type === 'textarea' ? 'resize-none' : ''}`;

  return type === 'textarea' ? (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={baseClasses}
      required={required}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className={baseClasses}
      required={required}
    />
  );
};

export default ContactInput;