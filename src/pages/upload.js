

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

import { useState } from 'react';

const stages = [
    'Planning',
    'Building',
    'Testing',
    'Deployment',
    'Monitoring',
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

        // Find the index of the current stage
        const currentStageIndex = stages.indexOf(selectedStage);

        // Check if it's not the last stage (Monitoring)
        if (currentStageIndex < stages.length - 1) {
            const nextStage = stages[currentStageIndex + 1];
            setSelectedStage(nextStage);
            setSelectedOption(''); // Reset option when moving to the next stage
        } else {
            console.log('You have completed all stages.');
        }

        console.log({
            selectedStage,
            selectedOption,
        });
        // Logic for next steps after submission
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
                            {/* Render Scripts button only if the selected stage is NOT Planning */}
                            {selectedStage !== 'Planning' && selectedStage !== 'Monitoring' && (
                                <button
                                    type="button"
                                    className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
                                    onClick={() => handleOptionSelection('scripts')}
                                >
                                    Scripts
                                </button>
                            )}
                            {/* Render External Tools button for all stages except Monitoring */}
                            {selectedStage !== 'Monitoring' && (
                                <button
                                    type="button"
                                    className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
                                    onClick={() => handleOptionSelection('tools')}
                                >
                                    External Tools
                                </button>
                            )}
                            {/* Always show External Tools for Monitoring stage */}
                            {selectedStage === 'Monitoring' && (
                                <button
                                    type="button"
                                    className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
                                    onClick={() => handleOptionSelection('tools')}
                                >
                                    External Tools
                                </button>
                            )}
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
