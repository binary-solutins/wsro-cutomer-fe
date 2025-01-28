import React from 'react';
import ContentSection from './ContentSection';
import ImageSection from './ImageSection';

const LandingSection2 = () => {
  return (
    <section className="w-full min-h-screen overflow-hidden bg-[#1a1a1a] text-white
      relative before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] 
      before:from-primary/20 before:opacity-40 before:blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ContentSection />
          <div className="w-full max-w-lg mx-auto lg:max-w-none">
            <ImageSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection2;