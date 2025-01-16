import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import CompetitionHeader from './CompetitionHeader';
import SearchAndFilters from './SearchAndFilters';
import CompetitionGrid from './CompetitionGrid';
import { getCompetitions } from '../../Api/api';
import Navbar from '../Navbar';
import FooterSection from '../Footer/FooterSection';


const CompetitionPage = () => {
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    level: '',
    priceRange: '',
    dateRange: '',
    teamSize: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchCompetitions();
  }, []);

  useEffect(() => {
    filterCompetitions();
  }, [searchTerm, filters, competitions]);

  const fetchCompetitions = async () => {
    try {
      setLoading(true);
      const data = await getCompetitions();
      setCompetitions(data);
      setFilteredCompetitions(data);
    } catch (error) {
      console.error('Error fetching competitions:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCompetitions = () => {
    let filtered = [...competitions];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(comp => 
        comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comp.venue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Level filter
    if (filters.level) {
      filtered = filtered.filter(comp => comp.level === filters.level);
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(comp => comp.fees >= min && comp.fees <= max);
    }

    // Date range filter
    if (filters.dateRange) {
      const today = new Date();
      switch (filters.dateRange) {
        case 'week':
          const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
          filtered = filtered.filter(comp => new Date(comp.date) <= nextWeek);
          break;
        case 'month':
          const nextMonth = new Date(today.setMonth(today.getMonth() + 1));
          filtered = filtered.filter(comp => new Date(comp.date) <= nextMonth);
          break;
        case 'upcoming':
          filtered = filtered.filter(comp => new Date(comp.date) > today);
          break;
      }
    }

    // Team size filter
    if (filters.teamSize) {
      const size = Number(filters.teamSize);
      filtered = filtered.filter(comp => comp.maximum_teams === size);
    }

    setFilteredCompetitions(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      level: '',
      priceRange: '',
      dateRange: '',
      teamSize: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(Boolean) || searchTerm;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 pt-20">
      <CompetitionHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          <SearchAndFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            clearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <CompetitionGrid 
            competitions={filteredCompetitions}
            loading={loading}
          />
        </div>
      </div>
    </div>
<FooterSection />
    </>
  );
};

export default CompetitionPage;