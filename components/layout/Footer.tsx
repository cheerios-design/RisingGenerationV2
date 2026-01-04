'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const footerLinks = {
  about: [
    { name: 'Our Mission', href: '/about' },
    { name: 'Team', href: '/about#team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  quickLinks: [
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
    { name: 'Meetups', href: '/meetups' },
    { name: 'Feedback', href: '/feedback' },
  ],
  resources: [
    { name: 'Planning Guide', href: '/resources/planning-guide' },
    { name: 'Knowledge Base', href: '/resources/knowledge-base' },
    { name: 'FAQs', href: '/resources/faqs' },
    { name: 'Support', href: '/resources/support' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '👥' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ],
};

const supportedLanguages = [
  'English', 'Deutsch', 'Français', 'Italiano', 'Español', 'Português',
  'Nederlands', 'Polski', 'Română', 'Čeština', 'Magyar', 'Dansk',
  'Svenska', 'Norsk', 'Suomi'
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-purple/10 via-primary-blue/10 to-accent-teal/10 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-text-dark mb-4">
              About RisingGen
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Strengthening unity, connection, and participation among Young Adults (18-35) 
              across Europe through meaningful events, community, and shared experiences.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-purple to-accent-teal flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-purple to-accent-teal bg-clip-text text-transparent">
                RisingGen
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-text-dark mb-4">
              Quick Links
            </h3>
            <ul role="list" className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-purple transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-text-dark mb-4">
              Resources
            </h3>
            <ul role="list" className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-purple transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-text-dark mb-4">
              Connect
            </h3>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-xl hover:shadow-md transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Subscribe to our newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple"
                  aria-label="Email for newsletter"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-primary-purple to-accent-teal px-4 py-2 text-sm font-semibold text-white hover:shadow-glow transition-all"
                >
                  Join
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Language Support Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-semibold">🌍 Available in 15+ Languages:</span>
          </p>
          <p className="text-xs text-gray-500">
            {supportedLanguages.join(' • ')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} RisingGen. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.about.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-primary-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
