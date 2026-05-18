/**
 * LEARNING: Story Section
 * 
 * This section tells your origin story
 * 
 * Key Concepts:
 * - Two-column layout (text + image)
 * - Responsive (stacks on mobile)
 * - Scroll animations (content appears as you scroll)
 * - Professional image handling
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Story = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-vintage-paper relative overflow-hidden">
      {/* 
        LEARNING: Decorative Background Elements
        
        These add visual interest without distracting from content
        - Positioned absolutely (don't affect layout)
        - Low opacity (subtle)
        - Behind content (z-index)
      */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sunset blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sage blur-3xl" />
      </div>

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
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-forest mb-4">
            The Journey That Started It All
          </h2>
        </motion.div>

        {/* 
          LEARNING: Two-Column Layout
          
          - grid: Creates a grid layout
          - lg:grid-cols-2: Two columns on large screens
          - gap-12: Space between columns
          - items-center: Vertically centers content
          
          On mobile: Stacks vertically (1 column)
          On desktop: Side by side (2 columns)
        */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Story Text */}
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text-dark font-body">
              <p>
                Years of hiking taught us something profound: the summit was never the destination. 
                It was the shared silence on the trail, the conversations around the fire, 
                the way strangers became family with each step.
              </p>
              
              <p>
                What began as weekend adventures evolved into something deeper—a recognition 
                that we rise highest when we rise together.
              </p>
              
              {/* 
                LEARNING: Highlighted Quote
                
                - border-l-4: Left border (accent)
                - pl-6: Padding left (space from border)
                - italic: Slanted text (emphasis)
                - Different color: Stands out
              */}
              <div className="border-l-4 border-sunset pl-6 py-4 bg-cream/30">
                <p className="text-xl md:text-2xl font-semibold text-sunset italic">
                  "The Ascent Circle was born from this simple truth: 
                  connection matters more than conquest."
                </p>
              </div>

              <p className="text-base md:text-lg text-text-medium">
                Today, we're building a global movement where every step forward 
                is taken together, where nature is our classroom, and where 
                presence trumps performance.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 
              LEARNING: Image Container with Vintage Frame
              
              We create a "frame" effect using:
              - Border
              - Shadow
              - Slight rotation (optional)
              - Decorative corners
            */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative border-8 border-cream-dark shadow-2xl">
                <Image
                  src="/images/story-hiking.jpg"
                  alt="Group of hikers sharing a moment on a mountain trail, representing community and connection"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Vintage Photo Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gold -translate-x-2 -translate-y-2" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gold translate-x-2 -translate-y-2" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gold -translate-x-2 translate-y-2" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gold translate-x-2 translate-y-2" />
              </div>

              {/* Decorative Badge/Stamp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-sunset text-white px-6 py-3 rotate-[-5deg] shadow-lg border-4 border-white"
              >
                <div className="text-center">
                  <div className="text-xs font-sans tracking-widest uppercase">Since</div>
                  <div className="text-2xl font-headline">2026</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
