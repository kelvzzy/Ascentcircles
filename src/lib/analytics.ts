/**
 * LEARNING: Google Analytics Integration
 * 
 * This file sets up Google Analytics 4 (GA4) tracking
 * 
 * What it does:
 * - Tracks page views automatically
 * - Tracks custom events (button clicks, form submissions)
 * - Provides insights on user behavior
 * 
 * Setup:
 * 1. Create GA4 account at analytics.google.com
 * 2. Get your Measurement ID (looks like G-XXXXXXXXXX)
 * 3. Add it to .env.local as NEXT_PUBLIC_GA_ID
 */

// Your Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for common actions
export const trackEvent = {
  // Email signup
  emailSignup: (location: string) => {
    event({
      action: 'signup',
      category: 'Email',
      label: location,
    });
  },
  
  // Partner inquiry
  partnerInquiry: () => {
    event({
      action: 'inquiry',
      category: 'Partner',
    });
  },
  
  // Volunteer application
  volunteerApplication: (role: string) => {
    event({
      action: 'application',
      category: 'Volunteer',
      label: role,
    });
  },
  
  // Button clicks
  buttonClick: (buttonName: string) => {
    event({
      action: 'click',
      category: 'Button',
      label: buttonName,
    });
  },
  
  // Section views
  sectionView: (sectionName: string) => {
    event({
      action: 'view',
      category: 'Section',
      label: sectionName,
    });
  },
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
