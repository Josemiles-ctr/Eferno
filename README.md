# Eferno - AI-Powered Shopping Platform

Eferno is a modern, AI-powered ecommerce platform landing page built with React and Vite. It showcases intelligent shopping features, neural network visualizations, and a sleek, responsive design with light/dark theme support.

## ✨ Features

- 🤖 **AI-Powered Features**: Smart recommendations, visual search, price prediction, and more
- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 🌓 **Theme Support**: System, light, and dark themes with persistent storage
- 📱 **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- ⚡ **Neural Background**: Animated neural network background effect
- 🎯 **Interactive Carousel**: Showcase AI features with auto-rotating carousel
- 🎭 **Material Icons**: Professional iconography throughout
- 🔤 **Google Fonts**: Roboto typography for modern aesthetics

## 🚀 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: CSS with CSS Variables
- **Icons**: Material Icons
- **Fonts**: Google Fonts (Roboto)
- **Avatars**: DiceBear API

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Click "Deploy"

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The production build is in the `dist` folder after running `npm run build`.

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **GitHub Pages**: Use a GitHub Actions workflow to build and deploy
- **Traditional Hosting**: Upload the contents of `dist` to your web server

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0f0f1e;
  --bg-secondary: #1a1a2e;
  --text-primary: #e0e0e0;
  /* ... more variables */
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **AI Features**: Modify features array in `src/components/AIFeatures.jsx`
- **Services**: Update services in `src/components/Services.jsx`
- **Team Members**: Change team data in `src/components/Team.jsx`

## 📁 Project Structure

```
Eferno/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── AIFeatures.jsx/css
│   │   ├── Services.jsx/css
│   │   ├── Team.jsx/css
│   │   ├── Tabs.jsx/css
│   │   ├── Button.jsx/css
│   │   └── NeuralBackground.jsx/css
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles & theme
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
└── README.md            # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: 480px - 768px
- Small Mobile: < 480px

## 🌟 Components

### Reusable Components

- **Button**: Customizable button with variants (primary, secondary, outline, ghost)
- **Navigation**: Fixed navbar with theme toggle and mobile menu
- **Tabs**: Sticky tab navigation for sections
- **NeuralBackground**: Canvas-based neural network animation

### Section Components

- **Hero**: Landing section with CTA buttons and floating cards
- **AIFeatures**: Carousel showcasing AI capabilities
- **Services**: Grid of service offerings
- **Team**: Team member cards with avatars

## 🎯 Performance

- Optimized bundle size with Vite
- Lazy loading for images
- Efficient CSS with modern properties
- Smooth animations with CSS transforms

## 📄 License

This project is open source and available under the MIT License.

## 👥 Team

- Mukisa Ben Ezra - CEO & Founder
- Otai Joseph - CTO
- Aita Joshua Prince - Lead Designer
- Wamani Joshua - AI Engineer
- Namugerwa Precious - Marketing Head

---

Built with ❤️ by the Eferno Team

