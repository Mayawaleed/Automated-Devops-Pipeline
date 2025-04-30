import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/PastProject.module.css';

const PastProject = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://35.179.146.101:8000/api/projectdetails/');
        setProjects(response.data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects. Please try again later.');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Past Projects</h1>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <h2 className={styles.projectName}>{project.project_name}</h2>
            <p className={styles.projectType}>Type: {project.project_type}</p>
            <p className={styles.projectLang}>Language: {project.programming_language}</p>
            <p className={styles.projectFramework}>Framework: {project.framework}</p>
            <p className={styles.projectDeployment}>Deployment: {project.deployment_type}</p>
            <p className={styles.projectHosting}>Hosting: {project.hosting_platform}</p>
            <p className={styles.projectTesting}>Testing: {project.testing_needs}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastProject;