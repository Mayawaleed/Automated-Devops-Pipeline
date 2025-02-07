
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
import React, { useState } from "react";
import { getScripts } from "../services/scriptsService"; // Import getScripts from the service

const stages = [
  'Planning',
  'Development',
  'Testing',
  'Deployment',
  'Monitoring',
  'All Stages'
];

const Upload = () => {
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [scriptContent, setScriptContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scriptFetched, setScriptFetched] = useState(false);

  const handleStageSelection = (stage) => {
    setSelectedStage(stage);
    setSelectedOption('');
    setScriptContent('');
    setError(null);
    setScriptFetched(false);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const fetchScript = async (stage) => {
    setLoading(true);
    setError(null);
    setScriptFetched(false);

    try {
      console.log(`Fetching script for stage: ${stage}`);
      
      const data = await getScripts(stage); // Call getScripts from the service

      if (data.length > 0) {
        setScriptContent(data[0].script_link); // Assuming 'script_link' is the field in your response
        setScriptFetched(true);
      } else {
        setError('No scripts found for this stage.');
      }
    } catch (error) {
      console.error('Error fetching script:', error);
      setError('Failed to fetch the script.');
    } finally {
      setLoading(false);
    }
  };

  const goToNextStage = () => {
    const currentIndex = stages.indexOf(selectedStage);
    if (currentIndex < stages.length - 1) {
      const nextStage = stages[currentIndex + 1];
      setSelectedStage(nextStage);
      setScriptContent('');
      setScriptFetched(false);
      setSelectedOption('');
    } else {
      alert('You are already at the last stage.');
    }
  };

  return (
    <div className="upload-container">
      <h1>Select Pipeline Stage</h1>
      <div className="stage-buttons">
        {stages.map((stage) => (
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
          <h4>Choose between:</h4>
          <div className="option-buttons">
            <button
              type="button"
              className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
              onClick={() => {
                handleOptionSelection('scripts');
                fetchScript(selectedStage.toLowerCase());
              }}
            >
              Scripts
            </button>
            <button
              type="button"
              className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
              onClick={() => handleOptionSelection('tools')}
            >
              External Tools
            </button>
          </div>
        </div>
      )}

      {scriptFetched && scriptContent && (
        <div className="script-content">
          <h3>Script Content:</h3>
          <pre>{scriptContent}</pre>
        </div>
      )}

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {selectedStage && (
        <div>
          <button
            onClick={goToNextStage}
            disabled={!selectedStage}
          >
            Go to Next Stage
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload;




    

