/**
 * Privacy Policy Page
 * 
 * Required for:
 * - Legal compliance
 * - User trust
 * - Email marketing (GDPR)
 * - App store submissions
 */

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy - The Ascent Circle',
  description: 'Our commitment to protecting your privacy and personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-light py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-headline text-4xl md:text-5xl text-forest mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8 text-text-dark">
            <p className="text-lg text-text-medium">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                1. Information We Collect
              </h2>
              <p className="text-text-medium leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-medium ml-4">
                <li>Name and email address when you sign up</li>
                <li>Information in volunteer or partner applications</li>
                <li>Communications you send to us</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-text-medium leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-medium ml-4">
                <li>Send you updates about The Ascent Circle</li>
                <li>Process your applications and inquiries</li>
                <li>Improve our website and services</li>
                <li>Communicate about events and opportunities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                3. Information Sharing
              </h2>
              <p className="text-text-medium leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information with service providers who assist us in operating 
                our website and conducting our activities, provided they agree to keep this 
                information confidential.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                4. Data Security
              </h2>
              <p className="text-text-medium leading-relaxed">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure, and we 
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                5. Your Rights
              </h2>
              <p className="text-text-medium leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-medium ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                6. Cookies
              </h2>
              <p className="text-text-medium leading-relaxed">
                We use cookies and similar tracking technologies to improve your browsing 
                experience and analyze website traffic. You can control cookies through your 
                browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                7. Children's Privacy
              </h2>
              <p className="text-text-medium leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-text-medium leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl md:text-3xl text-forest mb-4">
                9. Contact Us
              </h2>
              <p className="text-text-medium leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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
