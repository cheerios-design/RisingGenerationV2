'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import {
  MapPinIcon,
  HeartIcon,
  XMarkIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

// Mock profiles data
const mockProfiles = [
  {
    id: '1',
    name: 'Sophie M.',
    age: 24,
    location: { city: 'Berlin', country: 'Germany' },
    interests: ['Gospel study', 'Hiking', 'Photography', 'Languages'],
    languages: ['German', 'English', 'French'],
    bio: 'Looking to connect with other Young Adults who love outdoor adventures and deep gospel discussions!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&backgroundColor=b6e3f4',
  },
  {
    id: '2',
    name: 'Marco P.',
    age: 28,
    location: { city: 'Rome', country: 'Italy' },
    interests: ['Temple service', 'Soccer', 'Cooking', 'Music'],
    languages: ['Italian', 'English', 'Spanish'],
    bio: 'Soccer enthusiast and temple regular. Love making new friends and organizing group activities!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco&backgroundColor=c0aede',
  },
  {
    id: '3',
    name: 'Emma L.',
    age: 22,
    location: { city: 'Paris', country: 'France' },
    interests: ['Institute', 'Art', 'Traveling', 'Service'],
    languages: ['French', 'English'],
    bio: 'Art student passionate about the gospel. Would love to meet people for museum visits and institute discussions.',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ffd5dc',
  },
  {
    id: '4',
    name: 'Lucas K.',
    age: 26,
    location: { city: 'Amsterdam', country: 'Netherlands' },
    interests: ['Scripture study', 'Cycling', 'Tech', 'Volunteering'],
    languages: ['Dutch', 'English', 'German'],
    bio: 'Tech professional who loves cycling and scripture study. Let\'s explore the Netherlands together!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas&backgroundColor=ffdfbf',
  },
  {
    id: '5',
    name: 'Anna S.',
    age: 25,
    location: { city: 'Stockholm', country: 'Sweden' },
    interests: ['Singing', 'Nature', 'Gospel conversations', 'Dance'],
    languages: ['Swedish', 'English', 'Norwegian'],
    bio: 'Love singing in the choir and spending time in nature. Looking for friends to join me for worship and adventure!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna&backgroundColor=d1d4f9',
  },
];

export default function FriendshipMatching() {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<typeof mockProfiles>([]);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        handleLike();
      } else {
        handlePass();
      }
    }
  };

  const handleLike = () => {
    if (currentIndex < profiles.length) {
      setMatches([...matches, profiles[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePass = () => {
    if (currentIndex < profiles.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentProfile = profiles[currentIndex];

  if (!currentProfile) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-purple to-accent-teal flex items-center justify-center mb-6"
        >
          <HeartSolidIcon className="h-12 w-12 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-text-dark mb-2">
          You've seen all profiles!
        </h3>
        <p className="text-gray-600 mb-6">Check back later for more matches</p>
        <button
          onClick={() => setCurrentIndex(0)}
          className="btn-primary"
        >
          Review Profiles Again
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Card Stack Container */}
      <div className="relative h-[600px] flex items-center justify-center">
        {/* Show next card in background */}
        {profiles[currentIndex + 1] && (
          <div className="absolute w-full max-w-md">
            <div className="card bg-gray-100 h-[550px] scale-95 opacity-50" />
          </div>
        )}

        {/* Current profile card */}
        <motion.div
          key={currentProfile.id}
          style={{ x, rotate, opacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute w-full max-w-md cursor-grab active:cursor-grabbing"
          whileTap={{ cursor: 'grabbing' }}
        >
          <div className="card overflow-hidden shadow-2xl">
            {/* Profile Image */}
            <div className="relative h-80 bg-gradient-to-br from-primary-purple/20 to-accent-teal/20 flex items-center justify-center">
              <img
                src={currentProfile.photoUrl}
                alt={currentProfile.name}
                className="w-64 h-64 object-contain"
              />
              
              {/* Swipe indicators */}
              <motion.div
                style={{ opacity: useTransform(x, [0, 100], [0, 1]) }}
                className="absolute top-8 right-8 bg-accent-green text-white px-6 py-3 rounded-xl font-bold text-xl rotate-12 shadow-lg"
              >
                LIKE
              </motion.div>
              <motion.div
                style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }}
                className="absolute top-8 left-8 bg-red-500 text-white px-6 py-3 rounded-xl font-bold text-xl -rotate-12 shadow-lg"
              >
                PASS
              </motion.div>
            </div>

            {/* Profile Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-dark">
                    {currentProfile.name}, {currentProfile.age}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span className="text-sm">
                      {currentProfile.location.city}, {currentProfile.location.country}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                  <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-700">
                    {(Math.random() * 2 + 3).toFixed(1)}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {currentProfile.bio}
              </p>

              {/* Interests */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-text-dark mb-2">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="badge badge-purple"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <p className="text-sm font-semibold text-text-dark mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="badge badge-blue"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePass}
          className="w-16 h-16 rounded-full bg-white border-2 border-red-500 flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
          aria-label="Pass"
        >
          <XMarkIcon className="h-8 w-8 text-red-500" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-white border-2 border-primary-blue flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors"
          aria-label="More info"
        >
          <ChatBubbleLeftRightIcon className="h-7 w-7 text-primary-blue" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-purple to-accent-teal flex items-center justify-center shadow-lg hover:shadow-glow transition-all"
          aria-label="Like"
        >
          <HeartIcon className="h-8 w-8 text-white" />
        </motion.button>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          {currentIndex + 1} / {profiles.length}
        </p>
        <div className="w-full max-w-md mx-auto mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / profiles.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-primary-purple to-accent-teal"
          />
        </div>
      </div>

      {/* Matches counter */}
      {matches.length > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-0 right-0 bg-gradient-to-r from-primary-purple to-accent-teal text-white px-4 py-2 rounded-full font-bold shadow-lg"
        >
          {matches.length} {matches.length === 1 ? 'Match' : 'Matches'}
        </motion.div>
      )}
    </div>
  );
}
