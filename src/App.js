import React, { useEffect } from 'react';
import { fetchCsrfToken, getScripts, generateScript } from './api/api'; // Update path if needed

function App() {
    useEffect(() => {
        fetchCsrfToken(); // Fetch CSRF token when the app loads
    }, []);

    const handleFetchScript = async () => {
        const projectId = 1; // Example project ID
        const stageId = "build"; // Example stage
        const scriptData = await getScripts(projectId, stageId);
        console.log(scriptData);
    };

    const handleGenerateScript = async () => {
        const data = { key: "value" };
        const response = await generateScript(data);
        console.log(response);
    };

    return (
        <div>
            <h1>CSRF Protection & API Calls</h1>
            <button onClick={handleFetchScript}>Fetch Script</button>
            <button onClick={handleGenerateScript}>Generate Script</button>
        </div>
    );
}

export default App;
