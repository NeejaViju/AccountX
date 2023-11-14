import { useState, useRef } from "react";
import uploadIcon from "../icons/Icon feather-upload@2x.png";

export default function CompanyProfile({ comProfile, selectedCompany }) {
  const [inputs, setInputs] = useState({
    gstNumber: "",
    companyType: "",
    companyId: "",
    businessTradeName: "",
    businessLegalName: "",
    mobileNumber: "",
    businessEmail: "",
    industry: "",
  });
  const [focused, setFocused] = useState("");
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);

  if (selectedCompany !== "") {
    
    const selCompany = comProfile.filter(company => (company._id === selectedCompany));
    /*Floating Label*/
    const handleFocus = (fieldName) => {
      setFocused(fieldName);
    };

    const handleBlur = (fieldName) => {
      if (!inputs[fieldName]) {
        setFocused("");
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    /*file upload*/
    const handleLogoUpload = (event) => {
      const file = event.target.files[0];
      if (
        file &&
        file.type.startsWith("image/") &&
        file.size <= 5 * 1024 * 1024
      ) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogo(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image that is under 5MB.");
      }
    };
    return (
      <div className="cp-company-container">
        <div className="cp-column">
          {/* First Row */}
          <div className="cp-row">
            {/* GST Number Input */}
            <div className="floating-label-group">
              <input
                type="text"
                name="gstNumber"
                placeholder="Enter GST Number"
                className={`address-border ${inputs.gstNumber ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("gstNumber")}
                onBlur={() => handleBlur("gstNumber")}
                readOnly
                value={selCompany[0].gstNumber}
              />
              {/* {comProfile !== undefined ? selCompany.gstNumber : ""} */}
              <label
                htmlFor="gstNumber"
                className={
                  focused === "gstNumber" || inputs.gstNumber ? "floating" : ""
                }
              >
                GST Number*
              </label>
            </div>

            {/* Company Type Dropdown */}
            <div className="cp-input-with-dropdown floating-label-group">
              <select
                name="companyType"
                className={`address-border ${inputs.companyType ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("companyType")}
                onBlur={() => handleBlur("companyType")}
                value={selCompany[0].companyType}
              >
                {/* {comProfile[indx].companyType} */}
                <option value="" disabled></option>
                <option value="Type1">Type 1</option>
                <option value="Type2">Type 2</option>
                <option value="Type3">Type 3</option>
              </select>
              <label
                htmlFor="companyType"
                className={
                  focused === "companyType" || inputs.companyType ? "floating" : ""
                }
              >
                Company Type*
              </label>
              <button className="dropdown-icon-right">
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>

            {/* Company ID Input */}
            <div className="floating-label-group">
              <input
                type="text"
                name="companyId"
                placeholder="Company ID"
                className={`address-border ${inputs.companyId ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("companyId")}
                onBlur={() => handleBlur("companyId")}
                readOnly
                value={selCompany[0].companyID}
              />
              {/* {comProfile[indx].companyID} */}
              <label
                htmlFor="companyId"
                className={
                  focused === "companyId" || inputs.companyId ? "floating" : ""
                }
              >
                Company ID
              </label>
            </div>
          </div>
          {/* Second Row */}
          <div className="cp-row">
            <input
              type="text"
              placeholder="Business Trade Name*"
              className="address-border"
              value={selCompany[0].businessTradeName}
            />
            {/* {comProfile[indx].businessTradeName} */}
            <input
              type="text"
              placeholder="Business Legal Name*"
              className="address-border"
              value={selCompany[0].businessLegalName}
            />
            {/* {comProfile[indx].businessLegalName} */}
          </div>

          {/* Third Row */}
          <div className="cp-row">
            <div className="cp-input-with-icon mobile">
              <div className="inputs-container">
                <div className="mobileNumer-dropdown">
                  <select className="mobileDropDown">
                    <option value="miss">+91</option>
                    <option value="miss">+11</option>
                  </select>
                  <span className="dropdown-icon"></span>
                </div>
              </div>
              <input type="text" placeholder="Mobile Number*"
              value={selCompany[0].mobileNumber} />
              {/* {comProfile[indx].mobileNumber} */}
            </div>
            <span className="separator"></span>
            <input
              type="email"
              placeholder="Business Email*"
              className="address-border"
              value={selCompany[0].businessEmail}
            // {comProfile[indx].businessEmail}
            />
            <div className="cp-input-with-icon">
              <input
                type="text"
                placeholder="Industry"
                className="address-border"
                value={selCompany[0].industry}
              // {comProfile[indx].industry}
              />
              <i
                className="fa fa-search new-search-icon-inside-input"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>

        <div className="cp-label-box">
          {logo ? (
            <img src={logo} alt="Uploaded logo" className="uploaded-logo" />
          ) : (
            <div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleLogoUpload}
                style={{ display: "none" }}
              />

              <button
                className="upload-btn"
                onClick={() => fileInputRef.current.click()}
              >
                <i className="fa fa-apple" aria-hidden="true"></i> {/* Apple logo */}
                <div className="upload-section">
                  {" "}
                  {/* Wrap upload icon and text */}
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Upload Logo
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

}