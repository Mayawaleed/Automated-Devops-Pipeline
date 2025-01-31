
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

import { useState } from 'react';

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
    const [scriptContent, setScriptContent] = useState(''); // State to hold script content
    const [loading, setLoading] = useState(false); // To track loading state
    const [error, setError] = useState(null); // To track errors
    const [scriptFetched, setScriptFetched] = useState(false); // To track if the script is successfully fetched
    const [toolsFetched, setToolsFetched] = useState(false); // To track if tools are successfully fetched
    const [toolsContent, setToolsContent] = useState(''); // State to hold tools content

    // When stage is selected, reset states
    const handleStageSelection = (stage) => {
        setSelectedStage(stage);
        setSelectedOption(''); // Reset option when stage is selected
        setScriptContent(''); // Reset script content when stage changes
        setError(null); // Clear previous errors
        setScriptFetched(false); // Reset script fetched status
        setToolsFetched(false); // Reset tools fetched status
        setToolsContent(''); // Reset tools content
    };

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
    };

    // Handle form submission (submit when user clicks "Go to Next Stage")
    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOption === 'scripts') {
            // Fetch script when the "Scripts" option is selected
            fetchScript(selectedStage.toLowerCase());
        } else if (selectedOption === 'tools') {
            // Fetch tools when the "Tools" option is selected
            fetchTools(selectedStage.toLowerCase());
        }

        // Always allow proceeding to the next stage regardless of whether a script was selected
        console.log('Proceeding to next stage:', selectedStage);
    };

    // Fetch the script based on the stage
    const fetchScript = async (stage) => {
        setLoading(true);
        setError(null); // Clear any previous errors
        setScriptFetched(false); // Reset the fetch status before trying

        try {
            console.log(`Fetching script for stage: ${stage}`); // Debugging line
            const response = await fetch(`http://127.0.0.1:8000/api/get_scripts/${stage}/`);
            const data = await response.json();

            if (response.ok && data.length > 0) {
                setScriptContent(data[0].script_link); // Assuming 'script_link' is the field in your response
                setScriptFetched(true); // Mark the script as fetched
            } else {
                setError('No scripts found for this stage.');
            }
        } catch (error) {
            setError('Failed to fetch the script.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch the tools based on the stage
    const fetchTools = async (stage) => {
        setLoading(true);
        setError(null); // Clear any previous errors
        setToolsFetched(false); // Reset the fetch status before trying

        try {
            console.log(`Fetching tools for stage: ${stage}`); // Debugging line
            const response = await fetch(`http://127.0.0.1:8000/api/get_tools/${stage}/`);
            const data = await response.json();

            if (response.ok && data.length > 0) {
                setToolsContent(data.map((tool) => `${tool.name}: ${tool.url}`).join('\n')); // Assuming 'name' and 'url' are in the response
                setToolsFetched(true); // Mark the tools as fetched
            } else {
                setError('No tools found for this stage.');
            }
        } catch (error) {
            setError('Failed to fetch tools.');
        } finally {
            setLoading(false);
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
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div>
                        <h4>Choose between:</h4>
                        <div className="option-buttons">
                            <button
                                type="button"
                                className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
                                onClick={() => handleOptionSelection('scripts')}
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

                    {/* "Go to Next Stage" button */}
                    <div>
                        <button
                            type="submit"
                            disabled={!selectedStage || !selectedOption}  // Ensure both stage and option are selected
                        >
                            Go to Next Stage
                        </button>
                    </div>
                </form>
            )}

            {/* Display fetched script */}
            {scriptFetched && scriptContent && (
                <div className="script-content">
                    <h3>Script Content:</h3>
                    <pre>{scriptContent}</pre>
                </div>
            )}

            {/* Display fetched tools */}
            {toolsFetched && toolsContent && (
                <div className="tools-content">
                    <h3>External Tools:</h3>
                    <pre>{toolsContent}</pre>
                </div>
            )}

            {/* Loading spinner */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Upload;



    

