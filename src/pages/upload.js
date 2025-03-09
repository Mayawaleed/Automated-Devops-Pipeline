
// import { useState } from 'react';

// const stages = [
//     'Planning',
//     'Building',
//     'Testing',
//     'Deployment',
//     'Monitoring',
// ];

// const Upload = () => {
//     const [selectedStage, setSelectedStage] = useState('');
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleStageSelection = (stage) => {
//         setSelectedStage(stage);
//         setSelectedOption(''); // Reset option when stage is selected
//     };

//     const handleOptionSelection = (option) => {
//         setSelectedOption(option);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Find the index of the current stage
//         const currentStageIndex = stages.indexOf(selectedStage);

//         // Check if it's not the last stage (Monitoring)
//         if (currentStageIndex < stages.length - 1) {
//             const nextStage = stages[currentStageIndex + 1];
//             setSelectedStage(nextStage);
//             setSelectedOption(''); // Reset option when moving to the next stage
//         } else {
//             console.log('You have completed all stages.');
//         }

//         console.log({
//             selectedStage,
//             selectedOption,
//         });
//         // Logic for next steps after submission
//     };

//     return (
//         <div className="upload-container">
//             <h1>Select Pipeline Stage</h1>

//             <div className="stage-buttons">
//                 {stages.map((stage) => (
//                     <button
//                         key={stage}
//                         className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
//                         onClick={() => handleStageSelection(stage)}
//                     >
//                         {stage}
//                     </button>
//                 ))}
//             </div>

//             {selectedStage && (
//                 <form className="upload-form" onSubmit={handleSubmit}>
//                     <div>
//                         <h4>Choose between:</h4>
//                         <div className="option-buttons">
//                             {/* Render Scripts button only if the selected stage is NOT Planning */}
//                             {selectedStage !== 'Planning' && selectedStage !== 'Monitoring' && (
//                                 <button
//                                     type="button"
//                                     className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
//                                     onClick={() => handleOptionSelection('scripts')}
//                                 >
//                                     Scripts
//                                 </button>
//                             )}
//                             {/* Render External Tools button for all stages except Monitoring */}
//                             {selectedStage !== 'Monitoring' && (
//                                 <button
//                                     type="button"
//                                     className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
//                                     onClick={() => handleOptionSelection('tools')}
//                                 >
//                                     External Tools
//                                 </button>
//                             )}
//                             {/* Always show External Tools for Monitoring stage */}
//                             {selectedStage === 'Monitoring' && (
//                                 <button
//                                     type="button"
//                                     className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
//                                     onClick={() => handleOptionSelection('tools')}
//                                 >
//                                     External Tools
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                     <div>
//                         <button type="submit" disabled={!selectedOption}>
//                             Go to Next Stage
//                         </button>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default Upload;

// import { useState } from 'react';

// const stages = [
//     'Planning',
//     'Development',
//     'Testing',
//     'Deployment',
//     'Monitoring',
//     'All Stages'
// ];

// const Upload = () => {
//     const [selectedStage, setSelectedStage] = useState('');
//     const [selectedOption, setSelectedOption] = useState('');
//     const [scriptContent, setScriptContent] = useState(''); // State to hold script content
//     const [loading, setLoading] = useState(false); // To track loading state
//     const [error, setError] = useState(null); // To track errors
//     const [scriptFetched, setScriptFetched] = useState(false); // To track if the script is successfully fetched

//     // When stage is selected, reset states
//     const handleStageSelection = (stage) => {
//         setSelectedStage(stage);
//         setSelectedOption(''); // Reset option when stage is selected
//         setScriptContent(''); // Reset script content when stage changes
//         setError(null); // Clear previous errors
//         setScriptFetched(false); // Reset script fetched status
//     };

//     const handleOptionSelection = (option) => {
//         setSelectedOption(option);
//     };

//     // Handle form submission (submit when user clicks "Go to Next Stage")
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (selectedOption === 'scripts') {
//             // Fetch script when the "Scripts" option is selected
//             fetchScript(selectedStage.toLowerCase());
//         }

//         // Always allow proceeding to the next stage regardless of whether a script was selected
//         console.log('Proceeding to next stage:', selectedStage);
//     };

//     // Fetch the script based on the stage
//     const fetchScript = async (stage) => {
//         setLoading(true);
//         setError(null); // Clear any previous errors
//         setScriptFetched(false); // Reset the fetch status before trying

//         try {
//             console.log(`Fetching script for stage: ${stage}`); // Debugging line
//             const response = await fetch(`http://127.0.0.1:8000/api/get_scripts/${stage}/`);
//             const data = await response.json();

//             if (response.ok) {
//                 setScriptContent(data.script); // Set script content from the response
//                 setScriptFetched(true); // Mark the script as fetched
//             } else {
//                 setError(data.error || 'Failed to fetch the script.');
//             }
//         } catch (error) {
//             setError('Failed to fetch the script.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="upload-container">
//             <h1>Select Pipeline Stage</h1>
//             <div className="stage-buttons">
//                 {stages.map((stage) => (
//                     <button
//                         key={stage}
//                         className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
//                         onClick={() => handleStageSelection(stage)}
//                     >
//                         {stage}
//                     </button>
//                 ))}
//             </div>

//             {selectedStage && (
//                 <form className="upload-form" onSubmit={handleSubmit}>
//                     <div>
//                         <h4>Choose between:</h4>
//                         <div className="option-buttons">
//                             <button
//                                 type="button"
//                                 className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
//                                 onClick={() => handleOptionSelection('scripts')}
//                             >
//                                 Scripts
//                             </button>
//                             <button
//                                 type="button"
//                                 className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
//                                 onClick={() => handleOptionSelection('tools')}
//                             >
//                                 External Tools
//                             </button>
//                         </div>
//                     </div>

//                     {/* "Go to Next Stage" button */}
//                     <div>
//                         <button
//                             type="submit"
//                             disabled={!selectedStage}  // Always enabled once a stage is selected
//                         >
//                             Go to Next Stage
//                         </button>
//                     </div>
//                 </form>
//             )}

//             {/* Display fetched script */}
//             {scriptFetched && scriptContent && (
//                 <div className="script-content">
//                     <h3>Script Content:</h3>
//                     <pre>{scriptContent}</pre>
//                 </div>
//             )}

//             {/* Loading spinner */}
//             {loading && <p>Loading...</p>}

//             {/* Display error message */}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default Upload;

// src/components/Upload.js
// import React, { useState } from "react";
// import { getScripts } from "../services/scriptsService"; // Import getScripts from the service

// const stages = [
//   'Planning',
//   'Development',
//   'Testing',
//   'Deployment',
//   'Monitoring',
//   'All Stages'
// ];

// const Upload = () => {
//   const [selectedStage, setSelectedStage] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');
//   const [scriptContent, setScriptContent] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [scriptFetched, setScriptFetched] = useState(false);

//   const handleStageSelection = (stage) => {
//     setSelectedStage(stage);
//     setSelectedOption('');
//     setScriptContent('');
//     setError(null);
//     setScriptFetched(false);
//   };

//   const handleOptionSelection = (option) => {
//     setSelectedOption(option);
//   };

//   const fetchScript = async (stage) => {
//     setLoading(true);
//     setError(null);
//     setScriptFetched(false);

//     try {
//       console.log(`Fetching script for stage: ${stage}`);
      
//       const data = await getScripts(stage); // Call getScripts from the service

//       if (data.length > 0) {
//         setScriptContent(data[0].script_link); // Assuming 'script_link' is the field in your response
//         setScriptFetched(true);
//       } else {
//         setError('No scripts found for this stage.');
//       }
//     } catch (error) {
//       console.error('Error fetching script:', error);
//       setError('Failed to fetch the script.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const goToNextStage = () => {
//     const currentIndex = stages.indexOf(selectedStage);
//     if (currentIndex < stages.length - 1) {
//       const nextStage = stages[currentIndex + 1];
//       setSelectedStage(nextStage);
//       setScriptContent('');
//       setScriptFetched(false);
//       setSelectedOption('');
//     } else {
//       alert('You are already at the last stage.');
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h1>Select Pipeline Stage</h1>
//       <div className="stage-buttons">
//         {stages.map((stage) => (
//           <button
//             key={stage}
//             className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
//             onClick={() => handleStageSelection(stage)}
//           >
//             {stage}
//           </button>
//         ))}
//       </div>

//       {selectedStage && (
//         <div>
//           <h4>Choose between:</h4>
//           <div className="option-buttons">
//             <button
//               type="button"
//               className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
//               onClick={() => {
//                 handleOptionSelection('scripts');
//                 fetchScript(selectedStage.toLowerCase());
//               }}
//             >
//               Scripts
//             </button>
//             <button
//               type="button"
//               className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
//               onClick={() => handleOptionSelection('tools')}
//             >
//               External Tools
//             </button>
//           </div>
//         </div>
//       )}

//       {scriptFetched && scriptContent && (
//         <div className="script-content">
//           <h3>Script Content:</h3>
//           <pre>{scriptContent}</pre>
//         </div>
//       )}

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {selectedStage && (
//         <div>
//           <button
//             onClick={goToNextStage}
//             disabled={!selectedStage}
//           >
//             Go to Next Stage
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import styles from '../styles/projectCreate.module.css';

// const getScripts = async (stage, projectId) => {
//     try {
//         const response = await axios.post('http://localhost:8000/api/generate_script/', {
//             stage,
//             projectId, // Pass the project ID along with the request
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Error fetching scripts:', error);
//         throw error;
//     }
// };

// const Upload = () => {
//     const [selectedStage, setSelectedStage] = useState('');
//     const [scriptContent, setScriptContent] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [scriptFetched, setScriptFetched] = useState(false);
//     const [projectId, setProjectId] = useState(''); // Ensure you have the projectId available

//     const router = useRouter();

//     useEffect(() => {
//         // If the projectId is passed through the URL or as a query parameter, set it here
//         if (router.query.projectId) {
//             setProjectId(router.query.projectId);
//         }
//     }, [router.query.projectId]);

//     // Stages for the pipeline or project setup
//     const stages = ['Build', 'Deploy', 'Test']; // Example stages

//     const handleStageSelection = (stage) => {
//         setSelectedStage(stage);
//         setScriptContent('');
//         setError(null);
//         setScriptFetched(false);
//     };

//     const fetchScript = async () => {
//         setLoading(true);
//         setError(null);
//         setScriptFetched(false);

//         try {
//             // Send selectedStage and projectId to the backend
//             const response = await getScripts(selectedStage, projectId);
//             if (response && response.script) {
//                 setScriptContent(response.script);
//                 setScriptFetched(true);
//             } else {
//                 setError('No scripts found for this stage.');
//             }
//         } catch (error) {
//             setError('Failed to fetch the script.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const goToNextStage = () => {
//         const currentIndex = stages.indexOf(selectedStage);
//         if (currentIndex < stages.length - 1) {
//             const nextStage = stages[currentIndex + 1];
//             setSelectedStage(nextStage);
//             setScriptContent('');
//             setScriptFetched(false);
//         } else {
//             alert('You are already at the last stage.');
//         }
//     };

//     return (
//         <div className={styles.uploadContainer}>
//             <h1>Upload Project and Generate Scripts</h1>

//             {/* Stage selection */}
//             <div>
//                 <h3>Select a stage</h3>
//                 {stages.map((stage, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleStageSelection(stage)}
//                         className={selectedStage === stage ? styles.selected : ''}
//                     >
//                         {stage}
//                     </button>
//                 ))}
//             </div>

//             {/* Fetch script button */}
//             {selectedStage && (
//                 <button
//                     onClick={fetchScript}
//                     className={styles.fetchButton}
//                     disabled={loading}
//                 >
//                     {loading ? 'Fetching...' : 'Fetch Script'}
//                 </button>
//             )}

//             {/* Displaying script content */}
//             {scriptFetched && (
//                 <div>
//                     <h3>Generated Script:</h3>
//                     <pre>{scriptContent}</pre>
//                 </div>
//             )}

//             {/* Displaying error */}
//             {error && <p className={styles.error}>{error}</p>}

//             {/* Next stage button */}
//             {selectedStage && !loading && (
//                 <button
//                     onClick={goToNextStage}
//                     className={styles.nextButton}
//                 >
//                     Go to Next Stage
//                 </button>
//             )}
//         </div>
//     );
// };


// export default Upload;
// import React, { useState } from "react";
// import { getScripts } from "../services/scriptsService"; // Import getScripts from the service

// const stages = [
//   'Planning',
//   'Development',
//   'Testing',
//   'Deployment',
//   'Monitoring',
//   'All Stages'
// ];

// const Upload = () => {
//   const [selectedStage, setSelectedStage] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');
//   const [scriptContent, setScriptContent] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [scriptFetched, setScriptFetched] = useState(false);

//   const handleStageSelection = (stage) => {
//     setSelectedStage(stage);
//     setSelectedOption('');
//     setScriptContent('');
//     setError(null);
//     setScriptFetched(false);
//   };

//   const handleOptionSelection = (option) => {
//     setSelectedOption(option);
//   };

//   const fetchScript = async (stage) => {
//     setLoading(true);
//     setError(null);
//     setScriptFetched(false);

//     try {
//       console.log(`Fetching script for stage: ${stage}`);
      
//       const data = await getScripts(stage); // Call getScripts from the service

//       if (data.length > 0) {
//         setScriptContent(data[0].script_link); // Assuming 'script_link' is the field in your response
//         setScriptFetched(true);
//       } else {
//         setError('No scripts found for this stage.');
//       }
//     } catch (error) {
//       console.error('Error fetching script:', error);
//       setError('Failed to fetch the script.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const goToNextStage = () => {
//     const currentIndex = stages.indexOf(selectedStage);
//     if (currentIndex < stages.length - 1) {
//       const nextStage = stages[currentIndex + 1];
//       setSelectedStage(nextStage);
//       setScriptContent('');
//       setScriptFetched(false);
//       setSelectedOption('');
//     } else {
//       alert('You are already at the last stage.');
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h1>Select Pipeline Stage</h1>
//       <div className="stage-buttons">
//         {stages.map((stage) => (
//           <button
//             key={stage}
//             className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
//             onClick={() => handleStageSelection(stage)}
//           >
//             {stage}
//           </button>
//         ))}
//       </div>

//       {selectedStage && (
//         <div>
//           <h4>Choose between:</h4>
//           <div className="option-buttons">
//             <button
//               type="button"
//               className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
//               onClick={() => {
//                 handleOptionSelection('scripts');
//                 fetchScript(selectedStage.toLowerCase());
//               }}
//             >
//               Scripts
//             </button>
//             <button
//               type="button"
//               className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
//               onClick={() => handleOptionSelection('tools')}
//             >
//               External Tools
//             </button>
//           </div>
//         </div>
//       )}

//       {scriptFetched && scriptContent && (
//         <div className="script-content">
//           <h3>Script Content:</h3>
//           <pre>{scriptContent}</pre>
//         </div>
//       )}

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {selectedStage && (
//         <div>
//           <button
//             onClick={goToNextStage}
//             disabled={!selectedStage}
//           >
//             Go to Next Stage
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

// import React, { useState, useEffect } from "react";
// import { getScripts } from "../services/scriptsService"; // Import getScripts from the service

// const stages = ["Planning", "Development", "Testing", "Deployment", "Monitoring", "All Stages"];

// const Upload = () => {
//   const [selectedStage, setSelectedStage] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [scriptContent, setScriptContent] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [scriptFetched, setScriptFetched] = useState(false);
//   const [selectedProjectId, setSelectedProjectId] = useState(null); // Set to null initially

//   // ✅ Ensure that projectId is set when the component mounts (if dynamic)
//   useEffect(() => {
//     // Fetch the project ID dynamically if needed
//     setSelectedProjectId(1); // Replace this with actual project ID retrieval logic
//   }, []);

//   const handleStageSelection = (stage) => {
//     setSelectedStage(stage);
//     setSelectedOption("");
//     setScriptContent("");
//     setError(null);
//     setScriptFetched(false);
//   };

//   const handleOptionSelection = (option) => {
//     setSelectedOption(option);
//   };

//   const fetchScript = async () => {
//     if (!selectedProjectId) {
//       console.error("Error: Project ID is missing!");
//       setError("Project ID is required.");
//       return;
//     }
//     if (!selectedStage) {
//       console.error("Error: Stage is missing!");
//       setError("Stage selection is required.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setScriptFetched(false);

//     console.log("Fetching script with Project ID:", selectedProjectId, "Stage ID:", selectedStage.toLowerCase());

//     try {
//       const stageId = selectedStage.toLowerCase();
//       const data = await getScripts(selectedProjectId, stageId);

//       // ✅ Fix: Fetch `script_content` instead of `script_link`
//       if (data && data.script_content) {
//         setScriptContent(data.script_content);
//         setScriptFetched(true);
//       } else {
//         setError("No script found for this stage.");
//       }
//     } catch (error) {
//       console.error("Error fetching script:", error);
//       setError("Failed to fetch the script.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const goToNextStage = () => {
//     const currentIndex = stages.indexOf(selectedStage);
//     if (currentIndex < stages.length - 1) {
//       const nextStage = stages[currentIndex + 1];
//       setSelectedStage(nextStage);
//       setScriptContent("");
//       setScriptFetched(false);
//       setSelectedOption("");
//     } else {
//       alert("You are already at the last stage.");
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h1>Select Pipeline Stage</h1>
//       <div className="stage-buttons">
//         {stages.map((stage) => (
//           <button
//             key={stage}
//             className={`stage-button ${selectedStage === stage ? "active" : ""}`}
//             onClick={() => handleStageSelection(stage)}
//           >
//             {stage}
//           </button>
//         ))}
//       </div>

//       {selectedStage && (
//         <div>
//           <h4>Choose between:</h4>
//           <div className="option-buttons">
//             <button
//               type="button"
//               className={`option-button ${selectedOption === "scripts" ? "active" : ""}`}
//               onClick={() => {
//                 handleOptionSelection("scripts");
//                 fetchScript(); // Fetch script with both projectId and stageId
//               }}
//             >
//               Scripts
//             </button>
//             <button
//               type="button"
//               className={`option-button ${selectedOption === "tools" ? "active" : ""}`}
//               onClick={() => handleOptionSelection("tools")}
//             >
//               External Tools
//             </button>
//           </div>
//         </div>
//       )}

//       {scriptFetched && scriptContent && (
//         <div className="script-content">
//           <h3>Script Content:</h3>
//           <pre>{scriptContent}</pre>
//         </div>
//       )}

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {selectedStage && (
//         <div>
//           <button onClick={goToNextStage} disabled={!selectedStage}>
//             Go to Next Stage
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

// import React, { useState } from "react";

// const Upload = () => {
//   const [selectedStage, setSelectedStage] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');
//   const [scriptContent, setScriptContent] = useState('');
//   const [scriptFetched, setScriptFetched] = useState(false);

//   // Predefined scripts for each stage
//   const predefinedScripts = {
//     Planning: `#!/bin/bash

// # Initialize the project directory
// echo "Initializing project directory..."
// mkdir -p ./project

// # Set up Dockerfile for containerization
// echo "Creating Dockerfile..."
// cat <<EOL > ./project/Dockerfile
// # Use Node.js base image for building the app
// FROM node:16

// # Set the working directory
// WORKDIR /app

// # Copy package.json and install dependencies
// COPY package*.json ./
// RUN npm install

// # Copy the rest of the application code
// COPY . .

// # Expose the app port
// EXPOSE 3000

// # Start the app
// CMD ["node", "server.js"]
// EOL

// echo "Dockerfile has been created for containerization."

// # Create the Heroku app and prepare for deployment
// echo "Preparing Heroku deployment setup..."
// heroku create --app your-app-name

// echo "Plan stage completed."
// `,
//     Development: `#!/bin/bash

// # Build Docker image
// echo "Building Docker image..."
// docker build -t your-app-name .

// # Test build by running the container
// echo "Running Docker container locally for testing..."
// docker run -d -p 3000:3000 your-app-name

// echo "Build stage completed."
// `,
//     Testing: `#!/bin/bash

// # Check if the container is running
// echo "Checking if the Docker container is running..."
// docker ps -q --filter "name=your-app-name" || echo "Container is not running."

// # Health check for the running app (check HTTP response)
// echo "Performing HTTP health check..."
// curl --fail http://localhost:3000/health || echo "Health check failed."

// echo "Test stage completed."
// `,
//     Deployment: `#!/bin/bash

// # Log in to Heroku container registry
// echo "Logging into Heroku container registry..."
// heroku container:login

// # Push Docker image to Heroku
// echo "Pushing Docker image to Heroku..."
// heroku container:push web --app your-app-name

// # Release the app on Heroku
// echo "Releasing app on Heroku..."
// heroku container:release web --app your-app-name

// echo "Deploy stage completed. App is live on Heroku!"
// `,
//     Monitoring: `#!/bin/bash
// echo "Setting up monitoring..."\n
// # Add your monitoring setup steps here
// echo "Monitoring setup complete!"\n`,
//   };

//   // Handle stage selection and reset option
//   const handleStageSelection = (stage) => {
//     setSelectedStage(stage);
//     setSelectedOption('');
//     setScriptFetched(false);
//     setScriptContent('');
//   };

//   // Handle option selection (Script or Tool)
//   const handleOptionSelection = (option) => {
//     setSelectedOption(option);
//     if (option === 'Script') {
//       setScriptContent(predefinedScripts[selectedStage]); // Set the script for the selected stage
//       setScriptFetched(true);
//     }
//     // You can later add tool generation logic here
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(scriptContent);
//     alert("Script copied to clipboard!");
//   };

//   const downloadScript = () => {
//     const blob = new Blob([scriptContent], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = `${selectedStage.toLowerCase()}-script.sh`;
//     link.click();
//   };

//   return (
//     <div className="upload-container">
//       <h1>Select Pipeline Stage</h1>
//       <div className="stage-buttons">
//         {["Planning", "Development", "Testing", "Deployment", "Monitoring"].map((stage) => (
//           <button
//             key={stage}
//             className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
//             onClick={() => handleStageSelection(stage)}
//           >
//             {stage}
//           </button>
//         ))}
//       </div>

//       {selectedStage && (
//         <div>
//           <h4>Selected Stage: {selectedStage}</h4>
//           <div className="option-buttons">
//             <button
//               className={`option-button ${selectedOption === 'Script' ? 'active' : ''}`}
//               onClick={() => handleOptionSelection('Script')}
//             >
//               Script
//             </button>
//             <button
//               className={`option-button ${selectedOption === 'Tool' ? 'active' : ''}`}
//               onClick={() => handleOptionSelection('Tool')}
//             >
//               Tool
//             </button>
//           </div>
//         </div>
//       )}

//       {selectedOption === 'Script' && scriptFetched && scriptContent && (
//         <div className="script-content">
//           <h3>Generated Script for {selectedStage}:</h3>
//           <pre className="script-display">{scriptContent}</pre>
//           <button onClick={copyToClipboard}>Copy</button>
//           <button onClick={downloadScript}>Download</button>
//         </div>
//       )}

//       {selectedOption === 'Tool' && (
//         <div className="tool-content">
//           {/* Add tool-related content here */}
//           <h3>Tools for {selectedStage}:</h3>
//           <p>Select a tool to use in the {selectedStage} stage.</p>
//           {/* Example content */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

import React, { useState } from "react";

const Upload = () => {
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [scriptContent, setScriptContent] = useState('');
  const [scriptFetched, setScriptFetched] = useState(false);

  // Predefined scripts for each stage
  const predefinedScripts = {
    Planning: `#!/bin/bash

echo "Checking system dependencies..."

# Check for Node.js
if ! command -v node &> /dev/null
then
    echo "Node.js not found! Please install it."
    exit 1
fi

# Check for Docker
if ! command -v docker &> /dev/null
then
    echo "Docker is not installed! Please install Docker."
    exit 1
fi

# Check for Heroku CLI
if ! command -v heroku &> /dev/null
then
    echo "Heroku CLI not found! Please install it."
    exit 1
fi

echo "All dependencies are installed!"
exit 0
`,
    Development: `#!/bin/bash

echo "Starting development server in Docker..."

# Ensure dependencies are installed
npm install

# Run the development server
docker run -it --rm -p 3000:3000 -v $(pwd):/app -w /app node:latest sh -c "npm install && npm start"

echo "Development server running on http://localhost:3000"
exit 0

`,
    Testing: `#!/bin/bash
echo "No testing specified, skipping testing phase."
exit 0
`,
    Deployment: `HEROKU_APP_NAME="your-heroku-app-name"

echo "Logging into Heroku Container Registry..."
heroku container:login

echo "Tagging and pushing Docker image to Heroku..."
docker tag devops-react-app registry.heroku.com/$HEROKU_APP_NAME/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web

echo "Releasing the app on Heroku..."
heroku container:release web -a $HEROKU_APP_NAME

echo "Deployment to Heroku completed successfully!"
exit 0
`,
    Monitoring: `#!/bin/bash

HEROKU_APP_NAME="your-heroku-app-name"

echo "Fetching Heroku application logs..."
heroku logs --tail -a $HEROKU_APP_NAME &

echo "Monitoring Docker container resource usage..."
docker stats

echo "Monitoring tools started. Press Ctrl+C to stop."
wait
`,
  };

  // Tool recommendations based on the selected stage
  const toolsForStage = {
    Planning: [
      { name: 'Docker', image: 'https://link-to-docker-image.com', url: 'https://www.docker.com/' },
      { name: 'Heroku', image: 'https://link-to-heroku-image.com', url: 'https://www.heroku.com/' },
    ],
    Development: [
      { name: 'Docker', image: 'https://link-to-docker-image.com', url: 'https://www.docker.com/' },
      { name: 'Visual Studio Code', image: 'https://link-to-vscode-image.com', url: 'https://code.visualstudio.com/' },
    ],
    Testing: [
      { name: 'Postman', image: 'https://link-to-postman-image.com', url: 'https://www.postman.com/' },
      { name: 'Jest', image: 'https://link-to-jest-image.com', url: 'https://jestjs.io/' },
    ],
    Deployment: [
      { name: 'Heroku', image: 'https://link-to-heroku-image.com', url: 'https://www.heroku.com/' },
      { name: 'AWS', image: 'https://link-to-aws-image.com', url: 'https://aws.amazon.com/' },
    ],
    Monitoring: [
      { name: 'Prometheus', image: 'https://link-to-prometheus-image.com', url: 'https://prometheus.io/' },
      { name: 'Grafana', image: 'https://link-to-grafana-image.com', url: 'https://grafana.com/' },
    ],
  };

  // Handle stage selection and reset option
  const handleStageSelection = (stage) => {
    setSelectedStage(stage);
    setSelectedOption('');
    setScriptFetched(false);
    setScriptContent('');
  };

  // Handle option selection (Script or Tool)
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    if (option === 'Script') {
      setScriptContent(predefinedScripts[selectedStage]); // Set the script for the selected stage
      setScriptFetched(true);
    }
    // You can later add tool generation logic here
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptContent);
    alert("Script copied to clipboard!");
  };

  const downloadScript = () => {
    const blob = new Blob([scriptContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${selectedStage.toLowerCase()}-script.sh`;
    link.click();
  };

  return (
    <div className="upload-container">
      <h1>Select Pipeline Stage</h1>
      <div className="stage-buttons">
        {["Planning", "Development", "Testing", "Deployment", "Monitoring"].map((stage) => (
          <button
            key={stage}
            className={`stage-button ${selectedStage === stage ? 'active' : ''}`}
            onClick={() => handleStageSelection(stage)}
          >
            {stage}
          </button>
        ))}
      </div>

      {selectedStage && (
        <div>
          <h4>Selected Stage: {selectedStage}</h4>
          <div className="option-buttons">
            <button
              className={`option-button ${selectedOption === 'Script' ? 'active' : ''}`}
              onClick={() => handleOptionSelection('Script')}
            >
              Script
            </button>
            <button
              className={`option-button ${selectedOption === 'Tool' ? 'active' : ''}`}
              onClick={() => handleOptionSelection('Tool')}
            >
              Tool
            </button>
          </div>
        </div>
      )}

      {selectedOption === 'Script' && scriptFetched && scriptContent && (
        <div className="script-content">
          <h3>Generated Script for {selectedStage}:</h3>
          <pre className="script-display">{scriptContent}</pre>
          <button onClick={copyToClipboard}>Copy</button>
          <button onClick={downloadScript}>Download</button>
        </div>
      )}

      {selectedOption === 'Tool' && (
        <div className="tool-content">
          <h3>Tools for {selectedStage}:</h3>
          <div className="tool-recommendations">
            {toolsForStage[selectedStage].map((tool) => (
              <div key={tool.name} className="tool-card">
                <img src={tool.image} alt={tool.name} className="tool-image" />
                <h4>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    {tool.name}
                  </a>
                </h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
















    

