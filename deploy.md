# Deployment Guide

## Quick Deploy to Vercel

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Environment Variables**
   Set these in Vercel dashboard:
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` (optional)
   - `MAILCHIMP_API_KEY` (for email capture)
   - `MAILCHIMP_LIST_ID` (for email capture)

3. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update `metadataBase` in `layout.tsx`

## Media Assets Needed

Before going live, add these files to `/public/images/`:

### Required Images
- `hero-fallback.jpg` (1920x1080) - Hero section background
- `story-hiking.jpg` (800x600) - Personal hiking photo
- `silent-walk.jpg` (600x400) - Mindful walking image
- `drone-landscape.jpg` (800x600) - Aerial landscape
- `fireside-talk.jpg` (600x400) - Community gathering
- `community-impact.jpg` (600x400) - Service project
- `travel-journey.jpg` (600x400) - Travel experience
- `storytelling.jpg` (600x400) - Content creation
- `og-image.jpg` (1200x630) - Social sharing image

### Required Videos (add to `/public/videos/`)
- `hero-background.mp4` (30 seconds, 1920x1080) - Hero background
- `drone-preview.mp4` (15 seconds) - Experience gallery
- `episode-preview.mp4` (15 seconds) - Content preview

## Performance Optimization

1. **Image Optimization**
   - Use WebP format when possible
   - Compress images to <500KB each
   - Use appropriate dimensions

2. **Video Optimization**
   - Compress videos for web
   - Use H.264 encoding
   - Keep file sizes under 10MB

## Analytics Setup

1. **Google Analytics 4**
   - Create GA4 property
   - Add tracking ID to environment variables
   - Set up conversion goals

2. **Email Service Integration**
   - Set up Mailchimp or ConvertKit
   - Configure API keys
   - Test email capture flow

## SEO Checklist

- [ ] Update `metadataBase` in layout.tsx
- [ ] Add real Open Graph image
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test social media sharing
- [ ] Verify structured data markup

## Launch Checklist

- [ ] All placeholder images replaced
- [ ] Email capture tested and working
- [ ] Contact forms functional
- [ ] Analytics tracking verified
- [ ] Performance score >90 on Lighthouse
- [ ] Mobile responsiveness tested
- [ ] Accessibility compliance verified
- [ ] Cross-browser testing completed
- [ ] SSL certificate active
- [ ] Custom domain configured