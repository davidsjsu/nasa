import React from 'react';
import '../styles/CreateRisk.css';

function CreateRisk() {
  // Add your categories here
  const primaryCategories = ["Cost", "Programmatic", "Safety", "Schedule", "Technical", "Acquisition", "Environment", "Infrastructure", "Workforce"];
  const secondaryCategories = ["None", ...primaryCategories]; // Include None in the secondary categories

  return (
    <div className="createRiskForm">
      <h2>Risk Creation - San Jose Project</h2>
      <label>Task Name: <input type="text" /></label>
      <label>Task UID: <input type="text" /></label>
      <label>Risk Title*: <input type="text" required /></label>
      <label>Risk ID*: <input type="text" required /></label>
      <label>
        Primary Category*: 
        <select required>
          {primaryCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <label>
        Secondary Category: 
        <select>
          {secondaryCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <label>Condition (Description): <textarea></textarea></label>
      <label>If: (Cause) <textarea></textarea></label>
      <label>Then: (Effect) <textarea></textarea></label>
      <label>Identified by: <input type="text" /></label>
      <label>
        Date Identified*: 
        <input type="date" required /> {/* Changed this to an input of type date */}
      </label>
      <label>Risk Owner: <input type="text" /></label>
      <label>Key Main Risk: <input type="checkbox" /></label>
      <button>Cancel</button>
      <button>Create</button>
      <p>(Fields followed by an asterisk are required)</p>
    </div>
  );
}

export default CreateRisk;
