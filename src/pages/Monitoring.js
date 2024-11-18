import styles from '../styles/Stage.module.css';

const Monitoring = () => {
  return (
    <div className={styles.stageContainer}>
      <h1>Monitoring Stage</h1>
      <p>The Monitoring stage is crucial for maintaining and improving the software's health post-deployment. 
        It involves tracking performance, resource usage, application errors, user behavior, and security.
        Continuous monitoring helps teams proactively identify potential issues, 
        enabling quick fixes and minimizing downtime.</p>
    </div>
  );
};

export default Monitoring;
