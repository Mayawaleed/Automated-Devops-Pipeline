// src/components/SignUp.js
import { useState } from 'react';
import styles from '../styles/signUp.module.css';  // Make sure the path is correct

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Please enter both email and password.');
            return;
        }

        // Handle the sign-up logic here (e.g., send data to a server)
        console.log(`Signing up with email: ${email}`);

        setMessage('Account created successfully!');
    };

    return (
        <div className={styles.signUpContainer}>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>Create Account</button>
                {message && <p className={message.includes('successfully') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default SignUp;
