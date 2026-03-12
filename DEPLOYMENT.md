# Deployment Guide for Bonavista On The Lake

## GitHub Pages Setup

### 1. Repository Setup
1. Create a new GitHub repository (if not already created)
2. Push this code to the repository:
   ```bash
   git add .
   git commit -m "Initial commit: Bonavista landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on push to main branch

### 3. Custom Domain Configuration (Cloudflare)

#### On Cloudflare:
1. Log in to your Cloudflare dashboard
2. Select your domain
3. Go to **DNS** settings
4. Add the following records:

   **For apex domain (bonavistaonthelake.ca):**
   - Type: `A`
   - Name: `@`
   - Content: `185.199.108.153`
   - Proxy status: Proxied (orange cloud)
   
   Add additional A records for redundancy:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Content: `YOUR_USERNAME.github.io`
   - Proxy status: Proxied

5. Go to **SSL/TLS** > **Overview**
6. Set encryption mode to **Full** or **Full (strict)**

7. Go to **SSL/TLS** > **Edge Certificates**
8. Enable **Always Use HTTPS**

#### On GitHub:
1. Go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter: `bonavistaonthelake.ca`
3. Wait for DNS check to complete (may take a few minutes)
4. Enable **Enforce HTTPS**

### 4. Google Analytics Setup
1. Create a Google Analytics 4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Update the GA_MEASUREMENT_ID in `components/Analytics.tsx`

### 5. Google Search Console
1. Go to https://search.google.com/search-console
2. Add property for `bonavistaonthelake.ca`
3. Verify ownership using the meta tag in `app/layout.tsx`
4. Submit sitemap: `https://bonavistaonthelake.ca/sitemap.xml`

## Build Commands

### Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
```
Output will be in the `out` folder

### Manual Deployment (if needed)
```bash
npm run build
# Then push the 'out' folder contents to gh-pages branch
```

## Post-Deployment Checklist

- [ ] Verify site loads at https://bonavistaonthelake.ca
- [ ] Test all links and CTA button
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target: 95+ all metrics)
- [ ] Verify structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Test page load speed
- [ ] Verify SSL certificate is active
- [ ] Check Open Graph preview on social media
- [ ] Monitor Google Analytics for traffic

## Updating Content

1. Edit files in `app/` or `components/`
2. Commit and push to main branch
3. GitHub Actions will automatically rebuild and deploy
4. Changes live in ~2-3 minutes

## SEO Monitoring

- **Google Search Console**: Monitor search performance, indexing status
- **Google Analytics**: Track visitor behavior, conversions
- **PageSpeed Insights**: Monitor performance scores
- **Lighthouse CI**: Automated performance testing in workflow
