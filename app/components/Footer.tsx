'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/iyed-omri-233243237/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/Iyed519', icon: '🐱' },
    { name: 'X.com', url: 'https://x.com/OmriIyed007', icon: '🐦' },
    { name: 'Email', url: 'mailto:omri.iyed@esprit.tn', icon: '📧' },
  ];

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold holographic mb-6">&lt;IyedOmri/&gt;</h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Iyed Omri - Full-Stack Engineer passionate about creating innovative digital experiences
                that push the boundaries of technology.
              </p>
            </div>

            {/* Tech Stack Showcase */}
            <div className="mb-8">
              <p className="text-lg text-gray-400 mb-4">Built with cutting-edge technologies:</p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glass p-6 md:p-8 rounded-lg">
              <h4 className="text-xl md:text-2xl text-white font-semibold mb-4">Stay Updated</h4>
              <p className="text-lg text-gray-400 mb-6">Get notified about new projects and tech insights</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="omri.iyed@esprit.tn"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white text-lg focus:border-primary focus:outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-black rounded font-semibold text-lg hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-2xl md:text-3xl mb-8 flex items-center gap-3">
              <span className="text-primary text-3xl">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg md:text-xl text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-bold text-2xl md:text-3xl mb-8 flex items-center gap-3">
              <span className="text-secondary text-3xl">🌐</span>
              Connect
            </h4>

            {/* Social Links */}
            <div className="space-y-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg md:text-xl text-gray-300 hover:text-primary transition-colors duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-lg text-gray-400">
              <p>📍 Tunis, Tunisia</p>
              <p>📧 iyed.omri@esprit.tn</p>
              <p>📱 (+216) 94 349 007</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-gray-400 text-lg md:text-xl text-center md:text-left">
              <p>© {currentYear} Iyed Omri Portfolio. All rights reserved.</p>
              <p className="mt-2">
                Crafted with ❤️ using Next.js & Modern Web Technologies
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-8 text-lg text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const colors = ['primary', 'secondary', 'accent'];
              const randomColor = colors[Math.floor(Math.random() * colors.length)];
              document.documentElement.style.setProperty('--primary',
                randomColor === 'primary' ? '#ff006e' :
                randomColor === 'secondary' ? '#8338ec' : '#00d4ff'
              );
            }}
            className="text-lg text-gray-600 hover:text-primary transition-colors cursor-pointer"
          >
            🎨 Click to change theme colors
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-secondary text-black rounded-full flex items-center justify-center font-bold text-2xl md:text-3xl hover:scale-110 transition-all duration-300 z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
    </footer>
  );
}