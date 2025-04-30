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


// import { useState } from 'react';
// import styles from '../styles/SignUp.module.css';

// const SignUp = () => {
//     const [username, setUsername] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
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
//                 <label htmlFor="username" className={styles.label}>Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
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
              
//              <div className={styles.createAccountLink}> 
//                 <p>Don't have an account?</p>
//                 <a href="/signin" className={styles.link}>Sign In</a> {/* Link to Sign Up page */}
//             </div>
                
//                 <button type="submit" className={styles.signUpButton}>Sign Up</button>
//                 {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
//             </form>
//         </div>
//     );
// };

// export default SignUp;

// import { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/SignUp.module.css';
// import { useRouter } from 'next/router';

// const SignUp = () => {
//     const [username, setUsername] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validate fields
//         if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
//             setMessage('Please fill out all fields.');
//             return;
//         }

//         if (password !== confirmPassword) {
//             setMessage('Passwords do not match.');
//             return;
//         }

//         // Prepare the data for sending to the backend
//         const userData = {
//             username,
//             first_name: firstName,
//             last_name: lastName,
//             email,
//             password
//         };

//         try {
//             // Make the API call to the backend
//             const response = await axios.post('http://localhost:8000/api/register/', userData);

//             // Show success message and redirect
//             setMessage('Sign Up Successful!');
//             setTimeout(() => {
//                 router.push('/signin');
//             }, 2000);
//         } catch (err) {
//             // Handle errors
//             console.error('Error signing up:', err);
//             setMessage('Failed to sign up. Please try again.');
//         }
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
                
//                 <label htmlFor="username" className={styles.label}>Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
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
                
//                 <div className={styles.createAccountLink}> 
//                     <p>Already have an account?</p>
//                     <a href="/signin" className={styles.link}>Sign In</a>
//                 </div>
                
//                 <button type="submit" className={styles.signUpButton}>Sign Up</button>
//                 {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
//             </form>
//         </div>
//     );
// };

// export default SignUp;

import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/SignUp.module.css';
import { useRouter } from 'next/router';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const emailIsReal = async (email) => {
        try {
            const response = await axios.get('https://apilayer.net/api/check', {
                params: {
                    access_key: 'd473660f4966b7ae7fdd1c7869d5fab9',
                    email,
                    smtp: 1,
                    format: 1
                }
            });
    
            // Optional: console.log(response.data);
            return response.data.smtp_check && response.data.format_valid;
        } catch (error) {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, firstName, lastName, email, password, confirmPassword } = formData;

        // Empty field check
        if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
            setMessage('Please fill out all fields.');
            return;
        }

        // Passwords match check
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        // Password complexity check
        const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        if (!passwordRegex.test(password)) {
            setMessage('Password must be at least 8 characters, include one uppercase letter and one symbol.');
            return;
        }

        // Real email check
        const isEmailValid = await emailIsReal(email);
        if (!isEmailValid) {
            setMessage('Please enter a real, valid email address.');
            return;
        }

        try {
            const response = await axios.post('http://35.179.146.101:8000/api/register/', {
                username,
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                password2: confirmPassword // Important: Django default expects 'password2'
            });

            setMessage('Sign Up Successful! Redirecting...');

            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            setTimeout(() => {
                router.push('/signin');
            }, 2000);
        } catch (err) {
            if (err.response && err.response.data) {
                const data = err.response.data;
                const errorMessage = typeof data === 'string'
                    ? data
                    : Object.values(data).flat().join(' ');
                setMessage(errorMessage || 'Failed to sign up. Please try again.');
            } else {
                setMessage('Network error. Please check your connection.');
            }
        }
    };

    return (
        <div className={styles.signUpContainer}>
            <h1 className={styles.title}>Create Your Account</h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>

                <label htmlFor="firstName" className={styles.label}>First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />

                <label htmlFor="lastName" className={styles.label}>Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />

                <label htmlFor="username" className={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />

                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />

                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />

                <label htmlFor="confirmPassword" className={styles.label}>Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />

                <div className={styles.createAccountLink}>
                    <p>Already have an account?</p>
                    <a href="/signin" className={styles.link}>Sign In</a>
                </div>

                <button type="submit" className={styles.signUpButton}>Sign Up</button>
                {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default SignUp;


// import { useState } from 'react';
// import axios from 'axios';
// import styles from '../styles/SignUp.module.css';
// import { useRouter } from 'next/router';

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [message, setMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const router = useRouter();

//     const validateEmail = (email) => {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     };

//     const validatePassword = (password) => {
//         const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         return re.test(password);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setMessage('');

//         const { username, firstName, lastName, email, password, confirmPassword } = formData;

//         if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
//             setMessage('Please fill out all fields.');
//             setIsLoading(false);
//             return;
//         }

//         if (!validateEmail(email)) {
//             setMessage('Please enter a valid email address.');
//             setIsLoading(false);
//             return;
//         }

//         if (!validatePassword(password)) {
//             setMessage('Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.');
//             setIsLoading(false);
//             return;
//         }

//         if (password !== confirmPassword) {
//             setMessage('Passwords do not match.');
//             setIsLoading(false);
//             return;
//         }

//         try {
//             const response = await axios.post('http://35.179.146.101:8000/api/register/', {
//                 username,
//                 first_name: firstName,
//                 last_name: lastName,
//                 email,
//                 password,
//                 password_confirm: confirmPassword
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             setMessage('Sign Up Successful! Redirecting...');
            
//             if (response.data.token) {
//                 localStorage.setItem('authToken', response.data.token);
//             }

//             setTimeout(() => {
//                 router.push('/signin');
//             }, 2000);
//         } catch (err) {
//             if (err.response) {
//                 setMessage(err.response.data.detail || err.response.data.message || 'Failed to sign up. Please try again.');
//             } else {
//                 setMessage('Network error. Please check your connection.');
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className={styles.signUpContainer}>
//             <h1 className={styles.title}>Create Your Account</h1>
//             <form onSubmit={handleSubmit} className={styles.formContainer}>
//                 <label htmlFor="firstName" className={styles.label}>First Name:</label>
//                 <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={styles.inputField}
//                     required
//                 />

//                 <label htmlFor="lastName" className={styles.label}>Last Name:</label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={styles.inputField}
//                     required
//                 />

//                 <label htmlFor="username" className={styles.label}>Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     className={styles.inputField}
//                     required
//                 />

//                 <label htmlFor="email" className={styles.label}>Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={styles.inputField}
//                     required
//                 />

//                 <label htmlFor="password" className={styles.label}>Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={styles.inputField}
//                     required
//                     minLength="8"
//                 />

//                 <label htmlFor="confirmPassword" className={styles.label}>Confirm Password:</label>
//                 <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className={styles.inputField}
//                     required
//                     minLength="8"
//                 />

//                 <div className={styles.createAccountLink}>
//                     <p>Already have an account?</p>
//                     <a href="/signin" className={styles.link}>Sign In</a>
//                 </div>

//                 <button 
//                     type="submit" 
//                     className={styles.signUpButton}
//                     disabled={isLoading}
//                 >
//                     {isLoading ? 'Processing...' : 'Sign Up'}
//                 </button>
//                 {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
//             </form>
//         </div>
//     );
// };

// export default SignUp;
