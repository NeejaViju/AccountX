import { useState } from "react";
import { AddNewDesignation } from "./formComponents/unitdivison";

export default function PersonalDetails() {
  const [inputs, setInputs] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dob: "",
    pan: "",
    aadhar: "",
    din: "",
    state: "",
    nationality: "",
    designation: "",
  });
  const [focused, setFocused] = useState("");

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
  return (
    <div className="personalDetails">
      <h3 style={{ color: "#9B660E" }}>Personal Details</h3>
      <div className="cp-company-container">
        <div className="cp-column">
          {/* First Row */}
          <div className="cp-row">
            <div className="cp-input-with-icon personal floating-label-personal">
              <div className="inputs-container">
                {/*  <div className="choosebank-container">*/}
                  <select
                    className="mobileDropDown"                    
                  >
                    <option value="miss">Miss.</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="dr">Dr.</option>
                    <option value="er">Er.</option>
                    <option value="prof">Prof.</option>
                    <option value="ms">Ms.</option>
                  </select>

                  <span class="dropdown-icon"></span>
               {/* </div>*/}
              </div>
              <div className="floating-label-personal">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className={`address-border ${
                    inputs.firstName ? "filled" : ""
                  }`}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("firstName")}
                  onBlur={() => handleBlur("firstName")}
                  value={inputs.firstName}
                />
                <label
                  htmlFor="firstName"
                  className={
                    focused === "firstName" || inputs.firstName
                      ? "floating"
                      : ""
                  }
                >
                  First Name*
                </label>
              </div>
              </div>
              <span className="separator"></span>
           

            {/* middlename float*/}
            <div className="cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                className={`custom-border ${inputs.middleName ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("middleName")}
                onBlur={() => handleBlur("middleName")}
                value={inputs.middleName}
              />
              <label
                htmlFor="middleName"
                className={
                  focused === "middleName" || inputs.middleName
                    ? "floating"
                    : ""
                }
              >
                Middle Name
              </label>
            </div>
            {/* last name Float */}
            <div className="cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={`custom-border ${inputs.lastName ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("lastName")}
                onBlur={() => handleBlur("lastName")}
                value={inputs.lastName}
              />
              <label
                htmlFor="lastName"
                className={
                  focused === "lastName" || inputs.lastName ? "floating" : ""
                }
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Second Row */}
          <div className="cp-row">
            {/* father name Float */}
            <div className=" cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="fatherName"
                placeholder="Father Name"
                className={`custom-border ${inputs.fatherName ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("fatherName")}
                onBlur={() => handleBlur("fatherName")}
                value={inputs.fatherName}
              />
              <label
                htmlFor="fatherName"
                className={
                  focused === "fatherName" || inputs.fatherName
                    ? "floating"
                    : ""
                }
              >
                Father Name
              </label>
            </div>
            {/* mother name Float */}
            <div className=" cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="motherName"
                placeholder="Mother Name"
                className={`custom-border ${inputs.motherName ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("motherName")}
                onBlur={() => handleBlur("motherName")}
                value={inputs.motherName}
              />
              <label
                htmlFor="motherName"
                className={
                  focused === "motherName" || inputs.motherName
                    ? "floating"
                    : ""
                }
              >
                Mother Name
              </label>
            </div>
            {/* Gender float */}
            <div className="cp-input-with-dropdown floating-label-personal">
              <select
                name="gender"
                className={`custom-border ${inputs.gender ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("gender")}
                onBlur={() => handleBlur("gender")}
                value={inputs.gender}
              >
                <option value="" disabled></option>
                <option value="type1">Male</option>
                <option value="type2">Female</option>
                <option value="type3">Others</option>
              </select>
              <label
                htmlFor="addressType"
                className={
                  focused === "addressType" || inputs.addressType
                    ? "floating"
                    : ""
                }
              >
                Gender*
              </label>
              <button
                className="dropdown-icon-right"
              >
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
          </div>
          {/* Third Row */}
          <div className="cp-row">
            {/* <input type="text" placeholder="Date of Birth" /> */}
            <input
              type="date"
              placeholder="Date of Birth*"
              className="custom-border"
            />
            {/* Pan float  */}
            <div className="cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="pan"
                placeholder="PAN"
                className={`custom-border ${inputs.pan ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("pan")}
                onBlur={() => handleBlur("pan")}
                value={inputs.pan}
              />
              <label
                htmlFor="pan"
                className={focused === "pan" || inputs.pan ? "floating" : ""}
              >
                PAN
              </label>
            </div>
            {/* AADHAR Float */}
            <div className="cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="aadhar"
                placeholder="AADHAR"
                className={`custom-border ${inputs.aadhar ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("aadhar")}
                onBlur={() => handleBlur("aadhar")}
                value={inputs.aadhar}
              />
              <label
                htmlFor="aadhar"
                className={
                  focused === "aadhar" || inputs.aadhar ? "floating" : ""
                }
              >
                AADHAR
              </label>
            </div>
            {/* DIN Float */}
            <div className="cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="din"
                placeholder="DIN"
                className={`custom-border ${inputs.din ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("din")}
                onBlur={() => handleBlur("din")}
                value={inputs.din}
              />
              <label
                htmlFor="din"
                className={focused === "din" || inputs.din ? "floating" : ""}
              >
                DIN
              </label>
            </div>
            <div className="cp-input-with-dropdown floating-label-personal">
              <input
                type="text"
                name="state"
                placeholder="State"
                className={`custom-border ${inputs.state ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("state")}
                onBlur={() => handleBlur("state")}
                value={inputs.state}
              />
              <label
                htmlFor="state"
                className={
                  focused === "state" || inputs.state ? "floating" : ""
                }
              >
                State
              </label>
              <i
                className="fa fa-search new-search-icon-inside-input"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          {/* Fourth Row */}
          <div className="cp-row">
            <div className="cp-input-with-dropdown  floating-label-personal">
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                className={`custom-border ${
                  inputs.nationality ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("nationality")}
                onBlur={() => handleBlur("nationality")}
                value={inputs.nationality}
              />
              <label
                htmlFor="nationality"
                className={
                  focused === "nationality" || inputs.nationality
                    ? "floating"
                    : ""
                }
              >
                Nationality
              </label>

              <i
                class="fa fa-search new-search-icon-inside-input"
                aria-hidden="true"
              ></i>
            </div>

            {/* Designation Float */}

            <div className="cp-input-with-dropdown floating-label-personal">
              <select
                name="designation"
                className={`custom-border ${
                  inputs.designation ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("designation")}
                onBlur={() => handleBlur("designation")}
                value={inputs.designation}
              >
                <option value="" disabled></option>
                <option value="type1">Proprietor</option>
                <option value="type2">Director</option>
                <option value="type3">Chairman</option>
                <option value="type4">CEO</option>
                <option value="type5">Partner</option>
                <option value="type6">Salesman</option>
                <option value="type7">Cashier</option>
              </select>
              <label
                htmlFor="designation"
                className={
                  focused === "designation" || inputs.designation
                    ? "floating"
                    : ""
                }
              >
                Designation
              </label>
              <button className="dropdown-icon-right">
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
            {/* add button */}
            <button
              className="personal-button-container"
              onClick={() => toggleComponent("Component4")}
            >
              <div className="add-plus-container">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </div>
            </button>

            {selectedComponent === "Component4" && (
              <div onClick={handleFormClick}>
                <AddNewDesignation />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
