'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

const languages = [
  'English', 'German', 'French', 'Italian', 'Spanish', 'Portuguese',
  'Dutch', 'Polish', 'Romanian', 'Czech', 'Hungarian', 'Danish',
  'Swedish', 'Norwegian', 'Finnish'
];

const countries = [
  'Germany', 'France', 'Italy', 'Spain', 'Portugal', 'Netherlands',
  'Poland', 'Romania', 'Czech Republic', 'Hungary', 'Denmark',
  'Sweden', 'Norway', 'Finland', 'Switzerland', 'Austria', 'Belgium'
];

const ageGroups = ['18-20', '21-25', '26-30', '31-35', '36+'];

const eventTypes = ['Conference', 'Fireside', 'Institute', 'Dance', 'Gathering'];

export default function EventFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const clearAllFilters = () => {
    setSelectedLanguages([]);
    setSelectedCountries([]);
    setSelectedAgeGroups([]);
    setSelectedEventTypes([]);
  };

  const activeFiltersCount =
    selectedLanguages.length +
    selectedCountries.length +
    selectedAgeGroups.length +
    selectedEventTypes.length;

  return (
    <>
      {/* Filter Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-primary-purple transition-all shadow-sm"
      >
        <FunnelIcon className="h-5 w-5 text-gray-600" />
        <span className="font-semibold text-gray-700">Filters</span>
        {activeFiltersCount > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-primary-purple to-accent-teal text-white text-xs font-bold flex items-center justify-center">
            {activeFiltersCount}
          </span>
        )}
      </motion.button>

      {/* Filter Modal */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <Dialog.Title className="text-2xl font-bold text-text-dark">
                      Filter Events
                    </Dialog.Title>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Close filters"
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-600" />
                    </button>
                  </div>

                  {/* Filter Sections */}
                  <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                    {/* Languages */}
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-3">
                        Languages
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang}
                            onClick={() =>
                              toggleSelection(lang, selectedLanguages, setSelectedLanguages)
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              selectedLanguages.includes(lang)
                                ? 'bg-gradient-to-r from-primary-purple to-accent-teal text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Countries */}
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-3">
                        Countries
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {countries.map((country) => (
                          <button
                            key={country}
                            onClick={() =>
                              toggleSelection(country, selectedCountries, setSelectedCountries)
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              selectedCountries.includes(country)
                                ? 'bg-gradient-to-r from-primary-purple to-accent-teal text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Age Groups */}
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-3">
                        Age Groups
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {ageGroups.map((age) => (
                          <button
                            key={age}
                            onClick={() =>
                              toggleSelection(age, selectedAgeGroups, setSelectedAgeGroups)
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              selectedAgeGroups.includes(age)
                                ? 'bg-gradient-to-r from-primary-purple to-accent-teal text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {age}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Event Types */}
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-3">
                        Event Types
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        {eventTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() =>
                              toggleSelection(type, selectedEventTypes, setSelectedEventTypes)
                            }
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              selectedEventTypes.includes(type)
                                ? 'bg-gradient-to-r from-primary-purple to-accent-teal text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex gap-3 mt-6 pt-6 border-t">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={clearAllFilters}
                      className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Clear All
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="flex-1 btn-primary"
                    >
                      Apply Filters ({activeFiltersCount})
                    </motion.button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
