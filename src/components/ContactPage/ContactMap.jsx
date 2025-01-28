import React from 'react';

const ContactMap = () => {
  return (
    <div className="h-[400px] w-full ">
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Chiripal Group of Companies, Chiripal House, शिवरंजनी क्रॉस मार्ग,Shivranjani Cross Road, 132 Feet Ring Rd, Satellite, Ahmedabad, Gujarat 380015&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default ContactMap