'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Heart, ArrowRight, X, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/**
 * VOLUNTEERS SECTION - Vintage Recruitment Poster Aesthetic
 * 
 * This section recruits Path Keepers (volunteer leaders) for Ascent Circle.
 * Think: Vintage National Park Service posters, heritage organization recruitment, classic badges
 * 
 * KEY CONCEPTS:
 * - Three volunteer roles: Circle Facilitator, Chapter Leader, Cultural Steward
 * - Modal system: Click role card to see details, then apply
 * - Application form: Collects volunteer applications with validation
 * - Form state management: Uses react-hook-form for form handling and zod for validation
 */

const roles = [
  {
    icon: Users,
    title: 'Circle Facilitator',
    description: 'Guide group experiences and maintain circle energy',
    commitment: '4-6 hours/month',
    responsibilities: [
      'Lead weekly group walks and gatherings',
      'Foster inclusive, welcoming environments',
      'Support member connections and growth'
    ]
  },
  {
    icon: MapPin,
    title: 'Chapter Leader',
    description: 'Establish and grow local Ascent Circle communities',
    commitment: '8-12 hours/month',
    responsibilities: [
      'Launch and manage local chapters',
      'Coordinate with regional leadership',
      'Organize community events and initiatives'
    ]
  },
  {
    icon: Heart,
    title: 'Cultural Steward',
    description: 'Preserve local wisdom and environmental awareness',
    commitment: '2-4 hours/month',
    responsibilities: [
      'Share local nature knowledge and traditions',
      'Lead conservation and restoration projects',
      'Connect community with indigenous wisdom'
    ]
  }
];

const applicationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  city: z.string().min(2, 'City is required'),
  role: z.string().min(1, 'Please select a role'),
  motivation: z.string().min(20, 'Please share a bit more about your motivation'),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const Volunteers = () => {
  const [selectedRole, setSelectedRole] = useState<typeof roles[0] | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [preselectedRole, setPreselectedRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const openApplication = (roleTitle?: string) => {
    if (roleTitle) {
      setPreselectedRole(roleTitle);
      setValue('role', roleTitle);
    }
    setSelectedRole(null);
    setShowApplication(true);
  };

  const onSubmit = async (data: ApplicationFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Path Keeper application:', data);
    setSubmitted(true);
    reset();
  };

  const closeApplication = () => {
    setShowApplication(false);
    setSubmitted(false);
    setPreselectedRole('');
  };

  return (
    <section id="volunteers" className="py-24 md:py-32 bg-gradient-to-br from-cream via-cream-light to-white relative overflow-hidden">
      {/* Vintage Paper Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-forest to-sage rounded-full flex items-center justify-center shadow-xl shadow-forest/30 border-4 border-gold/30"
          >
            <Users className="w-12 h-12 text-gold" strokeWidth={2} />
          </motion.div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            Become a Path Keeper
          </h2>
          <p className="text-xl md:text-2xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            Path Keepers are the heart of our community—dedicated individuals who help
            create and nurture spaces for authentic connection and growth.
          </p>
        </motion.div>

        {/* Roles Grid - Vintage Badge Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedRole(role)}
              >
                {/* Vintage Card with Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-sunset/30 via-gold/20 to-sunset/30 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300" />
                
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-cream group-hover:border-gold">
                  <div className="text-center">
                    {/* Vintage Badge Icon */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-sunset to-sunset-light rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sunset/30" />
                      <div className="absolute inset-2 bg-white rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-sunset relative z-10" strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="font-headline text-2xl md:text-3xl text-forest mb-3 group-hover:text-sunset transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="text-text-medium mb-4 leading-relaxed text-base md:text-lg">{role.description}</p>
                    
                    {/* Commitment Badge */}
                    <div className="inline-block bg-gradient-to-r from-gold/20 to-sunset/20 px-4 py-2 rounded-full mb-6 border border-gold/30">
                      <span className="text-sm md:text-base text-forest font-semibold">{role.commitment}</span>
                    </div>

                    <div className="flex items-center justify-center text-forest group-hover:text-sunset transition-colors duration-300">
                      <span className="text-base font-semibold mr-2">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

        {/* What We Provide - Vintage Benefits Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Decorative Background */}
          <div className="absolute -inset-4 bg-gradient-to-br from-forest/5 via-cream to-gold/5 rounded-3xl blur-xl" />
          
          <div className="relative bg-gradient-to-br from-forest to-forest/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-gold/50">
            <h3 className="font-headline text-3xl md:text-4xl text-gold text-center mb-10">
              What We Provide Our Path Keepers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: '📚', title: 'Training & Support', desc: 'Comprehensive onboarding and ongoing mentorship' },
                { icon: '🌐', title: 'Global Community', desc: 'Connect with Path Keepers worldwide' },
                { icon: '🎯', title: 'Resources & Tools', desc: 'Everything you need to lead with confidence' },
                { icon: '🌱', title: 'Personal Growth', desc: 'Develop leadership and facilitation skills' },
              ].map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gold/30 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunset to-gold rounded-full flex items-center justify-center text-3xl shadow-lg shadow-sunset/30">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-cream mb-2 text-lg md:text-xl">{item.title}</h4>
                  <p className="text-sm md:text-base text-cream/80 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Vintage Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-lg" />
          </div>
        </motion.div>

        {/* CTA - Vintage Recruitment Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gold/30">
            <Award className="w-16 h-16 mx-auto mb-6 text-sunset" strokeWidth={1.5} />
            <h3 className="font-headline text-3xl md:text-4xl text-forest mb-6">
              Ready to help others rise?
            </h3>
            <p className="text-text-medium text-lg md:text-xl mb-8 leading-relaxed">
              If you're passionate about community building, nature connection, and helping others
              grow, we'd love to explore how you can become a Path Keeper.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-sunset hover:bg-sunset-light text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-sunset/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() => openApplication()}
            >
              Apply to Become a Path Keeper
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Role Detail Modal - Vintage Certificate Style */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRole(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-cream rounded-3xl p-8 md:p-10 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl border-4 border-gold/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center flex-1">
                  <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-sunset to-sunset-light rounded-full shadow-lg shadow-sunset/30" />
                    <div className="absolute inset-2 bg-white rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <selectedRole.icon className="w-8 h-8 text-sunset relative z-10" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl md:text-3xl text-forest mb-1">{selectedRole.title}</h3>
                    <div className="inline-block bg-gradient-to-r from-gold/30 to-sunset/30 px-3 py-1 rounded-full border border-gold/40">
                      <p className="text-sm font-semibold text-forest">{selectedRole.commitment}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRole(null)} 
                  className="text-text-medium hover:text-sunset transition-colors p-2 hover:bg-white rounded-full flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-text-medium mb-6 text-lg leading-relaxed">{selectedRole.description}</p>
              
              <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-gold/20">
                <h4 className="font-headline text-xl text-forest mb-4 flex items-center">
                  <span className="w-2 h-2 bg-sunset rounded-full mr-3" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {selectedRole.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-sunset mr-3 text-xl flex-shrink-0">•</span>
                      <span className="text-text-medium leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  className="flex-1 bg-sunset hover:bg-sunset-light text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                  onClick={() => openApplication(selectedRole.title)}
                >
                  Apply for This Role
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300" 
                  onClick={() => setSelectedRole(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Modal - Vintage Application Form */}
      <AnimatePresence>
        {showApplication && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeApplication}
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
                    {submitted ? 'Application Received!' : 'Path Keeper Application'}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-sunset to-gold rounded-full" />
                </div>
                <button 
                  onClick={closeApplication} 
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
                    Thank you for applying! We'll review your application and reach out within 5–7 days with next steps.
                  </p>
                  <Button 
                    variant="primary" 
                    className="bg-sunset hover:bg-sunset-light text-white shadow-lg" 
                    onClick={closeApplication}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <p className="text-text-medium mb-6 text-lg leading-relaxed">
                    We'd love to learn more about you and how you'd like to contribute to the movement.
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
                        {...register('city')}
                        placeholder="Your City"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all text-text-dark placeholder:text-text-medium/60"
                      />
                      {errors.city && <p className="text-sunset text-sm mt-2 ml-1">{errors.city.message}</p>}
                    </div>
                    <div>
                      <select
                        {...register('role')}
                        defaultValue={preselectedRole}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all text-text-dark"
                      >
                        <option value="">Select a Role</option>
                        {roles.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                      </select>
                      {errors.role && <p className="text-sunset text-sm mt-2 ml-1">{errors.role.message}</p>}
                    </div>
                    <div>
                      <textarea
                        {...register('motivation')}
                        placeholder="What draws you to becoming a Path Keeper?"
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gold/30 bg-white focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all resize-none text-text-dark placeholder:text-text-medium/60"
                      />
                      {errors.motivation && <p className="text-sunset text-sm mt-2 ml-1">{errors.motivation.message}</p>}
                    </div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full bg-sunset hover:bg-sunset-light text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
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

export default Volunteers;
