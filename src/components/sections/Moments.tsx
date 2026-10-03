/**
 * MOMENTS GALLERY
 * 
 * Dynamic visual gallery showing snapshots from the Circle
 * Images feel like memories rather than stock photography
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const moments = [
  {
    title: 'On the Trail',
    image: '/images/hiking-group.jpg',
    caption: 'Every step forward, together'
  },
  {
    title: 'At the Summit',
    image: '/images/drone-landscape.jpg',
    caption: 'Where earth meets sky'
  },
  {
    title: 'Circle Conversations',
    image: '/images/fireside-talk.jpg',
    caption: 'Deep talks under the stars'
  },
  {
    title: 'Good People',
    image: '/images/community-impact.jpg',
    caption: 'Great vibes'
  },
  {
    title: 'Silent Walks',
    image: '/images/silent-walk.jpg',
    caption: 'Finding presence in motion'
  },
  {
    title: 'New Horizons',
    image: '/images/travel-journey.jpg',
    caption: 'Adventure calls'
  },
  {
    title: 'Stories Shared',
    image: '/images/storytelling.jpg',
    caption: 'Wisdom passed forward'
  },
  {
    title: 'Sunrise',
    image: '/images/hero-1.jpg',
    caption: 'Golden beginnings'
  },
  {
    title: 'The Path',
    image: '/images/hero-2.jpg',
    caption: 'One circle. Many journeys.'
  }
];

const Moments = () => {
  return (
    <section id="moments" className="py-24 md:py-32 bg-cream-light relative overflow-hidden">
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
            Moments
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto font-body">
            Snapshots from the Circle — real people, real moments, real memories.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group cursor-pointer"
            >
              <div className="relative overflow-hidden border-4 border-cream-dark shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-sm">
                <Image
                  src={moment.image}
                  alt={moment.caption}
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-headline text-2xl md:text-3xl text-gold mb-2">
                      {moment.title}
                    </h3>
                    <p className="text-cream text-base md:text-lg font-body italic">
                      {moment.caption}
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

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white border-2 border-gold/30 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-2xl md:text-3xl text-forest font-headline mb-4">
              One Circle. Many Stories.
            </p>
            <p className="text-lg md:text-xl text-text-medium font-body leading-relaxed">
              Every hike, every conversation, every shared moment adds to the story of who we are.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Moments;
