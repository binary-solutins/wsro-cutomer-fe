import React from 'react';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ number, label }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="relative group">
      <div className={`
        transform-gpu transition-all duration-500
        bg-white/80 backdrop-blur-sm
        rounded-lg p-6
        border border-secondary
        hover:scale-102 hover:-translate-y-1
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        {/* Circuit Lines */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(secondary 1px, transparent 1px),
                linear-gradient(90deg, secondary 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className={`
            text-3xl font-bold text-center mb-2
            bg-gradient-to-r from-secondary to-secondary
            bg-clip-text text-transparent
            transition-all duration-700
            ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
            {number}
          </div>
          
          <div className={`
            text-sm text-center text-dark/70
            transition-all duration-500 delay-100
            ${inView ? 'opacity-100' : 'opacity-0'}
          `}>
            {label}
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;