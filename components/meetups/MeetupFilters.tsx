'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FunnelIcon } from '@heroicons/react/24/outline';

const meetupTypes = [
  { value: 'temple', label: 'Temple Visits', icon: '⛪' },
  { value: 'travel', label: 'Travel/Guide', icon: '✈️' },
  { value: 'social', label: 'Social', icon: '🎉' },
  { value: 'spiritual', label: 'Spiritual Study', icon: '📖' },
  { value: 'singing', label: 'Singing/Karaoke', icon: '🎵' },
  { value: 'focus', label: 'Focus/Study', icon: '📚' },
  { value: 'sport', label: 'Sports', icon: '⚽' },
];

export default function MeetupFilters() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [locationRadius, setLocationRadius] = useState(50);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setLocationRadius(50);
  };

  return (
    <div className="card mb-8">
      <div className="flex items-center gap-2 mb-6">
        <FunnelIcon className="h-6 w-6 text-primary-purple" />
        <h3 className="text-xl font-bold text-text-dark">Filter Meetups</h3>
        {selectedTypes.length > 0 && (
          <span className="ml-auto text-sm text-primary-purple font-semibold cursor-pointer hover:underline" onClick={clearFilters}>
            Clear All
          </span>
        )}
      </div>

      {/* Meetup Types */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-text-dark mb-3">Meetup Types</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {meetupTypes.map((type) => (
            <motion.button
              key={type.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleType(type.value)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                selectedTypes.includes(type.value)
                  ? 'bg-gradient-to-br from-primary-purple to-accent-teal text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-3xl">{type.icon}</span>
              <span className="text-xs font-medium text-center leading-tight">
                {type.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Location Radius */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-semibold text-text-dark">
            Location Radius
          </p>
          <span className="text-sm text-primary-purple font-semibold">
            {locationRadius} km
          </span>
        </div>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={locationRadius}
          onChange={(e) => setLocationRadius(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-purple"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10 km</span>
          <span>500 km</span>
        </div>
      </div>
    </div>
  );
}
