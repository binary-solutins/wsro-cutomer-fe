import React from 'react';
import { Download, Search, SlidersHorizontal, X } from 'lucide-react';

const SearchAndFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  filters, 
  setFilters, 
  showFilters, 
  setShowFilters,
  clearFilters,
  hasActiveFilters
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {/* Search Bar */}
        <div className="flex-1 min-w-[280px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search competitions..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        

        {/* Filter Toggle Button */}

        <button
  onClick={() => window.open('https://drive.google.com/file/d/13Un64aI74-LQ9q9GE2mwSv18oAxRt5QU/view?usp=sharing',
'_blank')}
  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-white transition-colors"
>
  <Download className="w-5 h-5" />
  <span>Download Rule Book</span>
</button>

<button
  onClick={() => window.open('https://drive.google.com/file/d/1B-bmIqNw5OFbyOICrVMcM4cH4JJhWTUn/view?usp=sharing', '_blank')}
  className="flex items-center gap-2 px-2 py-3 rounded-xl bg-primary text-white transition-colors"
>
  <Download className="w-5 h-5" />
  <span>Download Track Manual</span>
</button>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>

        

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <X className="w-5 h-5" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-sm">
          {/* Level Filter */}
          <div className="space-y-2">
                    </div>

          {/* Price Range Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">All Prices</option>
              <option value="0-1000">₹0 - ₹1,000</option>
              <option value="1001-5000">₹1,001 - ₹5,000</option>
              <option value="5001-10000">₹5,001 - ₹10,000</option>
              <option value="10001-999999">₹10,000+</option>
            </select>
          </div>

          {/* Date Range Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Time Frame</label>
            <select
              value={filters.dateRange}
              onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Any Time</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>

          {/* Team Size Filter */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Max Team Size</label>
            <select
              value={filters.teamSize}
              onChange={(e) => setFilters({ ...filters, teamSize: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Any Size</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4">4 Members</option>
              <option value="5">5+ Members</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;