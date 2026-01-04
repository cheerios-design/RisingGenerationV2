'use client';

import { motion } from 'framer-motion';
import MeetupList from '@/components/meetups/MeetupList';
import MeetupFilters from '@/components/meetups/MeetupFilters';
import CreateMeetupButton from '@/components/meetups/CreateMeetupButton';

export default function MeetupsPage() {
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
              Join Local Meetups
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Connect with Young Adults nearby through temple visits, sports, study sessions, 
              and more. Create your own meetup or join existing ones.
            </p>
            <CreateMeetupButton />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-3">⛪</div>
              <h3 className="font-semibold text-text-dark mb-1">Temple Visits</h3>
              <p className="text-sm text-gray-600">
                Coordinate temple sessions and strengthen your faith together
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-semibold text-text-dark mb-1">Social Activities</h3>
              <p className="text-sm text-gray-600">
                Game nights, dinners, and casual hangouts in your area
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-semibold text-text-dark mb-1">Gospel Study</h3>
              <p className="text-sm text-gray-600">
                Join study groups and deepen your understanding together
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MeetupFilters />
        </motion.div>

        {/* Meetups List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-text-dark">
              Upcoming Meetups
            </h2>
            <p className="text-sm text-gray-600">
              Showing meetups within 50 km
            </p>
          </div>
          <MeetupList />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 py-12 card"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-4">
            Don't see what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Create your own meetup and invite others to join! 
            Whether it's a temple visit, study session, or sports activity, 
            we'll help you find the right people.
          </p>
          <CreateMeetupButton />
        </motion.div>
      </div>
    </div>
  );
}
