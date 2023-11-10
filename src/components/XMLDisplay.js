import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/XMLDisplay.css';
import RiskDataContext from './RiskDataContext';

function XMLDisplay({ data }) {
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);
  const { setRiskData } = useContext(RiskDataContext);

  // Effect hook to update context with new data
  useEffect(() => {
    if (data) {
      setRiskData(data);
    }
  }, [data, setRiskData]);

  if (!data || !data.Project || !data.Project.Risks || !data.Project.Risks[0] || !data.Project.Risks[0].Risk) {
    return <div>No risks found</div>;
  }

  const projectInfo = data.Project.Risks[0].Risk.map((risk, index) => (
    <div key={index} className="project-info">
      <h2>Project Information</h2>
      {risk.ProjectName && <p><strong>Project Name:</strong> {risk.ProjectName}</p>}
      {risk.Organization && <p><strong>Organization:</strong> {risk.Organization}</p>}
      {risk.ProjectManager && <p><strong>Project Manager:</strong> {risk.ProjectManager}</p>}
      {risk.RiskOwner && <p><strong>Risk Manager:</strong> {risk.RiskOwner}</p>}
    </div>
  ))[0]; // Only take the first risk for project info

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

  const risks = data.Project.Risks[0].Risk.map((risk, index) => {
    const impactValue = risk.Steps[0].MitigationStep[0].Impact;
    return (
      <div key={index} className="risk-row" data-impact={impactValue}>
        <span>{risk.RiskId}</span>
        <span>{risk.RiskTitle}</span>
        <span>{risk.Steps[0].MitigationStep[0].Likelihood}</span>
        <span>{impactValue}</span>
        <span>{risk.Category}</span>
        <span>{risk.RiskState}</span>
      </div>
    );
  });

  return (
    <div className="risk-report">
      {projectInfo}
      <div className="risks">
        <h2>Risk Report</h2>
        <div className="risk-header">
          <span onClick={() => handleSort('RiskId', true)}>Risk ID</span>
          <span onClick={() => handleSort('RiskTitle', false)}>Risk Title</span>
          <span onClick={() => handleSort('Likelihood', true, true)}>L</span>
          <span onClick={() => handleSort('Impact', true, true)}>C</span>
          <span onClick={() => handleSort('Category', false)}>Risk Type</span>
          <span onClick={() => handleSort('RiskState', false)}>Status</span>
        </div>
        {risks}
      </div>
    </div>
  );
}

XMLDisplay.propTypes = {
  data: PropTypes.shape({
    Project: PropTypes.shape({
      Risks: PropTypes.arrayOf(
        PropTypes.shape({
          Risk: PropTypes.arrayOf(
            PropTypes.shape({
              ProjectName: PropTypes.string,
              Organization: PropTypes.string,
              ProjectManager: PropTypes.string,
              RiskOwner: PropTypes.string,
              RiskId: PropTypes.string,
              RiskTitle: PropTypes.string,
              Steps: PropTypes.arrayOf(
                PropTypes.shape({
                  MitigationStep: PropTypes.arrayOf(
                    PropTypes.shape({
                      Likelihood: PropTypes.string,
                      Impact: PropTypes.string,
                    })
                  ),
                })
              ),
              Category: PropTypes.string,
              RiskState: PropTypes.string,
            })
          ),
        })
      ),
    }),
  }).isRequired,
};

export default XMLDisplay;
