'use client';

import Link from 'next/link';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <ParticleBackground />
            <Navbar />

            <main className="relative z-10 pt-20">
                {/* Page Header */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="mb-8">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Home
                            </Link>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold holographic mb-6">
                            All Projects
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Explore my complete portfolio of innovative projects, from AI-powered applications to scalable web platforms and cutting-edge mobile solutions.
                        </p>
                    </div>
                </section>

                {/* Projects Component */}
                <Projects />

                {/* Additional Project Categories */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold holographic mb-6">
                                More Coming Soon
                            </h2>
                            <p className="text-xl text-gray-300">
                                I'm constantly working on new projects and exploring emerging technologies.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'AI/ML Projects',
                                    description: 'Machine learning models and AI-powered applications',
                                    icon: 'Robot',
                                    status: 'In Development',
                                },
                                {
                                    title: 'Blockchain Solutions',
                                    description: 'Decentralized applications and smart contracts',
                                    icon: 'Chain',
                                    status: 'Planning',
                                },
                                {
                                    title: 'IoT Integrations',
                                    description: 'Internet of Things and embedded systems',
                                    icon: 'Signal',
                                    status: 'Research',
                                },
                            ].map((category) => (
                                <div
                                    key={category.title}
                                    className="glass p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                                >
                                    <div className="text-6xl mb-4">{category.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                                    <p className="text-gray-300 mb-4">{category.description}</p>
                                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    {category.status}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}