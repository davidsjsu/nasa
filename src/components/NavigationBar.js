import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavigationBar.css';


function NavigationBar({onProjectSettingsClick}) {
    return (
        <div className="navigation-bar">
            <Link to="/welcome" className="welcome-link">Welcome</Link>
            <Link to="/home">Home</Link>
            <Link to="/project-settings">Project Settings</Link>
            <Link to="/project-descriptions">Project Descriptions</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/create-new-risk">Create New Risk</Link>
        </div>
    );
}

export default NavigationBar;