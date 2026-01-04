'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: '1',
    author: 'Sophie M.',
    location: 'Berlin, Germany',
    text: 'RisingGen helped me find my closest friends. I met people who share my values and now we have weekly study sessions together!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    rating: 5,
  },
  {
    id: '2',
    author: 'Marco P.',
    location: 'Rome, Italy',
    text: 'The European Conference was life-changing. I connected with hundreds of Young Adults and felt part of something bigger.',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
    rating: 5,
  },
  {
    id: '3',
    author: 'Emma L.',
    location: 'Paris, France',
    text: 'Being able to find events and meetups in my language made all the difference. I finally feel connected to the community!',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    rating: 5,
  },
  {
    id: '4',
    author: 'Lucas K.',
    location: 'Amsterdam, Netherlands',
    text: 'I organized my first meetup through RisingGen and 15 people showed up! It\'s amazing how easy it is to bring people together.',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
    rating: 5,
  },
];

const communityStats = [
  { label: 'Active Monthly Users', value: '8,500+' },
  { label: 'Friendships Formed', value: '3,200+' },
  { label: 'Success Stories', value: '950+' },
  { label: 'Community Score', value: '4.9/5' },
];

export default function CommunityHighlights() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
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
            Community Stories
          </h2>
          <p className="text-4xl font-bold tracking-tight text-text-dark sm:text-5xl mb-4">
            Real People, Real
            <span className="text-gradient"> Connections</span>
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from Young Adults across Europe who have found friendship, 
            community, and purpose through RisingGen.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="card card-hover h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-purple to-accent-teal p-0.5">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.photoUrl})` }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-4">
            Ready to write your own story?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Join the Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
