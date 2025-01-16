import React from 'react';

const Title = ({title1, title2, title3}) => {
  return (
    <>
      <p className='text-white font-medium text-md'>{title3 || '-Who We Are'}</p>
      <h1 className=" text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-clip-text text-transparent 
        bg-gradient-to-r from-primary to-secondary animate-fadeIn leading-tight  ">
        {title1} <span className="text-white">{title2}:</span>
      </h1>
    </>
  );
};

export default Title;