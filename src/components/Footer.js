import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.facultyLinks}>
          <h3>Stages Links</h3>
          <ul>
            <li><Link href="/Planning">Planning</Link></li>
            <li><Link href="/Building">Building</Link></li>
            <li><Link href="/Testaing">Testaing</Link></li>
            <li><Link href="/Deployment">Deployment</Link></li>
            <li><Link href="/Monitoring">Monitoring</Link></li>
          </ul>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} DevOps Optimizer. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
