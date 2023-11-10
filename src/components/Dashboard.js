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

  // The pie chart logic should be the same as in your original Dashboard component.
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

  return (
    <div className="dashboard">
      <div className="risk-report-section">
        <h2>Risk Report</h2>
        <div className="risk-report">
          <div className="risk-header">
            <span onClick={() => handleSort('RiskId', true)}>Risk ID</span>
            <span onClick={() => handleSort('RiskTitle', false)}>Risk Title</span>
            <span onClick={() => handleSort('Likelihood', true, true)}>L</span>
            <span onClick={() => handleSort('Impact', true, true)}>I</span>
            <span onClick={() => handleSort('Category', false)}>Risk Type</span>
            <span onClick={() => handleSort('RiskState', false)}>Status</span>
          </div>
          {risks.map((risk, index) => (
            <div key={index} className="risk-row" data-impact={risk.Steps[0].MitigationStep[0].Impact}>
              <span>{risk.RiskId}</span>
              <span>{risk.RiskTitle}</span>
              <span>{risk.Steps[0].MitigationStep[0].Likelihood}</span>
              <span>{risk.Steps[0].MitigationStep[0].Impact}</span>
              <span>{risk.Category}</span>
              <span>{risk.RiskState}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="risk-pie-chart-section">
        <h2>Risk Category Spread</h2>
        <div className="risk-pie-chart">
          <Pie data={pieData} options={{ maintainAspectRatio: true, responsive: true }} />
        </div>
      </div>
    </div>
  );
}  
export default Dashboard;