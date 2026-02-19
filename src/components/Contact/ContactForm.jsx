import React, { useState } from 'react';
import ContactInput from './ContactInput';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    };

    try {
      const response = await fetch('https://wsroapi.softarotechnolabs.com/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage('Your inquiry has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        const errorData = await response.json();
        setSuccessMessage(`Error: ${errorData.message || 'Failed to send inquiry'}`);
      }
    } catch (error) {
      setSuccessMessage('There was an error sending your inquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-primary">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our robotics programs? We'd love to hear from you.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative space-y-6 p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-primary/10 hover:shadow-primary/5 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ContactInput
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  error={errors.name}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <ContactInput
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  error={errors.email}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <ContactInput
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              required={false}
            />

            <div>
              <ContactInput
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                error={errors.message}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#485db5] text-white px-8 py-4 rounded-lg text-lg font-semibold
                hover:bg-[#5b6fc7] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                hover:shadow-[#485db5]/30 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{isLoading ? 'Sending...' : 'Send Message'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#485db5] to-[#ef5b4f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </form>

          {successMessage && (
            <p className={`text-center mt-4 ${successMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {successMessage}
            </p>
          )}

          {/* Corner Accents */}
          {['-top-1 -right-1', '-top-1 -left-1', '-bottom-1 -right-1', '-bottom-1 -left-1'].map((position, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 ${position} 
                ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full 
                animate-pulse`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;