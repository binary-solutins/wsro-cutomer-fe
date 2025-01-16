import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaLaptopCode, FaGraduationCap, FaUsers, FaRocket } from 'react-icons/fa';
import FeatureCard from './Features/FeatureCard';


const features = [
  {
    icon: FaBrain,
    title: "Artificial Intelligence",
    description: "Explore cutting-edge AI technologies with hands-on projects and expert guidance."
  },
  {
    icon: FaRobot,
    title: "Robotics Engineering",
    description: "Design, build, and program robots while learning core engineering principles."
  },
  {
    icon: FaLaptopCode,
    title: "Machine Learning",
    description: "Master ML algorithms and their real-world applications in robotics."
  },
  {
    icon: FaGraduationCap,
    title: "STEM Education",
    description: "Comprehensive programs covering Science, Technology, Engineering, and Mathematics."
  },
  {
    icon: FaUsers,
    title: "Competitions",
    description: "Participate in national and international robotics competitions."
  },
  {
    icon: FaRocket,
    title: "Innovation Lab",
    description: "Access state-of-the-art facilities and equipment for your projects."
  }
];

const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <Background />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 
            to-blue-800 bg-clip-text text-transparent">
            Breakthrough Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most advanced robotics challenges and STEM education programs 
            designed for both junior and senior categories.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;