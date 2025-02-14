import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import SponsorBackground from './SponsorBackground';
import { sponsors } from './Data';

const SponsorCard = ({ url, name, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      className="flex-shrink-0 group perspective"
    >
      <div className="relative w-64 h-32 transform-gpu transition-all duration-500 
        group-hover:rotate-y-12 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50
          rounded-xl overflow-hidden border border-[#485db5]/20 backdrop-blur-sm
          shadow-[0_0_15px_rgba(72,93,181,0.5)] group-hover:shadow-[0_0_30px_rgba(239,91,79,0.8)]
          transition-all duration-500">
          
          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#485db5] rounded-full blur-[2px]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#ef5b4f] rounded-full blur-[2px]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ef5b4f] rounded-full blur-[2px]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#485db5] rounded-full blur-[2px]" />
          
          <div className="relative h-full p-4 flex flex-col justify-between">
            <div className="h-20 flex items-center justify-center">
              <img
                src={url}
                alt={name}
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SponsorSlider = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      <SponsorBackground />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#485db5]">Trusted</span> by Industry Leaders
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with leading organizations to advance robotics education and innovation
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide
              key={sponsor.id}
              className="!w-auto"
            >
              <SponsorCard
                {...sponsor}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SponsorSlider;