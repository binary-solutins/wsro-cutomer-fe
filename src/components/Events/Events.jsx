import React, { useState } from "react";
import LevelCard from "./LevelCard";
import { useNavigate } from "react-router-dom";

const Events = () => {
 

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
    navigate(`/events/${event.id}`);
  };

  const levels = [
    {
      id: "regional",
      name: "Regional 2025:",
      description:
        "The journey begins here! Regional competitions set the stage for participants from various cities to demonstrate their abilities and qualify for the grand national-level event.",
    },
    {
      id: "national",
      name: "National 2025:",
      description:
        "Witness the brilliance of India’s finest minds as participants from all states compete for national glory. This platform bridges talent and opportunity, offering an unmatched showcase of skill and innovation.",
    },
    {
      id: "international",
      name: "International 2025:",
      description:
        "Where the world meets innovation! Participants from across 15+ countries come together to compete and collaborate, showcasing their expertise on a global platform.",
    },
    {
      id: "startup",
      name: "WSRO Start Up Awards 2025:",
      description:
        "A unique competition to empower and recognize emerging startups in the robotics and STEM sectors. It’s a launchpad for the next generation of tech leaders.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Upcoming <span className="text-secondary">Events </span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join us for exciting robotics competitions, workshops, and learning
          opportunities
        </p>

        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8">
          {levels.map((level) => (
                <LevelCard
                  key={level.id}
                  level={level}
                  onLearnMore={handleLearnMore}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
