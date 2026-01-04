'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const meetupTypes = [
  { value: 'temple', label: 'Temple Visit', icon: '⛪' },
  { value: 'travel', label: 'Travel/Guide', icon: '✈️' },
  { value: 'social', label: 'Social Activity', icon: '🎉' },
  { value: 'spiritual', label: 'Spiritual Study', icon: '📖' },
  { value: 'singing', label: 'Singing/Karaoke', icon: '🎵' },
  { value: 'focus', label: 'Focus/Study Session', icon: '📚' },
  { value: 'sport', label: 'Sports/Workout', icon: '⚽' },
];

export default function CreateMeetupButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxParticipants: '',
    visibility: 'public',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating meetup:', formData);
    // Handle meetup creation
    setIsOpen(false);
    // Reset form
    setFormData({
      type: '',
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      maxParticipants: '',
      visibility: 'public',
    });
  };

  return (
    <>
      {/* Create Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 btn-primary shadow-lg"
      >
        <PlusIcon className="h-5 w-5" />
        <span>Create Meetup</span>
      </motion.button>

      {/* Create Meetup Modal */}
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <Dialog.Title className="text-2xl font-bold text-text-dark">
                      Create a Meetup
                    </Dialog.Title>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Close"
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-600" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Meetup Type */}
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">
                        Meetup Type *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {meetupTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, type: type.value })
                            }
                            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                              formData.type === type.value
                                ? 'bg-gradient-to-br from-primary-purple to-accent-teal text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <span className="text-2xl">{type.icon}</span>
                            <span className="text-xs font-medium text-center leading-tight">
                              {type.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-semibold text-text-dark mb-2"
                      >
                        Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        required
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        className="input-field"
                        placeholder="e.g., Sunday Soccer Match"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-text-dark mb-2"
                      >
                        Description *
                      </label>
                      <textarea
                        id="description"
                        required
                        rows={3}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        className="input-field resize-none"
                        placeholder="What's this meetup about?"
                      />
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-semibold text-text-dark mb-2"
                        >
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-semibold text-text-dark mb-2"
                        >
                          Time *
                        </label>
                        <input
                          type="time"
                          id="time"
                          required
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-semibold text-text-dark mb-2"
                      >
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="input-field"
                        placeholder="e.g., Tiergarten Park, Berlin"
                      />
                    </div>

                    {/* Max Participants */}
                    <div>
                      <label
                        htmlFor="maxParticipants"
                        className="block text-sm font-semibold text-text-dark mb-2"
                      >
                        Max Participants (optional)
                      </label>
                      <input
                        type="number"
                        id="maxParticipants"
                        min="2"
                        value={formData.maxParticipants}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            maxParticipants: e.target.value,
                          })
                        }
                        className="input-field"
                        placeholder="Leave empty for unlimited"
                      />
                    </div>

                    {/* Visibility */}
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">
                        Visibility
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="visibility"
                            value="public"
                            checked={formData.visibility === 'public'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                visibility: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-primary-purple focus:ring-primary-purple"
                          />
                          <span className="text-sm text-gray-700">
                            Public (Everyone can see)
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="visibility"
                            value="filtered"
                            checked={formData.visibility === 'filtered'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                visibility: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-primary-purple focus:ring-primary-purple"
                          />
                          <span className="text-sm text-gray-700">
                            Filtered (Match preferences)
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="flex-1 btn-primary"
                      >
                        Create Meetup
                      </motion.button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
