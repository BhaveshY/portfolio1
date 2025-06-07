'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define AnimatedSprite OUTSIDE of Hero
const AnimatedSprite = ({ frameCount, frameDuration }: { frameCount: number, frameDuration: number }) => {
  const [frame, setFrame] = useState(0); // Reset to 0 for initial frame
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % frameCount);
    }, frameDuration);
    return () => clearInterval(interval);
  }, [frameCount, frameDuration]);

  return (
    <div
      aria-hidden="true"
      className="w-12 h-24 md:w-16 md:h-32 lg:w-20 lg:h-40 flex-shrink-0"
      style={{ width: '66px', height: '132px' }} // Keep the working inline style for size for now
    >
      <img
        src={`/frame-${frame + 1}.PNG`}
        alt=""
        className="w-full h-full object-contain"
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
   
  // Terminal content
  const lines = [
    'System booting...',
    'Loading profile data...',
    'Initializing portfolio interface...',
    'Welcome to my digital workspace',
    'Type "help" for commands or scroll to explore'
  ];
  
  // Blink cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);
  
  // Typewriter effect for terminal
  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentLine]);
  
  // AnimatedSprite component is NO LONGER defined here
  
  return (
    <section id="home" className="pt-8 md:pt-12 lg:pt-16 pb-4 px-4 relative flex items-center bg-indigo-950/30 backdrop-blur-sm min-h-[70vh]">
      {/* Background grid and effects */}
      <div className="absolute inset-0 retro-grid-bg opacity-10 z-0"></div>
      <div className="absolute inset-0 crt-blue-tint z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="retro-grid retro-grid-2 items-center min-h-[80vh]">
          {/* Text content */}
          <div className="order-2 md:order-1 visual-hierarchy">
            <div>
              {/* Main heading with text effects */}
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white glitch-clip block" data-text="Building">Building</span>
                  <span className="text-retro-pink glitch-clip block" data-text="Digital">Digital</span>
                  <span className="text-retro-cyan glitch-clip block" data-text="Experiences">Experiences<span className="text-retro-yellow">{showCursor ? '_' : ''}</span></span>
                </h1>
                <motion.div
                  animate={{
                    x: [0, 100, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <AnimatedSprite frameCount={2} frameDuration={800} />
                </motion.div>
              </div>
              
              <p className="text-white/90 text-lg max-w-lg">
                I create innovative web applications with clean code and engaging user experiences, transforming ideas into digital reality.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-responsive content-spacing">
                <Link 
                  href="#projects" 
                  className="btn-retro-primary btn-8bit-hover"
                >
                  <span className="pixel-text">VIEW PROJECTS</span>
                </Link>
                
                <Link 
                  href="#contact" 
                  className="btn-retro-secondary btn-8bit-hover"
                >
                  <span className="pixel-text">CONTACT ME</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Terminal/Visual element */}
          <div className="order-1 md:order-2 flex flex-col items-center justify-center">
            {/* Developer Badge - moved above terminal */}
            <div className="content-spacing">
              <div className="inline-block px-4 py-2 border-retro-standard bg-retro-cyan/10 text-retro-cyan text-sm pixel-text pixel-shadow">
                FULL-STACK DEVELOPER
              </div>
            </div>
            
            <div className="monitor-frame-enhanced crt-effect w-full max-w-lg">
              <div className="monitor-content">
                <div className="border-retro-standard bg-black p-1 pixel-border">
                  {/* Terminal header */}
                  <div className="bg-gradient-to-r from-cyan-700 to-cyan-900 px-3 py-2 flex justify-between items-center border-retro-standard">
                    <div className="text-xs text-cyan-400 pixel-text">PORTFOLIO.EXE</div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-retro-pink"></div>
                      <div className="w-3 h-3 bg-retro-yellow"></div>
                      <div className="w-3 h-3 bg-retro-green"></div>
                    </div>
                  </div>
                  
                  {/* Terminal content */}
                  <div className="content-wrapper pixel-text text-retro-green text-sm h-64 overflow-hidden terminal-lines">
                    {terminalLines.map((line, index) => (
                      <div key={index} className="mb-2">
                        <span className="text-retro-cyan">$ </span>
                        {line}
                      </div>
                    ))}
                    
                    {/* Current line with cursor */}
                    <div className="mb-2 h-6 flex items-center">
                      <span className="text-retro-cyan">$ </span>
                      {currentLine < lines.length ? (
                        <span className="typing-effect">
                          {showCursor ? '█' : ' '}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <span>explore --section=projects</span>
                          <span className="text-white ml-1">{showCursor ? '█' : ' '}</span>
                        </span>
                      )}
                    </div>
                    
                    {/* Profile display */}
                    {currentLine >= lines.length && (
                      <div className="mt-6 border-retro-standard p-3 bg-black/50 pixelated-overlay">
                        <div className="text-retro-yellow pixel-text text-xs mb-2">PROFILE</div>
                        <div className="space-y-1 text-xs">
                          <div>
                            <span className="text-retro-cyan">Name:</span> 
                            <span className="text-white ml-2">Alex Chen</span>
                          </div>
                          <div>
                            <span className="text-retro-cyan">Role:</span> 
                            <span className="text-white ml-2">Full-Stack Developer</span>
                          </div>
                          <div>
                            <span className="text-retro-cyan">Status:</span> 
                            <span className="text-retro-green ml-2">Available</span>
                          </div>
                          <div>
                            <span className="text-retro-cyan">Location:</span> 
                            <span className="text-white ml-2">San Francisco</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech stack - Full width section */}
          <div style={{marginTop: '14px'}}></div>
          <div className="text-center mb-2">
            <div className="text-retro-green pixel-text text-sm mb-2">TECH STACK_</div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 items-center mb-0">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
              <div 
                key={tech}
                className="px-4 py-3 border-retro-standard hover:border-retro-accent text-white text-sm transition-colors digital-noise"
              >
                {tech}
              </div>
            ))}
          </div>

      </div>
    </section>
  );
};

export default Hero;