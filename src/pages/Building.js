import styles from '../styles/Stage.module.css';

const Building = () => {
  return (
    <div className={styles.stageContainer}>
      <h1>Building Stage</h1>
      <p>The Building stage involves the actual coding of the software. Developers write, compile, 
        and assemble the source code, implementing the features defined during the Planning phase. 
        This stage emphasizes continuous integration (CI), where small code changes 
        are frequently merged into a central repository to ensure they work together.</p>
    </div>
  );
};

export default Building;
