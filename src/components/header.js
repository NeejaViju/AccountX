export default function Header() {
    return (
      <div className="company-profile-container">
        <h1 className="company-profile-title">Company Profile</h1>
        <div className="company-type-section">
          <span className="company-type-text">Company Type</span>
          <input
            type="radio"
            id="registered"
            name="companyType"
            className="radio-btn"
            defaultChecked
          />
          <label htmlFor="registered" className="radio-label">
            Registered
          </label>
          <input
            type="radio"
            id="unregistered"
            name="companyType"
            className="radio-btn"
          />
          <label htmlFor="unregistered" className="radio-label">
            Unregistered
          </label>
        </div>
      </div>
    );
  }