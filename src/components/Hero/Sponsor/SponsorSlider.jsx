import React from 'react';
import { motion } from 'framer-motion';
import SponsorBackground from './SponsorBackground';
import SponsorCard from './SponsorCard';
import { sponsors } from './Data';


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

        <div className="relative">
          <div className="flex space-x-8 animate-scrollX hover:pause">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <SponsorCard
                key={`${sponsor.id}-${index}`}
                {...sponsor}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSlider;