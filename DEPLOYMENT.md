# Deployment Guide - Eferno

## Quick Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Done! Your site is live 🎉

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Alternative Deployment Options

### Netlify

1. **Via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Via Netlify CLI**
   ```bash
   npm i -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### GitHub Pages

1. **Add deployment script to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Render

1. Go to [render.com](https://render.com)
2. Create "New Static Site"
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Create Static Site"

## Pre-Deployment Checklist

- [ ] Run `npm run build` locally to ensure it builds successfully
- [ ] Test the production build with `npm run preview`
- [ ] Check all environment variables are set correctly
- [ ] Verify all assets load correctly
- [ ] Test responsive design on multiple devices
- [ ] Check theme toggle functionality
- [ ] Verify all navigation links work
- [ ] Test carousel auto-play and navigation
- [ ] Ensure neural background animation performs well

## Build Optimization

The project is already optimized with:
- ✅ Code splitting (vendor chunks)
- ✅ Minification (esbuild)
- ✅ CSS optimization
- ✅ Asset optimization
- ✅ No source maps in production

## Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env`
2. Add your variables
3. In Vercel/Netlify dashboard, add the same variables in the project settings

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## Troubleshooting

### Build fails
- Check Node.js version (requires v18 or higher)
- Run `npm install` to ensure all dependencies are installed
- Check for console errors with `npm run build`

### Routes not working
- Ensure `vercel.json` rewrites are configured (already included)
- For other platforms, configure SPA fallback to `index.html`

### Assets not loading
- Check the `base` option in `vite.config.js`
- Ensure assets are in the `public` folder or properly imported

## Performance Tips

1. **Enable Compression**
   - Most platforms (Vercel, Netlify) enable gzip/brotli automatically

2. **CDN & Caching**
   - Static assets are automatically cached
   - Vercel/Netlify CDN is enabled by default

3. **Analytics**
   - Add Vercel Analytics: `npm i @vercel/analytics`
   - Or use Google Analytics in `index.html`

## Post-Deployment

After deployment:
1. Test the live site on multiple devices
2. Check Lighthouse scores (Performance, Accessibility, SEO)
3. Set up monitoring/analytics
4. Configure custom domain (if applicable)
5. Share your amazing site! 🚀

---

Need help? Check the [Vercel Documentation](https://vercel.com/docs) or [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
