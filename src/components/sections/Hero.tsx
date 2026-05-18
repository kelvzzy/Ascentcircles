/**
 * LEARNING: Professional Hero Section with Real Images
 * 
 * Key Changes:
 * 1. Using real background images instead of placeholders
 * 2. Proper image optimization with Next.js Image
 * 3. Multiple background options for variety
 * 4. Professional overlay for text readability
 * 
 * Why This Matters:
 * - First impression is everything
 * - Professional photos = professional brand
 * - Proper image handling = fast loading
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

/**
 * LEARNING: Background Image Array
 * 
 * We rotate through multiple professional images
 * This keeps the hero fresh and engaging
 * 
 * Each image should be:
 * - High quality (1920x1080 minimum)
 * - Properly compressed (under 500KB)
 * - Relevant to your brand
 */
const heroBackgrounds = [
  '/images/summit-view.jpg',      // Hiker at sunset
  '/images/mountain-peak.jpg',    // Mountain landscape
  '/images/hiking-group.jpg',     // Community hiking
  '/images/sunrise.jpg',          // Golden hour mountains
  '/images/above-clouds.jpg',     // Above the clouds view
];

const Hero = () => {
  // Randomly select a background image on load
  const [bgImage] = useState(() => 
    heroBackgrounds[Math.floor(Math.random() * heroBackgrounds.length)]
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 
        LEARNING: Warm Beige/Mustard Background
        
        Layers (bottom to top):
        1. Warm gradient background (beige to mustard)
        2. Subtle texture overlay
        3. Content (text and buttons)
        
        This creates a warm, inviting vintage feel
      */}
      
      {/* Layer 1: Warm Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-gradient-to-br from-cream via-gold-light to-sunset-lighter"
          style={{
            backgroundImage: `
              linear-gradient(135deg, 
                #f5e6c8 0%,
                #f4d89f 25%,
                #e8b968 50%,
                #f5a855 75%,
                #e88a3f 100%
              )
            `,
          }}
        />
        
        {/* Vintage Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Layer 4: Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto pt-20">
        
        {/* Decorative Top Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-sunset" />
            <div className="w-3 h-3 bg-sunset rotate-45" />
            <div className="w-16 h-px bg-sunset" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
        >
          <span className="text-forest drop-shadow-lg">A Global Family</span>
          <br />
          <span className="text-sunset italic drop-shadow-lg">in Motion</span>
        </motion.h1>
        
        {/* Tagline with Decorative Border */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-block border-l-4 border-sunset pl-6 text-left">
            <p className="text-xl md:text-2xl lg:text-3xl text-forest font-body leading-relaxed italic drop-shadow">
              "Rooted in nature. Built on presence.<br />Rising together."
            </p>
          </div>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => {
              document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join the Circle
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => {
              document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Partner With Us
          </Button>
        </motion.div>

        {/* Vintage Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold/60 bg-black/30 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-gold rotate-45" />
          <span className="text-cream font-sans text-sm tracking-[0.3em] uppercase font-medium">
            Est. 2026
          </span>
          <div className="w-2 h-2 bg-gold rotate-45" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-xs font-sans tracking-[0.2em] uppercase font-medium">
            Discover More
          </span>
          <div className="w-8 h-12 border-2 border-gold/60 rounded-full flex justify-center pt-2 group-hover:border-gold transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full"
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
