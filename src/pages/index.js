// // src/pages/index.js
// import Link from 'next/link';
// import styles from '../styles/Home.module.css';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.textContainer}>
//         <h1 className={styles.title}>DevOps </h1>

//         <h1 className={styles.title}>Engineer</h1>
//         <p className={styles.subtitle}>
//           Empowering your infrastructure with automation, tools, and scalable solutions.
//         </p>
//         <div className={styles.buttonContainer}>
// <Link href="/learn-more">
//   <button className={styles.learnMoreButton}>Learn More</button>
// </Link>

//         </div>
//       </div>

//       <div className={styles.imageContainer}>
//         <Image
//           src="/images/devops.jpeg" // Correct path to the 'public' folder
//           alt="DevOps Image"
//           width={600}  // Width of the image
//           height={400} // Height of the image
//         />
//       </div>
//     </div>
//   );
// }

// src/pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const token = localStorage.getItem('authToken');

    if (storedUsername && token) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    } else {
      setUsername(null);
      setIsLoggedIn(false);
    }

    const handleLogoutEvent = () => {
      setUsername(null);
      setIsLoggedIn(false);
    };

    window.addEventListener('logout', handleLogoutEvent);

    return () => {
      window.removeEventListener('logout', handleLogoutEvent);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeMessage}>Welcome, {username}!</h1>
        </div>
      ) : (
        <div style={{ display: 'flex', width: '100%' }}>
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
              src="/images/devops.jpeg"
              alt="DevOps Image"
              width={600}
              height={400}
            />
          </div>
        </div>
      )}
    </div>
  );
}