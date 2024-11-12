// src/components/SignIn.js
import { useState } from 'react';
import styles from '../styles/signIn.module.css'; // Ensure the correct import path

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
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className={styles.signInButton}>Sign In</button>
                {message && <p className={message.includes('Successfully') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default SignIn;
