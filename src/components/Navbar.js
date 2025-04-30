import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);

        // Listen for login/logout events
        const updateAuthStatus = () => {
            const updatedToken = localStorage.getItem("authToken");
            setIsLoggedIn(!!updatedToken);
        };

        window.addEventListener("authChanged", updateAuthStatus);

        return () => {
            window.removeEventListener("authChanged", updateAuthStatus);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove token
        setIsLoggedIn(false);

        // Notify other components that the user logged out
        window.dispatchEvent(new Event("authChanged"));

        router.push('/'); // Redirect to home after logout
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarLinks}>
                <li><Link href="/">Home</Link></li>
                
                {isLoggedIn && (
                    <>
                        <li><Link href="/ProjectDetails">Project Details</Link></li>
                        <li><Link href="/PastProject">Past Project</Link></li>
                        <li><Link href="/downloadMonitoringTool">Scaling</Link></li>
                    </>
                )}

                <li><Link href="/about">About Us</Link></li>
            </ul>

            {isLoggedIn ? (
                <button className={styles.navbarButton} onClick={handleLogout}>
                    Log Out
                </button>
            ) : (
                <Link href="/signin">
                    <button className={styles.navbarButton}>Log In</button>
                </Link>
            )}
        </nav>
    );
};

export default NavBar;