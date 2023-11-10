// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import WelcomeScreen from "./components/WelcomeScreen";
import ProjectInfoForm from './components/ProjectInfoForm';
import ProjectDescriptions from './components/ProjectDescriptions';
import XMLDisplay from './components/XMLDisplay'; // Make sure you have this import if you're using XMLDisplay
import Dashboard from './components/Dashboard'; // Make sure you have this import if you're using Dashboard
import RiskDataContext from './components/RiskDataContext'; // Import the RiskDataContext
import CreateRisk from './components/CreateRisk'; // Adjust the path as needed


function App() {
  const [showProjectSettings, setShowProjectSettings] = useState(false);
  const [riskData, setRiskData] = useState(null); // State to hold the parsed risk data

  const handleProjectSettingsClick = () => {
    setShowProjectSettings(true);
  };

  return (
    <RiskDataContext.Provider value={{ riskData, setRiskData }}> {/* Wrap the application with RiskDataContext.Provider */}
      <BrowserRouter>
        <div className="App">
          <NavigationBar onProjectSettingsClick={handleProjectSettingsClick} />
          {showProjectSettings && <ProjectInfoForm />}
          <Routes>
            <Route path="/project-settings" element={<ProjectInfoForm />} />
            <Route path="/project-descriptions" element={<ProjectDescriptions />} />
            {/* Add other routes as needed */}
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<XMLDisplay />} /> {/* Ensure this component exists and is imported */}
            <Route path="/create-new-risk" element={<CreateRisk />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RiskDataContext.Provider>
  );
}

export default App;
