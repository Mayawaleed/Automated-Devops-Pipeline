// src/pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import InfoComponent from "../components/InfoComponent";

export default function Home() {
  return (
      <div>
          <h1>Welcome to the DevOps App</h1>
          <InfoComponent />
      </div>
  );
}
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>DevOps </h1>

        <h1 className={styles.title}>Engineer</h1>
        <p className={styles.subtitle}>
          Empowering your infrastructure with automation, tools, and scalable solutions.
        </p>
        <div className={styles.buttonContainer}>
<Link href="/learn-more">
  <button className={styles.learnMoreButton}>Learn More</button>
</Link>

        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/images/devops.jpeg" // Correct path to the 'public' folder
          alt="DevOps Image"
          width={600}  // Width of the image
          height={400} // Height of the image
        />
      </div>
    </div>
  );
}


