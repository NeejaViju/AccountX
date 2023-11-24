export default function AddressTypeForm() {
  return (
    <div className="address-form-container">
      <div className="title-bar">Add New Unit/Division</div>
      <input type="text" placeholder="Unit/Division Name" className="address-input" />
      <select className="address-select">
        <option value="" disabled >
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