'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
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

  // Simulated project data - expanded with more comprehensive projects
  const projects: Project[] = [
    {
      id: 1,
      title: "RETRO GAME EMULATOR",
      description: "A web-based emulator for classic 8-bit games with pixel-perfect graphics and authentic sound. Built with WebAssembly for optimal performance. Supports multiple game formats and includes save states, speed controls, and custom shaders.",
      tags: ["React", "WebAssembly", "JavaScript", "Canvas API"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAyMjQ0Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTUwIiByPSI0MCIgZmlsbD0iIzAwZmZmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNzAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SRVRSTyBHQU1FPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iODUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmY0NDY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FTVVMQVRPUjwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project1",
      githubLink: "https://github.com/yourusername/retro-emulator"
    },
    {
      id: 2,
      title: "NEURAL NETWORK VISUALIZER",
      description: "Interactive visualization tool for neural networks. Users can create, train and test simple neural networks directly in the browser. Features real-time training visualization, adjustable network architecture, and dataset import capabilities.",
      tags: ["TypeScript", "D3.js", "TensorFlow.js", "React"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDQwMDQ0Ii8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIyMCIgZmlsbD0iI2ZmZmYwMCIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEwMCIgcj0iMjAiIGZpbGw9IiNmZmZmMDAiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSIxMDAiIHI9IjIwIiBmaWxsPSIjZmZmZjAwIi8+PGxpbmUgeDE9IjEyMCIgeTE9IjEwMCIgeDI9IjIzMCIgeTI9IjEwMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjcwIiB5MT0iMTAwIiB4Mj0iMzgwIiB5Mj0iMTAwIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNzAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmZjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ORVVSQUwgTkVUV09SSzwvdGV4dD48dGV4dCB4PSI1MCUiIHk9Ijg1JSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VklTVUFMSVpFUjwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project2",
      githubLink: "https://github.com/yourusername/neural-viz"
    },
    {
      id: 3,
      title: "CYBERPUNK WEATHER APP",
      description: "A weather application with a retro-futuristic cyberpunk interface. Provides real-time weather data with unique visualizations, 7-day forecasts, and atmospheric particle effects that respond to weather conditions.",
      tags: ["Next.js", "API", "CSS", "TypeScript"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIwMDU1Ii8+PHBvbHlnb24gcG9pbnRzPSIyMDAsMTAwIDI2MCw2MCAzMDAsMTAwIDI2MCwxNDAiIGZpbGw9IiNmZjQ0NjYiLz48cG9seWdvbiBwb2ludHM9IjE1MCwxODAgMTgwLDE0MCAyMTAsMTgwIDE4MCwyMjAiIGZpbGw9IiMwMGZmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjcwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmNDQ2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q1lCRVJQVU5LPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iODUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XRUFUSEVSIEFQUEM8L3RleHQ+PC9zdmc+",
      link: "https://example.com/project3",
      githubLink: "https://github.com/yourusername/cyberpunk-weather"
    },
    {
      id: 4,
      title: "QUANTUM ALGORITHM SIMULATOR",
      description: "Educational tool that simulates basic quantum algorithms and visualizes quantum states and operations. Includes Shor's algorithm, Grover's search, and quantum teleportation with interactive 3D visualizations.",
      tags: ["Python", "React", "Three.js", "WebGL"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTEwMDMzIi8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZlZjAwIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSIyNTAiIGN5PSIxNTAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmVmMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjE1MCIgcj0iMTAiIGZpbGw9IiNmZmVmMDAiLz48dGV4dCB4PSI1MCUiIHk9Ijc1JSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZWYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UVVBTVRVTSBBTEEDPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iOTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TSU1VTEFUT1I8L3RleHQ+PC9zdmc+",
      link: "https://example.com/project4",
      githubLink: "https://github.com/yourusername/quantum-sim"
    },
    {
      id: 5,
      title: "PIXEL ART CREATOR",
      description: "Browser-based pixel art creator with export options, animation capabilities, and a community gallery. Features layer support, color palettes, onion skinning, and collaborative editing.",
      tags: ["JavaScript", "Canvas", "Firebase", "CSS"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAzMzAwIi8+PHJlY3QgeD0iMTgwIiB5PSI5MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmYwMDAwIi8+PHJlY3QgeD0iMjAwIiB5PSI5MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDBmZjAwIi8+PHJlY3QgeD0iMjIwIiB5PSI5MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDA2NmZmIi8+PHJlY3QgeD0iMjQwIiB5PSI5MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmZjAwIi8+PHJlY3QgeD0iMjYwIiB5PSI5MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmYwMGZmIi8+PHJlY3QgeD0iMjgwIiB5PSI5MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDBmZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI3NSUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMGZmMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBJWEVMIEFSVDwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjkwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q1JFQVRPUjwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project5",
      githubLink: "https://github.com/yourusername/pixel-creator"
    },
    {
      id: 6,
      title: "SYNTHWAVE MUSIC GENERATOR",
      description: "AI-powered tool that generates synthwave music based on parameters like tempo, mood, and instrumentation. Uses machine learning to create authentic 80s-style compositions with customizable synthesizer settings.",
      tags: ["TensorFlow", "Web Audio API", "React", "Node.js"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTEwMDIyIi8+PHBhdGggZD0iTSAxMDAgMjAwIEwgMTUwIDEwMCBMIDIwMCAxNTAgTCAyNTAgODAgTCAzMDAgMTIwIEwgMzUwIDYwIEwgNDAwIDE2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY0NDY2IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNIDEwMCAyMjAgTCAxNTAgMTIwIEwgMjAwIDEcwIEwgMjUwIDEwMCBMIDMwMCAxNDAgTCAzNTAgODAgTCA0MDAgMTgwIiBmaWxsPSIjZmY0NDY2IiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNzUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmY0NDY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TWU5USFdBUlRFPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iOTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HRU5FUkFUT1I8L3RleHQ+PC9zdmc+",
      link: "https://example.com/project6",
      githubLink: "https://github.com/yourusername/synthwave-gen"
    },
    {
      id: 7,
      title: "BLOCKCHAIN VOTING SYSTEM",
      description: "Secure, transparent voting platform built on Ethereum blockchain. Features voter authentication, real-time results, audit trails, and smart contract governance with gas optimization.",
      tags: ["Solidity", "Web3.js", "React", "Ethereum"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAxMTIyIi8+PHJlY3QgeD0iMTUwIiB5PSI4MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmVmMDAiIHN0cm9rZS13aWR0aD0iMyIvPjxyZWN0IHg9IjI0MCIgeT0iODAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZlZjAwIiBzdHJva2Utd2lkdGg9IjMiLz48cmVjdCB4PSIzMzAiIHk9IjgwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZWYwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PGxpbmUgeDE9IjIxMCIgeTE9IjExMCIgeDI9IjI0MCIgeTI9IjExMCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMzAwIiB5MT0iMTEwIiB4Mj0iMzMwIiB5Mj0iMTEwIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNzUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZlZjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CTE9DS0NIQUlOPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iOTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WT1RJTkcgU1lTVEVNPC90ZXh0Pjwvc3ZnPg==",
      link: "https://example.com/project7",
      githubLink: "https://github.com/yourusername/blockchain-voting"
    },
    {
      id: 8,
      title: "AR FURNITURE PLACEMENT",
      description: "Augmented reality mobile app for furniture placement using WebXR and Three.js. Users can visualize furniture in their space before purchasing, with accurate scaling and lighting simulation.",
      tags: ["WebXR", "Three.js", "React Native", "Computer Vision"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIxMTAwIi8+PGVsbGlwc2UgY3g9IjI1MCIgY3k9IjIwMCIgcng9IjEwMCIgcnk9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmVmMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjIyMCIgeT0iMTMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHJlY3QgeD0iMjMwIiB5PSIxNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzAwNjZmZiIgb3BhY2l0eT0iMC41Ii8+PHRleHQgeD0iNTAlIiB5PSI3NSUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmVmMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFSIEZVUk5JVFVSRTU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI5MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMGZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBMQUNFTUVOVDwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project8",
      githubLink: "https://github.com/yourusername/ar-furniture"
    },
    {
      id: 9,
      title: "SOCIAL MEDIA ANALYTICS",
      description: "Comprehensive social media analytics dashboard with sentiment analysis, trend prediction, and automated reporting. Integrates with multiple platforms and provides AI-driven insights.",
      tags: ["Python", "React", "NLP", "PostgreSQL"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAyMjMzIi8+PHJlY3QgeD0iMTAwIiB5PSIxNDAiIHdpZHRoPSIzMCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzAwZmZmZiIvPjxyZWN0IHg9IjE1MCIgeT0iMTIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZlZjAwIi8+PHJlY3QgeD0iMjAwIiB5PSIxMDAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNmZjQ0NjYiLz48cmVjdCB4PSIyNTAiIHk9IjExMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjExMCIgZmlsbD0iIzAwZmY2NiIvPjxyZWN0IHg9IjMwMCIgeT0iMTMwIiB3aWR0aD0iMzAiIGhlaWdodD0iOTAiIGZpbGw9IiNmZjAwZmYiLz48cmVjdCB4PSIzNTAiIHk9IjEwNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjExNSIgZmlsbD0iIzAwZmZmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNzAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMDBmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TT0NJQUwgTUVESUE8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI4NSUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmVmMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFOQUxZVElDUzwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project9",
      githubLink: "https://github.com/yourusername/social-analytics"
    },
    {
      id: 10,
      title: "VOICE-CONTROLLED IDE",
      description: "Revolutionary code editor controlled entirely by voice commands. Features natural language programming, voice-to-code translation, and accessibility-first design for developers with disabilities.",
      tags: ["Electron", "Speech Recognition", "Monaco Editor", "Python"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTEwMDExIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTIwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY0NDY2IiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjI1IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjQ0NjYiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNmZjQ0NjYiLz48cGF0aCBkPSJNIDI1MCA5MCBMIDM1MCA5MCBMIDM1MCA5NSBMIDI1MCA5NSBaIiBmaWxsPSIjMDBmZmZmIi8+PHBhdGggZD0iTSAyNTAgMTEwIEwgMzAwIDExMCBMIDMwMCAxMTUgTCAyNTAgMTE1IFoiIGZpbGw9IiMwMGZmZmYiLz48cGF0aCBkPSJNIDI1MCAxMzAgTCAzODAgMTMwIEwgMzgwIDEzNSBMIDI5MCAxMzUgTCAyODAgMTM1IFoiIGZpbGw9IiIzMDAwMDAiLz48cGF0aCBkPSJNIDI1MCAxNTAgTCAyODAgMTUwIEwgMjgwIDE1NSBMIDI1MCAxNTUgWiIgZmlsbD0iIzAwMDAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNzUlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmY0NDY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WUklFU1QgSUQ8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI5MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMGZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNPUlRST0w8L3RleHQ+PC9zdmc+",
      link: "https://example.com/project10",
      githubLink: "https://github.com/yourusername/voice-ide"
    },
    {
      id: 11,
      title: "CRYPTO TRADING BOT",
      description: "Automated cryptocurrency trading bot with machine learning-based prediction algorithms. Features backtesting, risk management, portfolio optimization, and real-time market analysis.",
      tags: ["Python", "Machine Learning", "API", "Docker"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAzMzExIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTIwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZlZjAwIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSIyMDAiIHk9IjEyNSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZWYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QjwvdGV4dD48cGF0aCBkPSJNIDI4MCA4MCBMIDI5MCA4MCBMIDMwMCA5MCBMIDM1MCA5MCBMIDM1MCA5NSBMIDMwMCA5NSBMIDI5MCA5NSBMIDI4MCA5NSBaIiBmaWxsPSIjMDBmZjY2Ii8+PHBhdGggZD0iTSAyODAgMTEwIEwgMjkwIDExMCBMIDMwMCAxMTAgTCAzMDAgMTE1IEwgMjkwIDExNSBMIDI4MCAxMTUgWiIgZmlsbD0iI2ZmNDQ2NiIvPjxwYXRoIGQ9Ik0gMjgwIDEzMCBMIDI5MCAxMzAgTCAzMDUgMTMwIEwgMzA1IDEzNSBMIDI5MCAxMzUgTCAyODAgMTM1IFoiIGZpbGw9IiNmZjQ0NjYiLz48cGF0aCBkPSJNIDI4MCAxNTAgTCAzMjAgMTUwIEwgMzIwIDE1NSBMIDI4MCAxNTUgWiIgZmlsbD0iIzAwZjY2Ii8+PHRleHQgeD0iNTAlIiB5PSI3NSUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmVmMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNSRVRPIFRSQURJTkc8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI5MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMGZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJPVDwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project11",
      githubLink: "https://github.com/yourusername/crypto-bot"
    },
    {
      id: 12,
      title: "VR COLLABORATION SPACE",
      description: "Virtual reality workspace for remote team collaboration. Features 3D whiteboards, spatial audio, hand tracking, and integration with popular productivity tools. Built for cross-platform VR headsets.",
      tags: ["WebXR", "Three.js", "WebRTC", "Node.js"],
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAxMzMzIi8+PGVsbGlwc2UgY3g9IjI1MCIgY3k9IjE1MCIgcng9IjEwMCIgcnk9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC43Ii8+PGVsbGlwc2UgY3g9IjI1MCIgY3k9IjE1MCIgcng9IjcwIiByeT0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNDQ2NiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjciLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjEwIiBmaWxsPSIjZmZlZjAwIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTIwIiByPSIxMCIgZmlsbD0iI2ZmZWYwMCIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjE4MCIgcj0iMTAiIGZpbGw9IiNmZmVmMDAiLz48dGV4dCB4PSI1MCUiIHk9Ijc1JSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VlIgQ09MTEFCPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iOTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmY0NDY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TUEFDRTwvdGV4dD48L3N2Zz4=",
      link: "https://example.com/project12",
      githubLink: "https://github.com/yourusername/vr-collab"
    }
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
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-retro-primary"
              >
                Live Demo
              </a>
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