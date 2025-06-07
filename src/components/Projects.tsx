'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  githubLink: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Animation for blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  // Loading effect on page load
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
      }
      setLoadingProgress(progress);
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  // Bhavesh's real projects from resume
  const projects: Project[] = [
    {
      id: 1,
      title: "TUTOR GPT",
      description: "An interactive tutoring platform utilizing Generative AI to deliver personalized tutoring through advanced language models, enhancing learner engagement with focus on user-centered design. Features robust Error GPT that tracks user progress and custom evaluation metrics for improved student satisfaction.",
      tags: ["Generative AI", "Machine Learning", "React", "JavaScript", "HTML", "CSS", "TypeScript", "Javascript", ],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTEwMDMzIi8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTIwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZlZjAwIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNIDIwMCAxMDAgTCAzMDAgMTAwIEwgMzAwIDEwNSBMIDIwMCAxMDUgWiIgZmlsbD0iIzAwZmZmZiIvPjxwYXRoIGQ9Ik0gMjEwIDEyMCBMIDI5MCAxMjAgTCAyOTAgMTI1IEwgMjEwIDEyNSBaIiBmaWxsPSIjZmY0NDY2Ii8+PHBhdGggZD0iTSAyMjAgMTQwIEwgMjgwIDE0MCBMIDI4MCAxNDUgTCAyMjAgMTQ1IFoiIGZpbGw9IiNmZmVmMDAiLz48dGV4dCB4PSI1MCUiIHk9Ijc1JSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZWYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VFVUT1IgR1BUPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iOTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BSSBUVVRPUklORzwvdGV4dD48L3N2Zz4=",
      githubLink: "https://github.com/BhaveshY/tutor-xoxo"
    },
    {
      id: 2,
      title: "MONEX - EXPENSE MANAGEMENT",
      description: "A comprehensive finance management application designed to minimize financial worries utilizing JavaScript, React Native, and MongoDB. Features an integrated JavaScript-powered interface for general user queries and responsive frontend for tracking and managing transactions using modern web technologies.",
      tags: ["React Native", "JavaScript", "MongoDB", "Node.js", "HTML", "CSS", "Typescript", "API", "LLM"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAzMzExIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTIwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZlZjAwIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSIyMDAiIHk9IjEyNSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZWYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+JDwvdGV4dD48cGF0aCBkPSJNIDI4MCA4MCBMIDI5MCA4MCBMIDMwMCA5MCBMIDM1MCA5MCBMIDM1MCA5NSBMIDMwMCA5NSBMIDI5MCA5NSBMIDI4MCA5NSBaIiBmaWxsPSIjMDBmZjY2Ii8+PHBhdGggZD0iTSAyODAgMTEwIEwgMjkwIDExMCBMIDMwMCAxMTAgTCAzMDAgMTE1IEwgMjkwIDExNSBMIDI4MCAxMTUgWiIgZmlsbD0iI2ZmNDQ2NiIvPjxwYXRoIGQ9Ik0gMjgwIDEzMCBMIDI5MCAxMzAgTCAzMDUgMTMwIEwgMzA1IDEzNSBMIDI5MCAxMzUgTCAyODAgMTM1IFoiIGZpbGw9IiNmZjQ0NjYiLz48cGF0aCBkPSJNIDI4MCAxNTAgTCAzMjAgMTUwIEwgMzIwIDE1NSBMIDI4MCAxNTUgWiIgZmlsbD0iIzAwZmY2NiIvPjx0ZXh0IHg9IjUwJSIgeT0iNzUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZlZjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NT05FWDwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjkwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RklOQU5DRSBBUFA8L3RleHQ+PC9zdmc+",
      githubLink: "https://github.com/BhaveshY/monexfront"
    },
  ];

  // All unique tags across projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Open project details modal
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  };

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };

  // Filter projects by tag
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="pt-8 md:pt-12 pb-8 md:pb-12 px-4 relative bg-indigo-950/40 backdrop-blur-sm overflow-hidden">
      {/* Initial loading animation */}
      {loadingProgress < 100 && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center crt-vignette crt-effect">
          <div className="pixel-text text-retro-cyan text-xl mb-4 glitch-clip" data-text="LOADING PROJECTS">LOADING PROJECTS<span className="loading-dots-advanced"></span></div>
          <div className="progress-8bit w-64">
            <div className="progress-8bit-bar" style={{ width: `${loadingProgress}%` }}></div>
          </div>
          <div className="text-retro-cyan mt-2">{Math.floor(loadingProgress)}%</div>
          <div className="terminal-input text-retro-green text-xs mt-6">
            initializing project database
          </div>
          <div className="terminal-input text-retro-green text-xs">
            loading assets
          </div>
          <div className="terminal-input text-retro-yellow text-xs">
            establishing connection_
          </div>
        </div>
      )}
      
      <div className="container mx-auto max-w-7xl relative z-10 w-full overflow-hidden">
        {/* Section header */}
        <div className="section-header">
          <h2 className="text-3xl glitch-clip text-retro-cyan font-bold pixel-text mb-6" data-text="PROJECTS">
            PROJECTS<span className="text-retro-pink">{showCursor ? '_' : ''}</span>
          </h2>
          
          {/* Decorative line */}
          <div className="section-divider horizontal-scan mb-8"></div>
          
          {/* Terminal-style section subheader */}
          <div className="w-full max-w-lg mx-auto p-2 border-retro-success bg-black/50 command-line mb-8">
            <div className="text-center text-white/90 font-mono text-sm">
              <span className="text-retro-green">root@portfolio</span>:<span className="text-retro-blue">~/projects</span>$ <span className="typing-effect">find . -type f -name "*.awesome"</span>
            </div>
          </div>

          {/* Spacer for spacing */}
          <div style={{ height: '16px' }}></div>

          {/* Filter tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 px-4 max-w-full overflow-hidden">
            <button
              onClick={() => setActiveFilter('all')}
              className={`btn-8bit-hover px-3 py-2 text-sm ${
                activeFilter === 'all' 
                  ? 'btn-retro-primary' 
                  : 'btn-retro-secondary'
              }`}
            >
              <span className="pixel-text">ALL</span>
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`btn-8bit-hover px-3 py-2 text-sm ${
                  activeFilter === tag 
                    ? 'btn-retro-primary' 
                    : 'btn-retro-secondary'
                }`}
              >
                <span className="pixel-text whitespace-nowrap">{tag}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div 
          className="grid grid-cols-3 gap-2 items-stretch justify-items-stretch mx-auto max-w-full"
          onMouseMove={(e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
          }}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative transform transition duration-300 hover:-translate-y-1 flex flex-col w-full h-full"
              onClick={() => openProjectDetails(project)}
            >
              {/* Card frame */}
              <div className="retro-card-enhanced cursor-pointer flex flex-col shadow-lg crt-effect digital-noise w-full h-full">
                {/* Project thumbnail with scan line effect */}
                <div className="relative h-16 overflow-hidden border-b border-retro-cyan/50">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-retro-cyan opacity-20 z-10"></div>
                  <div className="absolute inset-0 bg-black opacity-40 z-10 group-hover:opacity-0 transition-opacity"></div>
                  <div className="scanlines-animated absolute inset-0 z-20 opacity-20"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-16 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  
                  {/* Card ID badge and controls */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 z-20">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-retro-pink"></div>
                      <div className="w-3 h-3 bg-retro-yellow"></div>
                      <div className="w-3 h-3 bg-retro-green"></div>
                    </div>
                    <div className="bg-black/50 px-2 py-1 text-xs pixel-text text-retro-cyan pixel-shadow border-retro-standard">
                      <span>#{project.id.toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="content-wrapper flex flex-col justify-between visual-hierarchy p-2 flex-1">
                  <div>
                    <h3 className="text-retro-cyan text-xs font-bold pixel-text mb-1 line-clamp-1 break-words">{project.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-1">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="mt-1">
                      {project.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="inline-block px-1 py-0.5 mr-1 text-xs bg-black text-retro-cyan border-retro-standard pixel-corners">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 1 && (
                        <span className="inline-block px-1 py-0.5 text-xs bg-black text-retro-yellow border-retro-warning pixel-corners">
                          +{project.tags.length - 1}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* View project button */}
                  <div style={{ height: '14px' }}></div>
                  <button className="btn-retro-secondary w-full py-1 text-xs transition-colors duration-300 mt-2">
                    <span className="pixel-text text-xs">VIEW</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project details modal - SIMPLIFIED STRUCTURE */}
      {showModal && selectedProject && (
        <div 
          className="modal-overlay-enhanced"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: '#111827', // Solid dark gray
              color: 'white',
              padding: '2rem',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '2px solid var(--retro-cyan)',
              borderRadius: '8px',
              boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#ef4444',
                color: 'white',
                border: '1px solid white',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '1rem',
                lineHeight: '1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              X
            </button>
            
            {/* Modal Content */}
            <h3 style={{ color: 'var(--retro-cyan)', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-retro)' }}>
              {selectedProject.title}
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title}
                width={800}
                height={400}
                style={{ width: '100%', height: 'auto', border: '1px solid var(--retro-cyan)' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--retro-yellow)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-retro)' }}>
                Description
              </h4>
              <p style={{ lineHeight: '1.6' }}>{selectedProject.description}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--retro-yellow)', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-retro)' }}>
                Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedProject.tags.map(tag => (
                  <span key={tag} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--retro-cyan)', color: 'black', fontFamily: 'var(--font-retro)', fontSize: '0.75rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-retro-primary"
                >
                  Live Demo
                </a>
              )}
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-retro-secondary"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;