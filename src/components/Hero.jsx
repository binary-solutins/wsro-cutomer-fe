import React from "react";
import Background3D from '../components/Hero/Background3D';
import HeroContent from '../components/Hero/HeroContent';
import VideoSection from '../components/Hero/VideoSection';
import SponsorSlider from '../components/Hero/SponsorSlider'
import ScrollIndicator from '../components/Hero/ScrollIndicator';
const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden pt-[100px] md:pt-[50px]">
        <Background3D />

        <div className="relative px-4 lg:px-10 min-h-screen">
          <div className="h-full flex flex-col items-center justify-start gap-6 max-w-[1400px] mx-auto">
            <div className="w-full text-center pt-[150px]">
              <HeroContent />
            </div>

            <div className="w-full lg:w-[85%] xl:w-[90%] mx-auto max-h-[100vh] mb-[20px]">
              <VideoSection videoId="QREiXmRgmo4" />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ScrollIndicator />
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;