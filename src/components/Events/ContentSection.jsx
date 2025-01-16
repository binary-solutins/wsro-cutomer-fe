import React from 'react';
import Description from './Description';
import Title from './Title';

const ContentSection = ({content,title1,title2}) => {
  return (
    <div className="space-y-8 sm:space-y-10">
      <Title title1={title1} title2={title2} title3={"  "} />
      <Description content={content} />
    </div>
  );
};

export default ContentSection