import ProjectCard, { Project } from '@/components/ProjectCard';

// TODO: Replace this with your actual project data
const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Pixelated Data Visualizer',
    description: 'Developed a Python-based interactive tool using Streamlit that transforms raw CSV data into engaging, retro-style charts (e.g., bar, line, scatter) with customizable 8-bit color palettes. Implemented Pandas for data manipulation and ensured efficient rendering even for moderately sized datasets. The tool aims to make data exploration fun and visually nostalgic.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'UI/UX', 'Numpy'],
    githubUrl: '#', // Replace with your GitHub URL
    liveUrl: '#',   // Replace with your Live Demo URL (if available)
    // imageUrl: '/images/project-visualizer-thumb.png' // Optional: Add thumbnail in /public/images/
  },
  {
    id: 'proj2',
    title: '8-Bit Anomaly Detector',
    description: 'Engineered a machine learning pipeline in Python to identify anomalous user behavior in simulated game server logs. Utilized Scikit-learn for implementing an Isolation Forest model. Built a Flask-based retro-themed dashboard to display detected anomalies in real-time, helping to hypothetically improve game integrity.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Flask', 'Time Series', 'Anomaly Detection'],
    githubUrl: '#',
    // imageUrl: '/images/project-anomaly-thumb.gif'
  },
  {
    id: 'proj3',
    title: 'Retro Game Recommender',
    description: 'Constructed a content-based recommendation system for classic video games. Leveraged NLP techniques (TF-IDF) on game descriptions and metadata (genre, platform) to compute cosine similarity between titles. The system, built with Python and Pandas, suggests games to users based on their preferences, presented through a simple, nostalgic interface.',
    tags: ['Recommender Systems', 'NLP', 'Python', 'Pandas', 'TF-IDF', 'Cosine Similarity'],
    githubUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <p style={{ marginBottom: '30px' }}>
        Here are some of the data science projects I&apos;ve worked on. Each project showcases
        different skills and challenges I&apos;ve tackled. 
      </p>
      <div>
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No projects to display yet. Please check back soon for exciting updates!</p>
        )}
      </div>
    </section>
  );
} 