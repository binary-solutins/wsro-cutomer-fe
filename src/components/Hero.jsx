import React from "react";
import Background3D from "./Hero/Background3D";
import HeroContent from "./Hero/HeroContent";
import ScrollIndicator from "./Hero/ScrollIndicator";
import SponsorSlider from "./Hero/Sponsor/SponsorSlider";
import VideoSection from "./Hero/VideoSection";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden pt-[200px] md:pt-[50px]">
        <Background3D />

        <div className="relative px-4 lg:px-10 h-auto md:h-screen lg:h-screen">
          <div className="h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-15 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 px-4 lg:pl-20 order-2 lg:order-1">
              <HeroContent />
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:pl-20 order-1 lg:order-2">
              <div className="aspect-video w-full">
                <VideoSection videoId="QREiXmRgmo4" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ScrollIndicator />
          </div>
        </div>
      </div>

      <div className="w-full">
        <SponsorSlider />
      </div>
    </>
  );
};

export default Hero;
