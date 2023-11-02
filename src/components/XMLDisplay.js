import React from 'react';

function XMLDisplay({ data }) {
  if (!data || !data.Project || !data.Project.Risks || !data.Project.Risks[0] || !data.Project.Risks[0].Risk) {
    return <div>No risks found</div>;
  }

  const risks = data.Project.Risks[0].Risk.map((risk, index) => (
    <div key={index}>
      <p>Risk ID: {risk.RiskId[0]}</p>
      <p>Risk Title: {risk.RiskTitle[0]}</p>
    </div>
  ));

  return (
    <div>
      <h2>Risk Report</h2>
      {risks}
    </div>
  );
}

export default XMLDisplay;
