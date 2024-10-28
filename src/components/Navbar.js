// src/components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projectUpload">Upload Project</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/Signup">Signup</Link></li>
                <li><Link href="/Login">Login</Link></li>


            </ul>
        </nav>
    );
};

export default Navbar;
