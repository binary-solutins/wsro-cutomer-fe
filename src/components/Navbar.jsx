import React, { useState, useEffect } from 'react';
import { Menu, Notebook as Robot } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '.././components/Navbar/Topbar';
import DesktopMenu from '.././components/Navbar/DesktopMenu';
import MobileMenu from '.././components/Navbar/MobileMenu';

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

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg animate-slideDown' : 'bg-white/95'
    }`}>
      <TopBar />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="relative group">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.webp" 
                alt="WSRO Logo" 
                className="h-[50px] w-[140px] object-contain transform group-hover:scale-105 
                  transition-transform duration-300"
              />
              <Robot className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 
                transition-all duration-300 animate-float" />
            </div>
            <span className="absolute -inset-2 bg-primary/5 rounded-xl transform scale-95 opacity-0
              group-hover:opacity-100 transition-all duration-300 ease-out -z-10" />
          </Link>

          <DesktopMenu navLinks={navLinks} />

          <button 
            className="md:hidden relative group p-2 hover:bg-primary/10 rounded-lg 
              transition-all duration-300"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-primary group-hover:text-secondary 
              transition-colors duration-300" />
            <span className="absolute inset-0 bg-primary/5 rounded-lg transform scale-0 
              group-hover:scale-100 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;