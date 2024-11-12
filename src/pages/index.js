// src/pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>DevOps</h1>
        <h1 className={styles.title}>Engineer</h1>
        <div className={styles.buttonContainer}>
          <Link href="/about">
            <button className={styles.learnMoreButton}>Learn More</button>
          </Link>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image 
          src="/images/devops.jpeg"  // Correct path from the 'public' folder
          alt="" 
          width={600}  // Width of the image
          height={400} // Height of the image
        />
      </div>
    </div>
  );
}
