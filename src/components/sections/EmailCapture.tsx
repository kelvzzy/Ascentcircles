/**
 * LEARNING: Email Capture Section
 * 
 * Collects email signups
 * Most important conversion point!
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle } from 'lucide-react';

const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

type EmailFormData = z.infer<typeof emailSchema>;

const EmailCapture = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Email signup:', data);
    setIsSubmitted(true);
    reset();
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="email-capture" className="py-24 md:py-32 bg-forest text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-8 bg-sunset rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl mb-6 text-gold">
              Welcome to the Circle
            </h2>
            <p className="text-xl md:text-2xl text-cream mb-8 font-body">
              Thank you for joining our early community. You'll be the first to know 
              when we begin our global journey together.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="email-capture" className="py-24 md:py-32 bg-forest text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6 text-gold">
            The First Global Walk Begins Soon
          </h2>
          
          <p className="text-xl md:text-2xl text-cream mb-12 font-body">
            Join the early circle and be part of something meaningful from the very beginning.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-gold/30 text-white placeholder-cream/70 focus:outline-none focus:ring-2 focus:ring-sunset focus:border-sunset transition-all font-body"
                />
                {errors.name && (
                  <p className="absolute -bottom-6 left-2 text-sunset text-sm font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-gold/30 text-white placeholder-cream/70 focus:outline-none focus:ring-2 focus:ring-sunset focus:border-sunset transition-all font-body"
                />
                {errors.email && (
                  <p className="absolute -bottom-6 left-2 text-sunset text-sm font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto min-w-[250px] disabled:opacity-50"
              >
                {isSubmitting ? 'Joining...' : 'Rise With Us'}
              </button>
            </motion.div>
          </form>

          <p className="text-cream/60 text-sm mt-8 font-body">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;
