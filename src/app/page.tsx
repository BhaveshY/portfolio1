// src/app/page.tsx
// This page relies on global styles and the .container class from globals.css
// No specific page module needed unless more complex styling arises.

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

// Bhavesh's skills from resume
const skillsData = [
  // Programming Languages & Frontend
  { name: "HTML", level: 90, category: "programming" as const, description: "Semantic markup, accessibility, modern standards" },
  { name: "CSS", level: 88, category: "programming" as const, description: "Responsive design, animations, Grid, Flexbox" },
  { name: "JavaScript", level: 82, category: "programming" as const, description: "ES6+, DOM manipulation, async programming" },
  { name: "TypeScript", level: 78, category: "programming" as const, description: "Type safety, interfaces, advanced types" },
  { name: "React Native", level: 82, category: "programming" as const, description: "Cross-platform mobile development" },
  { name: "Java", level: 80, category: "programming" as const, description: "Object-oriented programming, enterprise applications" },
  { name: "C++", level: 81, category: "programming" as const, description: "System programming, algorithms, data structures" },
  
  // Machine Learning & AI
  { name: "Machine Learning", level: 82, category: "ml" as const, description: "Algorithms, model training, optimization" },
  { name: "Generative AI", level: 80, category: "ml" as const, description: "LLM handling, prompt engineering" },
  { name: "Large Language Models", level: 84, category: "ml" as const, description: "Model fine-tuning and optimization" },
  { name: "Model Fine Tuning", level: 85, category: "ml" as const, description: "Custom model adaptation and optimization" },
  { name: "Prompt Engineering", level: 86, category: "ml" as const, description: "AI prompt design and optimization" },
  
  // Data Science & Analysis
  { name: "Python", level: 81, category: "data" as const, description: "Data analysis, scripting, automation" },
  { name: "Pandas", level: 79, category: "data" as const, description: "Data manipulation and analysis" },
  { name: "NumPy", level: 81, category: "data" as const, description: "Numerical computing and array operations" },
  { name: "SQL", level: 83, category: "data" as const, description: "Database queries, data management" },
  { name: "MongoDB", level: 78, category: "data" as const, description: "NoSQL database operations" },
  
  // Tools & Technologies
  { name: "RESTful APIs", level: 85, category: "tools" as const, description: "API design, integration, testing" },
  { name: "Git", level: 88, category: "tools" as const, description: "Version control, collaboration workflows" },
  { name: "GitHub", level: 85, category: "tools" as const, description: "Repository management, CI/CD pipelines" },
  { name: "Google Cloud Fundamentals", level: 75, category: "tools" as const, description: "Cloud services and deployment" },
  { name: "SAP SAC", level: 79, category: "tools" as const, description: "Analytics cloud platform" },
  { name: "SAP S/4HANA", level: 68, category: "tools" as const, description: "Enterprise resource planning" },
  { name: "MS Office", level: 90, category: "tools" as const, description: "Document creation, data analysis, presentations" },
  { name: "Digital Marketing", level: 90, category: "tools" as const, description: "SEO, content strategy, analytics" },
  { name: "Photoshop", level: 85, category: "tools" as const, description: "Image editing, design, graphics" },
  { name: "Canva", level: 85, category: "tools" as const, description: "Graphic design, presentations, social media" }
];

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Skills Section */}
      <Skills skills={skillsData} />
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}
