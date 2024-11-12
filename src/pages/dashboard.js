import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.sections}>
        <section className={styles.card}>
          <h2>Project Overview</h2>
          <p>Summary of active projects and their statuses.</p>
        </section>
        
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
