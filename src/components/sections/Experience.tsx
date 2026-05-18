/**
 * LEARNING: Experience Gallery Section
 * 
 * Shows different experiences in a masonry grid
 * Masonry = Pinterest-style layout (items fit together nicely)
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

const experiences = [
  {
    title: 'Silent Walks',
    image: '/images/silent-walk.jpg',
    description: 'Mindful movement through nature',
    type: 'image'
  },
  {
    title: 'Drone Landscapes',
    image: '/images/drone-landscape.jpg',
    description: 'Breathtaking perspectives from above',
    type: 'image'
  },
  {
    title: 'Fireside Talks',
    image: '/images/fireside-talk.jpg',
    description: 'Deep conversations under the stars',
    type: 'image'
  },
  {
    title: 'Community Impact',
    image: '/images/community-impact.jpg',
    description: 'Giving back to the places we love',
    type: 'image'
  },
  {
    title: 'Travel Journeys',
    image: '/images/travel-journey.jpg',
    description: 'Exploring the world together',
    type: 'image'
  },
  {
    title: 'Storytelling',
    image: '/images/storytelling.jpg',
    description: 'Sharing our adventures and insights',
    type: 'image'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-cream-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-sepia" />
            <div className="w-2 h-2 bg-sepia rotate-45" />
            <div className="w-12 h-px bg-sepia" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            The Experience Awaits
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto font-body">
            From silent walks to shared adventures, every moment is designed to deepen connection 
            with nature, community, and yourself.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group cursor-pointer"
            >
              <div className="relative overflow-hidden border-4 border-cream-dark shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <Image
                  src={experience.image}
                  alt={experience.description}
                  width={400}
                  height={300}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-headline text-2xl text-gold mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-cream text-sm">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Join the Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
