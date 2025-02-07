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

export const getScripts = async (stage, selectedOption) => {
  try {
    const response = await fetch(`/api/generate-script/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stage: stage,
        option: selectedOption,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching script:', error);
    throw error;
  }
};
