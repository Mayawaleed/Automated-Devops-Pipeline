// src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <Link href="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
            <Link href="/projectUpload" style={{ marginRight: '15px', color: 'white' }}>Upload Project</Link>
            <Link href="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
        </nav>
    );
};

export default Navbar;
