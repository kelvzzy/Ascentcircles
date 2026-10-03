/**
 * WHAT HAPPENS WHEN WE GATHER
 * 
 * Interactive visual showing the journey/flow of a Circle experience
 * Playful and exploratory
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Users, MessageCircle, Laugh, BookOpen, Gamepad2, Sparkles, Heart, ArrowDown } from 'lucide-react';

const journeySteps = [
  {
    id: 'hike',
    icon: Mountain,
    title: 'HIKE',
    description: 'We move. One step at a time, together through nature.',
    image: '/images/hiking-group.jpg',
    color: 'from-forest to-sage'
  },
  {
    id: 'connect',
    icon: Users,
    title: 'CONNECT',
    description: 'Strangers become friends. Friends become family.',
    image: '/images/community-impact.jpg',
    color: 'from-sage to-forest-light'
  },
  {
    id: 'talk',
    icon: MessageCircle,
    title: 'TALK',
    description: 'Real conversations. Deep questions. Honest sharing.',
    image: '/images/fireside-talk.jpg',
    color: 'from-sunset to-gold'
  },
  {
    id: 'laugh',
    icon: Laugh,
    title: 'LAUGH',
    description: 'Life is meant to be enjoyed. We don\'t take ourselves too seriously.',
    image: '/images/hiking-group.jpg',
    color: 'from-gold to-sunset-light'
  },
  {
    id: 'learn',
    icon: BookOpen,
    title: 'LEARN',
    description: 'Through documentaries, discussions, experiences and each other.',
    image: '/images/storytelling.jpg',
    color: 'from-sepia to-forest'
  },
  {
    id: 'play',
    icon: Gamepad2,
    title: 'PLAY',
    description: 'Games, music, spontaneous fun. The inner child never truly leaves.',
    image: '/images/community-impact.jpg',
    color: 'from-sunset-light to-gold-light'
  },
  {
    id: 'reflect',
    icon: Sparkles,
    title: 'REFLECT',
    description: 'Quiet moments. Silent walks. Space to think and breathe.',
    image: '/images/silent-walk.jpg',
    color: 'from-sage to-forest'
  },
  {
    id: 'remember',
    icon: Heart,
    title: 'CREATE MEMORIES',
    description: 'Moments that stay with you long after the hike ends.',
    image: '/images/travel-journey.jpg',
    color: 'from-sunset to-sunset-light'
  }
];

const WhenWeGather = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const currentStep = journeySteps.find(step => step.id === activeStep);

  return (
    <section id="when-we-gather" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
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
            What Happens When We Gather?
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto font-body">
            Every Circle experience is a journey. Here's what it looks like.
          </p>
        </motion.div>

        {/* Journey Flow */}
        <div className="max-w-5xl mx-auto">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === journeySteps.length - 1;
            const isActive = activeStep === step.id;
            
            return (
              <div key={step.id}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Icon */}
                  <div 
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 transition-all duration-300 ${isActive ? 'scale-125' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-lg opacity-40`} />
                      <div className={`relative w-full h-full bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white/20 hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className={`flex-1 bg-cream border-2 border-cream-dark rounded-2xl p-6 md:p-8 cursor-pointer hover:border-gold hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'text-left' : 'text-right'} ${isActive ? 'border-gold shadow-lg' : ''}`}
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    <h3 className="font-headline text-2xl md:text-3xl text-forest mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-medium text-base md:text-lg leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Arrow */}
                {!isLast && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center my-4 md:my-6"
                  >
                    <ArrowDown className="w-6 h-6 text-gold" strokeWidth={2} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Step Expanded View */}
        <AnimatePresence>
          {currentStep && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 max-w-5xl mx-auto overflow-hidden"
            >
              <div className="bg-gradient-to-br from-forest to-forest-light rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-gold/40">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl text-gold mb-4">
                      {currentStep.title}
                    </h3>
                    <p className="text-lg md:text-xl text-cream/90 leading-relaxed font-body">
                      {currentStep.description}
                    </p>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-gold/30">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${currentStep.image})` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="inline-block border-l-4 border-sunset pl-6 text-left">
            <p className="text-xl md:text-2xl text-forest font-headline italic">
              "This is what happens when people choose to rise together."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhenWeGather;
