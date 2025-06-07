'use client';

import styles from './page.module.css'; // Using page.module.css convention

export default function ContactPage() {
  // Basic form structure, no actual submission logic implemented here.
  // For a real form, you would need a backend or a service like Formspree/Netlify Forms.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo - no data was actually sent.)');
    // In a real app, you would handle form submission here.
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h1>Get In Touch!</h1>
      <p style={{ marginBottom: '30px' }}>
        Have a question, a project idea, or just want to connect? Feel free to reach out.
        I&apos;m always open to discussing new opportunities and collaborations.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Mario Placeholder" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="mario@example.com" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={6} placeholder="It&apos;s-a me, your message!" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>

      <div className={styles.socialLinksContainer}>
        <h2>Alternatively, Find Me On:</h2>
        <ul className={styles.socialLinksList}>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO: Replace # with your LinkedIn URL */} 
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO: Replace # with your GitHub URL */} 
              GitHub
            </a>
          </li>
          {/* Add more relevant social links as needed, e.g., Twitter, Kaggle */}
          {/* Example: 
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer"> 
              Kaggle
            </a>
          </li> 
          */}
        </ul>
      </div>
    </section>
  );
} 