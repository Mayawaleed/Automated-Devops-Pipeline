import React from 'react';
import styles from '../styles/Download.module.css';

const DownloadMonitoringTool = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Download Monitoring Tool</h1>
            <p className={styles.description}>
               download our powerful tool
            </p>
            <div className={styles.buttonContainer}>
                <a
                      href="/path/to/monitoring-tool.zip"//Replace with actual file path
                    download
                    className={styles.downloadButton}
                >
                    Download Now
                </a>
            </div>
        </div>
    );
};

export default DownloadMonitoringTool;
