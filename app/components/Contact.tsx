'use client';

import { useState, useRef, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iyed-omri-233243237/',
      icon: '💼',
      color: 'from-blue-500 to-blue-600',
      description: 'Professional Network'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Iyed519',
      icon: '🐱',
      color: 'from-gray-700 to-gray-800',
      description: 'Code Repository'
    },
    {
      name: 'X.com',
      url: 'https://x.com/OmriIyed007',
      icon: '🐦 ',
      color: 'from-blue-400 to-blue-500',
      description: 'Tech Thoughts'
    },
    {
      name: 'Email',
      url: 'mailto:omri.iyed@esprit.tn',
      icon: '📧',
      color: 'from-red-500 to-red-600',
      description: 'Direct Contact'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mnnebyon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" ref={sectionRef} className="w-full min-h-screen flex items-center justify-center py-8 px-4 relative overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-16">
          {/* Section Header */}
        <div className="text-center mb-16 w-full">
          <h2 className="text-5xl md:text-7xl font-bold holographic mb-8">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 justify-items-center">
          {/* Contact Form */}
          <div className={`w-full max-w-2xl ${isVisible ? 'reveal active' : 'reveal'}`}>
            <div className="glass p-8 md:p-12 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="text-4xl md:text-5xl">💬</span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-lg font-semibold text-gray-300">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-lg font-semibold text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="subject" className="text-lg font-semibold text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-lg font-semibold text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-lg"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-lg font-semibold text-xl transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-secondary text-black hover:scale-105 glow'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`space-y-8 w-full max-w-2xl ${isVisible ? 'reveal active' : 'reveal'}`} style={{ animationDelay: '0.2s' }}>
            {/* Contact Info */}
            <div className="glass p-8 md:p-12 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="text-4xl md:text-5xl">📍</span>
                Get in Touch
              </h3>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-black text-2xl md:text-3xl">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Email</p>
                    <p className="text-white font-semibold text-xl">omri.iyed@esprit.tn</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-black text-xl">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold"> (+216) 94 349 007</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-black text-xl">
                    🌍
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-semibold">Tunis, Tunsia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 md:p-12 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="text-4xl md:text-5xl">🌐</span>
                Connect Online
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-6 md:p-8 rounded-xl bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-300 group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl mb-3 group-hover:animate-bounce">{social.icon}</div>
                      <p className="font-semibold text-white text-lg">{social.name}</p>
                      <p className="text-sm text-white/80">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass p-8 md:p-12 rounded-2xl text-center">
              <div className="text-6xl md:text-7xl mb-4">⚡</div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick Response Guaranteed</h4>
              <p className="text-lg md:text-xl text-gray-300">
                I typically respond within 24 hours. For urgent matters, feel free to call or connect on LinkedIn.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Contact Elements */}
        <div className="absolute top-10 right-10 w-8 h-8 bg-primary/20 rounded-full float"></div>
        <div className="absolute bottom-20 left-10 w-6 h-6 bg-secondary/30 rounded-full float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-accent/40 rounded-full float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}