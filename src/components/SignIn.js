// import { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/signIn.module.css';
// import { useRouter } from 'next/router';

// const SignIn = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!username || !password) {
//             setMessage('Please enter both username and password.');
//             return;
//         }

//         // Prepare the data for sending to the backend
//         const userData = {
//             username,
//             password
//         };

//         try {
//             // Make the API call to the backend
//             const response = await axios.post('http://localhost:8000/api/login/', userData);

//             // Check if login was successful
//             if (response.status === 200) {
//                 setMessage('Successfully signed in!');
//                 // Redirect to the home page after successful login
//                 router.push('/');
//             }
//         } catch (err) {
//             // Handle errors
//             console.error('Error signing in:', err);
//             setMessage('Failed to sign in. Please check your credentials and try again.');
//         }
//     };

//     return (
//         <div className={styles.signInContainer}>
//             <h1 className={styles.heading}>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username" className={styles.label}>Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className={styles.input}
//                 />

//                 <label htmlFor="password" className={styles.label}>Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={styles.input}
//                 />

//                 <button type="submit" className={styles.button}>Sign In</button>
//                 {message && <p className={message.includes('Successfully') ? styles.success : styles.error}>{message}</p>}
//             </form>

//             <div className={styles.createAccountLink}>
//                 <p>Don't have an account?</p>
//                 <a href="/signup" className={styles.link}>Create Account</a> {/* Link to Sign Up page */}
//             </div>
//         </div>
//     );
// };

// export default SignIn;
// import { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/signIn.module.css';
// import { useRouter } from 'next/router';

// const SignIn = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!username || !password) {
//             setMessage('Please enter both username and password.');
//             return;
//         }

//         // Prepare the data for sending to the backend
//         const userData = {
//             username,
//             password
//         };

//         try {
//             // Make the API call to the backend
//             const response = await axios.post('http://localhost:8000/api/login/', userData);

//             // Check if login was successful
//             if (response.status === 200) {
//                 const token = response.data.token; // Assuming the backend sends token in response.data.token
//                 localStorage.setItem('authToken', token); // Store token in localStorage

//                 setMessage('Successfully signed in!');
//                 // Redirect to the home page after successful login
//                 router.push('/');
//             }
//         } catch (err) {
//             // Handle errors
//             console.error('Error signing in:', err);
//             setMessage('Failed to sign in. Please check your credentials and try again.');
//         }
//     };

//     return (
//         <div className={styles.signInContainer}>
//             <h1 className={styles.heading}>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username" className={styles.label}>Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className={styles.input}
//                 />

//                 <label htmlFor="password" className={styles.label}>Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={styles.input}
//                 />

//                 <button type="submit" className={styles.button}>Sign In</button>
//                 {message && <p className={message.includes('Successfully') ? styles.success : styles.error}>{message}</p>}
//             </form>

//             <div className={styles.createAccountLink}>
//                 <p>Don't have an account?</p>
//                 <a href="/signup" className={styles.link}>Create Account</a> {/* Link to Sign Up page */}
//             </div>
//         </div>
//     );
// };

// export default SignIn;

import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/signIn.module.css';
import { useRouter } from 'next/router';

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = formData;

        if (!username || !password) {
            setMessage('Please enter both username and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password
            });

            if (response.status === 200) {
                setMessage('Successfully signed in! Redirecting...');
                
                // Redirect to the home page
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            }
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.detail || 'Invalid credentials. Please try again.');
            } else {
                setMessage('Network error. Please check your connection.');
            }
        }
    };

    return (
        <div className={styles.signInContainer}>
            <h1 className={styles.heading}>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />

                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                    required
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

