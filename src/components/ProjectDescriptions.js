import React, { useState } from 'react';
import "../styles/ProjectDescriptions.css";

function ProjectDescriptions() {

    const handleApplyClick = () => {
        alert('Saved successfully!');
        // can redirect or close the page after this
    };

    const handleClearClick = () => {
        if (window.confirm('Are you sure you want to clear?')) {
            setConsequenceData(initialConsequenceData);
            setLikelihoodData(initialLikelihoodData);
        }
    };

    const handleExitClick = () => {
        if (window.confirm('Exiting without saving any changes?')) {
            // need code to exit the page.
            // This can be routing to another page or refreshing the current page or other logic as per  app's need.
            window.location.reload();  // refresh the current page
        }
    };

    const createData = (prefix) => ({
        [`${prefix}_Cost`]: Array(5).fill(''),
        [`${prefix}_Programmatic`]: Array(5).fill(''),
        [`${prefix}_Safety`]: Array(5).fill(''),
        [`${prefix}_Schedule`]: Array(5).fill(''),
        [`${prefix}_Technical`]: Array(5).fill(''),
        [`${prefix}_Acquisition`]: Array(5).fill(''),
        [`${prefix}_Environment`]: Array(5).fill(''),
        [`${prefix}_Infrastructure`]: Array(5).fill(''),
        [`${prefix}_Workforce`]: Array(5).fill(''),
        [`${prefix}_Other`]: Array(5).fill('')
    });

    const initialConsequenceData = createData('consequence');
    const initialLikelihoodData = createData('likelihood');

    const [consequenceData, setConsequenceData] = useState(initialConsequenceData);
    const [likelihoodData, setLikelihoodData] = useState(initialLikelihoodData);

    const handleInputChange = (type, category, index, event) => {
        if (type === "consequence") {
            const newData = {...consequenceData};
            newData[category][index] = event.target.value;
            setConsequenceData(newData);
        } else {
            const newData = {...likelihoodData};
            newData[category][index] = event.target.value;
            setLikelihoodData(newData);
        }
    };

    const renderTable = (title, type, data) => (
        <div className="table-section">
            <h3>{title}</h3>
            <table>
                <thead>
                    <tr>
                        {Object.keys(data).map(category => <th key={category}>{category.split('_')[1]}</th>)}
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
                                        onChange={e => handleInputChange(type, category, rowIndex, e)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="project-descriptions">
            <h2>Edit Risk Descriptions -</h2>
            <p>These are the risk descriptions for this Risk Registry file only. These are not global and will not be applied to other Risk Registries.</p>

            {renderTable("Consequence (Impact)", "consequence", consequenceData)}
            {renderTable("Likelihood (Probability)", "likelihood", likelihoodData)}

            <div className="buttons">
                <button onClick={handleApplyClick}>Apply & Save</button>
                <button onClick={handleClearClick}>Clear</button>
                <button onClick={handleExitClick}>Exit</button>
            </div>
        </div>
    );
}

export default ProjectDescriptions;