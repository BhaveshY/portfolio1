'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8 px-4 relative bg-indigo-950/30 backdrop-blur-sm">
      {/* Optional loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 crt-effect vhs-tracking">
          <div className="text-xl text-retro-cyan content-spacing pixel-text glitch-clip" data-text="SENDING MESSAGE">SENDING MESSAGE</div>
          <div className="loading-dots-advanced"></div>
          <div className="mt-8 terminal-input text-retro-green text-sm">
            <span className="typing-effect">Establishing connection...</span>
          </div>
        </div>
      )}
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="section-header">
          <h2 className="text-3xl glitch-clip text-retro-cyan font-bold pixel-text" data-text="CONTACT">
            CONTACT<span className="text-retro-pink">{showCursor ? '_' : ''}</span>
          </h2>
          
          {/* Decorative line */}
          <div className="section-divider horizontal-scan"></div>
          
          {/* Terminal-style section subheader */}
          <div className="w-full max-w-lg mx-auto p-2 border-retro-success bg-black/50 command-line">
            <div className="text-center text-white/90 font-mono text-sm">
              <span className="text-retro-green">root@portfolio</span>:<span className="text-retro-blue">~/contact</span>$ <span className="typing-effect">./send_message.sh</span>
            </div>
          </div>
        </div>
        
        <div className="retro-grid retro-grid-2 md:grid-cols-6 md:items-stretch contact-equal-panels">
          {/* Contact info panel */}
          <div className="md:col-span-3 monitor-frame-enhanced content-spacing flex flex-col contact-equal-panel">
            <div className="monitor-content flex-grow">
              <h3 className="text-retro-yellow text-xl pixel-text content-spacing">SYSTEM INFO</h3>
              
              <div className="space-y-section">
                {/* Email */}
                <div className="flex items-start gap-responsive">
                  <div className="w-12 h-12 bg-retro-cyan/10 flex items-center justify-center border-retro-standard pixel-shadow">
                    <span className="text-retro-cyan pixel-text">@</span>
                  </div>
                  <div className="visual-hierarchy">
                    <p className="text-retro-green text-sm pixel-text">EMAIL</p>
                    <a href="mailto:byeole88@gmail.com" className="text-white hover:text-retro-cyan transition-colors text-sm md:text-base">
                      byeole88@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-responsive">
                  <div className="w-12 h-12 bg-retro-pink/10 flex items-center justify-center border-retro-accent pixel-shadow">
                    <span className="text-retro-pink pixel-text">📞</span>
                  </div>
                  <div className="visual-hierarchy">
                    <p className="text-retro-green text-sm pixel-text">PHONE</p>
                    <a href="tel:+4915560050418" className="text-white hover:text-retro-pink transition-colors text-sm md:text-base">
                      +49 15560050418
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start gap-responsive">
                  <div className="w-12 h-12 bg-retro-yellow/10 flex items-center justify-center border-retro-warning pixel-shadow">
                    <span className="text-retro-yellow pixel-text">📍</span>
                  </div>
                  <div className="visual-hierarchy">
                    <p className="text-retro-green text-sm pixel-text">LOCATION</p>
                    <p className="text-white text-sm md:text-base">Magdeburg, Germany</p>
                    <p className="text-white/60 text-xs">Available for Remote Work</p>
                  </div>
                </div>
                
                {/* Timezone */}
                <div className="flex items-start gap-responsive">
                  <div className="w-12 h-12 bg-retro-blue/10 flex items-center justify-center border-retro-blue pixel-shadow">
                    <span className="text-retro-blue pixel-text">🕐</span>
                  </div>
                  <div className="visual-hierarchy">
                    <p className="text-retro-green text-sm pixel-text">TIMEZONE</p>
                    <p className="text-white text-sm md:text-base">CET (GMT+1)</p>
                  </div>
                </div>
                
                {/* Socials */}
                <div className="flex items-start gap-responsive">
                  <div className="w-12 h-12 bg-retro-cyan/10 flex items-center justify-center border-retro-standard pixel-shadow">
                    <span className="text-retro-cyan pixel-text">🔗</span>
                  </div>
                  <div className="visual-hierarchy">
                    <p className="text-retro-green text-sm pixel-text">CONNECT</p>
                    <div className="retro-grid retro-grid-2 lg:grid-cols-4">
                      {[
                        { name: 'github', icon: 'GH', color: 'retro-cyan', url: 'https://github.com/BhaveshY' },
                        { name: 'linkedin', icon: 'LI', color: 'retro-blue', url: 'https://www.linkedin.com/in/bhavesh-yeole-a46558159/' },
                        { name: 'email', icon: 'GM', color: 'retro-green', url: 'mailto:byeole88@gmail.com' }
                      ].map((social) => (
                        <a 
                          key={social.name}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`w-12 h-12 border border-${social.color} hover:bg-${social.color}/20 flex items-center justify-center transition-colors pixel-corners group`}
                          title={social.name}
                        >
                          <span className="text-white text-xs uppercase pixel-text">{social.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-3 monitor-frame-enhanced flex flex-col contact-equal-panel">
            <div className="monitor-content flex-grow">
              <h3 className="text-retro-yellow text-xl pixel-text content-spacing">MESSAGE TERMINAL</h3>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center content-wrapper visual-hierarchy"
                >
                  <div className="text-retro-green text-lg pixel-text pixel-bubble">TRANSMISSION COMPLETE</div>
                  <p className="text-white/80">Your message has been received. I&apos;ll respond as soon as possible.</p>
                  <div className="animate-pulse text-retro-cyan">
                    <span className="text-2xl">⟳</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-section">
                  {/* Error message */}
                  {error && (
                    <div className="p-3 border border-red-500 bg-red-500/10 text-red-400 text-sm pixel-text">
                      ERROR: {error}
                    </div>
                  )}
                  
                  {/* Name input */}
                  <div className="retro-form-group">
                    <label htmlFor="name" className="retro-form-label">
                      NAME_
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="retro-form-input digital-noise"
                    />
                  </div>
                  
                  {/* Email input */}
                  <div className="retro-form-group">
                    <label htmlFor="email" className="retro-form-label">
                      EMAIL_
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="retro-form-input digital-noise"
                    />
                  </div>
                  
                  {/* Message textarea */}
                  <div className="retro-form-group">
                    <label htmlFor="message" className="retro-form-label">
                      MESSAGE_
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="retro-form-input resize-none terminal-lines"
                    ></textarea>
                  </div>
                  
                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="w-full btn-retro-primary py-3 text-md content-spacing btn-8bit-hover"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="pixel-text">SEND MESSAGE</span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;