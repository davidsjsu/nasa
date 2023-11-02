import React, { useState } from 'react';
import "../styles/NewRiskForm.css";

function NewRiskForm() {
  const [formData, setFormData] = useState({
    taskName: '',
    riskTitle: '',
    riskID: '',
    category: 'Cost',
    condition: '',
    if: '',
    then: '',
    identifiedBy: '',
    riskOwner: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., by sending data to an API or parent component.
  };

  return (
    <div className="new-risk-form">
      <h2>Create New Risk</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name</label>
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Risk Title</label>
          <input
            type="text"
            name="riskTitle"
            value={formData.riskTitle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Risk ID</label>
          <input
            type="text"
            name="riskID"
            value={formData.riskID}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="Cost">Cost</option>
            <option value="Programmatic">Programmatic</option>
            {/* Add other options */}
          </select>
        </div>
        <div>
          <label>Condition</label>
          <textarea
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>If</label>
          <textarea name="if" value={formData.if} onChange={handleInputChange} />
        </div>
        <div>
          <label>Then</label>
          <textarea
            name="then"
            value={formData.then}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Identified By</label>
          <input
            type="text"
            name="identifiedBy"
            value={formData.identifiedBy}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Risk Owner</label>
          <input
            type="text"
            name="riskOwner"
            value={formData.riskOwner}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewRiskForm;
