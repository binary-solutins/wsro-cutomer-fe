import React, { useState } from 'react';
import EventCard from '../Events/EventCard';
import EventDetailsModal from '../Events/EventDetailsModal';
import RegistrationModal from '../Events/RegistrationModal';
import EventSkeleton from '../Events/EventSkelaton';
import LevelCard from '../Events/LevelCard';
import { useNavigate } from 'react-router-dom';

const CompetitionGrid = ({ competitions = [], loading }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  


  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const handleCloseModals = () => {
    setSelectedEvent(null);
    setShowRegistration(false);
  };

 
  const navigate = useNavigate();

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
    navigate(`/events/${event.id}`);
  };


  const levels = [
    {
      id: "regional",
      name: "Regional:",
      description:
        "The journey begins here! Regional competitions set the stage for participants from various cities to demonstrate their abilities and qualify for the grand national-level event.",
    },
    {
      id: "national",
      name: "National:",
      description:
        "Witness the brilliance of India’s finest minds as participants from all states compete for national glory. This platform bridges talent and opportunity, offering an unmatched showcase of skill and innovation.",
    },
    {
      id: "international",
      name: "International:",
      description:
        "Where the world meets innovation! Participants from across 15+ countries come together to compete and collaborate, showcasing their expertise on a global platform.",
    },
    {
      id: "startup",
      name: "WSRO Start Up Event:",
      description:
        "A unique competition to empower and recognize emerging startups in the robotics and STEM sectors. It’s a launchpad for the next generation of tech leaders.",
    },
  ];

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <EventSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (competitions.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No competitions found
        </h3>
        <p className="text-gray-600">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {levels.map((level) => (
                <LevelCard
                  key={level.id}
                  level={level}
                  onLearnMore={handleLearnMore}
                />
              ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && !showRegistration && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={handleCloseModals}
          onRegister={handleRegister}
        />
      )}

      {/* Registration Modal */}
      {showRegistration && selectedEvent && (
        <RegistrationModal
          event={selectedEvent}
          onClose={handleCloseModals}
        />
      )}
    </>
  );
};

export default CompetitionGrid;