import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
       
        <ul className={styles.navbarLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/createProject">Create Project</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
        <button className={styles.navbarButton}>Get Started</button>
      </nav>
    );
  };

export default NavBar;
