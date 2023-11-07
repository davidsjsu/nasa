import React, { useState } from 'react';
import '../styles/XMLDisplay.css';

function XMLDisplay({ data }) {
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);

  if (!data || !data.Project || !data.Project.Risks || !data.Project.Risks[0] || !data.Project.Risks[0].Risk) {
    return <div>No risks found</div>;
  }

  const firstRisk = data.Project.Risks[0].Risk[0];

  const projectInfo = (
    <div className="project-info">
      <h2>Project Information</h2>
      <p><strong>Organization:</strong> {firstRisk.Organization}</p>
      <p><strong>Project Manager:</strong> {firstRisk.ProjectManager}</p>
      <p><strong>Risk Manager:</strong> {firstRisk.RiskOwner}</p>
    </div>
  );

  const handleSort = (key, isNumeric, isNested = false) => {
    const isAsc = sortKey === key ? !ascending : true;
    setSortKey(key);
    setAscending(isAsc);

    data.Project.Risks[0].Risk.sort((a, b) => {
      let valueA, valueB;
      if (isNested) {
        valueA = isNumeric ? parseInt(a.Steps[0].MitigationStep[0][key], 10) : a.Steps[0].MitigationStep[0][key]?.toString().toUpperCase();
        valueB = isNumeric ? parseInt(b.Steps[0].MitigationStep[0][key], 10) : b.Steps[0].MitigationStep[0][key]?.toString().toUpperCase();
      } else {
        valueA = isNumeric ? parseInt(a[key], 10) : a[key]?.toString().toUpperCase();
        valueB = isNumeric ? parseInt(b[key], 10) : b[key]?.toString().toUpperCase();
      }

      if (valueA < valueB) {
        return isAsc ? -1 : 1;
      }
      if (valueA > valueB) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });
  };

  const risks = data.Project.Risks[0].Risk.map((risk, index) => (
    <div key={index} className="risk-row">
      <span>{risk.RiskId}</span>
      <span>{risk.RiskTitle}</span>
      <span>{risk.Steps[0].MitigationStep[0].Likelihood}</span>
      <span>{risk.Steps[0].MitigationStep[0].Impact}</span>
      <span>{risk.Category}</span>
      <span>{risk.RiskState}</span>
    </div>
  ));

  return (
    <div className="risk-report">
      {projectInfo}
      <div className="risks">
        <h2>Risk Report</h2>
        <div className="risk-header">
          <span onClick={() => handleSort('RiskId', true)}>Risk ID</span>
          <span onClick={() => handleSort('RiskTitle', false)}>Risk Title</span>
          <span onClick={() => handleSort('Likelihood', true, true)}>Likelihood</span>
          <span onClick={() => handleSort('Impact', true, true)}>Impact</span>
          <span onClick={() => handleSort('Category', false)}>Risk Type</span>
          <span onClick={() => handleSort('RiskState', false)}>Status</span>
        </div>
        {risks}
      </div>
    </div>
  );
}

export default XMLDisplay;

