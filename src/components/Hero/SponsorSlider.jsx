import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { id: 1, url: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?w=200&h=100&fit=crop&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=200&h=100&fit=crop&q=80' },
  { id: 4, url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=100&fit=crop&q=80' },
  { id: 5, url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=200&h=100&fit=crop&q=80' },
];

const SponsorSlider = () => {
  return (
    <div className="relative py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold text-white mb-12"
        >
          Trusted by Industry Leaders
        </motion.h3>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />

          {/* Infinite scroll container */}
          <div className="flex space-x-12 animate-scrollX">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <motion.div
                key={`${sponsor.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm p-4
                  transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg
                  group-hover:shadow-blue-500/20">
                  <img
                    src={sponsor.url}
                    alt={`Sponsor ${sponsor.id}`}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0
                      transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSlider;