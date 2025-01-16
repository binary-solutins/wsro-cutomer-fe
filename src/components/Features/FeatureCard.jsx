import React from 'react';
import { motion } from 'framer-motion';
import RoboticDecoration from './RoboticDecoration';



const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl
      shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
      transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
  >
    {/* Background Effects */}
    <RoboticDecoration />
    
    <div className="relative z-10">
      {/* Icon Container */}
      <div className="relative mb-6 w-16 h-16">
        <div className="absolute inset-0 bg-blue-500/10 rounded-xl transform rotate-45 
          group-hover:rotate-90 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center text-secondary text-3xl
          transform group-hover:scale-110 transition-transform duration-500">
          <Icon />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-secondary
        bg-clip-text text-transparent transform group-hover:translate-x-2 transition-transform duration-500">
        {title}
      </h3>
      
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 leading-relaxed">
        {description}
      </p>
      
      {/* Learn More Button */}
      <div className="mt-6 flex items-center text-secondary font-semibold opacity-0 group-hover:opacity-100 
        transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        Learn More
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </motion.div>
);

export default FeatureCard;