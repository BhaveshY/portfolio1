'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  // Navbar animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Nav item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100 
      }
    }
  };

  // Logo animation
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-lg border-b border-retro-cyan/50' : 'py-2'
      }`}
      style={{
        backgroundColor: '#000000',
        backdropFilter: 'none'
      }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-bold text-white relative group overflow-hidden"
          variants={logoVariants}
          data-cursor="Home"
        >
          <span className="relative z-10 inline-block pixel-text">
            <span className="text-retro-cyan glitch-text">ALEX</span>
            <span className="text-retro-pink">{showCursor ? '_' : ''}</span>
            <span className="text-retro-green">CHEN</span>
          </span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-retro-cyan via-retro-pink to-retro-green"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a 
                key={item.name} 
                href={item.href} 
                className={`relative group overflow-hidden ${
                  isActive ? 'text-retro-cyan' : 'text-white opacity-80 hover:opacity-100'
                } transition-all duration-300 px-3 py-1.5`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor={item.name}
              >
                <span className="relative z-10 block py-1 pixel-text text-sm">
                  {item.name}
                  {isActive && <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-retro-pink">{`>`}</span>}
                </span>
                <motion.span 
                  className={`absolute -bottom-0.5 left-0 w-full h-0.5 ${isActive ? 'bg-retro-cyan' : 'bg-white/70'}`}
                  initial={{ scaleX: isActive ? 1 : 0, originX: 0 }}
                  whileHover={{ scaleX: 1, originX: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {isActive && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-full bg-retro-cyan/10 z-0"
                    layoutId="activeNavBackground"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
        
        <motion.div 
          className="md:hidden"
          variants={itemVariants}
        >
          <motion.button 
            className="p-2 text-white focus:outline-none flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            data-cursor="Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              width="20" 
              height="20"
              style={{ imageRendering: 'pixelated' }}
              className="bg-transparent"
            >
              <rect width="20" height="20" fill="transparent"/>
              <rect x="9" y="3" width="2" height="2" fill="#00ffff"/>
              <rect x="7" y="5" width="2" height="2" fill="#00ffff"/>
              <rect x="9" y="5" width="2" height="2" fill="#ff2a6d"/>
              <rect x="11" y="5" width="2" height="2" fill="#00ffff"/>
              <rect x="5" y="7" width="2" height="2" fill="#00ffff"/>
              <rect x="7" y="7" width="2" height="2" fill="#ff2a6d"/>
              <rect x="9" y="7" width="2" height="2" fill="#7fff00"/>
              <rect x="11" y="7" width="2" height="2" fill="#ff2a6d"/>
              <rect x="13" y="7" width="2" height="2" fill="#00ffff"/>
              <rect x="7" y="9" width="2" height="2" fill="#00ffff"/>
              <rect x="9" y="9" width="2" height="2" fill="#ff2a6d"/>
              <rect x="11" y="9" width="2" height="2" fill="#00ffff"/>
              <rect x="9" y="11" width="2" height="2" fill="#00ffff"/>
            </svg>
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-retro-cyan block transition-all duration-300 mb-1.5"
                variants={{
                  closed: { rotate: 0, translateY: 0 },
                  open: { rotate: 45, translateY: 7 }
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-retro-cyan block transition-all duration-300"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-retro-cyan block transition-all duration-300 mt-1.5"
                variants={{
                  closed: { rotate: 0, translateY: 0 },
                  open: { rotate: -45, translateY: -7 }
                }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className="md:hidden overflow-hidden"
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      >
        <div className="bg-black px-4 py-3 border-t border-retro-cyan/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a 
                key={item.name} 
                href={item.href}
                className={`block py-3 ${
                  isActive ? 'text-retro-cyan' : 'text-white opacity-80 hover:opacity-100'
                } transition-all border-b border-gray-700/50 last:border-b-0 flex items-center`}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                data-cursor={item.name}
              >
                {isActive && <span className="text-retro-pink mr-2">{`>`}</span>}
                <span className="pixel-text text-sm">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 