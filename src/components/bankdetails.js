import { useState, useRef, useEffect } from "react";
import AddAccountType from "./formComponents/unitdivison";

export default function BankDetails() {
  // Bank Field Float

  const [inputs, setInputs] = useState({
    accountName: "",
    accountNumber: "",
    ifsc: "",
    doorNo: "",
    bankName: "",
    branchName: "",
    accountType: "",
    upiId: "",
  });
  const [focused, setFocused] = useState("");
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);
  const [inputFocus, setInputFocus] = useState({
    accountName: false,
    accountNumber: false,
    ifsc: false,
    // Add similar properties for other input fields
  });
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

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const toggleComponent = (componentName) => {
    if (selectedComponent === componentName) {
      setSelectedComponent(null); // Hide the component if it's already visible
    } else {
      setSelectedComponent(componentName); // Show the selected component
    }
  };

  const getInputClassName = (fieldName) => {
    return `customBank-border ${
      inputFocus[fieldName] || inputs[fieldName] ? "has-data" : "empty"
    }`;
  };

  const getLabelClassName = (fieldName) => {
    return `${inputFocus[fieldName] || inputs[fieldName] ? "floating" : ""}`;
  };

  const handleInputFocus = (fieldName) => {
    setInputFocus({ ...inputFocus, [fieldName]: true });
  };

  const handleInputBlur = (fieldName) => {
    setInputFocus({ ...inputFocus, [fieldName]: false });
  };

  return (
    <div className="bankDetails">
      <h3 style={{ color: "#A666F8" }}>Bank Account Details</h3>
      <div className="cp-company-container">
        <div className="cp-column">
          {/* First Row */}

          <div className="cp-row" style={{ display: "flex" }}>
            <div className="cp-input-with-icon bank">
              <div className="inputs-container">
                {/* <div className="chooseBank-container"> */}
                <select className="mobileDropDown">
                  <option value="miss">Miss.</option>
                  <option value="mr">Mr.</option>
                  <option value="miss">Mrs.</option>
                  <option value="miss">Dr.</option>
                  <option value="miss">Er.</option>
                  <option value="miss">Prof.</option>
                  <option value="miss">M/s.</option>
                </select>
                <span class="dropdown-icon"></span>
                {/* </div> */}
              </div>
              {/* Account Name Float */}
              <div className="floating-label-bank">
                <input
                  type="text"
                  name="accountName"
                  placeholder="Account Name*"
                  className={`customBank-border ${
                    inputs.accountName ? "filled" : ""
                  }`}
                  onChange={handleInputChange}
                  value={inputs.accountName}
                  onFocus={() => handleInputFocus("accountName")}
                  onBlur={() => handleInputBlur("accountName")}
                />
                <label
                  htmlFor="accountName"
                  className={
                    focused === "accountName" || inputs.accountName
                      ? "floating"
                      : ""
                  }
                >
                  Account Name*
                </label>
              </div>
            </div>
            <span className="separator"></span>

            {/* Account Number Float */}
            <div className="cp-input-with-dropdown floating-label-bank">
              <input
                type="text"
                name="accountNumber"
                placeholder="Account Number*"
                className={`customBank-border ${
                  inputs.accountNumber ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("accountNumber")}
                onBlur={() => handleBlur("accountNumber")}
                value={inputs.accountNumber}
              />
              <label
                htmlFor="accountNumber"
                className={
                  focused === "accountNumber" || inputs.accountNumber
                    ? "floating"
                    : ""
                }
              >
                Account Number*
              </label>
            </div>

            {/* IFSC Float */}

            <div className=" cp-input-with-dropdown  floating-label-bank">
              <input
                type="text"
                name="ifsc"
                placeholder="IFSC*"
                className={`customBank-border ${inputs.ifsc ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("ifsc")}
                onBlur={() => handleBlur("ifsc")}
                value={inputs.ifsc}
              />
              <label
                htmlFor="ifsc"
                className={focused === "ifsc" || inputs.ifsc ? "floating" : ""}
              >
                IFSC*
              </label>

              <i
                className="fa fa-search new-search-icon-inside-input"
                style={{ color: "#A666F8" }}
                aria-hidden="true"
              ></i>
            </div>
          </div>

          {/* Second Row */}
          <div className="cp-row">
            <div className="bank-logo-container">
              <div className="circle">
                <div className="line"></div>
              </div>
            </div>
            {/* Bank Name Float */}
            <div className="cp-input-with-dropdown  floating-label-bank">
              <input
                type="text"
                name="bankName"
                placeholder="Bank Name*"
                className={`customBank-border ${
                  inputs.bankName ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("bankName")}
                onBlur={() => handleBlur("bankName")}
                value={inputs.bankName}
              />
              <label
                htmlFor="bankName"
                className={
                  focused === "bankName" || inputs.bankName ? "floating" : ""
                }
              >
                Bank Name*
              </label>
            </div>
            {/* Branch Name Float */}
            <div className="cp-input-with-dropdown  floating-label-bank">
              <input
                type="text"
                name="branchName"
                placeholder="Branch Name"
                className={`customBank-border ${
                  inputs.branchName ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("branchName")}
                onBlur={() => handleBlur("branchName")}
                value={inputs.branchName}
              />
              <label
                htmlFor="branchName"
                className={
                  focused === "branchName" || inputs.branchName
                    ? "floating"
                    : ""
                }
              >
                Branch Name
              </label>
              <i
                className="fa fa-search new-search-icon-inside-input"
                style={{ color: "#A666F8" }}
                aria-hidden="true"
              ></i>
            </div>
            {/* Account Type Float */}
            <div className="cp-input-with-dropdown floating-label-bank">
              <select
                name="accountType"
                className={`customBank-border ${
                  inputs.accountType ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("accountType")}
                onBlur={() => handleBlur("accountType")}
                value={inputs.accountType}
              >
                <option value="" disabled hidden></option>
                <option value="type1">Saving</option>
                <option value="type2">Current Account</option>
                <option value="type3">OD [Over Draft]</option>
                <option value="type2">CC [Cash Credit]</option>
                <option value="type2">Salary</option>
                <option value="type2">Fixed Deposit[FD]</option>
                <option value="type2">Recurring Deposit[RD]</option>
              </select>
              <label
                htmlFor="accountType"
                className={
                  focused === "accountType" || inputs.accountType
                    ? "floating"
                    : ""
                }
              >
                Account Type*
              </label>
              <button
                className="dropdown-icon-right"
                style={{ color: "#A666F8" }}
              >
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
            <button
              className="bank-button-container"
              onClick={() => toggleComponent("Component5")}
            >
              <div className="add-plus-container">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </div>
            </button>
            {selectedComponent === "Component5" && (
              <div onClick={handleFormClick}>
                <AddAccountType />
              </div>
            )}
          </div>
          {/* Third Row */}
          <div className="cp-row">
            <div>
              {/* UPI ID Float */}
              <div className=" floating-label-bank">
                <input
                  type="text"
                  name="upiId"
                  placeholder="UPI ID"
                  className={`customBank-border ${
                    inputs.upiId ? "filled" : ""
                  }`}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("upiId")}
                  onBlur={() => handleBlur("upiId")}
                  value={inputs.upiId}
                />
                <label
                  htmlFor="upiId"
                  className={
                    focused === "upiId" || inputs.upiId ? "floating" : ""
                  }
                >
                  UPI ID
                </label>
              </div>
            </div>
          </div>
          <div className="cp-row">
            <div>
              <label className="container">
                <input type="checkbox" />
                <span className="checkmark-info"></span>
              </label>
            </div>
            <div>
              <label>Set as Primary Account</label>
            </div>
          </div>
          <div className="cp-row">
            <div>
              <button className="upload-addBank">ADD BANK ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
