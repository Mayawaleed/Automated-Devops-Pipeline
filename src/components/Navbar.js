// import React from 'react';
// import Link from 'next/link';
// import styles from '../styles/Navbar.module.css';

// const NavBar = () => {
//     return (
//       <nav className={styles.navbar}>
       
//         <ul className={styles.navbarLinks}>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/createProject">Create Project</Link></li>
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//         </ul>
//         <Link href="/signin">
//         <button className={styles.navbarButton}>Get Started</button>
//       </Link>
       
//       </nav>
//     );
//   };

// export default NavBar;

// import React from 'react';
// import Link from 'next/link';
// import styles from '../styles/Navbar.module.css';

// const NavBar = () => {
//     return (
//         <nav className={styles.navbar}>
//             <ul className={styles.navbarLinks}>
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/ProjectDetails">Project Details</Link></li>
//                 <li><Link href="/PastProject">Past Project</Link></li>
//                 <li><Link href="/about">About Us</Link></li>
//                 <li><Link href="/downloadMonitoringTool">Scaling</Link></li> {/* Added this line */}
//             </ul>
//             <Link href="/signin">
//                 <button className={styles.navbarButton}>Log In</button>
//             </Link>
//         </nav>
//     );
// };

// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
      console.log('Token check on mount:', !!token);
    };

    checkToken(); // Initial check

    const handleAuthChange = () => {
      checkToken();
    };

    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username'); // Remove username from localStorage
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('logout')); // Dispatch logout event
    router.push('/');
  };

  return (
    <nav className={styles.navbar}>
      {console.log('Navbar rendered, isLoggedIn:', isLoggedIn)}
      <div className={styles.leftNav}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        {isLoggedIn && (
          <>
            <Link href="/PastProject">Past Projects</Link>
            <Link href="/ProjectDetails">Project Details</Link>
            <Link href="/downloadMonitoringTool">Scaling</Link>
          </>
        )}
      </div>

      <div className={styles.rightNav}>
        {isLoggedIn ? (
          <button onClick={handleLogout} className={styles.navbarButton}>
            Logout
          </button>
        ) : (
          <Link href="/signin">
            <button className={styles.navbarButton}>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;