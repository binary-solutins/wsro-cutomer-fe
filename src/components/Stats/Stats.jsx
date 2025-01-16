import React from 'react';
import StatCard from './StatCard';

const Stats = () => {
const stats = [
    { number: '19k', label: 'Visitors' },
    { number: '100+', label: 'Investors' },
    { number: '1.1k', label: 'Robots Built' },
    { number: '200+', label: 'Start-Ups' },
    { number: '400+', label: 'Entrepreneurs' },
    { number: '1k+', label: 'Scientists' }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;