import React from 'react';

const Description = () => {
  return (
    <div className="space-y-4 sm:space-y-6 text-gray-300 animate-fadeIn max-w-xl" 
      style={{ animationDelay: '0.2s' }}>
      <p className="text-base sm:text-lg leading-relaxed">
      WSRO is a prominent Robotics Education company in India and a global organizer of robotics and STEM competitions. It is also involved in robotics manufacturing, sales, and research. In collaboration with HRF, Ahmedabad, WSRO works towards promoting international competitions and advancing Robotics & STEM education, particularly for underprivileged students across India.

      </p>
      <p className="text-base sm:text-lg leading-relaxed">
      To date, WSRO has trained over 5,000 students in Robotics and STEM education. Catering to school students aged 4 to 26 years, our expert trainers provide in-depth learning in robotics technology. By integrating STEM (Science, Technology, Engineering, and Mathematics) principles, we help students enhance their academic understanding and develop practical, hands-on knowledge.

      </p>
     
      
      {/* <div className="flex flex-wrap gap-6 text-lg sm:text-xl font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-secondary">25000+</span>
          <span>Students</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">500+</span>
          <span>Schools</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-secondary">100+</span>
          <span>Cities</span>
        </div>
      </div> */}
    </div>
  );
};

export default Description;