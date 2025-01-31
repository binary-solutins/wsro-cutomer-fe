import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCompetitionByEvent } from "../../Api/api";
import EventSkeleton from "../../components/Events/EventSkelaton";
import EventDetailsModal from "../../components/Events/EventDetailsModal";
import RegistrationModal from "../../components/Events/RegistrationModal";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import EventCard from "../../components/Events/EventCard";

const EventCompetitions = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();
  const { eventId } = useParams();
  const levelid = eventId;

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await getCompetitionByEvent(levelid);
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  console.log(events);

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50 pt-[150px]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">
            Upcoming <span className="text-secondary">Events </span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join us for exciting robotics competitions, workshops, and learning
            opportunities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading
              ? [...Array(3)].map((_, index) => <EventSkeleton key={index} />)
              : events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onLearnMore={handleLearnMore}
                  />
                ))}
          </div>
        </div>

        {selectedEvent && !showRegistration && (
          <EventDetailsModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onRegister={handleRegister}
          />
        )}

        {showRegistration && selectedEvent && (
          <RegistrationModal
            event={selectedEvent}
            onClose={() => {
              setShowRegistration(false);
              setSelectedEvent(null);
            }}
          />
        )}
      </section>
      <FooterSection />
    </>
  );
};

export default EventCompetitions;
