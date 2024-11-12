// src/components/SignIn.js
import { useState } from 'react';
import styles from '../styles/signIn.module.css'; // Ensure the correct path

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setMessage('Please enter both username and password.');
            return;
        }

        console.log(`Signing in with username: ${username}`);
        setMessage('Successfully signed in!');
    };

    return (
        <div className={styles.signInContainer}>
            <h1 className={styles.heading}>Sign In</h1> {/* Apply the scoped class here */}
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
                <a href="/signup" className={styles.link}>Create Account</a>
            </div>
        </div>
    );
};

export default SignIn;
