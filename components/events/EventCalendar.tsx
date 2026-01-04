'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon, BookmarkIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';

// Mock events data
const mockEvents = [
  {
    id: '1',
    title: 'European YA Conference 2026',
    description: 'Join hundreds of Young Adults from across Europe for inspiring workshops, devotionals, and networking opportunities. This three-day conference will feature keynote speakers, breakout sessions, and social activities.',
    type: 'conference',
    startDate: new Date('2026-03-15'),
    endDate: new Date('2026-03-17'),
    location: { venue: 'Berlin Conference Center', city: 'Berlin', country: 'Germany' },
    languages: ['English', 'German', 'French'],
    ageGroups: ['18-25', '26-35'],
    capacity: 500,
    registered: 450,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
  {
    id: '2',
    title: 'Young Adult Dance Night',
    description: 'An evening of music, dancing, and fun with Young Adults from the region.',
    type: 'dance',
    startDate: new Date('2026-02-08'),
    endDate: new Date('2026-02-08'),
    location: { venue: 'Paris Community Hall', city: 'Paris', country: 'France' },
    languages: ['French', 'English'],
    ageGroups: ['18-25', '26-35'],
    capacity: 150,
    registered: 120,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
  },
  {
    id: '3',
    title: 'Fireside with Area Leaders',
    description: 'Interactive fireside discussion on faith, purpose, and navigating young adulthood.',
    type: 'fireside',
    startDate: new Date('2026-02-22'),
    endDate: new Date('2026-02-22'),
    location: { venue: 'Rome Stake Center', city: 'Rome', country: 'Italy' },
    languages: ['Italian', 'English'],
    ageGroups: ['18-25', '26-35', '36+'],
    capacity: 100,
    registered: 85,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
  },
  {
    id: '4',
    title: 'Institute Weekend Retreat',
    description: 'Deepen your gospel understanding in a beautiful mountain setting.',
    type: 'institute',
    startDate: new Date('2026-03-01'),
    endDate: new Date('2026-03-03'),
    location: { venue: 'Alpine Retreat Center', city: 'Interlaken', country: 'Switzerland' },
    languages: ['German', 'English', 'French'],
    ageGroups: ['18-25', '26-35'],
    capacity: 80,
    registered: 60,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  },
  {
    id: '5',
    title: 'Regional Gathering - Nordic',
    description: 'Connect with Young Adults from across the Nordic region for a weekend of activities and spiritual enrichment.',
    type: 'gathering',
    startDate: new Date('2026-03-28'),
    endDate: new Date('2026-03-29'),
    location: { venue: 'Stockholm Conference Hall', city: 'Stockholm', country: 'Sweden' },
    languages: ['Swedish', 'English', 'Danish', 'Norwegian'],
    ageGroups: ['18-25', '26-35'],
    capacity: 200,
    registered: 165,
    imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800',
  },
  {
    id: '6',
    title: 'Young Adult Service Day',
    description: 'Make a difference in the community through service projects and volunteer work.',
    type: 'gathering',
    startDate: new Date('2026-02-14'),
    endDate: new Date('2026-02-14'),
    location: { venue: 'Various Locations', city: 'Amsterdam', country: 'Netherlands' },
    languages: ['Dutch', 'English'],
    ageGroups: ['18-25', '26-35', '36+'],
    capacity: 100,
    registered: 78,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
  },
];

const eventTypeColors: Record<string, string> = {
  conference: 'bg-primary-purple/10 text-primary-purple border-primary-purple/20',
  dance: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
  fireside: 'bg-primary-blue/10 text-primary-blue border-primary-blue/20',
  institute: 'bg-accent-green/10 text-accent-green border-accent-green/20',
  gathering: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
};

interface EventCalendarProps {
  events?: typeof mockEvents;
}

export default function EventCalendar({ events = mockEvents }: EventCalendarProps) {
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Set<string>>(new Set());

  const toggleBookmark = (eventId: string) => {
    setBookmarkedEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const formatDateRange = (start: Date, end: Date) => {
    if (start.toDateString() === end.toDateString()) {
      return formatDate(start);
    }
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  return (
    <div className="space-y-6">
      {events.map((event, index) => {
        const isBookmarked = bookmarkedEvents.has(event.id);
        const spotsLeft = event.capacity - event.registered;
        const percentFilled = (event.registered / event.capacity) * 100;

        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="card card-hover overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Event Image */}
              <div className="relative lg:w-80 h-48 lg:h-auto overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${event.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Event Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`badge ${eventTypeColors[event.type]} backdrop-blur-sm border`}>
                    {event.type}
                  </span>
                </div>

                {/* Bookmark Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleBookmark(event.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {isBookmarked ? (
                    <BookmarkSolidIcon className="h-5 w-5 text-primary-purple" />
                  ) : (
                    <BookmarkIcon className="h-5 w-5 text-gray-600" />
                  )}
                </motion.button>
              </div>

              {/* Event Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-dark mb-2 hover:text-primary-purple transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Meta Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarIcon className="h-5 w-5 text-primary-purple" />
                      <span>{formatDateRange(event.startDate, event.endDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPinIcon className="h-5 w-5 text-primary-purple" />
                      <span>{event.location.city}, {event.location.country}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <UserGroupIcon className="h-5 w-5 text-primary-purple" />
                      <span>{event.registered} / {event.capacity} registered</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ClockIcon className="h-5 w-5 text-primary-purple" />
                      <span>{event.ageGroups.join(', ')}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.languages.map((lang) => (
                      <span
                        key={lang}
                        className="badge badge-purple text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Capacity Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        {spotsLeft} spots left
                      </span>
                      <span className="text-gray-600">
                        {Math.round(percentFilled)}% filled
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentFilled}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full ${
                          percentFilled >= 90
                            ? 'bg-red-500'
                            : percentFilled >= 70
                            ? 'bg-yellow-500'
                            : 'bg-gradient-to-r from-primary-purple to-accent-teal'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 btn-primary py-3"
                  >
                    Register Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary py-3 px-6"
                  >
                    Details
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
