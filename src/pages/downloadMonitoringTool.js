import React from 'react';
import styles from '../styles/Download.module.css';

const DownloadMonitoringTool = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Download Monitoring Tool</h1>
            <p className={styles.description}>
                Download our powerful tool to start monitoring your system.
            </p>
            <div className={styles.buttonContainer}>
                <a
                    href="https://drive.google.com/uc?export=download&id=1pWNJari-Dj-FYnvKkEVWp8H9U4iXaT-K" // Direct download link
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
