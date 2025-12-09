'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
      <nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
              isScrolled
                  ? 'bg-black/40 border-b border-white/20'
                  : 'bg-black/20'
          }`}
          style={{
            height: isScrolled ? '10vh' : '12vh',
            minHeight: '80px'
          }}
      >
        <div className="responsive-container h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="font-bold holographic hover:scale-105 transition-transform duration-300 text-responsive-2xl"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              &lt;Iyed Omri/&gt;
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center" style={{ gap: 'clamp(1rem, 3vw, 2.5rem)' }}>
              {navItems.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className="font-semibold text-white hover:text-primary transition-all duration-300 relative group rounded-lg hover:bg-white/10"
                      style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        padding: 'clamp(0.5rem, 1.5vw, 1rem) clamp(0.75rem, 2vw, 1.25rem)'
                      }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
                  </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white focus:outline-none rounded-lg hover:bg-white/10 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}
            >
              <div style={{ width: 'clamp(1.5rem, 4vw, 2rem)', height: 'clamp(1.5rem, 4vw, 2rem)' }} className="flex flex-col justify-center items-center">
              <span
                  className={`bg-white block transition-all duration-300 ease-out rounded-sm ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                  style={{ height: '2px', width: '100%' }}
              ></span>
                <span
                    className={`bg-white block transition-all duration-300 ease-out rounded-sm my-1 ${
                        isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ height: '2px', width: '100%' }}
                ></span>
                <span
                    className={`bg-white block transition-all duration-300 ease-out rounded-sm ${
                        isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                    }`}
                    style={{ height: '2px', width: '100%' }}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
              className={`md:hidden transition-all duration-500 ease-in-out absolute top-full left-0 w-full ${
                  isMobileMenuOpen
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
              }`}
          >
            <div className="glass rounded-xl border border-white/10 responsive-container" style={{ margin: '2vh 5%', padding: 'clamp(1rem, 4vw, 2rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 3vw, 1.5rem)' }}>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-white/90 hover:text-primary transition-all duration-300 rounded-lg hover:bg-white/5 border-l-2 border-transparent hover:border-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                          padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 1.5rem)'
                        }}
                    >
                      {item.name}
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}