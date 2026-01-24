'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import EventCalendar from '@/components/events/EventCalendar';
import EventFilters from '@/components/events/EventFilters';
import EventViewToggle from '@/components/events/EventViewToggle';
import { mockEvents } from '@/lib/mockData';

// Dynamically import EventMap to avoid SSR issues with Leaflet
const EventMap = dynamic(() => import('@/components/events/EventMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

type ViewMode = 'list' | 'grid' | 'calendar' | 'map';

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="hero-bg py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
              Discover Events
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Find conferences, firesides, dances, and gatherings happening 
              across Europe. Connect with Young Adults and create unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <EventFilters />
            <div className="flex items-center gap-4">
              <EventViewToggle
                currentView={viewMode}
                onViewChange={setViewMode}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {viewMode === 'list' && <EventCalendar />}
          {viewMode === 'grid' && (
            <div className="text-center py-12 text-gray-500">
              Grid view coming soon...
            </div>
          )}
          {viewMode === 'calendar' && (
            <div className="text-center py-12 text-gray-500">
              Calendar view coming soon...
            </div>
          )}
          {viewMode === 'map' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Locations</h2>
                <p className="text-gray-600">
                  Explore events across Europe on the interactive map. Click on markers to see event details.
                </p>
              </div>
              <EventMap 
                events={mockEvents}
                onEventClick={(eventId) => {
                  console.log('Event clicked:', eventId);
                  // You can add navigation or modal logic here
                }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
