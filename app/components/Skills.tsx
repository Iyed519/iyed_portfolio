'use client';

import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'Frontend', icon: '▲' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Language', icon: '🐍' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'GraphQL', category: 'API', icon: '📊' },
    // { name: 'Redis', category: 'Database', icon: '🔴' },
    { name: 'Kubernetes', category: 'DevOps', icon: '⚙️' },
  ];

  const categories = ['Frontend', 'Backend', 'Language', 'Database', 'Cloud', 'DevOps', 'API'];

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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
      <section
          id="skills"
          ref={sectionRef}
          className="w-full min-h-screen flex items-center justify-center py-8 px-4 relative overflow-hidden"
      >
        {/* Centered Content Container */}
        <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-8">
          {/* Section Header */}
          <div className="text-center w-full">
            <h2 className="text-5xl md:text-7xl font-bold holographic mb-8">
              Skills & Expertise
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that power innovative
              solutions
            </p>
          </div>

          {/* Skills Galaxy */}
          <div className="relative w-full flex flex-col items-center justify-center gap-16">
            {/* Central Hub */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 glass rounded-full flex items-center justify-center pulse-glow">
                <div className="text-3xl md:text-5xl font-bold holographic">TECH</div>
                {/* Orbiting Skills */}
                {skills.slice(0, 6).map((skill, index) => (
                    <div
                        key={skill.name}
                        className="absolute w-16 h-16 md:w-20 md:h-20 glass rounded-full flex items-center justify-center text-2xl md:text-3xl hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          transform: `rotate(${index * 60}deg) translateX(100px) rotate(-${index * 60}deg)`,
                          animation: `orbit ${20 + index * 2}s linear infinite`,
                        }}
                        title={skill.name}
                    >
                      {skill.icon}
                    </div>
                ))}
              </div>
            </div>

            {/* Skills Grid by Category */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {categories.map((category, categoryIndex) => {
                const categorySkills = getSkillsByCategory(category);
                if (categorySkills.length === 0) return null;

                return (
                    <div
                        key={category}
                        className={`glass p-8 rounded-2xl transform-3d hover:scale-105 transition-all duration-500 w-full max-w-md ${
                            isVisible ? 'reveal active' : 'reveal'
                        }`}
                        style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                        {category}
                      </h3>
                      <div className="space-y-4">
                        {categorySkills.map((skill, skillIndex) => (
                            <div key={skill.name} className="group">
                              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <span className="text-2xl md:text-3xl">{skill.icon}</span>
                                <span className="text-lg md:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                );
              })}
            </div>

            {/* Interactive Skill Matrix */}
            <div className="text-center w-full">
              <div className="glass p-8 md:p-12 rounded-2xl max-w-6xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Interactive Skill Matrix
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 justify-items-center">
                  {skills.map((skill, index) => (
                      <div
                          key={skill.name}
                          className="group relative p-4 md:p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 cursor-pointer transform hover:scale-110 w-full max-w-xs"
                          style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="text-3xl md:text-4xl mb-3 group-hover:animate-bounce">
                          {skill.icon}
                        </div>
                        <div className="text-sm md:text-base font-semibold text-white group-hover:text-primary transition-colors text-center">
                          {skill.name}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {skill.category}
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements - Adjusted for centering */}
          <div className="absolute top-10 left-10 w-6 h-6 bg-primary rounded-full opacity-60 float"></div>
          <div
              className="absolute top-1/3 right-10 w-8 h-8 bg-secondary rounded-full opacity-40 float"
              style={{ animationDelay: '1s' }}
          ></div>
          <div
              className="absolute bottom-20 left-1/4 w-5 h-5 bg-accent rounded-full opacity-50 float"
              style={{ animationDelay: '2s' }}
          ></div>
        </div>
      </section>
  );
}