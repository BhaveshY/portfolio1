// src/app/page.tsx
// This page relies on global styles and the .container class from globals.css
// No specific page module needed unless more complex styling arises.

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

// Sample skills data
const skillsData = [
  // Programming Languages
  { name: "JavaScript", level: 95, category: "programming" as const, description: "Advanced ES6+, async/await, modules" },
  { name: "TypeScript", level: 90, category: "programming" as const, description: "Strong typing, interfaces, generics" },
  { name: "Python", level: 88, category: "programming" as const, description: "Data analysis, web development, automation" },
  { name: "React", level: 92, category: "programming" as const, description: "Hooks, Context, Redux, Next.js" },
  { name: "Node.js", level: 85, category: "programming" as const, description: "Express, APIs, microservices" },
  { name: "CSS/SCSS", level: 90, category: "programming" as const, description: "Flexbox, Grid, animations, responsive design" },
  
  // Machine Learning & AI
  { name: "TensorFlow", level: 82, category: "ml" as const, description: "Neural networks, model training, deployment" },
  { name: "PyTorch", level: 78, category: "ml" as const, description: "Deep learning, computer vision" },
  { name: "Scikit-learn", level: 85, category: "ml" as const, description: "Classification, regression, clustering" },
  { name: "OpenCV", level: 75, category: "ml" as const, description: "Image processing, computer vision" },
  { name: "NLP", level: 80, category: "ml" as const, description: "Text processing, sentiment analysis" },
  
  // Data Science
  { name: "Pandas", level: 90, category: "data" as const, description: "Data manipulation, analysis, cleaning" },
  { name: "NumPy", level: 88, category: "data" as const, description: "Numerical computing, array operations" },
  { name: "Matplotlib", level: 85, category: "data" as const, description: "Data visualization, plotting" },
  { name: "SQL", level: 87, category: "data" as const, description: "PostgreSQL, MySQL, complex queries" },
  { name: "MongoDB", level: 83, category: "data" as const, description: "NoSQL, aggregation pipelines" },
  { name: "Apache Spark", level: 75, category: "data" as const, description: "Big data processing, analytics" },
  
  // Tools & Technologies
  { name: "Docker", level: 80, category: "tools" as const, description: "Containerization, orchestration" },
  { name: "AWS", level: 78, category: "tools" as const, description: "EC2, S3, Lambda, RDS" },
  { name: "Git", level: 92, category: "tools" as const, description: "Version control, collaboration, CI/CD" },
  { name: "Webpack", level: 75, category: "tools" as const, description: "Module bundling, optimization" },
  { name: "Linux", level: 85, category: "tools" as const, description: "Command line, scripting, server management" },
  { name: "Figma", level: 70, category: "tools" as const, description: "UI/UX design, prototyping" }
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
