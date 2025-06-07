'use client';

import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showingCommand, setShowingCommand] = useState(0);
  const commands = [
    "cat background.txt",
    "ls -la experience/",
    "cat education.log",
    "view achievements.json",
    "chmod +x view_skills.sh",
    "sudo ./view_skills.sh"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setShowingCommand(prev => (prev < commands.length - 1 ? prev + 1 : prev));
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, commands.length]);

  return (
    <section id="about" className="pt-2 md:pt-4 pb-8 md:pb-12 px-4 relative overflow-hidden">
      {/* CRT scanlines overlay */}
      <div className="scanlines-animated fixed inset-0 pointer-events-none z-[5] opacity-15"></div>
      <div className="vhs-tracking fixed inset-0 pointer-events-none z-[4] opacity-10"></div>
      
      {/* Pixelated grid background */}
      <div className="absolute inset-0 z-0 pixelated-overlay" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(5, 217, 232, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="section-header">
          <h2 className="glitch-clip text-3xl text-cyan-400 pixel-text" data-text="ABOUT.SYS">
            ABOUT<span className="text-retro-pink">.SYS</span>
          </h2>
          <div className="section-divider horizontal-scan"></div>
          
          <div className="w-full max-w-lg mx-auto p-2 border-retro-success bg-black/50 command-line">
            <div className="text-center text-white/90 font-mono text-sm">
              <span className="text-retro-green">root@portfolio</span>:<span className="text-retro-blue">~/about</span>$ <span className="typing-effect">view --details</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-section">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-section">
            <div className="flex-1 monitor-frame-enhanced content-spacing">
              <div className="monitor-content h-full">
                {/* Terminal header */}
                <div className="bg-gradient-to-r from-cyan-700 to-cyan-900 px-3 py-2 flex justify-between items-center border-retro-standard">
                  <span className="pixel-text text-sm text-cyan-400">USER_PROFILE.DAT</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-retro-pink"></div>
                    <div className="w-3 h-3 bg-retro-yellow"></div>
                    <div className="w-3 h-3 bg-retro-green"></div>
                  </div>
                </div>
                
                {/* Terminal effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-900/10 pointer-events-none opacity-30 z-10 group-hover:opacity-0 transition-opacity duration-500 crt-blue-tint"></div>
                <div className="terminal-lines opacity-10 absolute inset-0 pointer-events-none"></div>
                
                <div className="bg-black content-wrapper border-t border-cyan-800 pixel-text text-sm space-y-section relative digital-noise flex-grow">
                  {commands.slice(0, showingCommand + 1).map((cmd, index) => (
                    <div key={index}>
                      <p className="mb-4 text-cyan-400">
                        <span className="text-retro-green">$ </span>{cmd}
                        {index === showingCommand && <span className="blinking-cursor">_</span>}
                      </p>
                      
                      {index === 0 && (
                        <div className="pl-4 text-white space-y-4 mb-6 animate-fade-in visual-hierarchy">
                          <p>
                            Hello! I'm Alex Chen, a Full-Stack Developer and Data Scientist with 7+ years of experience 
                            building scalable web applications and developing machine learning models that solve real-world 
                            business problems. I specialize in modern web technologies, cloud architectures, and AI/ML solutions.
                          </p>
                          <p>
                            My journey began with a Master's degree in Computer Science, specializing in Artificial Intelligence 
                            and Machine Learning. I've since worked with Fortune 500 companies and innovative startups, 
                            delivering end-to-end solutions from data pipeline design to production deployment.
                          </p>
                          <p>
                            Currently, I'm passionate about building intelligent applications that combine cutting-edge 
                            frontend technologies with robust backend systems and ML capabilities. I thrive on solving 
                            complex technical challenges and creating user experiences that make a meaningful impact.
                          </p>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="pl-4 text-white animate-fade-in space-y-3">
                          <div className="text-retro-cyan text-sm mb-3">📁 Recent Experience:</div>
                          <div className="space-y-2 text-xs">
                            <div className="text-retro-green">├── 2022-Present: Senior Full-Stack Developer @ TechCorp</div>
                            <div className="text-retro-green">│   └── Led team of 6 developers, 40% performance improvement</div>
                            <div className="text-retro-cyan">├── 2020-2022: Data Scientist @ AI Innovations Inc.</div>
                            <div className="text-retro-cyan">│   └── Deployed ML models serving 10M+ users daily</div>
                            <div className="text-retro-pink">└── 2019-2020: Frontend Developer @ StartupXYZ</div>
                            <div className="text-retro-pink">    └── Built React apps with 50% faster load times</div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="pl-4 text-white animate-fade-in space-y-3">
                          <div className="text-retro-yellow text-sm mb-3">🎓 Education & Certifications:</div>
                          <div className="space-y-2 text-xs">
                            <div className="text-white">• M.S. Computer Science - Stanford University (2019)</div>
                            <div className="text-white">  Specialization: AI/ML, GPA: 3.9/4.0</div>
                            <div className="text-white">• B.S. Software Engineering - UC Berkeley (2017)</div>
                            <div className="text-white">  Magna Cum Laude, Dean's List</div>
                            <div className="text-retro-cyan">• AWS Solutions Architect Professional</div>
                            <div className="text-retro-green">• Google Cloud Professional ML Engineer</div>
                            <div className="text-retro-pink">• Microsoft Azure AI Engineer Associate</div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="pl-4 text-white animate-fade-in space-y-3">
                          <div className="text-retro-magenta text-sm mb-3">🏆 Key Achievements:</div>
                          <div className="space-y-2 text-xs">
                            <div className="text-retro-yellow">• Published 8 research papers in top-tier conferences</div>
                            <div className="text-retro-cyan">• 3 U.S. Patents in ML algorithms and web optimization</div>
                            <div className="text-retro-green">• Led $2M project delivering 300% ROI improvement</div>
                            <div className="text-retro-pink">• Winner: IEEE Best Paper Award 2023</div>
                            <div className="text-white">• Speaker at 12+ international tech conferences</div>
                            <div className="text-retro-blue">• Open source contributions: 15K+ GitHub stars</div>
                            <div className="text-retro-orange">• Mentor to 50+ junior developers and data scientists</div>
                          </div>
                        </div>
                      )}
                      
                      {index === 4 && (
                        <div className="pl-4 text-green-400 animate-fade-in">
                          [SUCCESS] Permission changed - skills module ready
                        </div>
                      )}

                      {index === 5 && (
                        <div className="pl-4 text-green-400 animate-fade-in">
                          [INFO] Loading technical skills database...
                          <div className="retro-grid retro-grid-2 mt-2 text-xs">
                            <div className="text-retro-green">✓ programming/</div>
                            <div className="text-retro-cyan">✓ data/</div>
                            <div className="text-retro-pink">✓ ml/</div>
                            <div className="text-retro-yellow">✓ tools/</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex-1 monitor-frame-enhanced content-spacing overflow-hidden crt-red-tint">
                <div className="monitor-content">
                  <div className="bg-gradient-to-r from-cyan-900 to-indigo-900 px-3 py-2 flex justify-between items-center border-retro-standard">
                    <span className="pixel-text text-sm text-cyan-400">TECHNICAL.DAT</span>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500"></div>
                      <div className="w-3 h-3 bg-yellow-500"></div>
                      <div className="w-3 h-3 bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-black border-t border-cyan-800 digital-noise p-0">
                    <div className="text-center mt-6">
                      <p className="text-retro-cyan pixel-text">Engage with my work below.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-retro-cyan pixel-text">Engage with my work below.</p>
        </div>
      </div>
    </section>
  );
};

export default About;