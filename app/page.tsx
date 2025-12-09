'use client';

import { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Add event listeners for anchor links
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative w-full">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section - Integrated into Hero */}
        <section id="about" className="w-full" style={{ padding: 'clamp(5rem, 10vh, 8rem) 0' }}>
          <div className="center-container">
            <div className="glass rounded-3xl center-content" style={{ padding: 'clamp(2rem, 5vw, 4rem)', maxWidth: 'min(90vw, 800px)' }}>
              <h2 className="text-4xl md:text-5xl font-bold holographic mb-8">
                About Me
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Final-year Computer Engineering student (5th year) passionate about full-stack development and artificial intelligence. Actively seeking a 6-month end-of-studies internship / PFE starting February 2026 to apply strong academic foundations and personal projects in a professional environment while completing a high-quality graduation thesis.
                Proficient in React, Next.js, TypeScript, Node.js, Python, Docker, and AWS through intensive coursework, competitive projects, and self-built applications. Quick learner, team player, and deeply motivated to contribute to real-world products from day one.
                Fully mobile (Tunisia & international)
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">

              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-primary mb-2">Innovation First</h3>
                  <p className="text-gray-400">Always exploring cutting-edge technologies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Performance Focused</h3>
                  <p className="text-gray-400">Optimized solutions for maximum efficiency</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold text-accent mb-2">User-Centric</h3>
                  <p className="text-gray-400">Building experiences that users love</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
