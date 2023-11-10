import React, { useState, useEffect } from "react";
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

  // Effect hook to fetch and parse data (adjust this logic as needed)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-data-api-endpoint');
        const jsonData = await response.json();
        setRiskData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
            <Route path="/" element={<XMLDisplay data={riskData} />} /> {/* Pass the risk data to XMLDisplay */}
            <Route path="/create-new-risk" element={<CreateRisk />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RiskDataContext.Provider>
  );
}

export default App;
