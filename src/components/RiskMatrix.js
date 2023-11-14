import React, { useContext } from 'react';
import RiskDataContext from './RiskDataContext';
import '../styles/RiskMatrix.css';

function RiskMatrix() {
  const { riskData } = useContext(RiskDataContext);

  if (!riskData) {
    return null;
  }

  // Create a 5x5 matrix initialized with zeros
  const riskMatrix = Array.from({ length: 5 }, () => Array(5).fill(0));

  // Populate the matrix based on risk data
  riskData.Project.Risks[0].Risk.forEach((risk) => {
    const likelihood = parseInt(risk.Steps[0].MitigationStep[0].Likelihood, 10);
    const impact = parseInt(risk.Steps[0].MitigationStep[0].Impact, 10);

    riskMatrix[impact - 1][likelihood - 1]++;
  });

  return (
    <div className="risk-map">
      <h2>Risk Map</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Low</th>
            <th>Minor</th>
            <th>Mod</th>
            <th>Signif</th>
            <th>High</th>
          </tr>
        </thead>
        <tbody>
          {riskMatrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{['Low', 'Minor', 'Mod', 'Signif', 'High'][rowIndex]}</td>
              {row.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RiskMatrix;
