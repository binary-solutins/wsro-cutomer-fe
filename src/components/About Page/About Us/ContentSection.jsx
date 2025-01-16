import React from 'react';
import Description from './Description';
import Title from './Title';

const ContentSection = () => {
  return (
    <div className="space-y-8 sm:space-y-10">
     <Title />
      <Description />
    </div>
  );
};

export default ContentSection