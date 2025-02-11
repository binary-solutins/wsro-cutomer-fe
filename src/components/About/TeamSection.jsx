import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mr. Vishal Chiripal',
    role: 'Founder & Robotics Enthusiastic',
    image: '/vishal-chiripal.webp',
    bio: 'Ph.D. in Robotics from MIT with 10+ years of experience in competitive robotics.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:sarah@example.com'
    }
  },
  {
    name: 'Mr. Gopal Maheshwari',
    role: 'Head of Marketing & Communications',
    image: '/gopal-maheshwari.webp',
    bio: 'Former FIRST Robotics champion and international competition organizer.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:james@example.com'
    }
  },
  {
    name: 'Mr. Dhruv Patel',
    role: 'Head of Resource & Development',
    image: '/dhruv-patel.webp',
    bio: 'Specializes in AI and machine learning integration in competitive robotics.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:emily@example.com'
    }
  },
  {
    name: 'Mr. Devendra Parmar',
    role: 'Advisor : Competition Development',
    image: '/devendra-parmar.webp',
    bio: 'Mechanical engineering expert with experience in industrial robotics.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:marcus@example.com'
    }
  },
  // {
  //   name: 'Mr. Alpesh Purohit',
  //   role: 'Head of Finance',
  //   image: '/alpesh-purohit.webp',
  //   bio: 'Mechanical engineering expert with experience in industrial robotics.',
  //   social: {
  //     github: 'https://github.com',
  //     linkedin: 'https://linkedin.com',
  //     email: 'mailto:marcus@example.com'
  //   }
  // }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#456990] mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate experts dedicated to advancing robotics competition and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 "
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover object-top"
                />
               
              </div>
              
              <div className="p-6">
                <h3 className="text-md font-bold text-[#456990] mb-1">{member.name}</h3>
                <p className="text-[#F45B69] font-medium mb-3 text-xs">{member.role}</p>
                {/* <p className="text-gray-600 mb-4">{member.bio}</p> */}
                
                {/* <div className="flex space-x-4 text-[#456990]">
                  <a href={member.social.github} className="hover:text-[#F45B69] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="hover:text-[#F45B69] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.email} className="hover:text-[#F45B69] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div> */}
              </div>
              
              {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-6 h-6 text-white" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;