import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCompetitionByEvent } from "../../Api/api";
import EventSkeleton from "../../components/Events/EventSkelaton";
import EventDetailsModal from "../../components/Events/EventDetailsModal";
import RegistrationModal from "../../components/Events/RegistrationModal";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import EventCard from "../../components/Events/EventCard";
import InternationalCompetitionCard from "../../components/Events/InternationalCompetitionCard";
import PDFModal from "../../components/Events/PDFModal";

const EventCompetitions = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const navigate = useNavigate();
  const { eventId } = useParams();
  const levelid = eventId;

  const fetchEvents = async () => {
    // Don't fetch API data for international level
    if (levelid === 'international') {
      setLoading(false);
      return;
    }

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
  }, [levelid]);
  console.log(events);

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const handleItalyClick = () => {
    setShowPDFModal(true);
  };

  const handleClosePDFModal = () => {
    setShowPDFModal(false);
  };

  // International competitions data
  const internationalCompetitions = [
    {
      id: "dubai-2026",
      name: "Dubai 2026",
      description: "International robotics competition in Dubai",
      isLocked: true,
      image: "/comp-1.webp"
    },
    {
      id: "italy-2026",
      name: "Italy 2026",
      description: "International robotics competition in Italy",
      isLocked: false,
      image: "/comp-2.webp",
      pdfUrl: "https://drive.google.com/file/d/1km8UBKhLwqXlWRx5-N5jRRJLYdMF-UWT/view?usp=sharing"
    }
  ];

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

          {/* Show international competitions for international level */}
          {levelid === 'international' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {internationalCompetitions.map((competition) => (
                <InternationalCompetitionCard
                  key={competition.id}
                  competition={competition}
                  onItalyClick={handleItalyClick}
                />
              ))}
            </div>
          ) : (
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
          )}
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

        {showPDFModal && (
          <PDFModal
            onClose={handleClosePDFModal}
            pdfUrl="https://drive.google.com/file/d/1km8UBKhLwqXlWRx5-N5jRRJLYdMF-UWT/view?usp=sharing"
          />
        )}
      </section>
      <FooterSection />
    </>
  );
};

export default EventCompetitions;
