// src/components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/" className={router.pathname === '/' ? styles.active : ''}>Home</Link>
                </li>
                <li>
                    <Link href="/projectUpload" className={router.pathname === '/projectUpload' ? styles.active : ''}>Upload Project</Link>
                </li>
                <li>
                    <Link href="/dashboard" className={router.pathname === '/dashboard' ? styles.active : ''}>Dashboard</Link>
                </li>
                <li>
                    <Link href="/signup" className={router.pathname === '/signup' ? styles.active : ''}>Signup</Link>
                </li>
                <li>
                    <Link href="/login" className={router.pathname === '/login' ? styles.active : ''}>Sign In</Link>
                </li>
                <li>
                    <Link href="/createProject" className={router.pathname === '/createProject' ? styles.active : ''}>Create Project</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
