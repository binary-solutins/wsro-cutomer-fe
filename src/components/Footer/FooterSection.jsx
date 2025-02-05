import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import FooterLink from "./FooterLinks";

const FooterSection = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/WSROIndia" },
    { icon: Twitter, href: "https://www.linkedin.com/company/wsro/" },
    { icon: Instagram, href: "https://www.instagram.com/wsroindia/" },
    { icon: Linkedin, href: "https://twitter.com/WSROIndia" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary 
              text-transparent bg-clip-text"
            >
              World Stem & Robotics
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation through robotics education and
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/about-us">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/competitions">Competitions</FooterLink>
              </li>
              <li>
                <FooterLink href="/gallery">Gallery</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms & conditions">
                  Terms And Conditions
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <span>
                  Shanti Corporate House, Near Hira Rupa Hall, Bopal-Ambli Road,
                  Ahmedabad
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary" />
                <span>9904463224 / 8128728882</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@wsro.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center
                    hover:border-secondary hover:bg-secondary/10 group transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-secondary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 World Stem & Robotics Olympiad. All rights reserved.
            </p>
  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
