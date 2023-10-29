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
}

    export default ProjectSettingsForm;
