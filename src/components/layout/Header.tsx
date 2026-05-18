/**
 * LEARNING: Header Component
 * 
 * The navigation bar at the top of your site
 * 
 * Key Features:
 * - Sticky (stays at top when scrolling)
 * - Changes appearance on scroll
 * - Mobile menu (hamburger)
 * - Smooth scroll to sections
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

/**
 * LEARNING: Navigation Links Array
 * 
 * Storing links in an array makes them easy to:
 * - Add/remove
 * - Update
 * - Reuse (desktop + mobile)
 */
const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Values', href: '#pillars' },
  { label: 'Experience', href: '#experience' },
  { label: 'Locations', href: '#global-map' },
  { label: 'Partners', href: '#partners' },
  { label: 'Volunteer', href: '#volunteers' },
];

const Header = () => {
  /**
   * LEARNING: React State
   * 
   * useState creates state variables that can change
   * When they change, component re-renders
   * 
   * scrolled: Has user scrolled down?
   * menuOpen: Is mobile menu open?
   */
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * LEARNING: useEffect Hook
   * 
   * Runs code when component mounts (appears)
   * Here: Listen for scroll events
   * 
   * Cleanup function: Removes listener when component unmounts
   */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Cleanup: Remove listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * LEARNING: Smooth Scroll Function
   * 
   * Scrolls to a section smoothly instead of jumping
   * Also closes mobile menu
   */
  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-forest/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-b from-black/50 to-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group z-50"
        >
          {/* Logo Image */}
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/logo.png"
              alt="The Ascent Circle Logo"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          
          {/* Brand Text */}
          <div className="hidden sm:block">
            <div className="font-headline text-xl md:text-2xl text-white group-hover:text-gold transition-colors duration-300">
              The Ascent Circle
            </div>
            <div className="text-xs text-gold-light font-sans tracking-wider uppercase">
              We Rise Together
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white/90 hover:text-gold text-sm font-sans font-medium tracking-wide uppercase transition-colors duration-300 relative group"
            >
              {link.label}
              {/* Underline on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          
          {/* CTA Button */}
          <button
            onClick={() => scrollTo('#email-capture')}
            className="bg-sunset hover:bg-sunset-light text-white px-6 py-2.5 text-sm font-sans font-semibold tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-sunset/30 hover:-translate-y-0.5 border-2 border-sunset hover:border-sunset-light"
          >
            Join the Circle
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 
        LEARNING: Mobile Menu
        
        AnimatePresence: Animates when component appears/disappears
        motion.div: Animated div
        
        Animations:
        - initial: Starting state
        - animate: End state
        - exit: State when removing
      */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-forest/98 backdrop-blur-sm border-t border-gold/20"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/90 hover:text-gold text-left text-base font-sans font-medium tracking-wide uppercase transition-colors duration-300 py-2 border-b border-white/10"
                >
                  {link.label}
                </motion.button>
              ))}
              
              <button
                onClick={() => scrollTo('#email-capture')}
                className="bg-sunset hover:bg-sunset-light text-white w-full py-3 font-sans font-semibold tracking-wide uppercase transition-all duration-300 mt-2"
              >
                Join the Circle
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
