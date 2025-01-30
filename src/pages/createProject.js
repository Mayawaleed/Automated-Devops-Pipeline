// src/pages/createProject.js

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../styles/projectCreate.module.css';

// const CreateProject = () => {
//     const [projectName, setProjectName] = useState('');
//     const [projectType, setProjectType] = useState('');
//     const [message, setMessage] = useState('');
//     const router = useRouter(); // Initialize router

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!projectName || !projectType) {
//             setMessage('Please enter a project name and select a programming language.');
//             return;
//         }
        
//         setMessage(`Project "${projectName}" created using "${projectType}" successfully!`);

//         // Redirect to upload page
//         router.push('/upload');
//     };

//     return (
//         <div className={styles.createProjectContainer}>
//             <h1>Create a New Project</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="projectName">Project Name:</label>
//                 <input
//                     type="text"
//                     id="projectName"
//                     value={projectName}
//                     onChange={(e) => setProjectName(e.target.value)}
//                     placeholder="Enter project name"
//                 />
                
//                 <label htmlFor="projectType">Programming Language:</label>
//                 <select
//                     id="projectType"
//                     value={projectType}
//                     onChange={(e) => setProjectType(e.target.value)}
//                 >
//                     <option value="">Select language</option>
//                     <option value="JavaScript">JavaScript</option>
//                     <option value="Python">Python</option>
//                     <option value="Java">Java</option>
//                     <option value="C++">C++</option>
//                     <option value="Ruby">Ruby</option>
//                     <option value="PHP">PHP</option>
//                     <option value="Go">Go</option>
//                     <option value="Swift">Swift</option>
//                 </select>

//                 <button type="submit" className={styles.createButton}>Create Project</button>
//                 {message && <p className={message.includes('successfully') ? styles.success : styles.error}>{message}</p>}
//             </form>
//         </div>
//     );
// };

// export default CreateProject;
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/projectCreate.module.css';

const CreateProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [language, setLanguage] = useState('');
    const [framework, setFramework] = useState('');
    const [hosting, setHosting] = useState('');
    const [deployment, setDeployment] = useState('');
    const [testing, setTesting] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter(); // Initialize router

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectName || !projectType || !language || !framework || !hosting || !deployment || !testing) {
            setMessage('Please fill in all fields before proceeding.');
            return;
        }
        
        setMessage(`Project "${projectName}" created successfully!`);

        // Redirect to upload page after 2 seconds
        setTimeout(() => {
            router.push('/upload');
        }, 2000);
    };

    return (
        <div className={styles.createProjectContainer}>
            <h1>Create a New Project</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="projectName">Project Name:</label>
                <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter project name"
                />

                <label htmlFor="projectType">Project Type:</label>
                <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                >
                    <option value="">Select project type</option>
                    <option value="Web">Web</option>
                    <option value="Mobile">Mobile</option>
                    <option value="API">API</option>
                    <option value="Desktop">Desktop</option>
                </select>

                <label htmlFor="language">Programming Language:</label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="">Select language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    <option value="Ruby">Ruby</option>
                    <option value="PHP">PHP</option>
                    <option value="Go">Go</option>
                    <option value="Swift">Swift</option>
                </select>

                <label htmlFor="framework">Framework:</label>
                <input
                    type="text"
                    id="framework"
                    value={framework}
                    onChange={(e) => setFramework(e.target.value)}
                    placeholder="Enter framework (e.g., React, Django, Laravel)"
                />

                <label htmlFor="hosting">Hosting Platform:</label>
                <input
                    type="text"
                    id="hosting"
                    value={hosting}
                    onChange={(e) => setHosting(e.target.value)}
                    placeholder="Enter hosting platform (e.g., AWS, Vercel, Netlify)"
                />

                <label htmlFor="deployment">Deployment Type:</label>
                <select
                    id="deployment"
                    value={deployment}
                    onChange={(e) => setDeployment(e.target.value)}
                >
                    <option value="">Select deployment type</option>
                    <option value="CI/CD">CI/CD</option>
                    <option value="Manual">Manual</option>
                    <option value="Containerized">Containerized (Docker/Kubernetes)</option>
                </select>

                <label htmlFor="testing">Testing Needs:</label>
                <input
                    type="text"
                    id="testing"
                    value={testing}
                    onChange={(e) => setTesting(e.target.value)}
                    placeholder="Enter testing needs (e.g., Unit tests, Integration tests)"
                />

                <button type="submit" className={styles.createButton}>Create Project</button>
                {message && <p className={message.includes('successfully') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default CreateProject;

