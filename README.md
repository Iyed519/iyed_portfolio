# 🚀 Iyed Omri's Portfolio - Cutting-Edge Full-Stack Engineer Portfolio

A stunning, modern portfolio website built with Next.js 16, React 19, and Tailwind CSS v4. This portfolio showcases innovative web technologies with glassmorphism effects, particle animations, interactive 3D elements, and smooth scroll animations.

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism & Neumorphism**: Beautiful glass-like effects with depth
- **Holographic Text Effects**: Dynamic gradient animations
- **Particle Background**: Interactive animated particles with connections
- **3D Transforms**: Hover effects with 3D rotations
- **Smooth Animations**: CSS-based animations for optimal performance

### 🛠️ Technical Excellence
- **Next.js 16**: Latest App Router with server components
- **React 19**: Modern React with concurrent features
- **Tailwind CSS v4**: Cutting-edge styling with custom animations
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with adaptive layouts

### 📱 Sections
1. **Hero Section**: Dynamic typing animation with floating elements
2. **About**: Personal introduction with key highlights
3. **Skills**: Interactive skill matrix with orbiting animations
4. **Projects**: Featured projects with category filtering and modals
5. **Experience**: Interactive timeline with expandable cards
6. **Contact**: Functional contact form with API integration
7. **Footer**: Social links and newsletter signup

### 🎯 Interactive Elements
- **Skill Orbits**: Animated skill icons orbiting around a central hub
- **Project Modals**: Detailed project information in elegant overlays
- **Timeline Navigation**: Expandable experience cards
- **Particle System**: Real-time particle animation with mouse interaction
- **Smooth Scrolling**: Anchor-based navigation with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iyed_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
iyed_portfolio/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ParticleBackground.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   │       └── route.ts
│   ├── projects/           # Dedicated projects page
│   │   └── page.tsx
│   ├── contact/            # Dedicated contact page
│   │   └── page.tsx
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── cv.pdf              # Downloadable CV
│   └── [other assets]
└── [config files]
```

## 🎨 Customization

### Colors & Themes
The portfolio uses CSS custom properties for easy theming:

```css
:root {
  --primary: #00d4ff;    /* Cyan */
  --secondary: #ff006e;   /* Magenta */
  --accent: #8338ec;      /* Purple */
}
```

### Content Updates
1. **Personal Information**: Update in each component file
2. **Projects**: Modify the projects array in `Projects.tsx`
3. **Skills**: Update the skills array in `Skills.tsx`
4. **Experience**: Modify the experiences array in `Experience.tsx`
5. **CV**: Replace `public/cv.pdf` with your actual resume

### Animations
All animations are CSS-based for optimal performance:
- **Particle System**: Canvas-based with requestAnimationFrame
- **Scroll Animations**: Intersection Observer API
- **Hover Effects**: CSS transforms and transitions
- **Typing Animation**: JavaScript-controlled text animation

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: `npm run build` then deploy `out/` folder
- **AWS Amplify**: Connect GitHub repository
- **Docker**: Use the included Dockerfile (if created)

## 📧 Contact Form Setup

The contact form includes a basic API route. For production:

1. **Email Service Integration**:
   - SendGrid
   - Nodemailer with SMTP
   - AWS SES

2. **Database Storage**:
   - MongoDB
   - PostgreSQL
   - Supabase

3. **Environment Variables**:
   ```bash
   SENDGRID_API_KEY=your_key
   DATABASE_URL=your_db_url
   ```

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Font Loading**: next/font with Geist fonts
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS purging
- **Animation Performance**: CSS transforms and GPU acceleration

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Vercel**: For seamless deployment
- **React Team**: For the powerful UI library

## 📞 Support

If you have any questions or need help customizing the portfolio:

- 📧 Email: iyed.omri@example.com
- 💼 LinkedIn: [linkedin.com/in/iyed-omri](https://linkedin.com/in/iyed-omri)
- 🐱 GitHub: [github.com/iyed-omri](https://github.com/iyed-omri)

---

**Built with ❤️ using Next.js, React, and modern web technologies**
