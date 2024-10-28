// src/pages/upload.js
import { useState } from 'react';
import Navbar from '../components/Navbar';

const stages = [
    'Planning',
    'Development',
    'Testing',
    'Deployment',
    'Monitoring'
];

const Upload = () => {
    const [selectedStage, setSelectedStage] = useState('');
    const [documentLink, setDocumentLink] = useState('');
    const [umlLink, setUmlLink] = useState('');
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
            documentLink,
            umlLink,
            selectedOption
        });
        // You can send this data to your backend for processing
        // Navigate to another stage or display a success message
    };

    return (
        <div>
            <Navbar />
            <h1>Upload Project Details</h1>

            <h2>Select Pipeline Stage</h2>
            <div style={{ marginBottom: '20px' }}>
                {stages.map((stage) => (
                    <button
                        key={stage}
                        style={{
                            margin: '5px',
                            padding: '10px',
                            backgroundColor: selectedStage === stage ? '#0070f3' : '#eaeaea',
                            color: selectedStage === stage ? 'white' : 'black',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleStageSelection(stage)}
                    >
                        {stage}
                    </button>
                ))}
            </div>

            {selectedStage && (
                <form onSubmit={handleSubmit}>
                    <h3>Selected Stage: {selectedStage} is Activated</h3>
                    <div>
                        <label>
                            Document Link:
                            <input
                                type="url"
                                value={documentLink}
                                onChange={(e) => setDocumentLink(e.target.value)}
                                required
                                placeholder="Enter document URL"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            UML Diagram Link:
                            <input
                                type="url"
                                value={umlLink}
                                onChange={(e) => setUmlLink(e.target.value)}
                                required
                                placeholder="Enter UML diagram URL"
                            />
                        </label>
                    </div>
                    <div>
                        <h4>Choose between:</h4>
                        <button
                            type="button"
                            style={{
                                margin: '5px',
                                padding: '10px',
                                backgroundColor: selectedOption === 'scripts' ? '#0070f3' : '#eaeaea',
                                color: selectedOption === 'scripts' ? 'white' : 'black',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOptionSelection('scripts')}
                        >
                            Scripts
                        </button>
                        <button
                            type="button"
                            style={{
                                margin: '5px',
                                padding: '10px',
                                backgroundColor: selectedOption === 'tools' ? '#0070f3' : '#eaeaea',
                                color: selectedOption === 'tools' ? 'white' : 'black',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOptionSelection('tools')}
                        >
                            External Tools
                        </button>
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
