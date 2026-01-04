'use client';

import { motion } from 'framer-motion';
import FriendshipMatching from '@/components/community/FriendshipMatching';
import CommunityStats from '@/components/community/CommunityStats';

export default function CommunityPage() {
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
              Find Your Community
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Connect with like-minded Young Adults across Europe. 
              Swipe to discover friends who share your interests, values, and passion for the gospel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-dark mb-2">
                How It Works
              </h3>
              <p className="text-gray-600 text-sm">
                Swipe right to like a profile, left to pass. When you both like each other, 
                you'll get each other's contact information to connect directly via email, phone, 
                or WhatsApp. No in-app messaging - just real connections!
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-2xl">←</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Friendship Matching Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <FriendshipMatching />
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CommunityStats />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 py-12 card"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-4">
            Ready to expand your circle?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Update your profile preferences to find the perfect matches. 
            Filter by location, interests, age range, and languages.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Update Preferences
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
