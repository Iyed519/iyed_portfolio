'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Full-Stack Engineer',
    'React Developer',
    'Node.js Developer',
    'AI/ML Enthusiast',
    'Spring Boot Developer',
    'Angular Developer',
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Iyed_Omri_CV.pdf';
    link.download = 'Iyed_Omri_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 gradient-bg"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute border-2 border-primary/30 rotate-45 float w-16 h-16 md:w-20 md:h-20" style={{ top: '10%', left: '5%' }}></div>
        <div className="absolute bg-secondary/20 rounded-full pulse-glow w-12 h-12 md:w-16 md:h-16" style={{ top: '20%', right: '5%' }}></div>
        <div className="absolute bg-accent/30 transform rotate-12 float w-10 h-10 md:w-12 md:h-12" style={{ bottom: '20%', left: '8%' }}></div>

        <div className="max-w-6xl mx-auto text-center z-10 relative flex flex-col items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin"></div>
              <div className="absolute inset-2 rounded-full bg-black overflow-hidden">
                <Image
                    src="/profile.jpg"
                    alt="Iyed Omri"
                    fill
                    className="object-cover rounded-full"
                    priority
                />
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-center">
                <span className="holographic">Hi, I'm Iyed Omri</span>
              </h1>

              <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white flex items-center justify-center min-h-16 md:min-h-20">
              <span className="border-r-2 border-primary pr-4">
                {displayText}
              </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed text-center max-w-4xl">
              Crafting innovative digital experiences with cutting-edge technologies.
              Passionate about building scalable applications that push the boundaries of what's possible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 mt-8 md:mt-12 w-full">
              <a
                  href="#projects"
                  className="glass font-semibold text-white hover:scale-105 transition-all duration-300 glow group rounded-full px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl w-full max-w-xs"
              >
              <span className="flex items-center justify-center gap-3">
                View My Work
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              </a>

              <a
                  href="#contact"
                  className="border-2 border-primary font-semibold text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 rounded-full px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl w-full max-w-xs text-center"
              >
                Get In Touch
              </a>

              <button
                  onClick={handleDownloadCV}
                  className="border-2 border-secondary font-semibold text-secondary hover:bg-secondary hover:text-black transition-all duration-300 hover:scale-105 rounded-full px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl w-full max-w-xs text-center flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-2 h-3 md:w-3 md:h-4 bg-white rounded-full mt-2 md:mt-3 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Code Snippets */}
        <div className="hidden lg:block absolute top-1/4 left-4 xl:left-8 glass p-4 md:p-6 rounded-lg text-sm md:text-base font-mono opacity-70 transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="text-primary">const</div>
          <div className="text-white">developer = {'{'}</div>
          <div className="text-secondary ml-4">passion: true</div>
          <div className="text-white">{'}'}</div>
        </div>

        <div className="hidden lg:block absolute bottom-1/4 right-4 xl:right-8 glass p-4 md:p-6 rounded-lg text-sm md:text-base font-mono opacity-70 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="text-accent">function</div>
          <div className="text-white">createMagic() {'{'}</div>
          <div className="text-primary ml-4">return innovation;</div>
          <div className="text-white">{'}'}</div>
        </div>
      </section>
  );
}