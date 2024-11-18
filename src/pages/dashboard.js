import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const projects = [
    { id: 1, name: 'Project 1', type: 'C++' },
    { id: 2, name: 'Project 2', type: 'Python' },
    { id: 3, name: 'Project 3', type: 'Java' },
    { id: 4, name: 'Project 4', type: 'GO' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Past Projects</h1>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <h2 className={styles.projectName}>{project.name}</h2>
            <p className={styles.projectType}>Type: {project.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
