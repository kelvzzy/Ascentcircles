'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Youtube, Linkedin, Mail, Phone, FileText } from 'lucide-react';

/**
 * FOOTER COMPONENT - Vintage Heritage Footer
 * 
 * This is the final section of the page with contact info and links.
 * Think: Vintage letterhead, heritage brand footer, classic business card
 * 
 * KEY CONCEPTS:
 * - Three columns: Core Values, Connect (social), Support (contact)
 * - Environmental commitment statement (brand mission)
 * - Bottom bar with copyright and legal links
 * - Floating background elements for depth
 */

const coreValues = [
  'Presence',
  'Community',
  'Service',
  'Growth',
  'Authenticity'
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/ascentcircles', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@AscentCircles', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ascentcircles', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-forest via-forest to-forest/95 text-white py-16 md:py-24 overflow-hidden">
      {/* Vintage Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-sunset/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            {/* Logo Image */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 mr-4">
              <Image
                src="/logo.png"
                alt="The Ascent Circle Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-headline text-3xl md:text-4xl text-gold">The Ascent Circle</h3>
          </div>
          <p className="text-cream/80 text-lg italic">Rise Together • Explore Deeply • Leave It Better</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-headline text-2xl mb-6 text-gold border-b-2 border-gold/30 pb-3">Core Values</h3>
            <ul className="space-y-3">
              {coreValues.map((value, index) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-cream/90 hover:text-gold transition-colors duration-300 cursor-pointer group"
                >
                  <span className="w-2 h-2 bg-sunset rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="text-base md:text-lg">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-headline text-2xl mb-6 text-gold border-b-2 border-gold/30 pb-3">Connect</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-cream/90 hover:text-gold transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <span className="text-base md:text-lg">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Support - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-headline text-2xl mb-6 text-gold border-b-2 border-gold/30 pb-3">Support</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@ascentcircles.com"
                className="flex items-center text-cream/90 hover:text-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="text-base md:text-lg">info@ascentcircles.com</span>
              </a>
              <a
                href="tel:+2348147111374"
                className="flex items-center text-cream/90 hover:text-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="text-base md:text-lg">+234 814 711 1374</span>
              </a>
              <a
                href="mailto:info@ascentcircles.com"
                className="flex items-center text-cream/90 hover:text-gold transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <FileText className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="text-base md:text-lg">General Inquiries</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Environmental Commitment - Vintage Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t-2 border-gold/30 pt-10 mb-10"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative Quote Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-sunset/10 via-gold/5 to-sunset/10 rounded-3xl blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-gold/30">
              <div className="text-center">
                {/* Decorative Icon */}
                <div className="w-12 h-12 mx-auto mb-4 text-sunset">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4 className="font-headline text-2xl md:text-3xl text-sunset mb-6">
                  Environmental Commitment
                </h4>
                <p className="text-cream/90 text-lg md:text-xl leading-relaxed italic">
                  "We leave every trail better than we found it, both in nature and in life. 
                  Our commitment extends beyond our footsteps to supporting conservation efforts, 
                  sustainable practices, and the preservation of wild spaces for future generations."
                </p>
              </div>

              {/* Vintage Corner Decorations */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Vintage Letterhead Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t-2 border-gold/30 pt-8 flex flex-col md:flex-row justify-between items-center text-cream/70 text-sm md:text-base gap-4"
        >
          <div className="flex items-center">
            <span className="text-gold mr-2">©</span>
            <p>2026 The Ascent Circle. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="/privacy" className="hover:text-gold transition-colors duration-300 hover:underline">
              Privacy Policy
            </a>
            <span className="text-gold/30">•</span>
            <a href="/terms" className="hover:text-gold transition-colors duration-300 hover:underline">
              Terms of Service
            </a>
            <span className="text-gold/30">•</span>
            <a href="/accessibility" className="hover:text-gold transition-colors duration-300 hover:underline">
              Accessibility
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;