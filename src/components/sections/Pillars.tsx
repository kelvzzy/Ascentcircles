/**
 * LEARNING: Pillars Section - Core Values
 * 
 * Displays your 5 core differentiators
 * 
 * Key Concepts:
 * - Grid layout (responsive columns)
 * - Icon components (from lucide-react)
 * - Hover effects (interactive)
 * - Staggered animations (appear one by one)
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Mountain, HandHeart, Globe } from 'lucide-react';

/**
 * LEARNING: Data Array
 * 
 * We store pillar data in an array
 * Then map over it to create components
 * 
 * Benefits:
 * - Easy to add/remove pillars
 * - Consistent structure
 * - Less repetitive code
 */
const pillars = [
  {
    icon: Heart,
    title: 'Presence Over Pressure',
    description: 'We move at the pace of awareness, not achievement.'
  },
  {
    icon: Users,
    title: 'Community Over Competition',
    description: 'Every step forward lifts the whole circle.'
  },
  {
    icon: Mountain,
    title: 'Movement With Meaning',
    description: 'Purpose guides every path we take together.'
  },
  {
    icon: HandHeart,
    title: 'Service As Strength',
    description: 'We grow by giving back to the world around us.'
  },
  {
    icon: Globe,
    title: 'Global Yet Grounded',
    description: 'Connected worldwide, rooted in local wisdom.'
  }
];

const Pillars = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-sepia" />
            <div className="w-2 h-2 bg-sepia rotate-45" />
            <div className="w-12 h-px bg-sepia" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto font-body">
            Five principles that guide our movement and shape every experience we create together.
          </p>
        </motion.div>

        {/* 
          LEARNING: Responsive Grid
          
          - grid: Creates grid layout
          - grid-cols-1: 1 column on mobile
          - md:grid-cols-2: 2 columns on tablet
          - lg:grid-cols-3: 3 columns on desktop
          - xl:grid-cols-5: 5 columns on large screens
          - gap-8: Space between items
          
          This makes the layout adapt to screen size
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
          {/* 
            LEARNING: Array.map()
            
            .map() creates a component for each item in the array
            
            pillars.map((pillar, index) => ...)
            - pillar: Current item
            - index: Position in array (0, 1, 2, ...)
            
            We use index for staggered animations
          */}
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1  // Each pillar appears 0.1s after the previous
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  {/* 
                    LEARNING: Hover Effects
                    
                    group: Marks parent for group hover
                    group-hover:scale-110: Scales when parent is hovered
                    transition-transform: Smooth animation
                  */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-sunset to-sunset-light rounded-sm flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-sunset/40 transition-all duration-300 border-4 border-white"
                  >
                    <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                  </motion.div>
                  
                  {/* Decorative corners */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl md:text-2xl text-forest mb-4 group-hover:text-sunset transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-medium leading-relaxed text-base md:text-lg font-body">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
