'use client';

import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number; // 1-100
  category?: 'programming' | 'ml' | 'data' | 'tools';
  description?: string;
}

interface SkillsProps {
  skills: Skill[];
  darkMode?: boolean;
}

const Skills = ({ skills, darkMode = false }: SkillsProps) => {
  const [isClient, setIsClient] = useState(false);
  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  // Group skills by category
  const categorizedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const category = skill.category || 'programming';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});
  
  // Get default category (first one available)
  const defaultCategory = Object.keys(categorizedSkills)[0] || 'programming';
  
  // Initialize with the first category selected
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  // Add hover effect state
  const [hoverSkill, setHoverSkill] = useState<number | null>(null);
  
  const categoryLabels: Record<string, string> = {
    programming: 'CODE.EXE',
    ml: 'AI.SYS',
    data: 'DATA.BIN',
    tools: 'TOOLS.BAT'
  };
  
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);
  
  // Ensure animations only run on client
  useEffect(() => {
    setIsClient(true);
    
    // Simulate loading time
    const loadTimer = setTimeout(() => {
      setSkillsLoaded(true);
    }, 1500);
    
    // Auto-switch categories every 8 seconds if user isn't interacting
    const intervalId = setInterval(() => {
      if (hoverSkill === null) {
        const categories = Object.keys(categorizedSkills);
        const currentIndex = categories.indexOf(activeCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        setActiveCategory(categories[nextIndex]);
      }
    }, 8000);
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(loadTimer);
    };
  }, [activeCategory, categorizedSkills, hoverSkill]);

  // Calculate skill level class for color
  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'var(--retro-yellow)';
    if (level >= 80) return 'var(--retro-cyan)';
    if (level >= 70) return 'var(--retro-blue)';
    return 'var(--retro-purple)';
  };
  
  // Get the filtered skills for the active category
  const filteredSkills = skills.filter(skill => 
    (skill.category || 'programming') === activeCategory
  );
    
  return (
    <section id="skills" className={`relative bg-gradient-to-b from-indigo-950/40 to-purple-950/40 ${darkMode ? '' : 'section-padding'}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl glitch-clip text-retro-cyan font-bold pixel-text" data-text="SKILLS & EXPERTISE">
            SKILLS & EXPERTISE
          </h2>
          <div className="section-divider"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            My technical arsenal spans across full-stack development, machine learning, and data science.
          </p>
        </div>
        
        <div className="relative">
          {/* Loading section */}
          {!skillsLoaded && (
            <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center content-wrapper">
              <div className="pixel-text text-retro-cyan text-xl content-spacing">LOADING SKILLS<span className="loading-dots"></span></div>
              <div className="progress-8bit w-56">
                <div className="progress-8bit-bar animate-progress-bar"></div>
              </div>
            </div>
          )}
          
          <div className="text-xs font-mono text-retro-cyan content-spacing flex items-center">
            <span className="text-retro-green mr-2">$</span>
            <span className="typing-effect">cat /usr/skills/{activeCategory}.json</span>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap content-spacing justify-center gap-responsive">
            {Object.keys(categorizedSkills).map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                onMouseEnter={() => setHoverSkill(null)}
                className={`btn-8bit-small text-xs px-3 py-2 transition-all ${
                  activeCategory === category 
                    ? 'btn-retro-primary'
                    : 'btn-retro-secondary'
                }`}
              >
                <span className="pixel-text">{categoryLabels[category] || category}</span>
              </button>
            ))}
          </div>
          
          <div className="space-y-section">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`retro-card-enhanced p-2 transition-all ${
                  hoverSkill === index 
                    ? 'border-retro-accent'
                    : ''
                }`}
                onMouseEnter={() => setHoverSkill(index)}
                onMouseLeave={() => setHoverSkill(null)}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className={`font-semibold pixel-text text-xs ${hoverSkill === index ? 'text-retro-yellow glitch-text' : 'text-retro-cyan'}`}>
                      {skill.name.toUpperCase()}
                    </span>
                  </div>
                  <span className="pixel-text text-xs text-retro-green">
                    Lv.{skill.level}
                  </span>
                </div>
                
                {skill.description && (
                  <p className="text-xs mb-2 text-white text-opacity-80 font-mono">
                    {skill.description}
                  </p>
                )}
                
                {/* Pixelated progress bar */}
                <div className="h-4 w-full border-retro-standard bg-black relative overflow-hidden">
                  {/* Scanline effect in progress bar */}
                  <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
                  
                  <div 
                    className="h-full transition-all duration-1000 relative"
                    style={{ 
                      width: isClient ? `${skill.level}%` : '0%',
                      backgroundColor: getSkillLevelColor(skill.level)
                    }}
                  >
                    {/* Animated glitch effect on hover */}
                    {hoverSkill === index && (
                      <div className="absolute inset-0 animate-glitch-1 bg-white opacity-30"></div>
                    )}
                  </div>
                </div>
                
                {/* Pixelated level indicators */}
                <div className="flex mt-1 justify-between">
                  {[0, 25, 50, 75, 100].map(level => (
                    <div
                      key={level}
                      className={`w-1 h-4 ${
                        skill.level >= level 
                          ? 'bg-retro-cyan' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Level markers */}
                <div className="flex justify-between mt-1">
                  <span className="text-[8px] font-mono text-retro-cyan">0</span>
                  <span className="text-[8px] font-mono text-retro-cyan">25</span>
                  <span className="text-[8px] font-mono text-retro-cyan">50</span>
                  <span className="text-[8px] font-mono text-retro-cyan">75</span>
                  <span className="text-[8px] font-mono text-retro-cyan">100</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-[9px] opacity-70 font-mono flex items-center justify-between">
            <span className="text-retro-green"># Skills data loaded from system database</span>
            <span className="text-retro-cyan">v1.0.2 <span className="opacity-100">{showCursor ? '_' : ''}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 