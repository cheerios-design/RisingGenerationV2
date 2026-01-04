# RisingGen - Young Adults Platform for Europe

A modern, web-first platform designed to strengthen unity, connection, and participation among Young Adults (18-35) across Europe. Built with Next.js 14, TypeScript, and Tailwind CSS.

![RisingGen Banner](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=300&fit=crop)

## 🌟 Overview

RisingGen is a comprehensive platform that helps Young Adults across Europe:
- **Discover Events**: Find conferences, firesides, dances, and gatherings
- **Connect with Community**: Meet like-minded Young Adults through friendship matching
- **Create Meetups**: Organize local activities from temple visits to sports
- **Share Feedback**: Provide anonymous input to improve community engagement
- **Access Resources**: Multi-language support in 15+ European languages

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4
- **UI Components**: [Headless UI](https://headlessui.com/) v2.0
- **Icons**: [Heroicons](https://heroicons.com/) v2.1
- **Animations**: [Framer Motion](https://www.framer.com/motion/) v11.0
- **Authentication**: NextAuth.js v4.24 (structure only)
- **Internationalization**: next-intl v3.19

## 📁 Project Structure

```
RisingGenerationV2/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── events/
│   │   └── page.tsx         # Events discovery page
│   ├── community/
│   │   └── page.tsx         # Community matching page
│   └── meetups/
│       └── page.tsx         # Meetups page
├── components/              # React components
│   ├── layout/
│   │   ├── Navigation.tsx   # Main navigation with mobile menu
│   │   └── Footer.tsx       # Site footer
│   ├── home/
│   │   ├── Hero.tsx         # Hero section with stats
│   │   ├── FeaturesGrid.tsx # Features showcase
│   │   ├── UpcomingEvents.tsx
│   │   └── CommunityHighlights.tsx
│   ├── events/
│   │   ├── EventCalendar.tsx
│   │   ├── EventFilters.tsx
│   │   └── EventViewToggle.tsx
│   ├── community/
│   │   ├── FriendshipMatching.tsx
│   │   └── CommunityStats.tsx
│   └── meetups/
│       ├── MeetupList.tsx
│       ├── MeetupFilters.tsx
│       └── CreateMeetupButton.tsx
├── lib/
│   └── mockData.ts          # Sample data for development
├── types/
│   └── index.ts             # TypeScript type definitions
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Design System

### Colors

```javascript
colors: {
  'primary-purple': '#6B46C1',
  'primary-blue': '#2563EB',
  'accent-teal': '#14B8A6',
  'accent-green': '#10B981',
  'text-light': '#F3F4F6',
  'text-dark': '#1F2937',
}
```

### Design Principles

- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Gradient Backgrounds**: Purple → Blue → Teal color schemes
- **Smooth Animations**: Framer Motion for engaging interactions
- **Mobile-First**: Responsive design for all screen sizes
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RisingGenerationV2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Features

### 1. Homepage

- **Hero Section**: Animated hero with gradient background and live stats counter
- **Features Grid**: 8 feature cards showcasing platform capabilities
- **Upcoming Events**: Preview of next events with quick registration
- **Community Highlights**: Testimonials and success stories

### 2. Events Page

**Key Features:**
- Advanced filtering by language, location, age groups, and event types
- Multiple view modes (List, Grid, Calendar)
- Event bookmarking
- Capacity tracking with progress bars
- Registration functionality

**Event Types:**
- Conferences
- Firesides
- Institute classes
- Dances
- Regional gatherings

### 3. Community Page

**Key Features:**
- Tinder-style swipe interface for profile discovery
- Profile cards with photos, interests, and languages
- Swipe right to like, left to pass
- Match tracking and notifications
- Community statistics dashboard

**Note:** No real-time chat - matches share contact information directly

### 4. Meetups Page

**Key Features:**
- 7 meetup types:
  - ⛪ Temple visits
  - ✈️ Travel/local guide
  - 🎉 Social activities
  - 📖 Spiritual study
  - 🎵 Singing/karaoke
  - 📚 Focus/study sessions
  - ⚽ Sports/workout
- Create custom meetups with modal form
- Location-based filtering
- Participant management

## 🎯 Key Components

### Navigation Component

- Responsive design with mobile hamburger menu
- Language selector (15+ languages)
- User profile access
- Smooth transitions

### Event Calendar

- List, grid, and calendar views
- Advanced filtering options
- Bookmark functionality
- Real-time capacity tracking

### Friendship Matching

- Swipe-based interface using Framer Motion
- Drag gestures for interaction
- Visual feedback for like/pass actions
- Progress tracking

### Meetup Creation

- Modal form with validation
- 7 meetup type options
- Date/time picker
- Location input
- Participant limits
- Visibility settings

## 🌍 Internationalization

Supports 15+ European languages:
- English, German, French, Italian, Spanish
- Portuguese, Dutch, Polish, Romanian
- Czech, Hungarian, Danish, Swedish
- Norwegian, Finnish

## 🔒 Authentication (Structure Only)

The application includes NextAuth.js setup structure for future authentication implementation. Currently uses placeholder UI elements.

## 📊 Data Structure

### Event Type
```typescript
interface Event {
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
  imageUrl: string;
  organizer: {
    name: string;
    contact: string;
  };
}
```

### User Profile Type
```typescript
interface UserProfile {
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
```

### Meetup Type
```typescript
interface Meetup {
  id: string;
  type: 'temple' | 'travel' | 'social' | 'spiritual' | 'singing' | 'focus' | 'sport';
  title: string;
  description: string;
  date: Date;
  location: string;
  radius: number;
  maxParticipants?: number;
  participants: string[];
  creatorId: string;
  visibility: 'public' | 'filtered';
}
```

## 🎨 Custom Tailwind Classes

```css
.glass-card          /* Glassmorphism effect */
.gradient-bg         /* Main gradient background */
.hero-bg            /* Hero section gradient */
.btn-primary        /* Primary button style */
.btn-secondary      /* Secondary button style */
.badge              /* Badge component */
.text-gradient      /* Gradient text effect */
```

## 📝 Development Notes

### Mock Data

All data is currently mocked in `/lib/mockData.ts`. This includes:
- Sample events
- User profiles
- Meetups
- Testimonials
- Statistics

### Client vs Server Components

- **Server Components**: Page layouts, static content
- **Client Components**: All interactive elements (marked with `'use client'`)

### Form Validation

Currently implements client-side validation only. Forms include:
- Event registration
- Meetup creation
- Profile updates
- Filter selections

## 🚧 What's NOT Included

- ❌ Real-time chat/messaging
- ❌ Backend/API implementation
- ❌ Database integration
- ❌ Payment processing
- ❌ Deep Church system integrations
- ❌ Actual authentication flow

## 🔮 Future Enhancements

Potential additions for production:
- Backend API with database
- Real authentication system
- Email notifications
- Push notifications
- Advanced analytics
- Content management system
- Admin dashboard
- Event check-in system
- Feedback collection system

## 🤝 Contributing

This is a demonstration project. For production use:
1. Implement proper backend
2. Add authentication
3. Connect to real database
4. Add proper error handling
5. Implement analytics
6. Add automated testing
7. Set up CI/CD pipeline

## 📄 License

This project is created for demonstration purposes.

## 👥 Contact

For questions or feedback about RisingGen:
- Email: contact@risinggen.org
- Website: https://risinggen.org

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Headless UI for accessible components
- Framer Motion for smooth animations
- The European Young Adult community for inspiration

---

**Built with ❤️ for Young Adults across Europe**

