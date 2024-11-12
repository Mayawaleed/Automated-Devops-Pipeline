// src/components/SignIn.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/signIn.module.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setMessage('Please enter both username and password.');
            return;
        }

        // Handle the sign-in logic here (e.g., validate credentials)
        console.log(`Signing in with username: ${username}`);

        setMessage('Successfully signed in!');

        // Redirect to the home page after successful login
        router.push('/'); // This will navigate to the home page
    };

    return (
        <div className={styles.signInContainer}>
            <h1 className={styles.heading}>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                />

                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>Sign In</button>
                {message && <p className={message.includes('Successfully') ? styles.success : styles.error}>{message}</p>}
            </form>

            <div className={styles.createAccountLink}>
                <p>Don't have an account?</p>
                <a href="/signup" className={styles.link}>Create Account</a> {/* Link to Sign Up page */}
            </div>
        </div>
    );
};

export default SignIn;
