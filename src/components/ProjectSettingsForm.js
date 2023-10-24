import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectSettingsForm.css";


function ProjectSettingsForm() {
    const[organization, setOrganization] = useState("");
    const[projectName, setProjectName] = useState("");
    const[projectManager, setProjectManager] = useState("");
    const[riskManager, setRiskManager] = useState("");
    const[projectDescription, setProjectDescription] = useState("");

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate("/project-settings");
    };

    

    

    return (
        <form onSubmit={handleFormSubmit}>
            
            <div>
                <label htmlFor="organization">Organization:</label>
                <input
                type="text"
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                />
            </div>
            
            <div>
            <label htmlFor="projectName">Project Name:</label>
                <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)} 
                />
            </div>

            <div>
                <label htmlFor="projectManager">Project Manager:</label>
                <input
                type="text"
                id="projectManager"
                value={projectManager}
                onChange={(e) => setProjectManager(e.target.value)} 
                />
            </div>

            <div>
                <label htmlFor="riskManager">Risk Manager:</label>
                <input
                type="text"
                id="riskManager"
                value={riskManager}
                onChange={(e) => setRiskManager(e.target.value)} 
                />
            </div>

            <div>
                <label htmlFor="projectDescription">Project Descriptions:</label>
                <input
                type="text"
                id="projectDescription"
                defaultValue={projectDescription}
                onInput={(e) => setProjectDescription(e.target.value)} 
                />
            </div>
            <button type="submit">Save</button>
        
        
        </form>
    );
}


export default ProjectSettingsForm;