'use client';

import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Community', href: '/community' },
  { name: 'Meetups', href: '/meetups' },
  { name: 'Feedback', href: '/feedback' },
  { name: 'About', href: '/about' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section (viewport height)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Track if user has scrolled
      setIsScrolled(scrollPosition > 50);
      
      // White links only while scrolling within hero (not at the very top)
      setIsInHeroSection(scrollPosition > 50 && scrollPosition < heroHeight - 100);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isInHeroSection ? 'text-white' : 'text-text-dark';
  const hoverColor = isInHeroSection ? 'hover:text-white/80' : 'hover:text-primary-purple';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">RisingGen</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logos/RG_Avatar_Purple.svg"
                alt="RisingGen Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold hidden sm:inline" style={{ color: isInHeroSection ? 'white' : undefined }}>
                RisingGen
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${textColor}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${textColor} ${hoverColor} transition-colors relative group`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-accent-teal group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right side - Language & Profile */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          {/* Language selector */}
          <div className="relative">
            <button
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${textColor} ${hoverColor} transition-colors`}
              aria-label="Select language"
            >
              <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
              <span className="uppercase">{selectedLanguage}</span>
            </button>
          </div>

          {/* User profile icon placeholder */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-purple to-accent-teal flex items-center justify-center text-white font-semibold"
            aria-label="User profile"
          >
            U
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>
          
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">RisingGen</span>
                  <div className="flex items-center gap-3">
                    <img
                      src="/logos/RG_Avatar_Purple.svg"
                      alt="RisingGen Logo"
                      className="h-10 w-auto"
                    />
                    <span className="text-xl font-bold text-text-dark">
                      RisingGen
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-text-dark"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-dark hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-text-dark mb-2">Language</p>
                      <div className="grid grid-cols-2 gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => setSelectedLanguage(lang.code)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedLanguage === lang.code
                                ? 'bg-gradient-to-r from-primary-purple to-accent-teal text-white'
                                : 'bg-gray-100 text-text-dark hover:bg-gray-200'
                            }`}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button className="w-full rounded-lg bg-gradient-to-r from-primary-purple to-accent-teal px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:shadow-glow transition-all">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
