/*import React, { useState } from 'react';
import { parseString } from 'xml2js';

function Home() {
  const [projectData, setProjectData] = useState(null);
  const [risks, setRisks] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input element
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleOpenProject = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const xmlContent = e.target.result;
        parseString(xmlContent, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err);
          } else {
            console.log('Parsed XML result:', result);
            setProjectData(result.Project);
            setRisks(result.Project.Risks[0].Risk);
          }
        });
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="home">
      <h2>Open Project</h2>
      <input type="file" accept=".xml" onChange={handleFileChange} />
      <button onClick={handleOpenProject}>Open</button>
      {projectData && (
        <div className="project-info">
          <h2>Project Information</h2>
          <p>Project Name: {projectData.ProjectName[0]}</p>
          <p>Project Manager: {projectData.ProjectManager[0]}</p>
          <p>Risk Manager: {projectData.RiskManager[0]}</p>
          <p>Organization: {projectData.Organization[0]}</p>
        </div>
      )}
      {risks.length > 0 && (
        <div className="risk-list">
          <h2>Risk List</h2>
          <ul>
            {risks.map((risk, index) => (
              <li key={index}>
                <p>Risk Title: {risk.RiskTitle[0]}</p>
                {/* Display other risk properties here */}
/*              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home; */
