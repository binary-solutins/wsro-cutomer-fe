import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaLaptopCode, FaGraduationCap, FaUsers, FaRocket } from 'react-icons/fa';
import FeatureCard from './FeatureCard';
import Background from './Background';
import StatCard from '../Stats/StatCard';


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

const stats = [
  { number: '20k +', label: 'Visitors' },
  { number: '15k +', label: 'Participants' },
  { number: '5k  +', label: 'Robots Built' },
  { number: '200 +', label: 'Start-Ups' },
  { number: '400 +', label: 'Entrepreneurs' },
  { number: '300 +', label: 'Schools' }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
           <span className='text-primary'> Breakthrough</span> Starts Here
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;