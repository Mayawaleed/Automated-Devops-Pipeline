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

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import styles from '../styles/projectCreate.module.css';

// const CreateProject = () => {
//     const [formData, setFormData] = useState({
//         projectName: '',
//         projectType: '',
//         language: '',
//         framework: '',
//         hosting: '',
//         deployment: '',
//         testing: ''
//     });
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         // Trim form data to avoid extra spaces
//         const trimmedData = { ...formData };
//         Object.keys(trimmedData).forEach(key => {
//             trimmedData[key] = trimmedData[key].trim();
//         });
    
//         // Validate form data to ensure no empty fields
//         if (Object.values(trimmedData).some(field => !field)) {
//             setError('Please fill in all fields before proceeding.');
//             return;
//         }
    
//         try {
//             // Get the token from localStorage
//             const token = localStorage.getItem('authToken');
            
//             if (!token) {
//                 setError('You must be logged in to create a project.');
//                 return;
//             }
    
//             // Send project details to the backend with the token in the Authorization header
//             const response = await axios.post('http://localhost:8000/api/projectdetails/', trimmedData, {
//                 headers: {
//                     'Authorization': `Bearer ${token}` // Include the token in the headers
//                 }
//             });
    
//             const projectId = response.data.project_id;  // Assuming backend returns the project ID
    
//             setMessage(`Project "${trimmedData.projectName}" created successfully!`);
//             setError('');
//             setFormData({
//                 projectName: '',
//                 projectType: '',
//                 language: '',
//                 framework: '',
//                 hosting: '',
//                 deployment: '',
//                 testing: ''
//             });
    
//             // Redirect to the next page to select the pipeline stage
//             setTimeout(() => router.push(`/select-stage/${projectId}`), 2000);
    
//         } catch (err) {
//             console.error('Error creating project:', err);
//             setError(err.response?.data?.error || 'Failed to create project. Please try again.');
//         }
//     };
    

//     return (
//         <div className={styles.createProjectContainer}>
//             <h1>Create a New Project</h1>
//             <form onSubmit={handleSubmit} className={styles.form}>
//                 <label htmlFor="projectName">Project Name:</label>
//                 <input
//                     type="text"
//                     id="projectName"
//                     name="projectName"
//                     value={formData.projectName}
//                     onChange={handleChange}
//                     placeholder="Enter project name"
//                 />

//                 <label htmlFor="projectType">Project Type:</label>
//                 <select
//                     id="projectType"
//                     name="projectType"
//                     value={formData.projectType}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select project type</option>
//                     <option value="Web">Web</option>
//                     <option value="Mobile">Mobile</option>
//                     <option value="API">API</option>
//                     <option value="Desktop">Desktop</option>
//                 </select>

//                 <label htmlFor="language">Programming Language:</label>
//                 <select
//                     id="language"
//                     name="language"
//                     value={formData.language}
//                     onChange={handleChange}
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

//                 <label htmlFor="framework">Framework:</label>
//                 <input
//                     type="text"
//                     id="framework"
//                     name="framework"
//                     value={formData.framework}
//                     onChange={handleChange}
//                     placeholder="Enter framework (e.g., React, Django, Laravel)"
//                 />

//                 <label htmlFor="hosting">Hosting Platform:</label>
//                 <input
//                     type="text"
//                     id="hosting"
//                     name="hosting"
//                     value={formData.hosting}
//                     onChange={handleChange}
//                     placeholder="Enter hosting platform (e.g., AWS, Vercel, Netlify)"
//                 />

//                 <label htmlFor="deployment">Deployment Type:</label>
//                 <select
//                     id="deployment"
//                     name="deployment"
//                     value={formData.deployment}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select deployment type</option>
//                     <option value="CI/CD">CI/CD</option>
//                     <option value="Manual">Manual</option>
//                     <option value="Containerized">Containerized (Docker/Kubernetes)</option>
//                 </select>

//                 <label htmlFor="testing">Testing Needs:</label>
//                 <input
//                     type="text"
//                     id="testing"
//                     name="testing"
//                     value={formData.testing}
//                     onChange={handleChange}
//                     placeholder="Enter testing needs (e.g., Unit tests, Integration tests)"
//                 />

//                 <button type="submit" className={styles.createButton}>Create Project</button>
//                 {message && <p className={styles.success}>{message}</p>}
//                 {error && <p className={styles.error}>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default CreateProject;
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
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
    const [error, setError] = useState('');
    const router = useRouter(); // Initialize router

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check that all fields are filled in
        if (!projectName || !projectType || !language || !framework || !hosting || !deployment || !testing) {
            setError('Please fill in all fields before proceeding.');
            return;
        }

        // Create the project data object to match your backend serializer's fields
        const projectData = {
            project_name: projectName,
            project_type: projectType,
            programming_language: language,
            framework: framework,
            hosting_platform: hosting,
            deployment_type: deployment,
            testing_needs: testing,
            
        };

        try {
            // Send the POST request to your Django backend API endpoint
            const response = await axios.post('http://localhost:8000/api/projectdetails/', projectData);
            
            // If the response is successful, show success message
            setMessage('Project "${projectName}" created successfully!');

            // Redirect to the upload page after 2 seconds
            setTimeout(() => {
                router.push('/upload');
            }, 2000);
        } catch (err) {
            // Handle errors
            console.error('Error creating project:', err);
            setError('Failed to create project. Please try again.');
        }
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
                {message && <p className={styles.success}>{message}</p>}
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default CreateProject;

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import styles from '../styles/projectCreate.module.css';

// const CreateProject = () => {
//     const [formData, setFormData] = useState({
//         projectName: '',
//         projectType: '',
//         language: '',
//         framework: '',
//         hosting: '',
//         deployment: '',
//         testing: '',
//         scriptId: '', // New field
//         stageId: '',  // New field
//     });

//     const [scripts, setScripts] = useState([]);
//     const [stages, setStages] = useState([]);
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     // Fetch scripts and stages when the component mounts
//     useEffect(() => {
//         const fetchScriptsAndStages = async () => {
//             try {
//                 const scriptResponse = await axios.get('http://localhost:8000/api/scripts/');
//                 setScripts(scriptResponse.data);

//                 const stageResponse = await axios.get('http://localhost:8000/api/stages/');
//                 setStages(stageResponse.data);
//             } catch (error) {
//                 console.error('Error fetching scripts and stages:', error);
//             }
//         };

//         fetchScriptsAndStages();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');
//         setError('');
//         setLoading(true);

//         if (Object.values(formData).some((value) => value.trim() === '')) {
//             setError('Please fill in all fields before proceeding.');
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:8000/api/projectdetails/', {
//                 project_name: formData.projectName,
//                 project_type: formData.projectType,
//                 programming_language: formData.language,
//                 framework: formData.framework,
//                 hosting_platform: formData.hosting,
//                 deployment_type: formData.deployment,
//                 testing_needs: formData.testing,
//                 script_id: formData.scriptId,  // Include scriptId
//                 stage_id: formData.stageId,    // Include stageId
//             });

//             const projectId = response.data.id;
//             setMessage(`Project "${formData.projectName}" created successfully!`);

//             setTimeout(() => router.push(`/upload?projectId=${projectId}`), 2000);
//         } catch (err) {
//             if (err.response) {
//                 setError(err.response?.data?.detail || 'Failed to create project. Please try again.');
//             } else if (err.request) {
//                 setError('No response received from the server. Please check your connection.');
//             } else {
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className={styles.createProjectContainer}>
//             <h1>Create a New Project</h1>
//             <form onSubmit={handleSubmit} className={styles.form}>
//                 {['projectName', 'framework', 'hosting', 'testing'].map((field) => (
//                     <div key={field}>
//                         <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}:</label>
//                         <input
//                             type="text"
//                             id={field}
//                             name={field}
//                             value={formData[field]}
//                             onChange={handleChange}
//                             placeholder={`Enter ${field}`}
//                         />
//                     </div>
//                 ))}

//                 {['projectType', 'language', 'deployment'].map((field) => (
//                     <div key={field}>
//                         <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}:</label>
//                         <select id={field} name={field} value={formData[field]} onChange={handleChange}>
//                             <option value="">Select {field}</option>
//                             {field === 'projectType' && ['Web', 'Mobile', 'API', 'Desktop'].map((option) => (
//                                 <option key={option} value={option}>{option}</option>
//                             ))}
//                             {field === 'language' && ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Go', 'Swift'].map((option) => (
//                                 <option key={option} value={option}>{option}</option>
//                             ))}
//                             {field === 'deployment' && ['CI/CD', 'Manual', 'Containerized'].map((option) => (
//                                 <option key={option} value={option}>{option}</option>
//                             ))}
//                         </select>
//                     </div>
//                 ))}

//                 <div>
//                     <label htmlFor="scriptId">Script:</label>
//                     <select id="scriptId" name="scriptId" value={formData.scriptId} onChange={handleChange}>
//                         <option value="">Select Script</option>
//                         {scripts.map((script) => (
//                             <option key={script.id} value={script.id}>
//                                 {script.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <label htmlFor="stageId">Stage:</label>
//                     <select id="stageId" name="stageId" value={formData.stageId} onChange={handleChange}>
//                         <option value="">Select Stage</option>
//                         {stages.map((stage) => (
//                             <option key={stage.id} value={stage.id}>
//                                 {stage.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <button type="submit" className={styles.createButton} disabled={loading}>
//                     {loading ? 'Creating...' : 'Create Project'}
//                 </button>

//                 {message && <p className={styles.success}>{message}</p>}
//                 {error && <p className={styles.error}>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default CreateProject;







