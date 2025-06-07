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
                            Hello! I&apos;m Bhavesh Sharad Yeole, a Computer Science graduate currently pursuing my Master&apos;s in Data and Knowledge Engineering. 
                            I have a strong programming foundation and experience with Full-Stack Software Development, LLMs, and Generative AI. 
                            I&apos;m eager to leverage my knowledge in innovative projects and cutting-edge technologies.
                          </p>
                          <p>
                            My journey began with a Bachelor&apos;s degree in Computer Engineering, and I&apos;m now specializing in Data and Knowledge Engineering 
                            at Otto Von Guericke University in Magdeburg, Germany. I&apos;ve gained hands-on experience through internships in digital marketing, 
                            web development, and React Native app development.
                          </p>
                          <p>
                            Currently, I&apos;m passionate about building modern web applications using React Native, integrating advanced features, 
                            and creating efficient user interfaces. I thrive on learning new technologies and solving complex problems 
                            in software development and data engineering.
                          </p>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="pl-4 text-white animate-fade-in space-y-3">
                          <div className="text-retro-cyan text-sm mb-3">📁 Recent Experience:</div>
                          <div className="space-y-2 text-xs">
                            <div className="text-retro-green">├── Aug-Dec 2024: Working Student in React Native @UniNow GmbH</div>
                            <div className="text-retro-green">│   └── Utilized UML framework to streamline app features and refactor legacy code</div>
                            <div className="text-retro-cyan">├── Apr-Jul 2021: Digital Marketing Intern @ Acquaint Consultants</div>
                            <div className="text-retro-cyan">│   └── Executed SEO strategies using analytics tools, increasing page traffic by 25%</div>
                            <div className="text-retro-pink">└── Jan-Mar 2022: Fullstack Web Developer Intern @ V3 Data Solutions</div>
                            <div className="text-retro-pink">    └── Developed and tested a complete web-based booking system using Django, HTML, and CSS</div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="pl-4 text-white animate-fade-in space-y-3">
                          <div className="text-retro-yellow text-sm mb-3">🎓 Education & Certifications:</div>
                          <div className="space-y-2 text-xs">
                            <div className="text-white">• M.S. Data & Knowledge Engineering - Otto Von Guericke University, Magdeburg (Present)</div>
                            <div className="text-white">  Focus: Data Science, Machine Learning, Knowledge Systems</div>
                            <div className="text-white">• B.E. Computer Engineering - Savitribai Phule Pune University, Pune (2023)</div>
                            <div className="text-white">  Grade: 9.3/10, Maharashtra, India</div>
                            <div className="text-retro-cyan">• Meta- Introduction to Front-End Development</div>
                            <div className="text-retro-green">• Machine Learning- From Basics to Advanced</div>
                            <div className="text-white">• Diploma in Information Technology - Government Polytechnic, Nashik (2020)</div>
                            <div className="text-white">  Grade: 83.63%, Maharashtra, India</div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="pl-4 text-white animate-fade-in space-y-3">
                          <div className="text-retro-magenta text-sm mb-3">🚀 Key Achievements:</div>
                          <div className="space-y-2 text-xs">
                            <div className="text-retro-yellow">• Architected TUTOR GPT - AI-powered learning ecosystem with custom LLM integration & real-time progress tracking</div>
                            <div className="text-retro-cyan">• Engineered MONEX - full-stack fintech solution with MongoDB Atlas, React Native & intelligent expense analytics</div>
                            <div className="text-retro-green">• Deployed Error GPT system - advanced debugging AI that reduced student confusion by 75%</div>
                            <div className="text-retro-pink">• Built scalable microservices architecture handling 10K+ concurrent financial transactions</div>
                            <div className="text-white">• Optimized algorithm achieving 92% accuracy in personalized learning recommendations</div>
                            <div className="text-retro-blue">• Crafted pixel-perfect responsive UIs with React/TypeScript, supporting cross-platform deployment</div>
                            <div className="text-retro-purple">• Integrated OpenAI APIs with custom prompt engineering for enhanced educational interactions</div>
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
            

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;