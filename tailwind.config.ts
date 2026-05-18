import type { Config } from "tailwindcss";

/**
 * LEARNING: Tailwind Configuration
 * 
 * This file configures Tailwind CSS - a utility-first CSS framework
 * 
 * Key Concepts:
 * - content: Tells Tailwind which files to scan for class names
 * - theme.extend: Adds custom values without removing defaults
 * - colors: Custom color palette from your logo
 * - fontFamily: Custom fonts for vintage aesthetic
 * 
 * Why Tailwind?
 * - Write CSS faster with utility classes
 * - Consistent design system
 * - Automatic purging of unused CSS (smaller file size)
 * - Responsive design made easy
 */

const config: Config = {
  // Tell Tailwind where to look for class names
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /**
       * LEARNING: Custom Colors
       * 
       * We're adding colors from your logo to Tailwind
       * Each color has shades (50-900) for flexibility
       * 
       * Usage: className="bg-forest-500 text-gold-400"
       */
      colors: {
        // Primary Forest Green - From your logo
        'forest': {
          DEFAULT: '#1a3d3d',
          50: '#f0f5f5',
          100: '#d9e6e6',
          200: '#b3cccc',
          300: '#8cb3b3',
          400: '#669999',
          500: '#1a3d3d',
          600: '#153131',
          700: '#102525',
          800: '#0c1919',
          900: '#070d0d',
        },
        // Sunset Orange - From your logo
        'sunset': {
          DEFAULT: '#d97634',
          50: '#fef5ed',
          100: '#fde8d5',
          200: '#fbd1ab',
          300: '#f9ba81',
          400: '#f5a855',
          500: '#d97634',
          600: '#c56829',
          700: '#a0541f',
          800: '#7a4018',
          900: '#542c11',
        },
        // Golden Yellow - From your logo
        'gold': {
          DEFAULT: '#e8b968',
          50: '#fefbf5',
          100: '#fef5e7',
          200: '#fcebc7',
          300: '#f9e0a7',
          400: '#f4d89f',
          500: '#e8b968',
          600: '#d4a554',
          700: '#b88f45',
          800: '#9c7936',
          900: '#6a5325',
        },
        // Cream/Beige - Vintage paper feel
        'cream': {
          DEFAULT: '#f5e6c8',
          50: '#fefbf7',
          100: '#fef5e7',
          200: '#fcefd7',
          300: '#f9e8c7',
          400: '#f5e6c8',
          500: '#e8d9b8',
          600: '#d4c5a4',
          700: '#c0b190',
          800: '#9c8e73',
          900: '#6a6150',
        },
        // Sage Green - Mountain tones
        'sage': {
          DEFAULT: '#7a9b8e',
          50: '#f2f6f5',
          100: '#e5ede9',
          200: '#ccdbd3',
          300: '#b2c9bd',
          400: '#8fae9d',
          500: '#7a9b8e',
          600: '#658073',
          700: '#506558',
          800: '#3b4a3d',
          900: '#262f22',
        },
        // Vintage accents
        'sepia': {
          DEFAULT: '#704214',
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f0d5b3',
          300: '#e6bd86',
          400: '#dda559',
          500: '#704214',
          600: '#5a3510',
          700: '#43280c',
          800: '#2d1b08',
          900: '#160d04',
        },
        'vintage-paper': '#f4f1e8',
      },
      
      /**
       * LEARNING: Custom Fonts
       * 
       * We're using three font families:
       * - Playfair Display: Elegant serif for headlines (vintage feel)
       * - Lora: Readable serif for body text (classic)
       * - Inter: Modern sans-serif for UI elements (clean)
       * 
       * Usage: className="font-headline" or "font-body"
       */
      fontFamily: {
        'headline': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      
      /**
       * LEARNING: Custom Font Sizes
       * 
       * Responsive typography that scales with screen size
       * Mobile-first approach: smaller on mobile, larger on desktop
       */
      fontSize: {
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-desktop': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      
      /**
       * LEARNING: Custom Spacing
       * 
       * Additional spacing values for precise layouts
       * Tailwind uses a 4px base unit (1 = 0.25rem = 4px)
       */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      /**
       * LEARNING: Border Radius
       * 
       * Custom rounded corner sizes
       * 'none' = sharp corners (vintage aesthetic)
       */
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'lg': '8px',
        'vintage': '2px',
      },
      
      /**
       * LEARNING: Box Shadows
       * 
       * Custom shadow effects for depth
       * Vintage aesthetic uses subtle, layered shadows
       */
      boxShadow: {
        'vintage': '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'vintage-lg': '0 8px 16px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'paper': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      
      /**
       * LEARNING: Animations
       * 
       * Custom animations for smooth interactions
       * - fadeInUp: Content appears from bottom
       * - float: Gentle up/down motion
       * - shimmer: Subtle shine effect
       */
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      /**
       * LEARNING: Keyframes
       * 
       * Defines the steps of our animations
       * 0% = start, 100% = end
       */
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      
      /**
       * LEARNING: Background Images
       * 
       * Custom gradient patterns for vintage aesthetic
       */
      backgroundImage: {
        'vintage-gradient': 'linear-gradient(135deg, #f4f1e8 0%, #e8d9b8 100%)',
        'paper-texture': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)',
      },
    },
  },
  plugins: [],
};

export default config;
