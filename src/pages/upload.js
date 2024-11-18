

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

            {selectedStage && selectedStage !== 'Monitoring' && (
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div>
                        <h4>Choose between:</h4>
                        <div className="option-buttons">
                            {/* Render Scripts button only if the selected stage is NOT Planning */}
                            {selectedStage !== 'Planning' && (
                                <button
                                    type="button"
                                    className={`option-button ${selectedOption === 'scripts' ? 'active' : ''}`}
                                    onClick={() => handleOptionSelection('scripts')}
                                >
                                    Scripts
                                </button>
                            )}
                            <button
                                type="button"
                                className={`option-button ${selectedOption === 'tools' ? 'active' : ''}`}
                                onClick={() => handleOptionSelection('tools')}
                            >
                                External Tools
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
