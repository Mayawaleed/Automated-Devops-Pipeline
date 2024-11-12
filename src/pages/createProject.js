// src/pages/createProject.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/projectCreate.module.css';

const CreateProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter(); // Initialize router

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectName || !projectType) {
            setMessage('Please enter a project name and select a programming language.');
            return;
        }
        
        setMessage(`Project "${projectName}" created using "${projectType}" successfully!`);

        // Redirect to upload page
        router.push('/upload');
    };

    return (
        <div className={styles.createProjectContainer}>
            <h1>Create a New Project</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="projectName">Project Name:</label>
                <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter project name"
                />
                
                <label htmlFor="projectType">Programming Language:</label>
                <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
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

                <button type="submit" className={styles.createButton}>Create Project</button>
                {message && <p className={message.includes('successfully') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default CreateProject;
