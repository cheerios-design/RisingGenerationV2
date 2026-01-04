'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  BugAntIcon,
  LightBulbIcon,
  HeartIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const feedbackCategories = [
  {
    id: 'bug',
    name: 'Bug Report',
    icon: BugAntIcon,
    description: 'Report technical issues or errors',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'feature',
    name: 'Feature Request',
    icon: LightBulbIcon,
    description: 'Suggest new features or improvements',
    color: 'from-primary-blue to-accent-teal',
  },
  {
    id: 'general',
    name: 'General Feedback',
    icon: ChatBubbleLeftRightIcon,
    description: 'Share your thoughts and experiences',
    color: 'from-primary-purple to-primary-blue',
  },
  {
    id: 'compliment',
    name: 'Compliment',
    icon: HeartIcon,
    description: 'Let us know what you love',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'concern',
    name: 'Concern',
    icon: ExclamationTriangleIcon,
    description: 'Report inappropriate content or behavior',
    color: 'from-amber-500 to-yellow-500',
  },
];

export default function FeedbackPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send to a backend API
    console.log({
      category: selectedCategory,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSelectedCategory('');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  const isFormValid = selectedCategory && name && email && subject && message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-purple/5 via-primary-blue/5 to-accent-teal/5 py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-dark mb-4">
            We Value Your{' '}
            <span className="bg-gradient-to-r from-primary-purple via-primary-blue to-accent-teal bg-clip-text text-transparent">
              Feedback
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your input helps us improve RisingGen and better serve the young adult community 
            across Europe. We read every message and appreciate your insights.
          </p>
        </div>

        {submitted ? (
          // Success Message
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-green to-accent-teal flex items-center justify-center">
              <CheckCircleIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-text-dark mb-2">Thank You!</h2>
            <p className="text-gray-600">
              Your feedback has been submitted successfully. We'll review it and get back 
              to you if needed.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Category Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text-dark mb-4">
                Select Feedback Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedbackCategories.map((category) => {
                  const IconComponent = category.icon;
                  const isSelected = selectedCategory === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`card p-4 text-left transition-all ${
                        isSelected
                          ? 'ring-2 ring-primary-purple shadow-lg'
                          : 'hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-text-dark mb-1">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-2 flex items-center justify-end"
                        >
                          <CheckCircleIcon className="h-5 w-5 text-primary-purple" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="card p-8">
                <h2 className="text-xl font-semibold text-text-dark mb-6">
                  Share Your Feedback
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="John Smith"
                      className="input-field w-full"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="john@example.com"
                      className="input-field w-full"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="Brief description of your feedback"
                    className="input-field w-full"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    placeholder="Please provide as much detail as possible..."
                    className="input-field w-full resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {message.length} characters
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('');
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="btn-secondary"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-text-dark mb-3">
                  Response Time
                </h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to feedback within 3-5 business days. For urgent 
                  concerns, please contact your local church leadership directly.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-text-dark mb-3">
                  Privacy & Confidentiality
                </h3>
                <p className="text-gray-600 text-sm">
                  Your feedback is confidential and will only be shared with relevant team 
                  members working to improve RisingGen. See our{' '}
                  <a href="/privacy" className="text-primary-purple hover:underline">
                    Privacy Policy
                  </a>{' '}
                  for more details.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
