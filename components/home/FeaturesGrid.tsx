'use client';

import { motion } from 'framer-motion';
import {
  CalendarDaysIcon,
  UserGroupIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  BookOpenIcon,
  LightBulbIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    id: 1,
    title: 'Event Discovery',
    description: 'Find conferences, firesides, dances, and gatherings happening across Europe.',
    icon: CalendarDaysIcon,
    color: 'from-primary-purple to-primary-blue',
  },
  {
    id: 2,
    title: 'Friendship Matching',
    description: 'Connect with like-minded Young Adults based on interests and location.',
    icon: UserGroupIcon,
    color: 'from-primary-blue to-accent-teal',
  },
  {
    id: 3,
    title: 'Meetup Creation',
    description: 'Organize temple visits, study sessions, sports activities, and more.',
    icon: MapPinIcon,
    color: 'from-accent-teal to-accent-green',
  },
  {
    id: 4,
    title: 'Anonymous Feedback',
    description: 'Share honest thoughts and suggestions to help improve the community.',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-accent-green to-primary-purple',
  },
  {
    id: 5,
    title: 'Multi-language Support',
    description: 'Access the platform in 15+ European languages for everyone.',
    icon: GlobeAltIcon,
    color: 'from-primary-purple to-accent-teal',
  },
  {
    id: 6,
    title: 'Content Hub',
    description: 'Access resources, articles, and materials for personal growth.',
    icon: BookOpenIcon,
    color: 'from-primary-blue to-accent-green',
  },
  {
    id: 7,
    title: 'Planning Tools',
    description: 'Empower leaders with insights and tools to organize better events.',
    icon: LightBulbIcon,
    color: 'from-accent-teal to-primary-purple',
  },
  {
    id: 8,
    title: 'Community Building',
    description: 'Strengthen bonds at local, regional, and area levels.',
    icon: HeartIcon,
    color: 'from-accent-green to-primary-blue',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-purple mb-2">
            Everything You Need
          </h2>
          <p className="text-4xl font-bold tracking-tight text-text-dark sm:text-5xl mb-4">
            Powerful Features for
            <span className="text-gradient"> Connection</span>
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the tools and features designed to help you connect, 
            participate, and grow with Young Adults across Europe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="card card-hover h-full">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-primary-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-purple/20 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Ready to experience all these features?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
