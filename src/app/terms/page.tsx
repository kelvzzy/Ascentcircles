/**
 * Terms of Service Page
 * 
 * Legal agreement between you and users
 */

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms of Service - The Ascent Circle',
  description: 'Terms and conditions for using The Ascent Circle services.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-light py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-headline text-4xl md:text-5xl text-forest mb-8">
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8 text-text-dark">
            <p className="text-lg text-text-medium">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-text-medium leading-relaxed">
                By accessing and using The Ascent Circle website and services, you accept and agree 
                to be bound by these Terms of Service. If you do not agree to these terms, please 
                do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                2. Description of Service
              </h2>
              <p className="text-text-medium leading-relaxed">
                The Ascent Circle provides a community platform for outdoor enthusiasts, hikers, 
                and nature lovers to connect, participate in events, and engage in outdoor activities. 
                We reserve the right to modify or discontinue services at any time.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-text-medium leading-relaxed mb-4">
                As a user, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-medium ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Respect other community members</li>
                <li>Follow safety guidelines during activities</li>
                <li>Not engage in illegal or harmful activities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                4. Assumption of Risk
              </h2>
              <p className="text-text-medium leading-relaxed">
                Outdoor activities involve inherent risks. By participating in Ascent Circle events, 
                you acknowledge and assume all risks associated with outdoor activities, including 
                but not limited to physical injury, property damage, or death. You agree to hold 
                The Ascent Circle harmless from any claims arising from your participation.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-text-medium leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the 
                property of The Ascent Circle and protected by copyright laws. You may not reproduce, 
                distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-text-medium leading-relaxed">
                The Ascent Circle shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our services. 
                Our total liability shall not exceed the amount you paid for our services, if any.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                7. Termination
              </h2>
              <p className="text-text-medium leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any 
                time, without notice, for conduct that we believe violates these Terms or is 
                harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                8. Governing Law
              </h2>
              <p className="text-text-medium leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of 
                Nigeria, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-text-medium leading-relaxed">
                We may revise these Terms at any time. Continued use of our services after changes 
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                10. Contact Information
              </h2>
              <p className="text-text-medium leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-cream rounded-xl">
                <p className="text-text-dark font-medium">The Ascent Circle</p>
                <p className="text-text-medium">Email: info@ascentcircles.com</p>
                <p className="text-text-medium">Phone: +234 814 711 1374</p>
                <p className="text-text-medium">Location: Abuja, Nigeria</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
