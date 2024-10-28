// src/pages/projectUpload.js
import { useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from '../styles/projectUpload.module.css'; // Ensure the correct import

const UploadProject = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const router = useRouter(); 

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

        console.log(`Uploading file: ${file.name}`);
        setMessage(`File ${file.name} uploaded successfully!`);

        router.push('/upload'); 
    };

    return (
        <div className={styles.uploadProjectContainer}>
            <h1>Upload Your Project</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="file">Choose a project file:</label>
                <input
                    type="file"
                    id="file"
                    accept=".zip,.tar,.gz"
                    onChange={handleFileChange}
                />

                <button type="submit" className={styles.uploadButton}>Upload Project</button>
                {message && <p className={message.includes('successfully') ? styles.success : styles.error}>{message}</p>}
            </form>
        </div>
    );
};

export default UploadProject;
