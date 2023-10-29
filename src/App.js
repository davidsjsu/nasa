// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import WelcomeScreen from "./components/WelcomeScreen";
import ProjectSettingsForm from './components/ProjectSettingsForm';
import ProjectDescriptions from './components/ProjectDescriptions';


function App() {
  const [setShowProjectSettings] = useState(false);

  const handleProjectSettingsClick = () => {
    setShowProjectSettings(true);
  };

  return (
    <BrowserRouter>
      <div>
        <NavigationBar onProjectSettingsClick={handleProjectSettingsClick} />
        <Routes>
          <Route path="/project-settings" element={<ProjectSettingsForm />} />
          <Route path="/project-descriptions" element={<ProjectDescriptions />} />

          <Route path="/welcome" element={<WelcomeScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;