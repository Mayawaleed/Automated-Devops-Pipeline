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

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/createProject">Create Project</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/downloadMonitoringTool">Scaling</Link></li> {/* Added this line */}
            </ul>
            <Link href="/signin">
                <button className={styles.navbarButton}>Get Started</button>
            </Link>
        </nav>
    );
};

export default NavBar;
