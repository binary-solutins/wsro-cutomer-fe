import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './Pages/About/index.jsx';
import GalleryPage from './Pages/Gallery/index.jsx';
import Chatbot from './components/Chatbot/Chatbox.jsx';
import CompetitionGrid from './components/Competition/CompetitionGrid.jsx';
import CompetitionPage from './components/Competition/CompetitionPage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import EventPage from './Pages/Events/index.jsx';
import EventCompetitions from './Pages/Competitions/index.jsx';
import Workshop from './Pages/Workshop/index.jsx';
import SponsorPage from './Pages/sponsors/index.jsx';
import Terms from './Pages/Terms & Condition/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/competitions" element={<CompetitionPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/competitions/:eventId" element={<EventCompetitions />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/terms & conditions" element={<Terms />} />
        
           
      </Routes>
    </Router>
    <Chatbot />
  </React.StrictMode>,
);