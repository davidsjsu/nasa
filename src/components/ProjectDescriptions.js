import React from 'react';
import "../styles/ProjectDescriptions.css";

function ProjectDescriptions() {

  const handleApplyClick = () => {
    alert('Apply Success!');
  };

  const handleOkClick = () => {
    alert('OK !');
  };

  const handleCancelClick = () => {
    alert('Cancel!');
  };
    // Sample initial state (adjust as necessary)
    const initialData = {
        cost: Array(5).fill(''),
        programmatic: Array(5).fill(''),
        safety: Array(5).fill(''),
        schedule: Array(5).fill(''),
        technical: Array(5).fill(''),
        acquisition: Array(5).fill(''),
        environment: Array(5).fill(''),
        infrastructure: Array(5).fill(''),
        workforce: Array(5).fill('')
    };

    const [data, setData] = React.useState(initialData);

    const handleInputChange = (category, index, event) => {
        const newData = {...data};
        newData[category][index] = event.target.value;
        setData(newData);
    };

    return (
        <div className="project-descriptions">
            <h2>Edit Risk Descriptions -</h2>
            <p>These are the risk descriptions for this Risk Registry file only. These are not global and will be applied to other Risk Registries.</p>

            <div className="table-section">
                <h3>Consequence (Impact)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Cost</th>
                            <th>Programmatic</th>
                            <th>Safety</th>
                            <th>Schedule</th>
                            <th>Technical</th>
                            <th>Acquisition</th>
                            <th>Environment</th>
                            <th>Infrastructure</th>
                            <th>Workforce</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(5).fill(0).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.keys(data).map(category => (
                                    <td key={category}>
                                        <input 
                                            type="text" 
                                            value={data[category][rowIndex]}
                                            onChange={e => handleInputChange(category, rowIndex, e)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="buttons">
        <button onClick={handleApplyClick}>Apply</button>
        <button onClick={handleOkClick}>OK</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>

    );
}

export default ProjectDescriptions;