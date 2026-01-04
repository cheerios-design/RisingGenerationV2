'use client';

import { motion } from 'framer-motion';
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Meetup type icons (using emojis)
const meetupTypeIcons: Record<string, string> = {
  temple: '⛪',
  travel: '✈️',
  social: '🎉',
  spiritual: '📖',
  singing: '🎵',
  focus: '📚',
  sport: '⚽',
};

const meetupTypeColors: Record<string, string> = {
  temple: 'from-primary-purple to-primary-blue',
  travel: 'from-accent-teal to-accent-green',
  social: 'from-primary-blue to-accent-teal',
  spiritual: 'from-primary-purple to-accent-teal',
  singing: 'from-accent-green to-primary-purple',
  focus: 'from-primary-blue to-accent-green',
  sport: 'from-accent-teal to-primary-purple',
};

// Mock meetups data
const mockMeetups = [
  {
    id: '1',
    type: 'temple' as const,
    title: 'Morning Temple Visit',
    description: 'Join us for an early morning temple session followed by breakfast together.',
    date: new Date('2026-02-10T06:00:00'),
    location: 'Berlin Temple, Germany',
    maxParticipants: 10,
    participants: ['user1', 'user2', 'user3', 'user4'],
    creatorName: 'Sophie M.',
  },
  {
    id: '2',
    type: 'travel' as const,
    title: 'Weekend in Prague',
    description: 'Exploring Prague together! Looking for travel buddies who know the city or want to discover it.',
    date: new Date('2026-02-15T09:00:00'),
    location: 'Prague, Czech Republic',
    maxParticipants: 8,
    participants: ['user1', 'user2', 'user3'],
    creatorName: 'Marco P.',
  },
  {
    id: '3',
    type: 'social' as const,
    title: 'Game Night & Pizza',
    description: 'Casual game night with board games, pizza, and great company!',
    date: new Date('2026-02-08T18:00:00'),
    location: 'Paris Community Center',
    maxParticipants: 15,
    participants: ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'],
    creatorName: 'Emma L.',
  },
  {
    id: '4',
    type: 'spiritual' as const,
    title: 'Book of Mormon Study Group',
    description: 'Weekly deep dive into the Book of Mormon. All levels welcome!',
    date: new Date('2026-02-12T19:00:00'),
    location: 'Amsterdam Stake Center',
    maxParticipants: 12,
    participants: ['user1', 'user2', 'user3', 'user4', 'user5'],
    creatorName: 'Lucas K.',
  },
  {
    id: '5',
    type: 'singing' as const,
    title: 'Hymn Practice & Karaoke',
    description: 'Practice hymns together and have some fun with karaoke afterwards!',
    date: new Date('2026-02-14T17:00:00'),
    location: 'Stockholm Chapel',
    maxParticipants: 20,
    participants: ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7'],
    creatorName: 'Anna S.',
  },
  {
    id: '6',
    type: 'focus' as const,
    title: 'Co-working Study Session',
    description: 'Productive study session at a café. Bring your work, studies, or personal projects!',
    date: new Date('2026-02-09T14:00:00'),
    location: 'Central Café, Berlin',
    maxParticipants: 8,
    participants: ['user1', 'user2', 'user3'],
    creatorName: 'Sophie M.',
  },
  {
    id: '7',
    type: 'sport' as const,
    title: 'Sunday Soccer Match',
    description: 'Friendly soccer match in the park. All skill levels welcome!',
    date: new Date('2026-02-16T15:00:00'),
    location: 'Tiergarten Park, Berlin',
    maxParticipants: 18,
    participants: ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8'],
    creatorName: 'Marco P.',
  },
];

interface MeetupListProps {
  meetups?: typeof mockMeetups;
}

export default function MeetupList({ meetups = mockMeetups }: MeetupListProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const spotsLeft = (meetup: typeof mockMeetups[0]) => {
    if (!meetup.maxParticipants) return 'Unlimited';
    return meetup.maxParticipants - meetup.participants.length;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meetups.map((meetup, index) => {
        const spots = spotsLeft(meetup);
        const isFull = typeof spots === 'number' && spots <= 0;

        return (
          <motion.div
            key={meetup.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="card card-hover h-full flex flex-col">
              {/* Type Badge with Icon */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${
                    meetupTypeColors[meetup.type]
                  } text-white shadow-lg`}
                >
                  <span className="text-2xl">{meetupTypeIcons[meetup.type]}</span>
                  <span className="font-semibold capitalize">{meetup.type}</span>
                </div>
                {isFull && (
                  <span className="badge bg-red-100 text-red-700 border border-red-200">
                    Full
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary-purple transition-colors">
                {meetup.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                {meetup.description}
              </p>

              {/* Meetup Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <CalendarIcon className="h-5 w-5 text-primary-purple flex-shrink-0 mt-0.5" />
                  <span>{formatDate(meetup.date)}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPinIcon className="h-5 w-5 text-primary-purple flex-shrink-0 mt-0.5" />
                  <span>{meetup.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <UserGroupIcon className="h-5 w-5 text-primary-purple" />
                  <span>
                    {meetup.participants.length}
                    {meetup.maxParticipants && ` / ${meetup.maxParticipants}`} joined
                  </span>
                </div>
              </div>

              {/* Creator */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-purple to-accent-teal flex items-center justify-center text-white text-xs font-semibold">
                  {meetup.creatorName.charAt(0)}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Organized by</p>
                  <p className="text-sm font-semibold text-text-dark">
                    {meetup.creatorName}
                  </p>
                </div>
              </div>

              {/* Join Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isFull}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  isFull
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-purple to-accent-teal text-white hover:shadow-glow'
                }`}
              >
                {isFull ? 'Meetup Full' : 'Join Meetup'}
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
