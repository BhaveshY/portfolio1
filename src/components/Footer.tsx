import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} [Bhavesh Yeole]. All pixels reserved.</p>
      {/* Optional: Add links to GitHub, LinkedIn, etc. using simple <a> tags or Link components */}
      {/* Example: <p><a href="#">GitHub</a> | <a href="#">LinkedIn</a></p> */}
    </footer>
  );
};

export default Footer; 