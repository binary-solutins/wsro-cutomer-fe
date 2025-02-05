import React from 'react'
import LandingSectionAbout from '../../components/About Page/About Us/LandingSection'
import Navbar from '../../components/Navbar';
import LandingSectionAbout2 from '../../components/About Page/About Us/About Section 2/LandingSection';
import Points from '../../components/About Page/About Us/Points';
import Stats from '../../components/Stats/Stats';
import FooterSection from '../../components/Footer/FooterSection';
import AboutHero from '../../components/About Page/AboutHero';
import TeamSection from '../../components/About/TeamSection';

function About() {
  return (
    <>
    <Navbar />
    <main className='pt-20'>
    <AboutHero />
    <TeamSection />
    <LandingSectionAbout />
    <LandingSectionAbout2 />
    <Stats />
    <Points />
    </main>
    <FooterSection />
    </>
  )
}

export default About;

