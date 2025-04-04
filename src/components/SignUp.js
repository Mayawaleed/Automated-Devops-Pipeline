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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields
        const { username, firstName, lastName, email, password, confirmPassword } = formData;

        if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
            setMessage('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        try {
            // API request
            const response = await axios.post("http://127.0.0.1:8000/api/register/", {

                username,
                first_name: firstName,
                last_name: lastName,
                email,
                password
            });

            setMessage('Sign Up Successful! Redirecting...');
            
            // Save token if provided
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            // Redirect to sign-in page
            setTimeout(() => {
                router.push('/signin');
            }, 2000);
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.detail || 'Failed to sign up. Please try again.');
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
                <div class="formContainer">
                {/* Other form elements like input fields and the sign up button */}
                <div className={styles.createAccountLink}>
                    <p>Already have an account?</p>
                    <a href="/signin" className={styles.link}>Sign In</a>
                </div>
                </div>

                <button type="submit" className={styles.signUpButton}>Sign Up</button>
                {message && <p className={message.includes('Successful') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default SignUp;
