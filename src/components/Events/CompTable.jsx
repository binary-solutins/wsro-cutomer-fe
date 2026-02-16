import React from 'react';

const WSROCompetitionTable = () => {
  const competitions = [
    { id: 1, name: 'Lego Line Following', amount: 4500, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
    { id: 2, name: 'Lego Master Challenge', amount: 4500, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
    { id: 3, name: 'Jr. Robo Race', amount: 4000, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
    { id: 4, name: 'Jr. Line Following (Non-Lego)', amount: 4000, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
    { id: 5, name: 'STEM Balloon Car', amount: 2000, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
    { id: 6, name: 'Young Scientist - All STEM', amount: 3500, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
    { id: 7, name: 'Blix - Robo Sprint', amount: 2000, teamSizeMin: 1, teamSizeMax: 4, level: 'Regional' },
    { id: 8, name: 'Lego Budding Builder', amount: 4000, teamSizeMin: 1, teamSizeMax: 2, level: 'Regional' },
  
    { id: 9, name: 'Entrepreneur Challenge', amount: 4000, teamSizeMin: 1, teamSizeMax: 2, level: 'National' },
    { id: 10, name: '1 Kg Lego Sumo', amount: 4000, teamSizeMin: 1, teamSizeMax: 2, level: 'National' },
    { id: 11, name: 'Sr. Robo Race', amount: 4000, teamSizeMin: 1, teamSizeMax: 2, level: 'National' },
    { id: 12, name: 'Jr. Drone', amount: 3500, teamSizeMin: 1, teamSizeMax: 2, level: 'National' },
    { id: 13, name: 'Blix - The Ultimate Maze', amount: 2500, teamSizeMin: 1, teamSizeMax: 4, level: 'National' },
    { id: 14, name: 'Blix - Robo Precision', amount: 2500, teamSizeMin: 1, teamSizeMax: 4, level: 'National' },
    { id: 15, name: 'STEM Water Rocketry', amount: 2000, teamSizeMin: 1, teamSizeMax: 2, level: 'National' },
  ];
  

  const getRowColor = (level) => {
    if (level === 'National') return 'bg-yellow-100';
    if (level.includes('International')) return 'bg-orange-100';
    if (level === 'Regional-National') return 'bg-green-100';
    return 'bg-blue-100';
  };

  return (
    <div className="flex flex-col items-center w-full px-2 py-4">
      <div className="w-full max-w-6xl">
        <div className="bg-green-50 p-4 border border-gray-300 mb-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-center">WSRO 2026</h1>
          <h2 className="text-lg font-semibold text-center">List of Competitions</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-gray-400 px-2 py-1">Sr. No.</th>
                <th className="border border-gray-400 px-2 py-1">Competition Name</th>
                <th className="border border-gray-400 px-2 py-1">Team Size</th>
                <th className="border border-gray-400 px-2 py-1">Age Group</th>
                <th className="border border-gray-400 px-2 py-1">Level</th>
                <th className="border border-gray-400 px-2 py-1">International</th>
              </tr>
            </thead>
            <tbody>
              {competitions.map((comp) => (
                <tr key={comp.id} className={getRowColor(comp.level)}>
                  <td className="border border-gray-400 px-2 py-1">{comp.id}</td>
                  <td className="border border-gray-400 px-2 py-1 text-left">{comp.name}</td>
                  <td className="border border-gray-400 px-2 py-1">{comp.teamSizeMin} - {comp.teamSizeMax}</td>
                  <td className="border border-gray-400 px-2 py-1">{comp.age}</td>
                  <td className="border border-gray-400 px-2 py-1">{comp.level}</td>
                  <td className="border border-gray-400 px-2 py-1">{comp.international || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WSROCompetitionTable;
