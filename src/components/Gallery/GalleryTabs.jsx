import React from 'react';

const GalleryTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'journey', label: 'Journey of WSRO' },
    { id: 'competitions', label: 'Glimpse of Competitions' },
    { id: 'workshop', label: 'Glimpse of Workshop' },
    { id: 'press', label: 'Press Coverage' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryTabs;