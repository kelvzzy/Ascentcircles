/**
 * CHOOSE YOUR MOMENT
 * 
 * Interactive experience: "What are you looking for?"
 * Helps visitors discover relevant Circle experiences
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Users, MessageCircle, Trees, Heart, Smile, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const moments = [
  {
    id: 'adventure',
    icon: Mountain,
    title: 'ADVENTURE',
    tagline: 'I need to move.',
    description: 'Hikes that challenge you. Trails that take you beyond your comfort zone. Summits that remind you what you\'re capable of.',
    experiences: ['Weekend Hikes', 'Mountain Trails', 'Challenging Routes', 'New Destinations'],
    color: 'from-forest to-sage',
    image: '/images/hiking-group.jpg'
  },
  {
    id: 'connection',
    icon: Users,
    title: 'CONNECTION',
    tagline: 'I want to meet people.',
    description: 'Real conversations with real people. No networking. No agendas. Just humans being human.',
    experiences: ['Circle Gatherings', 'Group Hikes', 'Community Events', 'Shared Meals'],
    color: 'from-sage to-forest-light',
    image: '/images/community-impact.jpg'
  },
  {
    id: 'conversation',
    icon: MessageCircle,
    title: 'CONVERSATION',
    tagline: 'I want to exchange ideas.',
    description: 'Deep discussions. Big questions. Perspectives that make you think differently.',
    experiences: ['Fireside Talks', 'Ascent Sessions', 'Documentary Nights', 'Group Discussions'],
    color: 'from-sunset to-gold',
    image: '/images/fireside-talk.jpg'
  },
  {
    id: 'nature',
    icon: Trees,
    title: 'NATURE',
    tagline: 'I need to reset.',
    description: 'Step off the treadmill. Breathe deep. Let the earth remind you what matters.',
    experiences: ['Silent Walks', 'Nature Immersion', 'Sunrise Hikes', 'Outdoor Reflection'],
    color: 'from-forest-light to-sage',
    image: '/images/silent-walk.jpg'
  },
  {
    id: 'wellness',
    icon: Heart,
    title: 'WELLNESS',
    tagline: 'I want to feel alive.',
    description: 'Mind, body, spirit in motion. Fitness that feels like freedom.',
    experiences: ['Active Hikes', 'Wellness Walks', 'Outdoor Fitness', 'Mindful Movement'],
    color: 'from-sage to-forest',
    image: '/images/drone-landscape.jpg'
  },
  {
    id: 'fun',
    icon: Smile,
    title: 'FUN',
    tagline: 'I just want good vibes.',
    description: 'Laughter. Games. Spontaneous joy. Life\'s too short to be serious all the time.',
    experiences: ['Group Games', 'Social Hikes', 'Celebrations', 'Music & Food'],
    color: 'from-gold to-sunset-light',
    image: '/images/community-impact.jpg'
  },
  {
    id: 'learning',
    icon: BookOpen,
    title: 'LEARNING',
    tagline: 'I want to discover something.',
    description: 'Documentaries. Stories. Knowledge shared around the fire.',
    experiences: ['Documentary Nights', 'Storytelling', 'Cultural Exchanges', 'Shared Wisdom'],
    color: 'from-sepia to-forest',
    image: '/images/storytelling.jpg'
  },
  {
    id: 'purpose',
    icon: TrendingUp,
    title: 'PURPOSE',
    tagline: 'I want to grow.',
    description: 'Become who you\'re meant to be. Through challenge, reflection, and community.',
    experiences: ['Personal Growth', 'Leadership Hikes', 'Meaningful Conversations', 'Service Projects'],
    color: 'from-sunset to-sunset-light',
    image: '/images/travel-journey.jpg'
  }
];

const ChooseYourMoment = () => {
  const [selectedMoment, setSelectedMoment] = useState<string | null>(null);
  const currentMoment = moments.find(m => m.id === selectedMoment);

  return (
    <section id="choose-your-moment" className="py-24 md:py-32 bg-gradient-to-br from-cream via-vintage-paper to-cream-light relative overflow-hidden">
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
            What Are You Looking For?
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto font-body">
            Every person comes to the Circle for their own reasons. What's yours?
          </p>
        </motion.div>

        {/* Moment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            const isSelected = selectedMoment === moment.id;
            
            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMoment(isSelected ? null : moment.id)}
                className={`
                  cursor-pointer transition-all duration-300 group
                  ${isSelected ? 'scale-105' : 'hover:scale-102'}
                `}
              >
                <div className={`
                  relative bg-white border-3 border-cream-dark rounded-2xl p-6 shadow-vintage hover:shadow-vintage-lg transition-all duration-300 h-full
                  ${isSelected ? 'border-gold shadow-2xl' : ''}
                `}>
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${moment.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-xl md:text-2xl text-forest mb-2">
                    {moment.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sunset text-base md:text-lg font-body italic mb-4">
                    {moment.tagline}
                  </p>

                  {/* Select indicator */}
                  <div className={`
                    text-sm font-sans font-semibold tracking-wider uppercase
                    ${isSelected ? 'text-gold' : 'text-text-medium group-hover:text-sunset'}
                    transition-colors duration-300
                  `}>
                    {isSelected ? '✓ Selected' : 'Tap to explore'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Moment Detail */}
        <AnimatePresence>
          {currentMoment && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-5xl mx-auto overflow-hidden"
            >
              <div className="bg-white border-4 border-gold/40 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${currentMoment.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <currentMoment.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="font-headline text-3xl md:text-4xl text-forest">
                        {currentMoment.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-text-medium leading-relaxed mb-6 font-body">
                      {currentMoment.description}
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm font-sans font-semibold tracking-wider uppercase text-sunset">
                        What You'll Experience:
                      </p>
                      {currentMoment.experiences.map((exp, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gold rotate-45" />
                          <span className="text-text-dark font-body">{exp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Button
                        variant="primary"
                        onClick={() => {
                          document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-sunset hover:bg-sunset-light text-white"
                      >
                        Join the Circle
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-gold/30 shadow-xl">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${currentMoment.image})` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ChooseYourMoment;
