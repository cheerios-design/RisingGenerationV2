// Type definitions for RisingGen application

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'conference' | 'fireside' | 'institute' | 'dance' | 'gathering';
  startDate: Date;
  endDate: Date;
  location: {
    venue: string;
    city: string;
    country: string;
    stake?: string;
  };
  languages: string[];
  ageGroups: string[];
  capacity: number;
  registered: number;
  price?: number;
  imageUrl: string;
  organizer: {
    name: string;
    contact: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: {
    city: string;
    country: string;
  };
  interests: string[];
  languages: string[];
  bio: string;
  photoUrl: string;
  privacySettings: {
    showProfile: boolean;
    showLocation: boolean;
  };
}

export interface Meetup {
  id: string;
  type: 'temple' | 'travel' | 'social' | 'spiritual' | 'singing' | 'focus' | 'sport';
  title: string;
  description: string;
  date: Date;
  location: string;
  radius: number; // km
  maxParticipants?: number;
  participants: string[]; // user IDs
  creatorId: string;
  visibility: 'public' | 'filtered';
}

export interface EventFilters {
  languages: string[];
  locations: {
    area?: string;
    country?: string;
    stake?: string;
  };
  ageGroups: string[];
  eventTypes: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface CommunityFilters {
  ageRange: [number, number];
  locationRadius: number; // km
  interests: string[];
  languages: string[];
}

export interface MeetupFilters {
  types: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  locationRadius: number; // km
}

export type ViewMode = 'list' | 'grid' | 'calendar';

export interface Stats {
  totalUsers: number;
  totalEvents: number;
  totalMeetups: number;
  countriesServed: number;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  text: string;
  photoUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}
