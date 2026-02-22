import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { getEventsByLevel } from "../../Api/api";
import EventSkeleton from "../../components/Events/EventSkelaton";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import EventBaseCard from "../../components/Events/EventBaseCard";
import LandingSectionAbout from "../../components/Events/LandingSection";
import InternationalCompetitionCard from "../../components/Events/InternationalCompetitionCard";
import PDFModal from "../../components/Events/PDFModal";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const levelid = id;

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

  const landingSectionContent = {
    regional: {
      title1: "WSRO",
      title2: "Regional 2026",
      content:
        "In 2018, WSRO & HRF marked a historic milestone by hosting the inaugural Robotex India International National Level Competition in Ahmedabad at SBS. The event showcased the prowess of more than 500 students in the final round, captivating an audience of over 3000, including students, teachers, and parents hailing from every corner of India. The victorious were rewarded with sponsorships to partake in the prestigious World Championship held in Tallinn, Estonia, in December 2018. The momentum continued into 2019 as WSRO & HRF orchestrated a remarkable series of 6+ Regional competitions in Delhi, Indore, Mumbai, Pune, Ludhiana, and Ahmedabad. This extravaganza drew a phenomenal participation of 3000+ individuals and 500+ teams nationwide, culminating in the grand Robotex India International National Level Competition in Ahmedabad at Shanti Business School. WSRO, now an annual spectacle, stands as one of Asia's premier robotics and STEM festivals. Each year, thousands of engineers, executives, students, and families converge to bask in the brilliance of industry leaders, explore pioneering startups, delve into robot-building challenges, and stay abreast of the latest technological innovations. Fast forward to 2022 and 2023, WSRO & HRF continued their commitment by hosting a National and international competition in Ahmedabad at Science City, boasting the participation of over 13+ competitions, 200 + mentors, 100+ schools , 2500+ individuals and 450+ teams from across India and 15+ Countries. As we gear up for 2024, WSRO & HRF are thrilled to unveil a diverse array of competitions in various categories, promising to elevate the excitement and engagement for participants and enthusiasts alike. Stay tuned for a spectacular showcase of talent, creativity, and cutting-edge advancements! In 2024 we are going with the following competitions in different categories hosted by WSRO & HRF",
    },

    national: {
      title1: "WSRO",
      title2: "National 2026",
      content:
        "In 2018, WSRO & HRF marked a historic milestone by hosting the inaugural Robotex India International National Level Competition in Ahmedabad at SBS. The event showcased the prowess of more than 500 students in the final round, captivating an audience of over 3000, including students, teachers, and parents hailing from every corner of India. The victorious were rewarded with sponsorships to partake in the prestigious World Championship held in Tallinn, Estonia, in December 2018. The momentum continued into 2019 as WSRO & HRF orchestrated a remarkable series of 6+ Regional competitions in Delhi, Indore, Mumbai, Pune, Ludhiana, and Ahmedabad. This extravaganza drew a phenomenal participation of 3000+ individuals and 500+ teams nationwide, culminating in the grand Robotex India International National Level Competition in Ahmedabad at Shanti Business School. WSRO, now an annual spectacle, stands as one of Asia's premier robotics and STEM festivals. Each year, thousands of engineers, executives, students, and families converge to bask in the brilliance of industry leaders, explore pioneering startups, delve into robot-building challenges, and stay abreast of the latest technological innovations. Fast forward to 2022 and 2023, WSRO & HRF continued their commitment by hosting a National and international competition in Ahmedabad at Science City, boasting the participation of over 13+ competitions, 200 + mentors, 100+ schools , 2500+ individuals and 450+ teams from across India and 15+ Countries. As we gear up for 2024, WSRO & HRF are thrilled to unveil a diverse array of competitions in various categories, promising to elevate the excitement and engagement for participants and enthusiasts alike. Stay tuned for a spectacular showcase of talent, creativity, and cutting-edge advancements! In 2024 we are going with the following competitions in different categories hosted by WSRO & HRF.",
    },
    international: {
      title1: "WSRO",
      title2: "International 2026",
      content:
        "In 2018, WSRO & HRF marked a historic milestone by hosting the inaugural Robotex India International National Level Competition in Ahmedabad at SBS. The event showcased the prowess of more than 500 students in the final round, captivating an audience of over 3000, including students, teachers, and parents hailing from every corner of India. The victorious were rewarded with sponsorships to partake in the prestigious World Championship held in Tallinn, Estonia, in December 2018. The momentum continued into 2019 as WSRO & HRF orchestrated a remarkable series of 6+ Regional competitions in Delhi, Indore, Mumbai, Pune, Ludhiana, and Ahmedabad. This extravaganza drew a phenomenal participation of 3000+ individuals and 500+ teams nationwide, culminating in the grand Robotex India International National Level Competition in Ahmedabad at Shanti Business School. WSRO, now an annual spectacle, stands as one of Asia's premier robotics and STEM festivals. Each year, thousands of engineers, executives, students, and families converge to bask in the brilliance of industry leaders, explore pioneering startups, delve into robot-building challenges, and stay abreast of the latest technological innovations. Fast forward to 2022 and 2023, WSRO & HRF continued their commitment by hosting a National and international competition in Ahmedabad at Science City, boasting the participation of over 13+ competitions, 200 + mentors, 100+ schools , 2500+ individuals and 450+ teams from across India and 15+ Countries. As we gear up for 2024, WSRO & HRF are thrilled to unveil a diverse array of competitions in various categories, promising to elevate the excitement and engagement for participants and enthusiasts alike. Stay tuned for a spectacular showcase of talent, creativity, and cutting-edge advancements! In 2024 we are going with the following competitions in different categories hosted by WSRO & HRF.",
    },
    startup: {
      title1: "WSRO",
      title2: "India StartUp Awards 2026",
      content:
        "Join startup-focused events to learn, collaborate, and grow your robotics ventures.",
    },
  };

  const fetchEvents = async () => {
    // Don't fetch API data for international level
    if (levelid === 'international') {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await getEventsByLevel(levelid);

      // Separate events with and without dates
      const eventsWithDates = data.filter((event) => event.event_date !== null);
      const eventsWithoutDates = data.filter(
        (event) => event.event_date === null
      );

      // Sort only the events that have dates
      const sortedEventsWithDates = [...eventsWithDates].sort((a, b) => {
        if (b.is_active !== a.is_active) {
          return b.is_active - a.is_active; // Active (1) before Locked (0)
        }
        const dateA = new Date(a.event_date);
        const dateB = new Date(b.event_date);
        return dateA - dateB; // Ascending order (earliest dates first)
      });

      // Sort events without dates by is_active as well
      const sortedEventsWithoutDates = [...eventsWithoutDates].sort((a, b) => {
        return b.is_active - a.is_active; // Active (1) before Locked (0)
      });

      // Combine sorted events with dates first, followed by events without dates
      const finalSortedEvents = [
        ...sortedEventsWithDates,
        ...sortedEventsWithoutDates,
      ];

      setEvents(finalSortedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [levelid]); // Added levelid as dependency to refresh when route changes

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
    navigate(`/competitions/${event.id}`);
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

  const landingContent = landingSectionContent[levelid] || {
    title1: "Default Title 1",
    title2: "Default Title 2",
    content: "Default content if the ID does not match any predefined content.",
  };

  return (
    <>
      <Navbar />
      <section className=" bg-gray-50 pt-[150px]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">
            Upcoming <span className="text-secondary">Events</span>
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
            /* Conditional layout based on event type */
            levelid === 'national' ? (
              // Two-column layout for national events
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Event Cards Column */}
                <div className="grid md:grid-cols-1 gap-8">
                  {loading ? (
                    [...Array(3)].map((_, index) => <EventSkeleton key={index} />)
                  ) : events.length === 0 ? (
                    <div className="text-center p-8 bg-red-100 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-red-600">Oops!</h3>
                      <p className="text-gray-600 mt-4">
                        No events found. Please check back later or explore other
                        sections of our site.
                      </p>
                      <button
                        className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition duration-300"
                        onClick={() => navigate("/")}
                      >
                        Go to Home
                      </button>
                    </div>
                  ) : (
                    events.map((event) => (
                      <EventBaseCard
                        key={event.id}
                        level={event}
                        onLearnMore={handleLearnMore}
                      />
                    ))
                  )}
                </div>

                {/* National Image Column */}
                <div className="sticky top-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary 
                      rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 
                      group-hover:duration-200 animate-gradient-x" />

                    <div className="relative rounded-2xl overflow-hidden 
                      transform group-hover:scale-[1.02] transition-transform duration-500
                      border-2 border-primary/30">
                      <img
                        src="/national.jpg"
                        alt="WSRO National Competition"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Original grid layout for other events
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {loading ? (
                  [...Array(3)].map((_, index) => <EventSkeleton key={index} />)
                ) : events.length === 0 ? (
                  <div className="col-span-2 lg:col-span-3 text-center p-8 bg-red-100 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-red-600">Oops!</h3>
                    <p className="text-gray-600 mt-4">
                      No events found. Please check back later or explore other
                      sections of our site.
                    </p>
                    <button
                      className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition duration-300"
                      onClick={() => navigate("/")}
                    >
                      Go to Home
                    </button>
                  </div>
                ) : (
                  events.map((event) => (
                    <EventBaseCard
                      key={event.id}
                      level={event}
                      onLearnMore={handleLearnMore}
                    />
                  ))
                )}
              </div>
            )
          )}
        </div>
      </section>

      {showPDFModal && (
        <PDFModal
          onClose={handleClosePDFModal}
          pdfUrl="https://drive.google.com/file/d/1km8UBKhLwqXlWRx5-N5jRRJLYdMF-UWT/view?usp=sharing"
        />
      )}
      <FooterSection />
    </>
  );
};

export default Events;
