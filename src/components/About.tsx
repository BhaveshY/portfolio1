'use client';

import React, { useState, useEffect } from 'react';
import Skills from './Skills';

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
  }, [isVisible]);

  const skills = [
    // Programming Languages & Frameworks
    { 
      name: 'Python', 
      level: 95, 
      category: 'programming' as const,
      description: 'Expert in Python for data analysis, web services, automation, and ML pipelines.' 
    },
    { 
      name: 'JavaScript/TypeScript', 
      level: 92, 
      category: 'programming' as const,
      description: 'Full-stack development with React, Node.js, and modern ES6+ features.' 
    },
    { 
      name: 'R', 
      level: 88, 
      category: 'programming' as const,
      description: 'Statistical computing, data visualization, and exploratory data analysis.' 
    },
    { 
      name: 'Java', 
      level: 82, 
      category: 'programming' as const,
      description: 'Enterprise applications and distributed systems development.' 
    },
    { 
      name: 'C++', 
      level: 78, 
      category: 'programming' as const,
      description: 'High-performance computing and algorithm optimization.' 
    },
    { 
      name: 'React/Next.js', 
      level: 90, 
      category: 'programming' as const,
      description: 'Modern web applications with server-side rendering and static generation.' 
    },
    
    // Data Science & Analytics
    { 
      name: 'SQL/NoSQL', 
      level: 93, 
      category: 'data' as const,
      description: 'Advanced database design, optimization, and complex analytical queries.' 
    },
    { 
      name: 'Pandas/NumPy', 
      level: 95, 
      category: 'data' as const,
      description: 'Data manipulation, cleaning, and numerical computing at scale.' 
    },
    { 
      name: 'Apache Spark', 
      level: 85, 
      category: 'data' as const,
      description: 'Big data processing, distributed computing, and real-time analytics.' 
    },
    { 
      name: 'Statistical Analysis', 
      level: 90, 
      category: 'data' as const,
      description: 'Hypothesis testing, regression analysis, A/B testing, and experimental design.' 
    },
    { 
      name: 'Data Visualization', 
      level: 92, 
      category: 'data' as const,
      description: 'Tableau, D3.js, Matplotlib, Seaborn, and interactive dashboard creation.' 
    },
    { 
      name: 'ETL Pipelines', 
      level: 88, 
      category: 'data' as const,
      description: 'Airflow, Apache Beam, and automated data workflow orchestration.' 
    },
    
    // Machine Learning & AI
    { 
      name: 'Machine Learning', 
      level: 93, 
      category: 'ml' as const,
      description: 'Supervised/unsupervised learning, ensemble methods, and feature engineering.' 
    },
    { 
      name: 'Deep Learning', 
      level: 88, 
      category: 'ml' as const,
      description: 'TensorFlow, PyTorch, neural networks for computer vision and NLP.' 
    },
    { 
      name: 'NLP', 
      level: 85, 
      category: 'ml' as const,
      description: 'Text processing, sentiment analysis, transformers, and language models.' 
    },
    { 
      name: 'Computer Vision', 
      level: 82, 
      category: 'ml' as const,
      description: 'Image classification, object detection, OpenCV, and CNN architectures.' 
    },
    { 
      name: 'MLOps', 
      level: 87, 
      category: 'ml' as const,
      description: 'Model deployment, monitoring, versioning, and CI/CD for ML systems.' 
    },
    { 
      name: 'Reinforcement Learning', 
      level: 75, 
      category: 'ml' as const,
      description: 'Q-learning, policy gradients, and multi-agent systems.' 
    },
    
    // Tools & Technologies
    { 
      name: 'AWS/GCP/Azure', 
      level: 85, 
      category: 'tools' as const,
      description: 'Cloud computing, serverless architectures, and scalable ML deployments.' 
    },
    { 
      name: 'Docker/Kubernetes', 
      level: 83, 
      category: 'tools' as const,
      description: 'Containerization, orchestration, and microservices architecture.' 
    },
    { 
      name: 'Git/CI/CD', 
      level: 90, 
      category: 'tools' as const,
      description: 'Version control, automated testing, and deployment pipelines.' 
    },
    { 
      name: 'Jupyter/Colab', 
      level: 95, 
      category: 'tools' as const,
      description: 'Interactive development, prototyping, and collaborative analysis.' 
    },
    { 
      name: 'Linux/Unix', 
      level: 88, 
      category: 'tools' as const,
      description: 'System administration, shell scripting, and server management.' 
    },
    { 
      name: 'Hadoop Ecosystem', 
      level: 78, 
      category: 'tools' as const,
      description: 'HDFS, Hive, HBase, and distributed data storage solutions.' 
    }
  ];

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
                        <span className="text-pink-500">$</span> {cmd}
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
                  
                  <p className="text-cyan-400">
                    <span className="text-pink-500">$</span> <span className="text-retro-cyan">_</span>
                  </p>
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
                    <Skills skills={skills} darkMode={true} />
                  </div>
                </div>
              </div>
              
              {/* Data badges */}
              <div className="retro-grid retro-grid-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="btn-8bit-small bg-black border-2 border-retro-cyan text-cyan-400 p-3 text-center btn-8bit-hover pixel-shadow">
                  <div className="text-xs pixel-text">BADGE</div>
                  <div className="text-lg font-bold">5+</div>
                  <div className="text-xs">YEARS EXP</div>
                </div>
                
                <div className="btn-8bit-small bg-black border-2 border-retro-pink text-pink-400 p-3 text-center btn-8bit-hover pixel-shadow">
                  <div className="text-xs pixel-text">BADGE</div>
                  <div className="text-lg font-bold">12+</div>
                  <div className="text-xs">PROJECTS</div>
                </div>
                
                <div className="btn-8bit-small bg-black border-2 border-retro-blue text-blue-400 p-3 text-center btn-8bit-hover pixel-shadow">
                  <div className="text-xs pixel-text">BADGE</div>
                  <div className="text-lg font-bold">MSc</div>
                  <div className="text-xs">DATA SCI</div>
                </div>
                
                <div className="btn-8bit-small bg-black border-2 border-retro-yellow text-yellow-400 p-3 text-center btn-8bit-hover pixel-shadow">
                  <div className="text-xs pixel-text">BADGE</div>
                  <div className="text-lg font-bold">3</div>
                  <div className="text-xs">PATENTS</div>
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