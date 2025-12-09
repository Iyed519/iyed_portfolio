'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Portfolio Website',
      description: 'Responsive portfolio website built with Next.js and modern design principles.',
      longDescription:
          'A cutting-edge portfolio website showcasing modern web development skills with glassmorphism effects, particle animations, and smooth scrolling. Built with Next.js 16, React 19, and Tailwind CSS v4.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://iyed-omri-portfolio.vercel.app',
      githubUrl: 'https://github.com/iyed-omri/portfolio',
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Full-stack task management application with real-time updates and team collaboration.',
      longDescription:
          'A comprehensive task management platform featuring real-time collaboration, project tracking, and team management. Built with React frontend and Node.js backend with MongoDB database.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://taskmanager-demo.vercel.app',
      githubUrl: 'https://github.com/iyed-omri/task-manager',
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and data visualization.',
      longDescription:
          'A modern weather application that provides detailed weather information, forecasts, and interactive charts. Features geolocation support and responsive design for all devices.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3', 'Responsive Design'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://weather-dashboard-io.vercel.app',
      githubUrl: 'https://github.com/iyed-omri/weather-dashboard',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 4,
      title: 'E-Commerce Store',
      description: 'Modern e-commerce platform with shopping cart, payment integration, and admin panel.',
      longDescription:
          'A full-featured e-commerce solution with product catalog, shopping cart functionality, secure payment processing, and comprehensive admin dashboard for inventory management.',
      technologies: ['Next.js', 'Stripe API', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://ecommerce-demo-io.vercel.app',
      githubUrl: 'https://github.com/iyed-omri/ecommerce-store',
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Content management system with markdown support and SEO optimization.',
      longDescription:
          'A modern blog platform with markdown editor, SEO optimization, comment system, and admin dashboard. Features responsive design and fast loading times.',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel', 'SEO'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://blog-platform-io.vercel.app',
      githubUrl: 'https://github.com/iyed-omri/blog-platform',
      category: 'Full-Stack',
      featured: false,
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'Mobile-responsive recipe application with search functionality and favorites.',
      longDescription:
          'A recipe discovery application that helps users find recipes based on ingredients, dietary preferences, and cooking time. Features save functionality and meal planning.',
      technologies: ['React', 'Recipe API', 'Local Storage', 'CSS Grid', 'PWA'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://recipe-finder-io.vercel.app',
      githubUrl: 'https://github.com/iyed-omri/recipe-finder',
      category: 'Frontend',
      featured: false,
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile'];

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
      selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
      <section
          id="projects"
          ref={sectionRef}
          className="w-full min-h-screen flex items-center justify-center py-8 px-4 relative overflow-hidden"
      >
        {/* Centered Content Container */}
        <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-8">
          {/* Section Header */}
          <div className="text-center w-full">
            <h2 className="text-5xl md:text-7xl font-bold holographic mb-8">
              Featured Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Innovative solutions that showcase the power of modern technology and creative problem-solving
            </p>
          </div>

          {/* Featured Projects Carousel */}
          <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              🌟 Spotlight Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
              {featuredProjects.slice(0, 2).map((project, index) => (
                  <div
                      key={project.id}
                      className={`glass p-8 rounded-2xl transform-3d hover:scale-105 transition-all duration-500 w-full max-w-2xl ${
                          isVisible ? 'reveal active' : 'reveal'
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden group">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-4xl sm:text-5xl lg:text-6xl opacity-50">🚀</div>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3 sm:gap-4">
                          <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base text-white hover:text-primary transition-colors"
                          >
                            Live Demo
                          </a>
                          <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base text-white hover:text-primary transition-colors"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h4>
                        <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-lg">
                      {project.category}
                    </span>
                      </div>
                      <p className="text-lg md:text-xl text-gray-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 ${
                        selectedCategory === category
                            ? 'bg-gradient-to-r from-primary to-secondary text-black'
                            : 'glass text-white hover:text-primary'
                    }`}
                >
                  {category}
                </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {filteredProjects.map((project, index) => (
                <div
                    key={project.id}
                    className={`glass p-8 rounded-2xl transform-3d hover:scale-105 transition-all duration-500 cursor-pointer group w-full max-w-md ${
                        isVisible ? 'reveal active' : 'reveal'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-56 md:h-64 mb-6 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                      <div className="text-3xl sm:text-4xl opacity-50 group-hover:scale-110 transition-transform">
                        {project.category === 'Full-Stack' && '🌐'}
                        {project.category === 'Frontend' && '🎨'}
                        {project.category === 'Backend' && '⚙️'}
                        {project.category === 'Mobile' && '📱'}
                      </div>
                    </div>
                    {project.featured && (
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-primary to-secondary text-black px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <span className="px-3 py-2 bg-primary/20 text-primary rounded-full text-sm">
                    {project.category}
                  </span>
                    </div>
                    <p className="text-lg text-gray-300 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      {tech}
                    </span>
                      ))}
                      {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="glass max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 md:p-12">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-4xl md:text-5xl font-bold holographic">{selectedProject.title}</h3>
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white text-3xl md:text-4xl"
                    >
                      ×
                    </button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="h-80 md:h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-8">
                        <div className="text-8xl md:text-9xl opacity-50">🚀</div>
                      </div>
                      <div className="flex gap-4 mb-6">
                        <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-primary to-secondary text-black px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                        >
                          Live Demo
                        </a>
                        <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 glass text-white px-6 py-3 rounded-lg font-semibold text-center hover:text-primary transition-colors"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                    <span className="px-6 py-3 bg-primary/20 text-primary rounded-full text-lg font-semibold">
                      {selectedProject.category}
                    </span>
                      </div>
                      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                              <span
                                  key={tech}
                                  className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  );
}