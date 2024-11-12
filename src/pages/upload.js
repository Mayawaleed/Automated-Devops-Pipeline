
// import { useState } from 'react';

// const stages = [
//     'Planning',
//     'Development',
//     'Testing',
//     'Deployment',
//     'Monitoring',
//     'All Stages' // Added "All Stages" option
// ];

// const Upload = () => {
//     const [selectedStage, setSelectedStage] = useState('');
//     const [documentLink, setDocumentLink] = useState('');
//     const [umlLink, setUmlLink] = useState('');
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
//         console.log({
//             selectedStage,
//             documentLink,
//             umlLink,
//             selectedOption
//         });
//         // Logic for next steps after submission
//     };

//     return (
//         <div className="upload-container">
//             <h1>Upload Pipeline Details</h1>

//             <h2>Select Pipeline Stage</h2>
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
//                     <h3>Selected Stage: {selectedStage} is Activated</h3>
//                     <div>
//                         <label>
//                             Document Link:
//                             <input
//                                 type="url"
//                                 value={documentLink}
//                                 onChange={(e) => setDocumentLink(e.target.value)}
//                                 required
//                                 placeholder="Enter document URL"
//                             />
//                         </label>
//                     </div>
//                     <div>
//                         <label>
//                             UML Diagram Link:
//                             <input
//                                 type="url"
//                                 value={umlLink}
//                                 onChange={(e) => setUmlLink(e.target.value)}
//                                 required
//                                 placeholder="Enter UML diagram URL"
//                             />
//                         </label>
//                     </div>
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
//     'All Stages' // Added "All Stages" option
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
//         console.log({
//             selectedStage,
//             selectedOption
//         });
//         // Logic for next steps after submission
//     };

//     return (
//         <div className="upload-container">
//             <h1>Upload Pipeline Details</h1>

//             <h2>Select Pipeline Stage</h2>
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
//                     {/* <h3>Selected Stage: {selectedStage} is Activated</h3> */}
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

import { useState } from 'react';

const stages = [
    'Planning',
    'Development',
    'Testing',
    'Deployment',
    'Monitoring',
    'All Stages' // Added "All Stages" option
];

const Upload = () => {
    const [selectedStage, setSelectedStage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleStageSelection = (stage) => {
        setSelectedStage(stage);
        setSelectedOption(''); // Reset option when stage is selected
    };

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            selectedStage,
            selectedOption
        });
        // Logic for next steps after submission
    };

    return (
        <div className="upload-container">
            <h1>Upload Pipeline Details</h1>

            <h2>Select Pipeline Stage</h2>
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
                    {/* <h3>Selected Stage: {selectedStage} is Activated</h3> */}
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
                            {/* Add button for Monitoring Tool Download */}
                            <button
                                type="button"
                                className={`option-button ${selectedOption === 'monitoring' ? 'active' : ''}`}
                                onClick={() => handleOptionSelection('monitoring')}
                            >
                                Download Monitoring Tool
                            </button>
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={!selectedOption}>
                            Go to Next Stage
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Upload;
