import React from 'react';

const EventDetail = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="text-indigo-600">
        {icon}
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
};

export default EventDetail;