// import { useState } from 'react';
// import styles from '../styles/SignUp.module.css';

// const SignUp = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!firstName || !lastName || !email || !password || !confirmPassword) {
//             setMessage('Please fill out all fields.');
//             return;
//         }

//         if (password !== confirmPassword) {
//             setMessage('Passwords do not match.');
//             return;
//         }

//         setMessage('Sign Up Successful!');
//     };

//     return (
//         <div className={styles.signUpContainer}>
//             <h1 className={styles.title}>Create Your Account</h1>
//             <form onSubmit={handleSubmit} className={styles.formContainer}>
//                 <label htmlFor="firstName" className={styles.label}>First Name:</label>
//                 <input
//                     type="text"
//                     id="firstName"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     className={styles.inputField}
//                     required
//                 />
                
//                 <label htmlFor="lastName" className={styles.label}>Last Name:</label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     className={styles.inputField}
//                     required
//                 />
                
//                 <label htmlFor="email" className={styles.label}>Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className={styles.inputField}
//                     required
//                 />
                
//                 <label htmlFor="password" className={styles.label}>Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={styles.inputField}
//                     required
//                 />
                
//                 <label htmlFor="confirmPassword" className={styles.label}>Confirm Password:</label>
//                 <input
//                     type="password"
//                     id="confirmPassword"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className={styles.inputField}
//                     required
//                 />

//                 <button type="submit" className={styles.signUpButton}>Sign Up</button>
//                 {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
//             </form>
//         </div>
//     );
// };

// export default SignUp;


import { useState } from 'react';
import styles from '../styles/SignUp.module.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
            setMessage('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        setMessage('Sign Up Successful!');
    };

    return (
        <div className={styles.signUpContainer}>
            <h1 className={styles.title}>Create Your Account</h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                

                <label htmlFor="firstName" className={styles.label}>First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.inputField}
                    required
                />
                
                <label htmlFor="lastName" className={styles.label}>Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.inputField}
                    required
                />
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputField}
                    required
                />
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                    required
                />
                
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputField}
                    required
                />
                
                <label htmlFor="confirmPassword" className={styles.label}>Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={styles.inputField}
                    required
                />
                <a href="/signIn" className={styles.link}>Already have an account?</a> {/* Link to Sign In page */}

                
                <button type="submit" className={styles.signUpButton}>Sign Up</button>
                {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default SignUp;
