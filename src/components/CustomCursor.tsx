'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorProps {
  /**
   * Determines if secondary cursor shows text on hover
   */
  showText?: boolean;
}

const CustomCursor: React.FC<CursorProps> = ({ showText = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse position
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => {
      setIsVisible(false);
    };

    const mouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, [isVisible]);
  
  // Event handlers for interactive elements
  useEffect(() => {
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the target or any parent has data-cursor attribute
      let element: HTMLElement | null = target;
      while (element) {
        if (element.dataset && element.dataset.cursor) {
          setCursorText(element.dataset.cursor);
          setCursorVariant('text');
          return;
        }
        element = element.parentElement;
      }
      
      // General hover states for common elements
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };
    
    const handleLinkHoverOut = () => {
      setCursorVariant('default');
      setCursorText('');
    };
    
    document.addEventListener('mouseover', handleLinkHover);
    document.addEventListener('mouseout', handleLinkHoverOut);
    
    return () => {
      document.removeEventListener('mouseover', handleLinkHover);
      document.removeEventListener('mouseout', handleLinkHoverOut);
    };
  }, []);
  
  // Cursor animation variants
  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      borderRadius: '50%',
      backgroundColor: 'rgba(79, 209, 197, 0.8)',
      mixBlendMode: 'difference' as const,
      opacity: isVisible ? 1 : 0,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      borderRadius: '50%',
      backgroundColor: 'rgba(79, 209, 197, 0.4)',
      border: '1px solid rgba(79, 209, 197, 0.9)',
      mixBlendMode: 'difference' as const,
      opacity: isVisible ? 1 : 0,
    },
    text: {
      height: 'auto',
      width: 'auto',
      borderRadius: '4px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      padding: '10px 20px',
      mixBlendMode: 'normal' as const,
      opacity: isVisible ? 1 : 0,
    }
  };
  
  // Secondary cursor (outer ring) variants
  const secondaryCursorVariants = {
    default: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      borderRadius: '50%',
      border: '1px solid rgba(79, 209, 197, 0.4)',
      backgroundColor: 'transparent',
      opacity: isVisible ? 0.8 : 0,
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 20
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      opacity: isVisible ? 0.6 : 0,
      backgroundColor: 'rgba(79, 209, 197, 0.15)',
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 30
      }
    },
    text: {
      opacity: 0,
      x: mousePosition.x,
      y: mousePosition.y,
    }
  };
  
  return (
    <>
      {/* Primary cursor dot */}
      <motion.div
        className="cursor z-[1000] fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 500,
          restDelta: 0.001
        }}
      />
      
      {/* Secondary cursor ring */}
      <motion.div
        className="cursor-follower z-[999] fixed top-0 left-0 pointer-events-none"
        variants={secondaryCursorVariants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          restDelta: 0.001
        }}
      />
      
      {/* Text cursor (shows on special elements with data-cursor attribute) */}
      <AnimatePresence>
        {showText && cursorVariant === 'text' && isVisible && (
          <motion.div
            className="cursor-text z-[1001] fixed top-0 left-0 pointer-events-none flex items-center justify-center text-sm font-medium tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x - 75,
              y: mousePosition.y - 75,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor; 