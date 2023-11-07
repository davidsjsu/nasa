import React, { useRef, useState } from "react";
import { parseString } from 'xml2js';
import XMLDisplay from './XMLDisplay'; // Make sure this path is correct

function WelcomeButtons({ handleWelcomeButtonsClick }) {
    const fileInputRef = useRef(null);
    const [parsedData, setParsedData] = useState(null); // State to store parsed data

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const xmlData = e.target.result;
                parseString(xmlData, (err, result) => {
                    if (err) {
                        console.error('Error parsing XML:', err);
                    } else {
                        console.log('Parsed XML result:', result);
                        setParsedData(result); // Save parsed data in state
                    }
                });
            };
            reader.readAsText(file);
            if (handleWelcomeButtonsClick) handleWelcomeButtonsClick();
        }
    };

    const handleOpenProjectClick = () => {
        fileInputRef.current.click();
    };

    const handleCreateNewProjectClick = () => {
        // Add your logic for creating a new project here
        console.log('Create New Project button clicked');
        if (handleWelcomeButtonsClick) handleWelcomeButtonsClick();
    };

    return (
        <div className="welcome-buttons">
            <button onClick={handleCreateNewProjectClick}>Create New Project</button>
            <button onClick={handleOpenProjectClick}>Open Project</button>
            <input
                type="file"
                accept=".xml"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileSelect}
            />
            {parsedData && <XMLDisplay data={parsedData} />} {/* Conditionally render display component */}
        </div>
    );
}

export default WelcomeButtons;
