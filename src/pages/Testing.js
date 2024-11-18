import styles from '../styles/Stage.module.css';

const Testing = () => {
  return (
    <div className={styles.stageContainer}>
      <h1>Testing Stage</h1>
      <p>The Testing stage ensures that the code meets the project's requirements and is free of bugs. 
        It involves various testing methods, such as unit testing, integration testing, 
        and performance testing, to validate that the software functions correctly under different scenarios. 
        Automation plays a significant role here to speed up the testing process.</p>
    </div>
  );
};

export default Testing;
