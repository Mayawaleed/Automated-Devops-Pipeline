import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/PastProject.module.css';

const PastProject = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [error, setError] = useState(''); // State to store error message
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get('http://127.0.0.1:8000/api/projectdetails/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Send token if needed
          },
        });

        console.log('Fetched projects:', response.data); // Log the response data
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err.response ? err.response.data : err.message);
        setError('Failed to load past projects.');
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchProjects(); // Fetch projects when component mounts
  }, []); // Empty array ensures this only runs once, on component mount

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Past Projects</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      
      {loading ? (
        <p>Loading projects...</p> // Show loading message while fetching
      ) : (
        <ul className={styles.projectList}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <li key={project.id} className={styles.projectItem}>
                <h2 className={styles.projectName}>{project.project_name}</h2> {/* Display project name */}
                <p className={styles.projectType}>Type: {project.project_type}</p> {/* Display project type */}
                <p className={styles.projectLanguage}>Language: {project.language}</p> {/* Display programming language */}
                <p className={styles.projectFramework}>Framework: {project.framework}</p> {/* Display project framework */}
                <p className={styles.projectHosting}>Hosting Platform: {project.hosting}</p> {/* Display hosting platform */}
                <p className={styles.projectDeployment}>Deployment Type: {project.deployment}</p> {/* Display deployment type */}
                <p className={styles.projectTesting}>Testing Needs: {project.testing}</p> {/* Display testing needs */}
              </li>
            ))
          ) : (
            <p>No past projects available.</p> // Message when there are no projects
          )}
        </ul>
      )}
    </div>
  );
};

export default PastProject;
