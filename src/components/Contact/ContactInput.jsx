import React from 'react';

const ContactInput = ({ 
  type = 'text', 
  name,
  value,
  onChange,
  placeholder, 
  rows, 
  required = true,
  error
}) => {
  const baseClasses = `w-full px-4 py-3 rounded-lg bg-white/80 border-2 
    ${error ? 'border-red-500' : 'border-primary/20'} 
    text-gray-700 placeholder-gray-500 
    focus:border-secondary focus:ring-2 focus:ring-secondary/30 
    transition-all duration-300
    hover:border-primary/40 shadow-sm hover:shadow-md
    ${type === 'textarea' ? 'resize-none' : ''}`;

  const commonProps = {
    name,
    value,
    onChange,
    placeholder,
    required,
    className: baseClasses,
    'aria-invalid': error ? 'true' : 'false'
  };

  return type === 'textarea' ? (
    <textarea
      {...commonProps}
      rows={rows}
    />
  ) : (
    <input
      {...commonProps}
      type={type}
    />
  );
};

export default ContactInput;