/**
 * THE CIRCLE IN MOTION
 * 
 * Cinematic video experience showing the living community
 * "See the moments. Feel the energy. Discover the people."
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const categories = [
  { id: 'hikes', label: 'HIKES', color: 'from-forest to-sage' },
  { id: 'conversations', label: 'CONVERSATIONS', color: 'from-sunset to-gold' },
  { id: 'community', label: 'COMMUNITY', color: 'from-forest-light to-sage' },
  { id: 'adventure', label: 'ADVENTURE', color: 'from-gold to-sunset-light' },
  { id: 'games', label: 'GAMES & FUN', color: 'from-sunset to-sunset-light' },
  { id: 'culture', label: 'CULTURE', color: 'from-sepia to-forest' },
  { id: 'wellness', label: 'WELLNESS', color: 'from-sage to-forest-light' },
];

// Placeholder video structure - ready for real Ascent Circle footage
const videoContent = {
  hikes: {
    title: 'On the Trail',
    description: 'Every step forward, taken together',
    videoUrl: '/videos/hero-background.mp4', // Replace with actual footage
    thumbnail: '/images/hiking-group.jpg'
  },
  conversations: {
    title: 'Deep Conversations',
    description: 'Where minds meet and ideas flow',
    videoUrl: '/videos/hero-background.mp4',
    thumbnail: '/images/fireside-talk.jpg'
  },
  community: {
    title: 'The Circle',
    description: 'Good people. Great vibes.',
    videoUrl: '/videos/hero-background.mp4',
    thumbnail: '/images/community-impact.jpg'
  },
  adventure: {
    title: 'New Horizons',
    description: 'Beyond the summit, into the unknown',
    videoUrl: '/videos/hero-background.mp4',
    thumbnail: '/images/travel-journey.jpg'
  },
  games: {
    title: 'Laughter & Play',
    description: 'Life is meant to be enjoyed',
    videoUrl: '/videos/hero-background.mp4',
    thumbnail: '/images/hiking-group.jpg'
  },
  culture: {
    title: 'Stories & Wisdom',
    description: 'Learning from each journey',
    videoUrl: '/videos/hero-background.mp4',
    thumbnail: '/images/storytelling.jpg'
  },
  wellness: {
    title: 'Mind, Body, Spirit',
    description: 'Finding balance in motion',
    videoUrl: '/videos/hero-background.mp4',
    thumbnail: '/images/silent-walk.jpg'
  }
};

const CircleInMotion = () => {
  const [activeCategory, setActiveCategory] = useState('hikes');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const currentContent = videoContent[activeCategory as keyof typeof videoContent];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showVideoModal) {
        setShowVideoModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showVideoModal]);

  return (
    <section id="circle-in-motion" className="py-24 md:py-32 bg-gradient-to-br from-black via-forest-dark to-forest relative overflow-hidden">
      {/* Atmospheric effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sunset/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/60" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            The Circle in Motion
          </h2>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto font-body leading-relaxed">
            See the moments. Feel the energy. Discover the people.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div 
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border-4 border-gold/30"
            onClick={() => setShowVideoModal(true)}
          >
            {/* Video/Image */}
            <video
              key={currentContent.videoUrl} 
              src={currentContent.videoUrl}
              poster={currentContent.thumbnail}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src={currentContent.videoUrl} type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-headline text-3xl md:text-4xl text-gold mb-2">
                  {currentContent.title}
                </h3>
                <p className="text-cream/90 text-lg md:text-xl font-body">
                  {currentContent.description}
                </p>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gold rounded-full flex items-center justify-center shadow-2xl shadow-gold/50 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-forest ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wider uppercase
                transition-all duration-300 border-2
                ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                  : 'bg-white/10 text-cream/80 border-gold/30 hover:bg-white/20 hover:border-gold/60'
                }
              `}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gold-light font-body italic leading-relaxed">
            "More than hiking. More than meetups. A living community in motion."
          </p>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70 z-50"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Video Container */}
              <div className="relative aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
                <video
                  src={currentContent.videoUrl}
                  poster={currentContent.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full"
                >
                  <source src={currentContent.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CircleInMotion;
