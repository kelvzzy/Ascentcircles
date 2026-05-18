# 🚀 VPS Deployment Guide - Truehost/Dorstack

Complete guide to deploy your Ascent Circle landing page to your VPS hosting.

---

## 📋 Prerequisites

- ✅ Domain: ascentcircles.com (ready)
- ✅ VPS Hosting: Truehost (dorstack.com)
- ✅ SSH access to your VPS
- ✅ Node.js 18+ installed on VPS

---

## 🎯 Deployment Options

### Option 1: Static Export (Recommended for VPS)
Next.js can export to static HTML - fastest and easiest for VPS hosting.

### Option 2: Node.js Server
Run Next.js as a Node server with PM2 process manager.

---

## 📦 Option 1: Static Export (Easiest)

### Step 1: Configure for Static Export

Create/update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### Step 2: Build Static Files

```bash
# On your local machine
cd ascent-circle-landing
npm run build
```

This creates an `out` folder with all static files.

### Step 3: Upload to VPS

**Using FTP/SFTP (FileZilla, WinSCP):**
1. Connect to your VPS
2. Navigate to your web root (usually `/var/www/html` or `/home/username/public_html`)
3. Upload entire `out` folder contents
4. Set permissions: `chmod -R 755 /var/www/html`

**Using SCP (Command line):**
```bash
scp -r out/* username@your-vps-ip:/var/www/html/
```

### Step 4: Configure Domain

Point `ascentcircles.com` to your VPS IP in your domain DNS settings:
- A Record: `@` → Your VPS IP
- A Record: `www` → Your VPS IP

### Step 5: Setup SSL (HTTPS)

```bash
# SSH into your VPS
ssh username@your-vps-ip

# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d ascentcircles.com -d www.ascentcircles.com
```

---

## 🔧 Option 2: Node.js Server (Advanced)

### Step 1: Prepare for Production

Update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output: 'export' - use default server mode
};

export default nextConfig;
```

### Step 2: Upload Project to VPS

```bash
# On your local machine, create a zip
cd ascent-circle-landing
npm run build
tar -czf ascent-circle.tar.gz .next public src package.json package-lock.json next.config.ts

# Upload to VPS
scp ascent-circle.tar.gz username@your-vps-ip:~/
```

### Step 3: Setup on VPS

```bash
# SSH into VPS
ssh username@your-vps-ip

# Create directory
mkdir -p /var/www/ascentcircles
cd /var/www/ascentcircles

# Extract files
tar -xzf ~/ascent-circle.tar.gz

# Install dependencies
npm install --production

# Install PM2 (process manager)
sudo npm install -g pm2

# Start the app
pm2 start npm --name "ascentcircles" -- start

# Make PM2 start on boot
pm2 startup
pm2 save
```

### Step 4: Configure Nginx Reverse Proxy

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/ascentcircles.com
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name ascentcircles.com www.ascentcircles.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/ascentcircles.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5: Setup SSL

```bash
sudo certbot --nginx -d ascentcircles.com -d www.ascentcircles.com
```

---

## 🔐 Environment Variables

Create `.env.local` on your VPS:

```bash
cd /var/www/ascentcircles
nano .env.local
```

Add:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://ascentcircles.com
NODE_ENV=production
```

---

## ✅ Post-Deployment Checklist

### Test Your Site:
- [ ] Visit https://ascentcircles.com
- [ ] Check all sections load
- [ ] Test WhatsApp button
- [ ] Test all forms
- [ ] Check mobile view
- [ ] Verify SSL (padlock icon)

### Performance:
- [ ] Run Lighthouse test (aim for 90+)
- [ ] Check page load speed
- [ ] Test from mobile device
- [ ] Verify images load

### SEO:
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics tracking
- [ ] Check meta tags (view source)
- [ ] Test social sharing (Facebook, Twitter)

---

## 🔄 Updating Your Site

### For Static Export:
```bash
# Local machine
npm run build
# Upload new 'out' folder to VPS
```

### For Node.js Server:
```bash
# SSH into VPS
cd /var/www/ascentcircles
git pull  # if using git
npm run build
pm2 restart ascentcircles
```

---

## 🐛 Troubleshooting

### Site Not Loading?
```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Check PM2 logs (if using Node server)
pm2 logs ascentcircles
```

### SSL Issues?
```bash
# Renew certificate
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run
```

### Permission Issues?
```bash
# Fix ownership
sudo chown -R www-data:www-data /var/www/html

# Fix permissions
sudo chmod -R 755 /var/www/html
```

---

## 📊 Monitoring

### Check Site Status:
```bash
# Uptime
uptime

# Disk space
df -h

# Memory usage
free -m

# PM2 status (if using)
pm2 status
```

### Setup Monitoring:
- Use UptimeRobot (free) for uptime monitoring
- Enable Google Analytics for traffic
- Set up error logging

---

## 🎯 Recommended: Static Export

For your use case, **Static Export (Option 1)** is recommended because:
- ✅ Faster loading
- ✅ Lower server resources
- ✅ Easier to manage
- ✅ Better security
- ✅ Works with any hosting

---

## 📞 Quick Commands Reference

```bash
# Build static site
npm run build

# Test locally
npm run dev

# Upload to VPS (replace with your details)
scp -r out/* username@vps-ip:/var/www/html/

# SSH into VPS
ssh username@vps-ip

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx config
sudo nginx -t

# View logs
sudo tail -f /var/log/nginx/access.log
```

---

## 🎉 You're Ready!

Once deployed, your site will be live at:
- **https://ascentcircles.com**
- **https://www.ascentcircles.com**

With all features working:
- ✅ Beautiful vintage design
- ✅ Real Nigerian locations
- ✅ WhatsApp community link
- ✅ Social media links
- ✅ Contact information
- ✅ SSL security
- ✅ Fast loading

**Need help? Check Truehost documentation or contact their support!**
