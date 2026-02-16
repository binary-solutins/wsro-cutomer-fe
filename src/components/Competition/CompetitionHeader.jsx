import React from 'react';
import { MessageSquare,  Cpu, Wifi, CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';

const CompetitionHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary/90 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOHYxMmgxMlYxOEgzNnptMTIgMTJ2MTJoMTJWMzBoLTEyem0wLTI0djEyaDEyVjZoLTEyem0tMjQgMHYxMmgxMlY2SDI0em0wIDI0djEyaDEyVjMwSDI0em0wLTEydjEyaDEyVjE4SDI0em0yNCAwdjEyaDEyVjE4SDQ4eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center">

          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="relative"
            >
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-white/20"
              />
              
              
              <div className="relative grid grid-cols-2 gap-4 p-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <MessageSquare className="w-8 h-8" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <CircuitBoard className="w-8 h-8" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <Cpu className="w-8 h-8" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                >
                  <Wifi className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Competitions
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100/90 max-w-2xl mx-auto leading-relaxed">
            Unleash your potential and compete with the best! Dive into a world of robotics challenges designed to test your creativity, skill, and innovation. Are you ready to take on the challenge?
            </p>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { label: "Students Enrolled", value: "> 50000" },
                { label: "Schools Covered", value: "> 500" },
                { label: "Cities Covered", value: "> 100" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-indigo-100/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-16 fill-current text-white/5"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
};

export default CompetitionHeader;