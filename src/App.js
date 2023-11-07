// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import WelcomeScreen from "./components/WelcomeScreen";
import ProjectInfoForm from './components/ProjectInfoForm';
import ProjectDescriptions from './components/ProjectDescriptions';
import CreateRisk from './components/CreateRisk';

function App() {
  const [showProjectSettings, setShowProjectSettings] = useState(false);

  const handleProjectSettingsClick = () => {
    setShowProjectSettings(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar onProjectSettingsClick={handleProjectSettingsClick} />
        {showProjectSettings && <ProjectInfoForm />}
        <Routes>
          <Route path="/project-settings" element={<ProjectInfoForm />} />
          <Route path="/project-descriptions" element={<ProjectDescriptions />} />
          <Route path="/create-new-risk" element={<CreateRisk />} /> {/* Added this line */}
          <Route path="/welcome" element={<WelcomeScreen />} />
        </Routes>
        {/* ... other components */}
      </div>
    </BrowserRouter>
  );
}

export default App;
