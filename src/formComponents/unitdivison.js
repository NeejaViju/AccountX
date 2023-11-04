import React, { useState } from 'react';

export function AddUnitDivision() {
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

  export function AddressTypeForm() {
    return (
      <div className="address-form-container">
        <div className="title-bar">Add New Address Type</div>
        <input type="text" placeholder="Address Name" className="address-input" />
        <select className="address-select">
          <option value="" disabled selected>
            Under
          </option>
          {/* Additional options can be added here */}
        </select>
        <div className="address-btn-container">
          <button className="btn-save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            Save
          </button>
          <button className="btn-cancel">
            <i className="fa fa-times" aria-hidden="true"></i>
            Cancel
          </button>
        </div>
      </div>
    );
  }
  
  export function AddNewBranch() {
    return (
      <div className="form-container">
        <div className="form-title-bar">Add New Branch</div>
        <input type="text" placeholder="Branch Name" className="form-input" />
        <select className="form-select">
          <option value="" disabled selected>
            Under
          </option>
          {/* Additional options can be added here */}
        </select>
        <div className="form-btn-container">
          <button className="btn-save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            Save
          </button>
          <button className="btn-cancel">
            <i className="fa fa-times" aria-hidden="true"></i>
            Cancel
          </button>
        </div>
      </div>
    );
  }


  export function AddAccountType() {
    return (
      <div className="form-container">
        <div className="form-title-bar">Add Account Type</div>
        <input type="text" placeholder="Name of Bank Account" className="form-input" />
        <select className="form-select">
          <option value="" disabled selected>
            Under
          </option>
          {/* Additional options can be added here */}
        </select>
        <div className="form-btn-container">
          <button className="btn-save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            Save
          </button>
          <button className="btn-cancel">
            <i className="fa fa-times" aria-hidden="true"></i>
            Cancel
          </button>
        </div>
      </div>
    );
  }


  export function AddNewDesignation() {
    return (
      <div className="form-container">
        <div className="form-title-bar">Add New Designation</div>
        <input type="text" placeholder="Designation Name" className="form-input" />
        <select className="form-select">
          <option value="" disabled selected>
            Under
          </option>
          {/* Additional options can be added here */}
        </select>
        <div className="form-btn-container">
          <button className="btn-save">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            Save
          </button>
          <button className="btn-cancel">
            <i className="fa fa-times" aria-hidden="true"></i>
            Cancel
          </button>
        </div>
      </div>
    );
  }