import styles from '../styles/Stage.module.css';

const Deployment = () => {
  return (
    <div className={styles.stageContainer}>
      <h1>Deployment Stage</h1>
      <p>The Deployment stage is where the software is released to a live environment, 
        making it available to end users. This phase focuses on continuous deployment (CD) or continuous 
        delivery  (CI), which means deploying small, incremental updates to production frequently and reliably. 
        Automation is crucial to reduce human errors and speed up the release process.</p>
    </div>
  );
};

export default Deployment;
