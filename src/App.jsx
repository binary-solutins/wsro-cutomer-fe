import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Stats from "./components/Stats/Stats";
import MissionVisionValues from "./components/About/MissionVisionValues";
import Events from "./components/Events/Events";
import ContactForm from "./components/Contact/ContactForm";
import SponsorSlider from "./components/Hero/Sponsor/SponsorSlider";
import Features from "./components/Features/Features";
import LandingSection from "./components/LandingSection/LandingSection";
import FooterSection from "./components/Footer/FooterSection";
import LandingSection2 from "./components/HomePage/LandingSection/LandingSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SponsorSlider />
      <Features />
      <LandingSection2 />
      <MissionVisionValues />
      <Events />
      <LandingSection />
      <ContactForm />
      <FooterSection />
    </div>
  );
}

export default App;
