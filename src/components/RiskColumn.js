/*import React, { useState } from 'react';
import xml2js from 'xml2js';

function RiskColumn({ projectData }) {
  const [riskData, setRiskData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const xmlData = event.target.result;
      parseXml(xmlData);
    };

    reader.readAsText(file);
  };

  const parseXml = (xmlData) => {
    const parser = new xml2js.Parser({ explicitArray: false });

    parser.parseString(xmlData, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
      } else {
        setRiskData(result.Project.Risks.Risk);
      }
    });
  };

  return (
    <div className="risk-column">
      <h2>Risk Column</h2>
      <input type="file" accept=".srm" onChange={handleFileUpload} />

      {projectData && (
        <table>
          <thead>
            <tr>
              <th>Risk ID</th>
              <th>Risk Title</th>
              <th>L</th>
              <th>C</th>
              <th>Risk Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {riskData.map((risk, index) => (
              <tr key={index}>
                <td>{risk.RiskId}</td>
                <td>{risk.RiskTitle}</td>
                <td>{risk.Likelihood}</td>
                <td>{risk.Impact}</td>
                <td>{risk.Category}</td>
                <td>{risk.RiskState}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RiskColumn;*/
