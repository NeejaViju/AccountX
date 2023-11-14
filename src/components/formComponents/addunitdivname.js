import { useState } from "react";

export default function AddUnitDivision() {
    // State for the input value
    const [unitDivisionName, setUnitDivisionName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSave = () => {
      // Implement your save logic here, like sending data to an API
      alert('Saved: ' + unitDivisionName);
      // After save you might want to clear the form or give some success message
    };
  
    const handleCancel = () => {
      console.log('Cancel button clicked'); // This should show up in the console when you click cancel.
      
      setUnitDivisionName('');
      setSelectedOption('');
      
      console.log('After reset:', unitDivisionName, selectedOption); // This won't show updated values immediately due to the async nature of setState
    };
  
  
  
    return (
      <div className="unit-division-container">
        <div className="unit-division-title-bar">Add New Unit/Division</div>
        <input
    type="text"
    placeholder="Unit/division Name"
    className="unit-division-input"
    value={unitDivisionName}
    onChange={(e) => setUnitDivisionName(e.target.value)}
  />
        <select
          className="unit-division-select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>
            Under
          </option>
          {/* Additional options should be added here */}
        </select>
        <div className="unit-division-btn-container">
          <button className="btn-save" onClick={handleSave}>
            <i className="fa fa-floppy-o" aria-hidden="true"></i> Save
          </button>
          <button className="btn-cancel" onClick={handleCancel}>
    <i className="fa fa-times" aria-hidden="true"></i> Cancel
  </button>
        </div>
      </div>
    );
  }