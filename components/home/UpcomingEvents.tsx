'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Mock upcoming events data
const upcomingEvents = [
  {
    id: '1',
    title: 'European YA Conference 2026',
    description: 'Join hundreds of Young Adults from across Europe for inspiring workshops, devotionals, and networking.',
    type: 'conference',
    date: 'March 15-17, 2026',
    location: 'Berlin, Germany',
    participants: 450,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
  {
    id: '2',
    title: 'Young Adult Dance Night',
    description: 'An evening of music, dancing, and fun with Young Adults from the region.',
    type: 'dance',
    date: 'February 8, 2026',
    location: 'Paris, France',
    participants: 120,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
  },
  {
    id: '3',
    title: 'Fireside with Area Leaders',
    description: 'Interactive fireside discussion on faith, purpose, and navigating young adulthood.',
    type: 'fireside',
    date: 'February 22, 2026',
    location: 'Rome, Italy',
    participants: 85,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
  },
  {
    id: '4',
    title: 'Institute Weekend Retreat',
    description: 'Deepen your gospel understanding in a beautiful mountain setting.',
    type: 'institute',
    date: 'March 1-3, 2026',
    location: 'Swiss Alps',
    participants: 60,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  },
];

const eventTypeColors: Record<string, string> = {
  conference: 'bg-primary-purple/10 text-primary-purple',
  dance: 'bg-accent-teal/10 text-accent-teal',
  fireside: 'bg-primary-blue/10 text-primary-blue',
  institute: 'bg-accent-green/10 text-accent-green',
};

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary-purple mb-2">
              What's Happening
            </h2>
            <p className="text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
              Upcoming Events
            </p>
          </div>
          <Link href="/events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 text-primary-purple font-semibold hover:gap-3 transition-all"
            >
              View All Events
              <ArrowRightIcon className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="card card-hover overflow-hidden p-0 h-full flex flex-col">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${event.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`badge ${eventTypeColors[event.type]} backdrop-blur-sm`}>
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-primary-purple transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                    {event.description}
                  </p>

                  {/* Event Meta */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserGroupIcon className="h-4 w-4" />
                      <span>{event.participants} registered</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-primary-purple to-accent-teal text-white font-medium text-sm hover:shadow-glow transition-all"
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <Link href="/events">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden flex items-center gap-2 mx-auto mt-8 text-primary-purple font-semibold"
          >
            View All Events
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
