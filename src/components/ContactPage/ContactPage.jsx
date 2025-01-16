import React from 'react';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import ContactForm from '../Contact/ContactForm';
import Navbar from '../Navbar';
import FooterSection from '../Footer/FooterSection';

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <main className='pt-20'>
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
<div className='p-10'>
      <ContactMap />
      </div>
    </div>
    </main>
    <FooterSection />
    </>
  );
};

export default ContactPage;