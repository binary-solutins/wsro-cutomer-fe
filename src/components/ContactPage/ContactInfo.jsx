import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Shanti Corporate House", " Near Hira Rupa Hall, Bopal-Ambli Road,", "Ahmedabad, 380058"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91-9904463224", "+91-8128728882"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["wsroindia@gmail.com","support@wsro.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/WSROIndia" },
    { icon: Twitter, href: "https://twitter.com/WSROIndia" },
    { icon: Instagram, href: "https://www.instagram.com/wsroindia/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/wsro/" },
  ];

  return (
    <div className="space-y-8">
     

      <div className="grid sm:grid-cols-2 gap-6">
        {contactDetails.map((item, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
                       border border-gray-100 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 
                            group-hover:bg-indigo-600 group-hover:text-white
                            transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
            </div>
            <div className="space-y-2">
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

    

      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="px-4 py-2 rounded-lg bg-gray-100 bg-primary  text-white hover:bg-indigo-600 
                     hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
          >
            <link.icon className="w-5 h-5" />
            {link.icon.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;