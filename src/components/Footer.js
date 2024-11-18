import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.facultyLinks}>
          <h3>Faculties Links</h3>
          <ul>
            <li><Link href="/alsun">Alsun</Link></li>
            <li><Link href="/mass-communication">Mass Communication</Link></li>
            <li><Link href="/oral-dental-medicine">Oral & Dental Medicine</Link></li>
            <li><Link href="/engineering-architecture">Engineering - Architecture</Link></li>
            <li><Link href="/computer-science">Computer Science</Link></li>
            <li><Link href="/business-administration">Business Administration</Link></li>
            <li><Link href="/pharmacy">Pharmacy</Link></li>
            <li><Link href="/engineering-electronics">Engineering - Electronics</Link></li>
          </ul>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} DevOps Optimizer. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
