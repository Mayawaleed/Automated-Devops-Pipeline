import React, { useEffect, useState } from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    // Fetch data from a specific endpoint, adjust "/projects" as needed
    fetch(${backendUrl}/projects)
      .then(response => {
        if (!response.ok) {
          throw new Error(HTTP error! Status: ${response.status});
        }
        return response.json();
      })
      .then(data => {
        setProjectData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.sections}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className={styles.error}>Error: {error}</p>
        ) : (
          projectData && (
            <section className={styles.card}>
              <h2>Project Overview</h2>
              <p>Summary of active projects and their statuses:</p>
              <pre>{JSON.stringify(projectData, null, 2)}</pre>
            </section>
          )
        )}
        
        <section className={styles.card}>
          <h2>Performance Metrics</h2>
          <p>Details on current performance metrics.</p>
        </section>
        
        <section className={styles.card}>
          <h2>Recent Activities</h2>
          <p>Log of recent activities and updates.</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
