#!/bin/bash

# Ascent Circle - Static Deployment Script
# This script builds and prepares your site for VPS deployment

echo "🚀 Building Ascent Circle for production..."

# Build the static site
npm run build

echo "✅ Build complete!"
echo ""
echo "📦 Your static files are in the 'out' folder"
echo ""
echo "📤 Next steps:"
echo "1. Upload the 'out' folder contents to your VPS"
echo "2. Point ascentcircles.com to your VPS IP"
echo "3. Setup SSL with: sudo certbot --nginx -d ascentcircles.com"
echo ""
echo "🎉 Your site will be live at https://ascentcircles.com"
