import styles from '../styles/Dashboard.module.css';

const PastProjects = () => {
  // Mock data for past projects
  const projects = [
    { name: "Website Redesign", type: "UI/UX" },
    { name: "E-commerce Platform", type: "Development" },
    { name: "Marketing Campaign", type: "SEO" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Past Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>Type: {project.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastProjects;
