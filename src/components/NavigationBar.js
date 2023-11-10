import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Link to="/welcome" className="welcome-link">Home</Link>
      <Link to="/project-settings">Project Settings</Link>
      <Link to="/project-descriptions">Project Descriptions</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/create-new-risk">Create New Risk</Link>
    </div>
  );
}

NavigationBar.propTypes = {
  onProjectSettingsClick: PropTypes.func,
};

export default NavigationBar;
