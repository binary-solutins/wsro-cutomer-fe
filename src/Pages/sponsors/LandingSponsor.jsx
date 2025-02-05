import React from 'react';
import SponsorPageImage from './SponsorPageImage';
import ContentSection from '../../components/Events/ContentSection';


const LandingSponsor = ({title1,title2,content,img}) => {
  return (
    <section className="w-full min-h-screen overflow-hidden bg-[#1a1a1a] text-white
      relative before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] 
      before:from-primary/20 before:opacity-40 before:blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <SponsorPageImage img={img}/>
          <div className="w-full max-w-lg mx-auto lg:max-w-none">
           
            <ContentSection title1={title1} title2={title2} content={content} />
            <a href="/contact-us" className=' w-[1/2] mt-10 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 bg-[#485db5]  font-semibold
          hover:bg-[#5b6fc7] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
          hover:shadow-[#485db5]/30 relative overflow-hidden group'>Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSponsor;