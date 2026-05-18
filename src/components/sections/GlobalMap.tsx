'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Users, X, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';

/**
 * GLOBAL MAP SECTION - Vintage Travel Map Aesthetic
 * 
 * This section displays upcoming Ascent Circle locations in a vintage map style.
 * Think: Old National Geographic maps, vintage travel posters, explorer journals
 * 
 * KEY CONCEPTS:
 * - Cities array: Contains location data with status (active/launching/planned)
 * - Status colors: Forest (active), Sunset (launching), Sage (planned)
 * - Modal system: Click city markers to see details, click CTA to start new chapter
 */

const cities = [
  // Nigeria - Your Active Locations
  { name: 'Abuja', status: 'active', members: 45, lat: 9.0765, lng: 7.3986, country: 'Nigeria' },
  { name: 'News Engineering', status: 'active', members: 28, lat: 9.0820, lng: 7.4010, country: 'Nigeria' },
  { name: 'Wonderland Twin Building', status: 'active', members: 32, lat: 9.0700, lng: 7.3900, country: 'Nigeria' },
  { name: 'Nyash Rock', status: 'active', members: 18, lat: 9.0650, lng: 7.4100, country: 'Nigeria' },
  { name: 'Aso Rock', status: 'active', members: 52, lat: 9.0820, lng: 7.4900, country: 'Nigeria' },
  
  // Future Expansion - Nigeria
  { name: 'Lagos', status: 'launching', date: 'March 2026', lat: 6.5244, lng: 3.3792, country: 'Nigeria' },
  { name: 'Port Harcourt', status: 'planned', interest: 34, lat: 4.8156, lng: 7.0498, country: 'Nigeria' },
  
  // International Expansion
  { name: 'Nairobi', status: 'launching', date: 'April 2026', lat: -1.2921, lng: 36.8219, country: 'Kenya' },
  { name: 'Cape Town', status: 'planned', interest: 67, lat: -33.9249, lng: 18.4241, country: 'South Africa' },
  { name: 'Accra', status: 'planned', interest: 45, lat: 5.6037, lng: -0.1870, country: 'Ghana' },
];

const GlobalMap = () => {
  const [selectedCity, setSelectedCity] = useState<typeof cities[0] | null>(null);
  const [showStartChapter, setShowStartChapter] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-forest';
      case 'launching': return 'bg-sunset';
      case 'planned': return 'bg-sage';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (city: typeof cities[0]) => {
    switch (city.status) {
      case 'active': return `${city.members} members`;
      case 'launching': return `Launching ${city.date}`;
      case 'planned': return `${city.interest} interested`;
      default: return 'Coming soon';
    }
  };

  return (
    <section id="global-map" className="py-24 md:py-32 bg-gradient-to-br from-cream-light via-white to-cream relative overflow-hidden">
      {/* Vintage Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with Vintage Compass */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-6 text-sunset opacity-30"
          >
            <Compass className="w-full h-full" />
          </motion.div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            Local Circles Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            The movement is growing. Find your local circle or help us bring 
            The Ascent Circle to your city.
          </p>
        </motion.div>

        {/* Vintage Map Visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Vintage Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-sunset/10 to-gold/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-cream rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-gold/30">
              {/* Vintage Map Title Banner */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-forest px-8 py-3 rounded-full shadow-lg z-20">
                <h3 className="font-headline text-xl md:text-2xl text-gold tracking-wide">
                  The Ascent Circle • 2026
                </h3>
              </div>

              {/* Map Background with Vintage Styling */}
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-sage/20 via-cream-light to-forest/10 rounded-2xl overflow-hidden border-2 border-forest/20 shadow-inner">
                {/* Vintage Map Grid Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-forest"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Stylized Africa Map Outline */}
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-full opacity-20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified Africa continent outline */}
                  <path
                    d="M400 100 Q450 120 480 150 Q500 180 510 220 Q520 260 515 300 Q510 340 500 380 Q490 420 470 450 Q450 480 420 500 Q390 520 360 530 Q330 540 300 535 Q270 530 250 510 Q230 490 220 460 Q210 430 205 390 Q200 350 210 310 Q220 270 240 240 Q260 210 290 190 Q320 170 350 155 Q380 140 400 130 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="currentColor"
                    className="text-forest/30"
                    strokeDasharray="5,5"
                  />
                  {/* Nigeria highlight */}
                  <circle cx="420" cy="280" r="15" fill="currentColor" className="text-sunset/20" />
                </svg>

                {/* Vintage City Markers with Pin Style */}
                {cities.map((city, index) => {
                  // Convert lat/lng to map position (adjusted for Africa)
                  // Nigeria is roughly at 9°N, 8°E
                  const x = ((city.lng + 20) / 60) * 100; // Longitude to X (adjusted for Africa)
                  const y = ((20 - city.lat) / 40) * 100; // Latitude to Y (inverted, adjusted)
                  
                  return (
                    <motion.div
                      key={city.name}
                      initial={{ opacity: 0, scale: 0, y: -20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="absolute cursor-pointer group z-10"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      onClick={() => setSelectedCity(city)}
                    >
                    {/* Vintage Map Pin */}
                    <motion.div
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="relative"
                    >
                      <MapPin 
                        className={`w-8 h-8 ${
                          city.status === 'active' ? 'text-forest' :
                          city.status === 'launching' ? 'text-sunset' :
                          'text-sage'
                        } drop-shadow-lg filter`}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                      
                      {/* Pulsing Ring for Planned Cities */}
                      {city.status === 'planned' && (
                        <motion.div
                          animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-sage"
                        />
                      )}
                    </motion.div>
                    
                    {/* Vintage Tooltip Card */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-cream border-2 border-gold rounded-lg shadow-2xl p-4 whitespace-nowrap">
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cream border-r-2 border-b-2 border-gold rotate-45" />
                        <div className="font-headline text-lg text-forest mb-1">{city.name}</div>
                        <div className="text-xs text-text-medium font-medium mb-1">{city.country}</div>
                        <div className="text-sm text-text-medium font-medium">{getStatusText(city)}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              </div>

              {/* Vintage Map Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-lg" />
            </div>
          </motion.div>
        </div>

        {/* Vintage Map Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16"
        >
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-cream">
            <MapPin className="w-5 h-5 text-forest" fill="currentColor" />
            <span className="text-base md:text-lg text-forest font-semibold">Active Circles</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-cream">
            <MapPin className="w-5 h-5 text-sunset" fill="currentColor" />
            <span className="text-base md:text-lg text-sunset font-semibold">Launching Soon</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-cream">
            <MapPin className="w-5 h-5 text-sage animate-pulse-soft" fill="currentColor" />
            <span className="text-base md:text-lg text-sage font-semibold">Planned Locations</span>
          </div>
        </motion.div>

        {/* CTA Section with Vintage Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gold/30">
            <h3 className="font-headline text-3xl md:text-4xl text-forest mb-6">
              Don't see your city?
            </h3>
            <p className="text-lg md:text-xl text-text-medium mb-8 leading-relaxed">
              Help us bring the movement to your community. Every great circle starts with one person willing to take the first step.
            </p>
            <Button 
              variant="primary"
              size="lg"
              onClick={() => setShowStartChapter(true)}
              className="bg-sunset hover:bg-sunset-light text-white shadow-xl hover:shadow-2xl hover:shadow-sunset/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Plus className="w-5 h-5 mr-2" />
              Bring The Ascent Circle to Your City
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Start Chapter Modal - Vintage Postcard Style */}
      <AnimatePresence>
        {showStartChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowStartChapter(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-cream rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl border-4 border-gold/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Vintage Stamp Decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-sunset/30 rounded-lg rotate-12 flex items-center justify-center">
                <Compass className="w-8 h-8 text-sunset/40" />
              </div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-headline text-3xl md:text-4xl text-forest mb-2">
                    Start a Local Circle
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-sunset to-gold rounded-full" />
                </div>
                <button 
                  onClick={() => setShowStartChapter(false)} 
                  className="text-text-medium hover:text-sunset transition-colors p-2 hover:bg-white rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-text-medium text-lg md:text-xl mb-8 leading-relaxed">
                Interested in bringing The Ascent Circle to your city? 
                We'd love to hear from you and explore the possibilities together.
              </p>

              <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-gold/20">
                <h4 className="font-headline text-lg text-forest mb-3">What You'll Get:</h4>
                <ul className="space-y-2 text-text-medium">
                  <li className="flex items-start">
                    <span className="text-sunset mr-2">•</span>
                    <span>Complete training and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset mr-2">•</span>
                    <span>Access to our global community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunset mr-2">•</span>
                    <span>Resources to launch successfully</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  className="flex-1 bg-sunset hover:bg-sunset-light text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    setShowStartChapter(false);
                    document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300"
                  onClick={() => setShowStartChapter(false)}
                >
                  Maybe Later
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GlobalMap;
