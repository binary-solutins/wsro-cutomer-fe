import React from 'react';
import Card from './Card';
import { missionVisionData } from './data';
import GradientBackground from './GradientBackground';
import GridPattern from './GridPattern';


const MissionVisionValues = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <GradientBackground />
      <GridPattern />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-12
        ">
          {missionVisionData.map((card, index) => (
            <Card
              key={index}
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;