import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import WelcomeScreen from "./components/WelcomeScreen";
import ProjectInfoForm from "./components/ProjectInfoForm";
//import Home from "./components/Home";
import ProjectDescriptions from "./components/ProjectDescriptions";
import NewRiskForm from "./components/NewRiskForm";


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
          <Route path="/project-settings" element={<ProjectInfoForm />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/project-descriptions" element={<ProjectDescriptions />} />
          <Route path="/create-new-risk" element={<NewRiskForm />} />
        </Routes>
        
      </div>

    </BrowserRouter>
    
  );
}

export default App;