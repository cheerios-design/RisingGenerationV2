'use client';

import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    id: '1',
    label: 'Active Members',
    value: '12,500+',
    icon: UserGroupIcon,
    color: 'from-primary-purple to-primary-blue',
    description: 'Young Adults across Europe',
  },
  {
    id: '2',
    label: 'Friendships Formed',
    value: '3,200+',
    icon: HeartIcon,
    color: 'from-primary-blue to-accent-teal',
    description: 'Meaningful connections made',
  },
  {
    id: '3',
    label: 'Active Conversations',
    value: '8,500+',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-accent-teal to-accent-green',
    description: 'Messages exchanged monthly',
  },
  {
    id: '4',
    label: 'Cities Represented',
    value: '450+',
    icon: MapPinIcon,
    color: 'from-accent-green to-primary-purple',
    description: 'Across 28 countries',
  },
];

export default function CommunityStats() {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-text-dark mb-2">
          Community by the Numbers
        </h2>
        <p className="text-gray-600">
          See the impact of connection across Europe
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="card card-hover text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all`}
                  >
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-text-dark mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
