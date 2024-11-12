// src/pages/learn-more.js
import styles from '../styles/LearnMore.module.css';

export default function LearnMore() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Learn More About DevOps Engineering</h1>
      <p className={styles.description}>
        DevOps engineering integrates development and operations teams to improve the efficiency, speed, and quality of software deployment.
        This approach involves automation, continuous integration and delivery (CI/CD), and collaboration tools to bridge gaps between
        development and operations, making the process more streamlined.
      </p>
      <h2 className={styles.sectionTitle}>Tools and Technologies</h2>
      <p className={styles.sectionDescription}>
        DevOps engineers utilize a range of tools, including CI/CD pipelines, infrastructure as code (IaC), monitoring solutions, and
        container orchestration platforms to support rapid, high-quality releases.
      </p>
      <h2 className={styles.sectionTitle}>Automation Scaling</h2>
      <p className={styles.sectionDescription}>
        Automation scaling ensures resources are utilized effectively, helping teams automate repetitive tasks and focus on value-driven activities.
      </p>
    </div>
  );
}
