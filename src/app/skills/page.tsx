import styles from './page.module.css'; // Using page.module.css convention

interface SkillItem {
  name: string;
  level: string;
}

// TODO: Customize this data with your specific skills
const skillsData: Record<string, SkillItem[] | string[]> = {
  programmingLanguages: [
    { name: 'Python', level: 'Advanced' }, 
    { name: 'R', level: 'Intermediate' },
    { name: 'SQL', level: 'Advanced' },
  ],
  librariesFrameworks: [
    { name: 'Pandas & NumPy', level: 'Advanced' },
    { name: 'Scikit-learn', level: 'Advanced' },
    { name: 'TensorFlow/Keras', level: 'Intermediate' },
    { name: 'PyTorch', level: 'Intermediate' },
    { name: 'Matplotlib & Seaborn', level: 'Advanced' },
    { name: 'Streamlit/Dash', level: 'Proficient' },
    { name: 'Flask/FastAPI', level: 'Proficient' },
  ],
  toolsPlatforms: [
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'Jupyter Notebooks/Lab', level: 'Advanced' },
    { name: 'VS Code', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'SQL Databases (PostgreSQL, MySQL)', level: 'Proficient' },
    { name: 'Cloud (AWS Sagemaker, GCP AI Platform - Basics)', level: 'Familiar' },
  ],
  dataScienceConcepts: [
    'Machine Learning (Supervised & Unsupervised)',
    'Statistical Modeling & Hypothesis Testing',
    'Data Mining & Preprocessing',
    'Feature Engineering',
    'Data Visualization & Storytelling',
    'ETL Processes & Data Pipelines (Basic)',
    'Time Series Analysis',
    'Natural Language Processing (Basic)',
    'Deep Learning Concepts',
  ],
};

export default function SkillsPage() {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h1>My Skill Set</h1>
      <p style={{ marginBottom: '30px' }}>
        A breakdown of my technical abilities, tools I work with, and core data science concepts I&apos;m proficient in.
      </p>

      {Object.entries(skillsData).map(([categoryKey, skills]) => {
        const categoryName = categoryKey
          .replace(/([A-Z])/g, ' $1') // Add space before capital letters
          .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

        return (
          <div key={categoryKey} className={styles.skillCategory}>
            <h2>{categoryName}</h2>
            {/* Type guard based on categoryKey or structure of items */}
            {categoryKey === 'dataScienceConcepts' ? (
              <ul className={styles.skillListConcepts}>
                {(skills as string[]).map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            ) : (
              <ul className={styles.skillListDetailed}>
                {(skills as SkillItem[]).map(skill => (
                  <li key={skill.name}>
                    <span className={styles.skillName}>{skill.name}:</span> 
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
} 