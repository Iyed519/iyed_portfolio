'use client';

import Link from 'next/link';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <ParticleBackground />

            <Navbar />

            <main className="relative z-10 pt-20 pb-32">
                {/* Page Header */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="mb-8">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Home
                            </Link>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold holographic mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions.
                        </p>
                    </div>
                </section>

                {/* Main Contact Form – Perfectly Centered */}
                <Contact />

                {/* Services Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                            {[
                                {
                                    title: 'Project Consultation',
                                    description: 'Free 30-minute consultation for new projects',
                                    icon: 'Light Bulb',
                                    action: 'Schedule Call'
                                },
                                {
                                    title: 'Technical Support',
                                    description: 'Ongoing support and maintenance services',
                                    icon: 'Wrench',
                                    action: 'Learn More'
                                },
                                {
                                    title: 'Code Review',
                                    description: 'Professional code review and optimization',
                                    icon: 'Magnifying Glass',
                                    action: 'Get Quote'
                                },
                                {
                                    title: 'Mentoring',
                                    description: '1-on-1 mentoring for aspiring developers',
                                    icon: 'Graduation Cap',
                                    action: 'Apply Now'
                                }
                            ].map((service) => (
                                <div
                                    key={service.title}
                                    className="glass p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 w-full max-w-sm"
                                >
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-300 mb-6 text-base">{service.description}</p>
                                    <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-black rounded-lg font-bold hover:scale-105 transition-transform">
                                        {service.action}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-24 max-w-5xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold holographic text-center mb-16">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        question: 'What technologies do you specialize in?',
                                        answer: 'I specialize in React, Next.js, Node.js, TypeScript, Python, AWS, and modern web technologies. I also have experience with AI/ML, blockchain, and IoT development.'
                                    },
                                    {
                                        question: 'How long does a typical project take?',
                                        answer: 'Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I provide detailed timelines during consultation.'
                                    },
                                    {
                                        question: 'Do you work with international clients?',
                                        answer: 'Yes! I work with clients globally and am comfortable with remote collaboration across different time zones. I use modern communication tools to ensure smooth project delivery.'
                                    },
                                    {
                                        question: 'What is your development process?',
                                        answer: 'I follow an agile development approach with regular check-ins, iterative development, and continuous feedback. This ensures the final product meets your expectations and requirements.'
                                    }
                                ].map((faq, index) => (
                                    <div
                                        key={index}
                                        className="glass p-8 rounded-2xl backdrop-blur-sm border border-white/10"
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}