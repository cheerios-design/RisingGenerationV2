// Mock data for RisingGen application
// This file contains sample data for development and demonstration purposes

import { Event, UserProfile, Meetup, Testimonial } from '@/types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'European YA Conference 2026',
    description: 'Join hundreds of Young Adults from across Europe for inspiring workshops, devotionals, and networking opportunities. This three-day conference will feature keynote speakers, breakout sessions, and social activities.',
    type: 'conference',
    startDate: new Date('2026-03-15'),
    endDate: new Date('2026-03-17'),
    location: {
      venue: 'Berlin Conference Center',
      city: 'Berlin',
      country: 'Germany',
      stake: 'Berlin Stake',
      coordinates: {
        lat: 52.5200,
        lng: 13.4050
      }
    },
    languages: ['English', 'German', 'French'],
    ageGroups: ['18-25', '26-35'],
    capacity: 500,
    registered: 450,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    organizer: {
      name: 'European Area YA Committee',
      contact: 'ya.europe@example.com'
    }
  },
  {
    id: '2',
    title: 'Young Adult Dance Night',
    description: 'An evening of music, dancing, and fun with Young Adults from the region.',
    type: 'dance',
    startDate: new Date('2026-02-08'),
    endDate: new Date('2026-02-08'),
    location: {
      venue: 'Paris Community Hall',
      city: 'Paris',
      country: 'France',
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    },
    languages: ['French', 'English'],
    ageGroups: ['18-25', '26-35'],
    capacity: 150,
    registered: 120,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    organizer: {
      name: 'Paris YA Council',
      contact: 'paris.ya@example.com'
    }
  }
];

export const mockProfiles: UserProfile[] = [
  {
    id: '1',
    name: 'Sophie M.',
    age: 24,
    location: {
      city: 'Berlin',
      country: 'Germany'
    },
    interests: ['Gospel study', 'Hiking', 'Photography', 'Languages'],
    languages: ['German', 'English', 'French'],
    bio: 'Looking to connect with other Young Adults who love outdoor adventures and deep gospel discussions!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    privacySettings: {
      showProfile: true,
      showLocation: true
    }
  },
  {
    id: '2',
    name: 'Marco P.',
    age: 28,
    location: {
      city: 'Rome',
      country: 'Italy'
    },
    interests: ['Temple service', 'Soccer', 'Cooking', 'Music'],
    languages: ['Italian', 'English', 'Spanish'],
    bio: 'Soccer enthusiast and temple regular. Love making new friends and organizing group activities!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
    privacySettings: {
      showProfile: true,
      showLocation: true
    }
  }
];

export const mockMeetups: Meetup[] = [
  {
    id: '1',
    type: 'temple',
    title: 'Morning Temple Visit',
    description: 'Join us for an early morning temple session followed by breakfast together.',
    date: new Date('2026-02-10T06:00:00'),
    location: 'Berlin Temple, Germany',
    radius: 50,
    maxParticipants: 10,
    participants: ['user1', 'user2', 'user3', 'user4'],
    creatorId: 'user1',
    visibility: 'public'
  },
  {
    id: '2',
    type: 'sport',
    title: 'Sunday Soccer Match',
    description: 'Friendly soccer match in the park. All skill levels welcome!',
    date: new Date('2026-02-16T15:00:00'),
    location: 'Tiergarten Park, Berlin',
    radius: 20,
    maxParticipants: 18,
    participants: ['user1', 'user2', 'user3', 'user4', 'user5'],
    creatorId: 'user2',
    visibility: 'public'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sophie M.',
    location: 'Berlin, Germany',
    text: 'RisingGen helped me find my closest friends. I met people who share my values and now we have weekly study sessions together!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie'
  },
  {
    id: '2',
    author: 'Marco P.',
    location: 'Rome, Italy',
    text: 'The European Conference was life-changing. I connected with hundreds of Young Adults and felt part of something bigger.',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco'
  }
];

export const mockStats = {
  totalUsers: 12500,
  totalEvents: 450,
  totalMeetups: 1200,
  countriesServed: 28
};
