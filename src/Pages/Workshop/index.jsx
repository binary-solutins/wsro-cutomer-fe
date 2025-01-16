import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import {
  Brain,
  Calendar,
  Download,
  Mail,
  Phone,
  Globe,
  Star,
  Lightbulb,
  Target,
  Award,
  CheckCircle,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import WorkshopBanner from "./WorkshopBanner";

const Workshop = () => {
  const projects = [
    {
      name: "Manual Robot",
      description: "Manual remote-control robot designing",
      icon: "🤖",
    },
    {
      name: "Sensor Based Robotics",
      description:
        "To design/understand a sensor by help of components and PCB, hands on soldering and testing the circuit.",
      icon: "⚡",
    },
    {
      name: "Light Follower Robot",
      description:
        "Designing a robot which will move/stop depending to the source of light.",
      icon: "💡",
    },
    {
      name: "Line Tracing with Dual Sensor",
      description:
        "Designing a robot to follow a black/white line with dual sensor module.",
      icon: "📍",
    },
    {
      name: "Obstacle Sensing & Avoidance",
      description:
        "Obstacle avoidance and detection with shortest path finding algorithm.",
      icon: "🚧",
    },
    {
      name: "Advanced Line Tracing",
      description:
        "Black line in white surface and white line in black surfaces tracing.",
      icon: "➰",
    },
    {
      name: "Wall Hugger Robot",
      description:
        "Wall follower algorithm with mono sensor, dual sensor & triple sensor.",
      icon: "🏢",
    },
    {
      name: "Hand Hugger Robot",
      description: "Designing a robot to follow a hand with sensors module.",
      icon: "✋",
    },
    {
      name: "Remote Controlled Robot",
      description: "Designing a robot controlled by Remote Controlled.",
      icon: "🎮",
    },
    {
      name: "PC USB Controlled",
      description: "Designing a robot controlled by PC USB",
      icon: "💻",
    },
  ];

  const schedule = [
    {
      time: "00:10:00",
      activity: "Introductory Speech",
      mode: "Oral with Video",
    },
    {
      time: "00:10:00",
      activity: "Basics of Robotics",
      mode: "Video + PPT +Q&A Forum",
    },
    {
      time: "00:20:00",
      activity: "What is Robot Kit? and its configurations",
      mode: "Video + PPT +Q&A Forum",
    },
    {
      time: "01:00:00",
      activity: "Robot Hands on Assembly",
      mode: "By Instructor & Students",
    },
    {
      time: "01:00:00",
      activity: "Robot Hands on Coding",
      mode: "By Instructor & Students",
    },
    {
      time: "01:00:00",
      activity: "Robot Hands on Testing",
      mode: "By Instructor & Students",
    },
  ];

  const objectives = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />,
      text: "To groom, empower budding students to make them self-reliant in the field of robotics and automation by providing them real time hands on exposure to build robots.",
    },
    {
      icon: <Star className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />,
      text: "To raise the technical skill and bridge the gap between industries and academia acquired.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />,
      text: "To motivate, inspire and encourage young engineers to begin R&D work in the field of robotics and make India recognized in the world.",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />,
      text: "To appreciate the role of robotics in today’s industry.",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />,
      text: "To think, design, develop and implement new application of intelligent Robots.",
    },
  ];

  const benefitsParticipants = [
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Well trained facilitator from WSRO.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Cognitive learning method inspired by Robotics & STEM.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Individual kit of robots for each team (for hands on experience during workshop).",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Focus on creativity and imagination of participants.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "100% hands on experience in building, circuit designing and basic programming of robots.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Study material.",
    },
  ];

  const benefitsOrganizingInstitutes = [
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Both students and faculties of organisation will get opportunity to work as a volunteer in WSRO national championship.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Organising institute/university will be a part of WSRO robotics activity campus.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "After first workshop completion, we’ll back again with new workshop series which will help the students/schools/Institution/university to remain updated.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Participants and faculties of the school/Institution/university can carry their R&D work in the field of robotics.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "We’ll also help to set up robotics lab for that institution who is interested in robotics.",
    },
  ];

  const learningOutcomes = [
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Students will be confident and capable to build their own robot and can participate in a National Level & International level Robotics competition (WSRO).",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Attendee will be capable of designing any application by integrating multidisciplinary concepts and can understand all the process of an automation industry.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Students will be ready for the 21’st century’s workshop inspired by Robotics & STEM.",
    },
  ];
  const workshopDetails = [
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "WSRO workshops are 100% hands on experience based.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "The workshop will be completely application development based.",
    },
    {
      icon: (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      ),
      text: "Competitive object-oriented teaching methodology of WSRO will help the attendee to think innovative.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div
          className="min-h-screen w-full min-h-screen overflow-hidden bg-[#1a1a1a] text-white
      relative before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]  text-white"
        >
         <WorkshopBanner />

          {/* Objectives Section */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      {objective.icon}
                      <p>{objective.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits of Participants Section */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Benefits of <span className="text-secondary">Participants</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefitsParticipants.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      {benefit.icon}
                      <p>{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits of Organizing Institutes Section */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Benefits of Organizing{" "}
                <span className="text-secondary"> Institutes</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefitsOrganizingInstitutes.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      {benefit.icon}
                      <p>{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Workshop Details Section */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Workshop <span className="text-secondary"> Details</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {workshopDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      {detail.icon}
                      <p>{detail.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Learning Outcomes Section */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Learning <span className="text-secondary">Outcomes</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      {outcome.icon}
                      <p>{outcome.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Workshop <span className="text-secondary"> Projects</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700/30 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-3xl mb-4">{project.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Schedule Timeline */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Workshop <span className="text-secondary"> Schedule</span>
              </h2>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-gray-700/30 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.activity}</h3>
                      <p className="text-sm text-gray-300">{item.mode}</p>
                    </div>
                    <div className="text-right text-sm text-gray-300">
                      {item.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                Contact us for <span className="text-secondary"> Workshop</span>
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-700/30 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Mr. Dhruv Patel</h3>
                <p className="text-gray-300 mb-2">
                  Head, Resource and Program Development WSRO
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href="tel:+917016857543" className="hover:text-blue-400">
                      +91 7016857543
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a
                      href="mailto:wsroindia@gmail.com"
                      className="hover:text-blue-400"
                    >
                      wsroindia@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <a
                      href="http://www.wsro.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      www.wsro.in
                    </a>
                  </div>
                </div>
                <button
                  className="mt-6 w-full   text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 bg-[#485db5]  font-semibold
          hover:bg-[#5b6fc7] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
          hover:shadow-[#485db5]/30 relative overflow-hidden group"
                >
                  <Download className="w-5 h-5" />
                  Download Workshop Brochure
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default Workshop;
