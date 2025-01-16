import React from 'react';
import { Bot, Award, Users, Globe2, Cpu, BookOpen, Target, Lightbulb, Wrench, Brain, BotIcon, GraduationCap, Trophy, Share2, PuzzleIcon, Database, Laptop } from 'lucide-react';

function FeatureCard({ icon: Icon, title, className = '' }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
      <div className={`flex items-center gap-4 ${className}`}>
        <Icon className="w-8 h-8 text-[#f46572]" />
        <p className="text-white text-lg font-medium">{title}</p>
      </div>
    </div>
  );
}

function Points() {
  const features = [
    { icon: BotIcon, title: "WSRO Robotics is a renowned, respected and most innovative brand in India" },
  { icon: Cpu, title: "Unique & Own Designed Educational Robotics Kits" },
  { icon: Award, title: "Own Manufacturing means Lowest possible cost and Original" },
  { icon: Wrench, title: "IN – House Research and Development dedicated Team of engineers" },
  { icon: Globe2, title: "Dealing in all over India, Middle East and Africa" },
  { icon: Users, title: "Reach over 120+ schools and trained 5000+ students in the last 3+ years!" },
  { icon: BookOpen, title: "State of the Art and cutting-edge technology-based syllabus on Robotics" },
  { icon: Target, title: "Exciting and innovative theme based National Competition on Robotics" },
  { icon: GraduationCap, title: "Leadership and Innovation based activities for school students" },
  { icon: Trophy, title: "Competition opportunity provides the competitive edge over any other competitors" },
  { icon: Brain, title: "Science, Technology, Engineering and Mathematics (STEM) based conceptual learning" },
  { icon: Lightbulb, title: "100% hands on practical syllabus on Robotics" },
  { icon: Share2, title: "Exciting and innovative Facebook like application for Partners and their students" },
  { icon: PuzzleIcon, title: "Opportunity to promote additional business amongst your students using fun applications" },
  { icon: Database, title: "Detailed knowledge on basics of Electronics, Mechanical, Information Technology and Electrical" },
];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            WSRO Robotics <span className='text-secondary'>Competition</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering young minds through robotics and innovation
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

       
        <div className="mt-16 text-center">
          <button className="bg-[#f46572] hover:bg-[#e55561] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
            Register Now
          </button>
          <p className="mt-4 text-gray-300">
            Join thousands of students in this exciting journey of robotics
          </p>
        </div>
      </div>
    </div>
  );
}

export default Points;