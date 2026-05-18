'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Globe, Camera, Heart, X, CheckCircle, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/**
 * PARTNERS SECTION - Vintage Partnership Brochure Aesthetic
 * 
 * This section invites brands to partner with Ascent Circle.
 * Think: Vintage business cards, heritage brand catalogs, classic partnership agreements
 * 
 * KEY CONCEPTS:
 * - Benefits grid: Shows 4 key partnership benefits with icons
 * - Partnership tiers: 3 levels (Founding, Experience, Community)
 * - Modal form: Collects partner inquiries with validation using react-hook-form + zod
 * - Form validation: Ensures all required fields are filled correctly before submission
 */

const benefits = [
  {
    icon: Leaf,
    title: 'Wellness Alignment',
    description: 'Connect your brand with authentic wellness and mindfulness practices that resonate with conscious consumers.'
  },
  {
    icon: Globe,
    title: 'Environmental Stewardship',
    description: 'Demonstrate your commitment to environmental responsibility through our conservation and trail restoration initiatives.'
  },
  {
    icon: Camera,
    title: 'Global Travel Exposure',
    description: 'Gain visibility across our international community through documented journeys and shared experiences.'
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Make a meaningful difference by supporting local communities and sustainable outdoor recreation.'
  }
];

const partnerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  organization: z.string().min(2, 'Organization name is required'),
  message: z.string().min(10, 'Please tell us a bit about your interest'),
});

type PartnerFormData = z.infer<typeof partnerSchema>;

const Partners = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Partner inquiry:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="partners" className="py-24 md:py-32 bg-gradient-to-br from-white via-cream-light to-cream relative overflow-hidden">
      {/* Vintage Paper Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with Handshake Icon */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-sunset to-gold rounded-full flex items-center justify-center shadow-xl shadow-sunset/30"
          >
            <Handshake className="w-10 h-10 text-white" strokeWidth={2} />
          </motion.div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            Partner With Purpose
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            Join brands that believe in authentic connection, environmental stewardship,
            and meaningful community impact. Together, we can create positive change.
          </p>
        </motion.div>

        {/* Benefits Grid - Vintage Card Style */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Vintage Card with Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 via-sunset/20 to-gold/30 rounded-3xl blur-sm" />
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-cream">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-sunset to-sunset-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sunset/30">
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl md:text-2xl text-forest mb-3 group-hover:text-sunset transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-text-medium leading-relaxed text-base md:text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vintage Corner Decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Tiers - Vintage Catalog Style */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Decorative Background */}
          <div className="absolute -inset-4 bg-gradient-to-br from-forest/5 via-cream to-sunset/5 rounded-3xl blur-xl" />
          
          <div className="relative bg-cream rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-gold/30">
            <h3 className="font-headline text-3xl md:text-4xl text-forest text-center mb-10">
              Partnership Opportunities
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Founding Partner',
                  desc: 'Shape the movement from the beginning with exclusive co-creation opportunities.',
                  perks: ['Brand integration in all content', 'Co-branded experiences', 'Advisory board participation'],
                  highlight: true
                },
                {
                  title: 'Experience Sponsor',
                  desc: 'Support specific journeys, retreats, or community impact projects.',
                  perks: ['Event-specific branding', 'Content collaboration', 'Community recognition']
                },
                {
                  title: 'Community Ally',
                  desc: 'Support our mission through product partnerships and community benefits.',
                  perks: ['Member discounts', 'Product collaborations', 'Social media features']
                }
              ].map((tier) => (
                <div 
                  key={tier.title} 
                  className={`relative bg-white text-center p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 ${
                    tier.highlight ? 'border-sunset shadow-lg scale-105' : 'border-cream hover:border-gold'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sunset text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                  <h4 className="font-headline text-xl md:text-2xl text-forest mb-4">{tier.title}</h4>
                  <p className="text-text-medium text-sm md:text-base mb-6 leading-relaxed">{tier.desc}</p>
                  <ul className="text-sm md:text-base text-text-medium space-y-3 text-left">
                    {tier.perks.map(p => (
                      <li key={p} className="flex items-start">
                        <span className="text-sunset mr-2 text-lg">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Vintage Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-lg" />
          </div>
        </motion.div>

        {/* CTA - Vintage Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gold/30">
            <h3 className="font-headline text-3xl md:text-4xl text-forest mb-6">
              Ready to grow together?
            </h3>
            <p className="text-text-medium text-lg md:text-xl mb-8 leading-relaxed">
              Let's explore how your brand can authentically connect with our global community
              while making a positive impact on the world.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-sunset hover:bg-sunset-light text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-sunset/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() => setShowForm(true)}
            >
              Become a Founding Partner
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Partner Inquiry Modal - Vintage Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setShowForm(false); setSubmitted(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-cream rounded-3xl p-8 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gold/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-headline text-3xl md:text-4xl text-forest mb-2">
                    {submitted ? 'Thank You!' : 'Partner Inquiry'}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-sunset to-gold rounded-full" />
                </div>
                <button 
                  onClick={() => { setShowForm(false); setSubmitted(false); }} 
                  className="text-text-medium hover:text-sunset transition-colors p-2 hover:bg-white rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-sunset to-gold rounded-full flex items-center justify-center shadow-xl shadow-sunset/30">
                    <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-text-medium text-lg md:text-xl mb-8 leading-relaxed">
                    We've received your inquiry and will be in touch within 2–3 business days to explore how we can grow together.
                  </p>
                  <Button 
                    variant="primary" 
                    onClick={() => { setShowForm(false); setSubmitted(false); }}
                    className="bg-sunset hover:bg-sunset-light text-white shadow-lg"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <p className="text-text-medium mb-6 text-lg leading-relaxed">
                    Tell us about your organization and how you'd like to partner with The Ascent Circle.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <input
                        {...register('name')}
                        placeholder="Your Name"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all text-text-dark placeholder:text-text-medium/60"
                      />
                      {errors.name && <p className="text-sunset text-sm mt-2 ml-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all text-text-dark placeholder:text-text-medium/60"
                      />
                      {errors.email && <p className="text-sunset text-sm mt-2 ml-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register('organization')}
                        placeholder="Organization / Brand Name"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all text-text-dark placeholder:text-text-medium/60"
                      />
                      {errors.organization && <p className="text-sunset text-sm mt-2 ml-1">{errors.organization.message}</p>}
                    </div>
                    <div>
                      <textarea
                        {...register('message')}
                        placeholder="Tell us about your interest in partnering..."
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all resize-none text-text-dark placeholder:text-text-medium/60"
                      />
                      {errors.message && <p className="text-sunset text-sm mt-2 ml-1">{errors.message.message}</p>}
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full bg-sunset hover:bg-sunset-light text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Partners;
