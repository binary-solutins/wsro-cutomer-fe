import React from "react";
import Background3D from '../components/Hero/Background3D';
import HeroContent from '../components/Hero/HeroContent';
import VideoSection from '../components/Hero/VideoSection';

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden pt-[2px] md:pt-[30px]">
        <Background3D />

        <div className="relative px-4 lg:px-10 min-h-screen">
          <div className="h-full flex flex-col items-center justify-start gap-6 max-w-[1400px] mx-auto">
            <div className="w-full text-center pt-[150px]">
              <HeroContent />
            </div>

            <div className="w-full lg:w-[85%] xl:w-[90%] mx-auto max-h-[90vh] mb-[20px]">
              <VideoSection videoId="UoktjftyStg" />
            </div>
          </div>

        
        </div>
      </div>

    </>
  );
};

export default Hero;