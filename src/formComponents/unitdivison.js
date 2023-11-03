import React from "react";

export function AddUnitDivision() {
    return (
      <div className="unit-division-container">
        <div className="unit-division-title-bar">Add Unit Division</div>
        <input
          type="text"
          placeholder="Unit/division"
          className="unit-division-input"
        />
        <select className="unit-division-select">
          <option value="" disabled selected>
            Under
          </option>
          {/* Additional options can be added here */}
        </select>
        <div className="unit-division-btn-container">
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
        <div className="form-title-bar">Add new branch</div>
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
