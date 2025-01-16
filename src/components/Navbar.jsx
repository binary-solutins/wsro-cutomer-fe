import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from './Navbar/Topbar';
import DesktopMenu from './Navbar/DesktopMenu';
import MobileMenu from './Navbar/MobileMenu';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about-us', label: 'ABOUT' },
  { href: '/competitions', label: 'COMPETITION' },
  { href: '/workshop', label: 'WORKSHOP' },
  { href: '/sponsors', label: 'SPONSOR' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contact-us', label: 'CONTACT' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavigation = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg animate-slideDown' : 'bg-white/95'
    }`}>
      <TopBar />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary relative group cursor-pointer">
            <img src='/logo.png' alt="Logo" className="h-[50px] w-[140px] object-contain transform group-hover:scale-105 
              transition-transform duration-300" />
            <span className="absolute -inset-1 bg-primary/10 rounded-lg transform scale-95 opacity-0
              group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
          </Link>

          <DesktopMenu navLinks={navLinks} onNavigate={handleNavigation} />

          <button 
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 relative
              hover:rotate-180 transform"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks}
        onNavigate={handleNavigation}
      />
    </nav>
  );
};

export default Navbar;