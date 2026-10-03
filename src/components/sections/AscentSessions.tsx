/**
 * THE ASCENT SESSIONS
 * 
 * "Conversations Beyond the Trail"
 * Archive of discussions, documentaries, and deep conversations
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Brain, Dumbbell, Sparkles, DollarSign, Globe, Leaf } from 'lucide-react';

const sessionCategories = [
  {
    id: 'mens-mastery',
    icon: Users,
    title: "Men's Mastery",
    description: 'Discipline, purpose, and self-mastery',
    color: 'from-forest to-forest-light'
  },
  {
    id: 'women-relationships',
    icon: Heart,
    title: 'Women & Relationships',
    description: 'Connection, communication, and growth',
    color: 'from-sunset to-gold'
  },
  {
    id: 'mind',
    icon: Brain,
    title: 'Mind',
    description: 'Thoughts, beliefs, and mental clarity',
    color: 'from-sepia to-forest'
  },
  {
    id: 'body',
    icon: Dumbbell,
    title: 'Body',
    description: 'Health, fitness, and physical well-being',
    color: 'from-sage to-forest-light'
  },
  {
    id: 'spirit',
    icon: Sparkles,
    title: 'Spirit',
    description: 'Meaning, purpose, and inner peace',
    color: 'from-gold to-sunset-light'
  },
  {
    id: 'wealth',
    icon: DollarSign,
    title: 'Wealth',
    description: 'Money, independence, and abundance',
    color: 'from-sunset-light to-gold-light'
  },
  {
    id: 'culture',
    icon: Globe,
    title: 'Culture & Knowledge',
    description: 'Stories, wisdom, and shared learning',
    color: 'from-forest-light to-sage'
  },
  {
    id: 'nature',
    icon: Leaf,
    title: 'Nature & Wellness',
    description: 'Earth, environment, and holistic health',
    color: 'from-sage to-forest'
  }
];

// Placeholder sessions - ready for real content
const sampleSessions = [
  {
    id: 1,
    number: '001',
    title: 'Does modern life disconnect us from nature?',
    category: 'nature',
    date: 'Coming Soon',
    type: 'Discussion',
    status: 'upcoming'
  },
  {
    id: 2,
    number: '002',
    title: 'Discipline, desire and self-mastery',
    category: 'mens-mastery',
    date: 'Coming Soon',
    type: 'Discussion',
    status: 'upcoming'
  },
  {
    id: 3,
    number: '003',
    title: 'Can community change the trajectory of a person\'s life?',
    category: 'culture',
    date: 'Coming Soon',
    type: 'Discussion',
    status: 'upcoming'
  },
  {
    id: 4,
    number: '004',
    title: 'Money, purpose and independence',
    category: 'wealth',
    date: 'Coming Soon',
    type: 'Discussion',
    status: 'upcoming'
  },
  {
    id: 5,
    number: '005',
    title: 'What does freedom actually mean?',
    category: 'spirit',
    date: 'Coming Soon',
    type: 'Discussion',
    status: 'upcoming'
  }
];

const AscentSessions = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSessions = activeCategory
    ? sampleSessions.filter(s => s.category === activeCategory)
    : sampleSessions;

  return (
    <section id="ascent-sessions" className="py-24 md:py-32 bg-gradient-to-br from-forest via-forest-dark to-black relative overflow-hidden">
      {/* Atmospheric effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
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
            <div className="w-12 h-px bg-gold/60" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-gold mb-4">
            The Ascent Sessions
          </h2>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto font-body mb-8">
            Conversations Beyond the Trail
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-cream/70 text-sm font-sans tracking-wider uppercase">
            <span>Question</span>
            <span>•</span>
            <span>Explore</span>
            <span>•</span>
            <span>Discuss</span>
            <span>•</span>
            <span>Learn</span>
            <span>•</span>
            <span>Reflect</span>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto">
          {sessionCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(isActive ? null : category.id)}
                className={`
                  p-6 rounded-xl transition-all duration-300 text-center group
                  ${isActive
                    ? `bg-gradient-to-br ${category.color} border-2 border-gold shadow-lg`
                    : 'bg-white/10 border-2 border-white/20 hover:border-gold/60 hover:bg-white/15'
                  }
                `}
              >
                <Icon className={`w-10 h-10 mx-auto mb-3 ${isActive ? 'text-white' : 'text-gold group-hover:text-gold-light'} transition-colors`} strokeWidth={2} />
                <h3 className={`font-sans font-semibold text-sm tracking-wider uppercase ${isActive ? 'text-white' : 'text-cream/90'}`}>
                  {category.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Session List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {filteredSessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 md:p-8 hover:border-gold/60 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-sunset rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-headline text-xl">#{session.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-xl md:text-2xl text-cream mb-2 group-hover:text-gold transition-colors">
                    {session.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-cream/70">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {session.type}
                    </span>
                    <span>•</span>
                    <span>{session.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Knowledge Framework */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border-2 border-gold/30 rounded-3xl p-8 md:p-12">
            <h3 className="font-headline text-2xl md:text-3xl text-gold mb-8 text-center">
              Our Approach to Knowledge
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-3 h-3 bg-forest rounded-full mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg text-cream mb-2 uppercase tracking-wider">
                  What We Know
                </h4>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Evidence, research, established information
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg text-cream mb-2 uppercase tracking-wider">
                  What People Believe
                </h4>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Traditions, philosophies, perspectives
                </p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-sunset rounded-full mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg text-cream mb-2 uppercase tracking-wider">
                  What We're Exploring
                </h4>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Open questions, curiosity, discovery
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-cream/70 text-lg font-body italic">
            The archive is growing. Each conversation adds to the story.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AscentSessions;
