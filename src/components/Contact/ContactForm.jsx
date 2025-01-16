import React, { useState } from 'react';
import ContactInput from './ContactInput';
import { Send, Bot } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-primary">Get in <span className='text-secondary'> Touch </span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our robotics programs? We'd love to hear from you.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative space-y-6 p-8 rounded-2xl
            bg-white/80 backdrop-blur-sm shadow-xl border border-primary/10
            hover:shadow-primary/5 transition-all duration-500">
            
            {/* Circuit Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-6.485 6.485L25.515 8.14l7.9-7.9h-.714zm5.657 0l-4.343 4.343-4.949 4.949 7.9-7.9h1.392zm5.657 0l-2.2 2.2-7.093 7.093 7.9-7.9h1.393zm5.657 0l-.06.06-9.232 9.232 7.9-7.9h1.392z' fill='%23485db5' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <ContactInput placeholder="Your Name" />
              <ContactInput type="email" placeholder="Your Email" />
            </div>
            
            <ContactInput placeholder="Subject" />
            
            <ContactInput 
              type="textarea" 
              placeholder="Your Message" 
              rows={6}
            />

            <button className=" w-full bg-[#485db5] text-white px-8 py-4 rounded-lg text-lg font-semibold
              hover:bg-[#5b6fc7] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
              hover:shadow-[#485db5]/30 relative overflow-hidden group">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </form>

          {/* Corner Accents */}
          {['-top-1 -right-1', '-top-1 -left-1', '-bottom-1 -right-1', '-bottom-1 -left-1'].map((position, i) => (
            <div key={i} className={`absolute w-3 h-3 ${position} 
              ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full 
              animate-pulse`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;