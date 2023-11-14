import { useState } from "react";
import { AddNewDesignation } from "./formComponents/unitdivison";

export default function PersonalDetails() {

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
            <div className="cp-input-with-icon mobile">
              <div className="inputs-container">
                <div className="choosebank-container">
                  <select>
                    <option value="miss">Miss</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="dr">Dr.</option>
                  </select>
                  <span className="dropdown-icon"></span>
                </div>
              </div>

              <input
                type="text"
                placeholder="Account Name*"
                className="custom-border"
              />
            </div>
            <span className="separator"></span>

            <input
              type="text"
              placeholder="Middle Name"
              className="custom-border"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="custom-border"
            />
          </div>

          {/* Second Row */}
          <div className="cp-row">
            <input
              type="text"
              placeholder="Father Name"
              className="custom-border"
            />
            <input
              type="text"
              placeholder="Mother Name"
              className="custom-border"
            />
            <div className="cp-input-with-dropdown">
              <select className="custom-border">
                <option value="" disabled  hidden>
                  Gender*
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <button className="dropdown-icon-right">
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
            <input type="text" placeholder="PAN" className="custom-border" />
            <input type="text" placeholder="AADHAR" className="custom-border" />
            <input type="text" placeholder="DIN" className="custom-border" />
            <div className="cp-input-with-icon">
              <input type="text" placeholder="State" className="custom-border" />
              <i
                className="fa fa-search new-search-icon-inside-input"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          {/* Fourth Row */}
          <div className="cp-row">
            <div className="cp-input-with-icon">
              <input
                type="text"
                placeholder="Nationality"
                className="custom-border"
              />
              <i
                className="fa fa-search new-search-icon-inside-input"
                aria-hidden="true"
              ></i>
            </div>

            <div className="cp-input-with-dropdown">
              <select className="custom-border">
                <option
                  value=""
                  disabled
                  hidden
                  className="custom-border"
                >
                  Designation
                </option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
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