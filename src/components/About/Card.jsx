import React from 'react';
import CardBackground from './card/CardBackground';
import CardIcon from './card/CardIcon';
import CardContent from './card/CardContent';
import CardDecorations from './card/CardDecoration';


const Card = ({ icon, title, content }) => (
  <div className="relative group">
    <div className="
      relative z-10
      bg-white/90 backdrop-blur-sm
      p-8 rounded-xl
      transform-gpu transition-all duration-500
      hover:translate-y-[-0.5rem] hover:rotate-2
      border border-[#485db5]/20
      group-hover:border-[#ef5b4f]/30
      shadow-xl group-hover:shadow-[#485db5]/20
    ">
      <CardBackground />
      
      <div className="relative z-10">
        <CardIcon Icon={icon} />
        <CardContent title={title} content={content} />
      </div>

      <CardDecorations />
    </div>
  </div>
);

export default Card;