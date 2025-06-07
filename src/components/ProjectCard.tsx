import Link from 'next/link';
import styles from './ProjectCard.module.css';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[]; // Tech used, concepts
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string; // Optional: path to a project image/gif in /public (e.g., /images/project-thumb.png)
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.card}>
      {project.imageUrl && (
        <img src={project.imageUrl} alt={`${project.title} thumbnail`} className={styles.image} />
      )}
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <div className={styles.tagsContainer}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
      <div className={styles.linksContainer}>
        {project.githubUrl && <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.link} retro-btn-alt`}>GitHub</Link>}
        {project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.link} retro-btn-alt`}>Live Demo</Link>}
      </div>
    </article>
  );
};

export default ProjectCard; 