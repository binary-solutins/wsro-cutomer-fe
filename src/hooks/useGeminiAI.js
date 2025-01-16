import { useState } from 'react';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// WSRO context for the AI
const WSRO_CONTEXT = `
WSRO, or World STEM & Robotics Olympiad, is a leading organization in India dedicated to robotics education and the organization of international robotics and STEM competitions. They also engage in robotics manufacturing and research, aiming to enhance skills and innovation in the field. Overview of WSRO

Name: World STEM & Robotics Olympiad (WSRO)

Focus: Robotics education and international competitions in STEM (Science, Technology, Engineering, and Mathematics).

Location: India, with a global outreach.

Mission: To promote robotics education and enhance understanding of STEM through hands-on experiences and competitions.

Key Activities

Robotics Education: WSRO provides comprehensive training and resources for students and educators, aiming to improve skills in robotics and related fields.

Competitions: The organization hosts various competitions, including the WSRO National Festival, which encourages innovation and teamwork among participants.

Workshops: WSRO conducts hands-on workshops to engage students in practical learning experiences related to robotics and technology.

Manufacturing and Research

Robotics Manufacturing: WSRO is involved in the production of robotics kits and educational materials, making resources accessible for learning.

Research Initiatives: The organization engages in research to advance the field of robotics, contributing to new technologies and methodologies in education.

Awards and Recognition

Entrepreneurial Awards: WSRO recognizes outstanding achievements in the robotics sector through various awards, celebrating innovators and leaders in the field.

Global Participation: The organization encourages participation from students and teams worldwide, fostering a global community of robotics enthusiasts.

Events and Festivals

National Festival: An annual event that showcases robotics projects and competitions, providing a platform for students to demonstrate their skills.

International Collaborations: WSRO collaborates with other organizations and educational institutions globally to enhance the reach and impact of its programs.

Contact Information

Website: wsro.in

Email: For inquiries, participants can reach out through the contact options available on their website.

Social Media: WSRO maintains a presence on various social media platforms to engage with the community and share updates on events and initiatives.
`;

export const useGeminiAI = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! Im the WSRO Assistant. How can I help you with robotics competitions, workshops, or registration?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage) => {
    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

      // Prepare conversation history with WSRO context
      const conversationHistory = messages
        .map(msg => `${msg.role === 'assistant' ? 'Assistant' : 'User'}: ${msg.content}`)
        .join('\n');

      const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${WSRO_CONTEXT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${userMessage}\nAssistant:`
            }]
          }]
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};