export default function AddNewDesignation() {
    return (
      <div className="form-container">
        <div className="form-title-bar">Add New Designation</div>
        <input type="text" placeholder="Designation Name" className="form-input" />
        <select className="form-select">
          <option value="" disabled >
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