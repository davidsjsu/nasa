import React, { useContext, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js';
import RiskDataContext from './RiskDataContext';
import '../styles/XMLDisplay.css';
import RiskMatrix from './RiskMatrix';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

function Dashboard() {
  const { riskData, setRiskData } = useContext(RiskDataContext);
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    // Any other logic you might want to run when riskData changes
  }, [riskData]);

  const handleSort = (key, isNumeric, isNested = false) => {
    const isAsc = sortKey === key ? !ascending : true;
    setSortKey(key);
    setAscending(isAsc);

    setRiskData({
      ...riskData,
      Project: {
        ...riskData.Project,
        Risks: riskData.Project.Risks.map(risk => ({
          ...risk,
          Risk: risk.Risk.sort((a, b) => {
            let valueA, valueB;
            if (isNested) {
              valueA = isNumeric ? parseInt(a.Steps[0].MitigationStep[0][key], 10) : a.Steps[0].MitigationStep[0][key]?.toString().toUpperCase();
              valueB = isNumeric ? parseInt(b.Steps[0].MitigationStep[0][key], 10) : b.Steps[0].MitigationStep[0][key]?.toString().toUpperCase();
            } else {
              valueA = isNumeric ? parseInt(a[key], 10) : a[key]?.toString().toUpperCase();
              valueB = isNumeric ? parseInt(b[key], 10) : b[key]?.toString().toUpperCase();
            }
            if (valueA < valueB) return isAsc ? -1 : 1;
            if (valueA > valueB) return isAsc ? 1 : -1;
            return 0;
          }),
        })),
      },
    });
  };

  if (!riskData) {
    return <div>No Project Selected</div>;
  }

  const risks = riskData.Project.Risks[0].Risk;

  const riskCategories = risks.reduce((acc, risk) => {
    acc[risk.Category] = (acc[risk.Category] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(riskCategories),
    datasets: [
      {
        data: Object.values(riskCategories),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#EC932F',
          '#4BC0C0'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#EC932F',
          '#4BC0C0'
        ]
      }
    ]
  };

 
  // Function to determine the class for the risk impact
  const getImpactClass = (impactValue) => {
    const impactNum = parseInt(impactValue, 10);
    return `impact-${impactNum}`;
  };

  return (
    <div className="dashboard">
      <div className="risk-report-section">
        <h2>Risk Report</h2>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('RiskId', true)}>Risk ID</th>
              <th onClick={() => handleSort('RiskTitle', false)}>Risk Title</th>
              <th onClick={() => handleSort('Likelihood', true, true)}>L</th>
              <th onClick={() => handleSort('Impact', true, true)}>I</th>
              <th onClick={() => handleSort('Category', false)}>Risk Type</th>
              <th onClick={() => handleSort('RiskState', false)}>Status</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk, index) => (
              <tr key={index} className={getImpactClass(risk.Steps[0].MitigationStep[0].Impact)}>
                <td>{risk.RiskId}</td>
                <td>{risk.RiskTitle}</td>
                <td>{risk.Steps[0].MitigationStep[0].Likelihood}</td>
                <td>{risk.Steps[0].MitigationStep[0].Impact}</td>
                <td>{risk.Category}</td>
                <td>{risk.RiskState}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="risk-pie-chart-section">
        <h2>Risk Category Spread</h2>
        <div className="risk-pie-chart">
          <Pie data={pieData} options={{ maintainAspectRatio: true, responsive: true, aspectRatio: 3 }}  />
        </div>
        <RiskMatrix />
      </div>
    </div>
  );
}

export default Dashboard;
