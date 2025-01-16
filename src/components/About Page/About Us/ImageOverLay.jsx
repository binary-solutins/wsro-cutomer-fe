import React from 'react';

const ImageOverlay = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 
        mix-blend-overlay z-10" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 
        transition-opacity duration-500 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23485db5' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
    </>
  );
};

export default ImageOverlay;