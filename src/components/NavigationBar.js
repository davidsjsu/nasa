import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import '../styles/NavigationBar.css';

function NavigationBar() {
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

// Define prop types (even if there are no props)
NavigationBar.propTypes = {
  onProjectSettingsClick: PropTypes.func, // Define the prop type (can be removed if not used)
};

export default NavigationBar;
