import React from 'react';

const WSROCompetitionTable = () => {
  const competitions = [
    { id: 1, name: 'Lego Line Following', level: 'Regional-National-International', international: 'Italy', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '4500' },
    { id: 2, name: 'Jr. Robo Race', level: 'Regional-National-International', international: '-pore', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '4000' },
    { id: 3, name: 'Jr. Line Following (Non-Lego)', level: 'Regional-National-International', international: 'Italy', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '4000' },
    { id: 4, name: 'Young Scientist - All STEM', level: 'Regional-National-International', international: '-pore', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '3500' },
    { id: 5, name: 'Lego Budding Builder', level: 'Regional-National-International', international: '-pore', age: '04 to 08', teamSize: 'Min 01 Max 02', amount: '4000' },
    { id: 6, name: 'Smart Factory Robotics Challenge (SFRC) 2026', level: 'Regional-National-International', international: '-pore', age: '08 to 16', teamSize: 'Min 02 Max 04', amount: '4500' },
    { id: 7, name: 'Blix - Robo Sprint', level: 'Regional-National', international: '', age: '08 to 12', teamSize: 'Min 01 Max 04', amount: '2000' },
    { id: 8, name: 'Blix - Robo Precision', level: 'Regional-National', international: '', age: '12 to 16', teamSize: 'Min 01 Max 04', amount: '2000' },
    { id: 9, name: 'Lego Master Challenge', level: 'Regional-National', international: '', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '4500' },
    { id: 10, name: 'STEM Balloon Car', level: 'Regional-National', international: '', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '2000' },
    { id: 11, name: 'Entrepreneur Challenge', level: 'National-International', international: 'Italy', age: '08+', teamSize: 'Min 01 Max 02', amount: '4000' },
    { id: 12, name: '1 Kg Lego Sumo', level: 'National-International', international: 'Italy', age: '08+', teamSize: 'Min 01 Max 02', amount: '4000' },
    { id: 13, name: 'Jr. Drone', level: 'National-International', international: 'Italy', age: '08 to 16', teamSize: 'Min 01 Max 04', amount: '3500' },
    { id: 14, name: 'Sr. Robo Race', level: 'National', international: '', age: '16+', teamSize: 'Min 01 Max 02', amount: '4000' },
    { id: 15, name: 'Blix - The Ultimate Maze', level: 'National', international: '', age: '08 to 16', teamSize: 'Min 01 Max 04', amount: '2500' },
    { id: 16, name: 'STEM Water Rocketry', level: 'National', international: '', age: '08 to 16', teamSize: 'Min 01 Max 02', amount: '2000' },
  ];

  const getRowColor = (id) => {
    if (id >= 1 && id <= 10) return 'bg-[#DDEBF7]';
    if (id >= 11 && id <= 13) return 'bg-[#FCE4D6]';
    if (id >= 14 && id <= 16) return 'bg-[#FFF2CC]';
    return 'bg-white';
  };

  return (
    <div className="flex flex-col items-center w-full px-2 py-4">
      <div className="w-full max-w-7xl overflow-hidden rounded-lg shadow-lg border border-gray-300">
        <div className="bg-[#E2EFDA] py-3 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-center text-gray-800">List of Competition</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-center font-medium">
            <thead>
              <tr className="bg-[#9BC2E6] text-gray-800">
                <th className="border border-gray-400 px-3 py-3 w-16">Sr No</th>
                <th className="border border-gray-400 px-4 py-3">Name of Competition</th>
                <th className="border border-gray-400 px-4 py-3">Regional/National/International</th>
                <th className="border border-gray-400 px-4 py-3">International (Italy/-pore)</th>
                <th className="border border-gray-400 px-3 py-3 w-24">Age</th>
                <th className="border border-gray-400 px-4 py-3 w-32">Team Size</th>
                <th className="border border-gray-400 px-3 py-3 w-24">Amount</th>
              </tr>
            </thead>
            <tbody>
              {competitions.map((comp) => (
                <tr key={comp.id} className={`${getRowColor(comp.id)} hover:bg-opacity-80 transition-colors`}>
                  <td className="border border-gray-400 px-2 py-2">{comp.id}</td>
                  <td className="border border-gray-400 px-4 py-2 text-center md:text-left">{comp.name}</td>
                  <td className="border border-gray-400 px-2 py-2">{comp.level}</td>
                  <td className="border border-gray-400 px-2 py-2">{comp.international}</td>
                  <td className="border border-gray-400 px-2 py-2">{comp.age}</td>
                  <td className="border border-gray-400 px-2 py-2 whitespace-nowrap">{comp.teamSize}</td>
                  <td className="border border-gray-400 px-2 py-2">{comp.amount}</td>
                </tr>
              ))}

              {/* Note Section */}
              <tr className="bg-[#C6EFCE]">
                <td rowSpan="3" className="border border-gray-400 px-4 py-4 font-bold text-lg">Note</td>
                <td colSpan="2" className="border border-gray-400 px-4 py-2 font-bold text-xl">Regional-National</td>
                <td colSpan="4" className="border border-gray-400 px-4 py-2 text-xl">Regional qualifiers gain entry to the national level; no direct entry is allowed.</td>
              </tr>
              <tr className="bg-[#C6EFCE]">
                <td colSpan="2" className="border border-gray-400 px-4 py-2 font-bold text-xl">National</td>
                <td colSpan="4" className="border border-gray-400 px-4 py-2 text-xl">Direct Entry in National</td>
              </tr>
              <tr className="bg-[#C6EFCE]">
                <td colSpan="2" className="border border-gray-400 px-4 py-2 font-bold text-xl">Regional-National-International</td>
                <td colSpan="4" className="border border-gray-400 px-4 py-2 text-xl"> Regional qualifiers gain entry to the National level, Further National qualifiers gain entry to the International level.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WSROCompetitionTable;
