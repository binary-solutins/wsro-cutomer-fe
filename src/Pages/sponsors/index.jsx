import React from 'react'
import LandingSponsor from './LandingSponsor';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/Footer/FooterSection';
import SponsorsBanner from './SponsorsBanner';


function SponsorPage() {
  return (
    <>
    <Navbar />
    <div className='pt-[90px] md:pt-[40px] lg:pt-[40px]'>
    <SponsorsBanner />
    </div>
    <div  className="mx-10 pt-[30px] animate-fadeIn" 
      style={{ animationDelay: '0.2s' }}>
    <h2 className='text-primary text-3xl font-bold'>Support the WSRO <span className='text-secondary'>Championship 2024:</span>
        </h2>

    <p className='text-base sm:text-lg mt-10 leading-relaxeds'>Welcome to the World Stem & Robotics Olympiad (WSRO), India’s premier Robotics Education company and a global leader in organizing robotics and STEM competitions. As a multifaceted organization, WSRO is actively engaged in robotics manufacturing, sales, and cutting-edge research. </p><br></br>

    <p className='text-base sm:text-lg leading-relaxed'>In collaboration with HRF, Ahmedabad, WSRO spearheads international competitions, Robotics, and STEM education initiatives, particularly focusing on empowering underprivileged students across India. To date, WSRO has successfully trained over 5000 students in the dynamic fields of Robotics and STEM Education. </p><br></br>

<p className='text-base sm:text-lg '>Our commitment extends to students aged 4 to 20 years, providing comprehensive training delivered by our expert educators in the realm of Robotics Technology. Since our inception in March 2018, WSRO has consistently been at the forefront of promoting technological knowledge, contributing significantly to the advancement of education and innovation. Till the date trained 25000+ Students in Robotics & STEM Education.</p><br></br>

<p className='text-base sm:text-lg leading-relaxed mb-10'>Join us on this exciting journey at the intersection of education, technology, and creativity with WSRO.</p>
    </div>
    <div className='h-[700px] md:h-[500px]'>
    <LandingSponsor  img={'/sponsor_image.png'} title1={'Our Regional'} title2={'Partners: '} content={'WSRO Championship 2024 is an annual event and one of the largest robotics & STEM festivals in Asia. Thousands of engineers, executives, students and families come together to be inspired by industry leaders, examine new startups, build robots for various challenges and learn about the latest technology innovations.'} />
    </div>

    <FooterSection />
    </>
  )
}

export default SponsorPage;