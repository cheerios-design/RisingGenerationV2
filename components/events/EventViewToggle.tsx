'use client';

import { motion } from 'framer-motion';
import {
  ListBulletIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

type ViewMode = 'list' | 'grid' | 'calendar';

interface EventViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function EventViewToggle({
  currentView,
  onViewChange,
}: EventViewToggleProps) {
  const views = [
    { mode: 'list' as ViewMode, icon: ListBulletIcon, label: 'List' },
    { mode: 'grid' as ViewMode, icon: Squares2X2Icon, label: 'Grid' },
    { mode: 'calendar' as ViewMode, icon: CalendarDaysIcon, label: 'Calendar' },
  ];

  return (
    <div className="inline-flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
      {views.map(({ mode, icon: Icon, label }) => {
        const isActive = currentView === mode;
        return (
          <motion.button
            key={mode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onViewChange(mode)}
            className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              isActive
                ? 'text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            aria-label={`${label} view`}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.div
                layoutId="activeView"
                className="absolute inset-0 bg-gradient-to-r from-primary-purple to-accent-teal rounded-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Icon className="h-5 w-5" />
              <span className="hidden sm:inline">{label}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
