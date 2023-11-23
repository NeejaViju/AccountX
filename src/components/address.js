import { useState, useEffect } from "react";
import AddressTypeForm from "./formComponents/addaddresstype";
import AddNewBranch from "./formComponents/addbranch";
import AddUnitDivision from "./formComponents/addunitdivname";

export default function Addresses({ selectedCompany }) {
  const [data, setData] = useState({});

  useEffect(() => {
    let URL = "https://api-accountx.onrender.com/api/address/getall";
    if (selectedCompany !== "") {
      URL =
        "https://api-accountx.onrender.com/api/address/getbyaddressid/" +
        selectedCompany;
    }
    // const URL = 'https://api-accountx.onrender.com/api/address/getbyaddressid/' + selectedCompany;

    const reqData = () => fetch(URL).then((res) => res.json());
    reqData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedCompany]);

  return (
    <div>
      {/* Registered Office Address */}
      <div className="registeredOfficeAddress">
        <h3 style={{ color: "#0195B9" }}>Registered Office Address</h3>
        <AddressFields
          data={data}
          typ={"R"}
          selectedCompany={selectedCompany}
        />
      </div>

      {/* Branch Office Address */}
      <div className="branchAddresses">
        <h3 style={{ color: "#0195B9" }}>Branch Office Address</h3>
        <AddressFields
          data={data}
          typ={"B"}
          selectedCompany={selectedCompany}
        />
      </div>
    </div>
  );
  // }
}

function AddressFields({ typ }) {
  // Address Field Float
  const [inputs, setInputs] = useState({
    _comp_id: "",
    regOfficeAddress: {
      addressType: "",
      selectBranch: "",
      unitDivision: "",
      doorNo: "",
      buildingName: "",
      streetName: "",
      areaTaluk: "",
      city: "",
      state: "",
      district: "",
      pinCode: "",
      country: "",
      gstNumber: "",
      placeOfSupply: "",
    },
    branchOfficeAddress: {
      addressType: "",
      selectBranch: "",
      unitDivision: "",
      doorNo: "",
      buildingName: "",
      streetName: "",
      areaTaluk: "",
      city: "",
      state: "",
      district: "",
      pinCode: "",
      country: "",
      gstNumber: "",
      placeOfSupply: "",
    },
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
    //console.log(e.target.name + '   -    ' + e.target.value);
    // const { name, value } = e.target;
    // setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    // setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    //setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    setInputs((inputs) => ({
      ...inputs,
      regOfficeAddress: {
        ...inputs.regOfficeAddress,
        [e.target.name]: e.target.value,
      },
      branchOfficeAddress: {
        ...inputs.branchOfficeAddress,
        [e.target.name]: e.target.value,
      },
    }));
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
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
          {/* Address Type float */}
          <div className={`cp-input-with-dropdown floating-label-group`}>
            <select
              name="addressType"
              placeholder="Address Type"
              // placeholder="Address Type"
              className={`address-border ${inputs.addressType ? "filled" : ""}`}
              onChange={handleInputChange}
              // value={inputs.addressType}
              onFocus={() => handleFocus("addressType")}
              onBlur={() => handleBlur("addressType")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.addressType
                  : inputs.branchOfficeAddress?.addressType
              }
              // value={inputs.addressType}
            >
              <option value="" disabled></option>
              <option value="Head Office / Principal Place of Business">
                Head Office / Principal Place of Business
              </option>
              <option value="Factory">Factory</option>
              <option value="Registered Office">Registered Office</option>
            </select>
            <label
              htmlFor="addressType"
              className={
                focused === "addressType" || inputs.addressType
                  ? "floating"
                  : ""
              }
            >
              Address Type*
            </label>

            <button className="dropdown-icon-right">
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          {/* add button */}
          <button
            className="button-container"
            onClick={() => toggleComponent("Component1")}
          >
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>

          {/* Render the component conditionally */}
          {selectedComponent === "Component1" && (
            <div onClick={handleFormClick}>
              <AddressTypeForm />
            </div>
          )}
          {/* Select branch float */}
          <div className="cp-input-with-dropdown floating-label-group">
            <select
              name="selectBranch"
              placeholder="Select Branch"
              className={`address-border ${
                inputs.selectBranch ? "filled" : ""
              }`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("selectBranch")}
              onBlur={() => handleBlur("selectBranch")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.branch
                  : inputs.branchOfficeAddress?.branch
              }
            >
              <option value="" disabled hidden></option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Madurai">Madurai</option>
            </select>
            <label
              htmlFor="selectBranch"
              className={
                focused === "selectBranch" || inputs.selectBranch
                  ? "floating"
                  : ""
              }
            >
              Select Branch
            </label>
            <button
              className="dropdown-icon-right"
              >
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          {/* add button */}
          <button
            className="button-container"
            onClick={() => toggleComponent("Component2")}
          >
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
          {/* Render the component conditionally */}
          {selectedComponent === "Component2" && (
            <div onClick={handleFormClick}>
              <AddNewBranch />
            </div>
          )}
          {/* Unit/Division float */}
          <div className="cp-input-with-dropdown floating-label-group">
            <select
              name="unitDivision"
              placeholder="UnitDivision"
              className={`address-border ${
                inputs.unitDivision ? "filled" : ""
              }`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("unitDivision")}
              onBlur={() => handleBlur("unitDivision")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.unitDiv
                  : inputs.branchOfficeAddress?.unitDiv
              }
            >
              <option value="" disabled hidden></option>
              <option value="Electronic">Electronic</option>
              <option value="Textile">Textile</option>
              <option value="Software">Software</option>
            </select>
            <label
              htmlFor="unitDivision"
              className={
                focused === "unitDivision" || inputs.unitDivision
                  ? "floating"
                  : ""
              }
            >
              Unit/Division
            </label>
            <button
              className="dropdown-icon-right"
              >
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          {/* add button */}
          <button
            className="button-container"
            onClick={() => toggleComponent("Component3")}
          >
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>

          {/* Render the component conditionally */}
          {selectedComponent === "Component3" && (
            <div onClick={handleFormClick}>
              <AddUnitDivision />
            </div>
          )}
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="doorNo"
              placeholder="Door No*"
              className={`address-border ${inputs.doorNo ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("doorNo")}
              onBlur={() => handleBlur("doorNo")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.doorNo
                  : inputs.branchOfficeAddress?.doorNo
              }
            />
            <label
              htmlFor="doorNo"
              className={
                focused === "doorNo" || inputs.doorNo ? "floating" : ""
              }
            >
              Door No*
            </label>
          </div>
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="buildingName"
              placeholder="Building Name"
              className={`address-border ${
                inputs.buildingName ? "filled" : ""
              }`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("buildingName")}
              onBlur={() => handleBlur("buildingName")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.buildingName
                  : inputs.branchOfficeAddress?.buildingName
              }
            />
            <label
              htmlFor="buildingName"
              className={
                focused === "buildingName" || inputs.buildingName
                  ? "floating"
                  : ""
              }
            >
              Building Name
            </label>
          </div>
          <div className=" cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="streetName"
              placeholder="Street Name*"
              className={`address-border ${inputs.streetName ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("streetName")}
              onBlur={() => handleBlur("streetName")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.streetName
                  : inputs.branchOfficeAddress?.streetName
              }
            />
            <label
              htmlFor="streetName"
              className={
                focused === "streetName" || inputs.streetName ? "floating" : ""
              }
            >
              Street Name*
            </label>
          </div>
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="areaTaluk"
              placeholder="Area/Taluk*"
              className={`address-border ${inputs.areaTaluk ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("areaTaluk")}
              onBlur={() => handleBlur("areaTaluk")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.areaTaluk
                  : inputs.branchOfficeAddress?.areaTaluk
              }
            />
            <label
              htmlFor="areaTaluk"
              className={
                focused === "areaTaluk" || inputs.streetName ? "floating" : ""
              }
            >
              Area/Taluk*
            </label>
          </div>
        </div>
        {/* Third Row */}
        <div className="cp-row">
          <div className=" cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="city"
              placeholder="City*"
              className={`address-border ${inputs.city ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("city")}
              onBlur={() => handleBlur("city")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.city
                  : inputs.branchOfficeAddress?.city
              }
            />
            <label
              htmlFor="city"
              className={focused === "city" || inputs.city ? "floating" : ""}
            >
              City*
            </label>
          </div>
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="state"
              placeholder="State*"
              className={`address-border ${inputs.state ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("state")}
              onBlur={() => handleBlur("state")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.state
                  : inputs.branchOfficeAddress?.state
              }
            />
            <label
              htmlFor="state"
              className={focused === "state" || inputs.city ? "floating" : ""}
            >
              State*
            </label>
            <i
              className="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="district"
              placeholder="District*"
              className={`address-border ${inputs.district ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("district")}
              onBlur={() => handleBlur("district")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.district
                  : inputs.branchOfficeAddress?.district
              }
            />
            <label
              htmlFor="district"
              className={
                focused === "district" || inputs.district ? "floating" : ""
              }
            >
              District*
            </label>
            <i
              className="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="pinCode"
              placeholder="PIN Code*"
              className={`address-border ${inputs.pinCode ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("pinCode")}
              onBlur={() => handleBlur("pinCode")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.pinCode
                  : inputs.branchOfficeAddress?.pinCode
              }
            />
            <label
              htmlFor="pinCode"
              className={
                focused === "pinCode" || inputs.pinCode ? "floating" : ""
              }
            >
              PIN Code*
            </label>
          </div>
        </div>

        {/* Fourth row */}
        <div className="cp-row">
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="country"
              placeholder="Country*"
              className={`address-border ${inputs.country ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("country")}
              onBlur={() => handleBlur("country")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.country
                  : inputs.branchOfficeAddress?.country
              }
            />
            <label
              htmlFor="country"
              className={focused === "country" || inputs.city ? "floating" : ""}
            >
              Country*
            </label>
            <i
              className="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <div className="floating-label-group">
            <input
              type="text"
              name="gstNumber"
              placeholder="GST Number*"
              className={`address-border ${inputs.gstNumber ? "filled" : ""}`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("gstNumber")}
              onBlur={() => handleBlur("gstNumber")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.gstNumber
                  : inputs.branchOfficeAddress?.gstNumber
              }
              readOnly
            />
            <label
              htmlFor="gstNumber"
              className={
                focused === "gstNumber" || inputs.gstNumber ? "floating" : ""
              }
            >
              GST Number*
            </label>
          </div>
          <div className="cp-input-with-icon floating-label-group">
            <input
              type="text"
              name="placeOfSupply"
              placeholder="Place of Supply*"
              className={`address-border ${
                inputs.placeOfSupply ? "filled" : ""
              }`}
              onChange={handleInputChange}
              onFocus={() => handleFocus("placeOfSupply")}
              onBlur={() => handleBlur("placeOfSupply")}
              value={
                typ === "R"
                  ? inputs.regOfficeAddress?.placeOfSupply
                  : inputs.branchOfficeAddress?.placeOfSupply
              }
            />
            <label
              htmlFor="placeOfSupply"
              className={
                focused === "placeOfSupply" || inputs.placeOfSupply
                  ? "floating"
                  : ""
              }
            >
              Place of Supply*
            </label>
            <i
              className="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
