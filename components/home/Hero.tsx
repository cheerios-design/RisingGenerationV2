'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const [stats, setStats] = useState({
    users: 0,
    events: 0,
    countries: 0,
    meetups: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      users: 12500,
      events: 450,
      countries: 28,
      meetups: 1200,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      users: targets.users / steps,
      events: targets.events / steps,
      countries: targets.countries / steps,
      meetups: targets.meetups / steps,
    };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setStats({
          users: Math.floor(increment.users * currentStep),
          events: Math.floor(increment.events * currentStep),
          countries: Math.floor(increment.countries * currentStep),
          meetups: Math.floor(increment.meetups * currentStep),
        });
      } else {
        setStats(targets);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-bg -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
            </span>
            <span className="text-white text-sm font-medium">12,500+ Young Adults Connected</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6"
          >
            Connect, Grow,
            <br />
            <span className="text-gradient bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
              Unite Together
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90"
          >
            Join thousands of Young Adults across Europe building meaningful connections, 
            discovering amazing events, and creating unforgettable experiences together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-purple shadow-lg hover:shadow-glow transition-all duration-300 flex items-center gap-2"
              >
                Explore Events
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/community">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-white/10 backdrop-blur-md px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Join Community
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">
                {stats.users.toLocaleString()}+
              </div>
              <div className="text-white/80 text-sm">Young Adults</div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">
                {stats.events}+
              </div>
              <div className="text-white/80 text-sm">Events</div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">
                {stats.countries}
              </div>
              <div className="text-white/80 text-sm">Countries</div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl font-bold text-white mb-2">
                {stats.meetups.toLocaleString()}+
              </div>
              <div className="text-white/80 text-sm">Meetups</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
