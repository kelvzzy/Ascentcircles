/**
 * LEARNING: WhatsApp Floating Button
 * 
 * A floating button that opens WhatsApp chat
 * Very popular in Nigeria for instant communication
 * 
 * Features:
 * - Sticky position (follows scroll)
 * - Pulse animation to draw attention
 * - Opens WhatsApp with pre-filled message
 */

'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // WhatsApp Group Link for The Ascent Circle Community
  const whatsappUrl = 'https://chat.whatsapp.com/J7OCBOlk81K2z2KDPPl1Ee';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Join WhatsApp Community"
    >
      {/* Pulsing ring animation */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-green-500 rounded-full"
      />
      
      {/* Button */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-forest text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        <span className="text-sm font-medium">Join our WhatsApp Community</span>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-forest" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
