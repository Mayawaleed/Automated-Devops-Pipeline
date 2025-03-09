// // src/services/scriptsService.js
// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api"; // Django backend URL

// export const getScripts = async (stage) => {
//   try {
//     const response = await axios.get(`${API_URL}/scripts/${stage}/`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching scripts:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const getScripts = async (stage, selectedOption) => {
//   try {
//     const response = await fetch(`/api/generate-script/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         stage: stage,
//         option: selectedOption,
//       }),
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching script:', error);
//     throw error;
//   }
// };

// services/scriptsService.js
// import axios from "axios";

// export const getScripts = async (stage) => {
//   try {
//     const response = await axios.get(`http://localhost:8000/api/get_script/${projectId}/${stageId}/`);
//     return response.data; // Assuming the API returns an array of scripts
//   } catch (error) {
//     console.error("Error fetching scripts:", error);
//     throw error; // Rethrow to handle it in the component
//   }
// };

import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',  // Django backend
    withCredentials: true  // Send cookies with requests
});

// Fetch CSRF token and set it globally
export const fetchCsrfToken = async () => {
    try {
        const response = await api.get('csrf/'); // Adjust if your Django endpoint is different
        const csrfToken = response.data.csrfToken;
        document.cookie = `csrftoken=${csrfToken}; path=/`; // Store in cookies
        api.defaults.headers.common['X-CSRFToken'] = csrfToken; // Set globally in Axios
        console.log("CSRF Token Set:", csrfToken);
    } catch (error) {
        console.error("CSRF Fetch Error:", error);
    }
};

// Fetch scripts
export const getScripts = async (projectId, stageId) => {
    if (!projectId || !stageId) {
        console.error("Invalid projectId or stageId:", projectId, stageId);
        return null;
    }

    try {
        const response = await api.get(`api/get_script/${projectId}/${stageId}/`);
        console.log("Received script data:", response.data);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.status, error.response?.data);
        return null;
    }
};

// Generate script (POST request)
export const generateScript = async (data) => {
    try {
        const csrfToken = document.cookie
            .split('; ')
            .find(row => row.startsWith('csrftoken='))
            ?.split('=')[1];  // Read CSRF token from cookies

        const response = await api.post('api/generate-script/', data, {
            headers: { 'X-CSRFToken': csrfToken } // Ensure CSRF is included
        });

        return response.data;
    } catch (error) {
        console.error("API Error:", error);
    }
};



// export const getScripts = async (projectId, stageId) => {
//   // Validate that projectId and stageId are provided
//   if (!projectId || !stageId) {
//     console.error("Invalid projectId or stageId:", projectId, stageId);
//     return null; // Return early if data is invalid
//   }

//   // Construct the URL for fetching scripts
//   const url = `http://localhost:8000/api/projectdetails/${projectId}/scripts/?stage_id=${stageId}`;
//   console.log("Fetching script from:", url); // Debugging log

//   try {
//     const response = await axios.get(url); // Make the API request
//     console.log("Received script data:", response.data); // Log the full response for debugging

//     // Ensure the response contains the expected structure and return the script content
//     if (response.data && response.data.script_content) {
//       return response.data.script_content; // Return the script content if available
//     } else {
//       console.warn("No script content found for the given project and stage.");
//       return null; // Return null if no script is found
//     }
//   } catch (error) {
//     // Provide detailed error messages for various error scenarios
//     if (error.response) {
//       console.error("API Error:", error.response.status, error.response.data); // If the error has a response
//     } else if (error.request) {
//       console.error("No response received from API:", error.request); // If the request was made but no response received
//     } else {
//       console.error("Error setting up request:", error.message); // If an error occurred during setup
//     }

//     return null; // Return null to prevent crashing or displaying broken content
//   }
// };

