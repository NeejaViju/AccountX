import React, { useState, useRef } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./style/AddressTypeForm.css";
import "./style/ButtonList.css";
import uploadIcon from "./icons/Icon feather-upload@2x.png";
import {
  AddUnitDivision,
  AddressTypeForm,
  AddNewBranch,
} from "./formComponents/unitdivison";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// App Component
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

// NavBar Component
function NavBar() {
  return (
    <div className="new-navbar">
      <div className="new-logo">LOGO</div>

      {/* Add Icon */}
      <div className="icon-container new-add-icon-container">
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </div>

      <div className="icon-container new-add-icon-container">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
      </div>

      <div className="icon-container new-search-icon-container">
        <i
          className="fa fa-search new-search-icon-inside-input"
          aria-hidden="true"
        ></i>
        <input
          type="text"
          placeholder="Search..."
          className="new-search-input"
        />
      </div>

      <div className="new-profile-container">
        <i className="fa fa-bell new-bell-icon" aria-hidden="true"></i>
        <select className="new-profile-dropdown">
          <option>ABC Private Limited</option>
        </select>
        <i className="fa fa-cog new-cog-icon" aria-hidden="true"></i>
        <i className="fa fa-bars new-bars-icon" aria-hidden="true"></i>
      </div>
    </div>
  );
}

// SideBar Component
function SideBar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div className="sidebar">
      {/* <h3>📊 Dashboard</h3>

          <div 
              className="menu-item master"
              onClick={() => setShowSubmenu(!showSubmenu)}
          >
              🛠 Masters
          </div> */}

      {showSubmenu && (
        <div className="submenu">
          <div>Company Profile</div>
          <div>Item Master</div>
          <div>Ledger Master</div>
          <div>Account Master</div>
          <div>Tax Master</div>
          <div>Employee Master</div>
          <div>Opening Balance</div>

          {/* ... Add the other submenu items similarly ... */}
        </div>
      )}

      {/* <div className="menu-item">🛒 Sales</div>
          <div className="menu-item">📦 Purchases</div>
          <div className="menu-item">💼 Expenses</div>
          <div className="menu-item">🏦 Banking</div>
          <div className="menu-item">✅ Approvals</div>
          <div className="menu-item">💹 Accounts</div> */}
      {/* ... Repeat similar divs for the other sections ... */}
      {/* <div className="menu-item">📊 Reports</div>
          <div className="menu-item">📃 e-Way Bills</div>
          <div className="menu-item">📜 e-Invoices</div>
          <div className="menu-item">📋 Task</div>
          <div className="menu-item">🎉 Promotions</div>
          <div className="menu-item">📁 Tax Filings</div>
          <div className="menu-item">📄 Subscriptions</div> */}
    </div>
  );
}

// MainContent Component
function MainContent() {
  return (
    <div className="main-content">
      <CompanyProfileHeader />
      <CompanyProfile />
      <MenuBar />
      <ButtonList />
      <AddUnitDivision />
      <AddressTypeForm />
      <AddNewBranch />

      {/* <AddressBranchForm/> */}
      {/* <Addresses />
      <PersonalDetails />
      <BusinessLegalInfo />
      <BankAccountDetails />
      <SigningContactPerson />
      <ActionButtons /> */}
    </div>
  );
}

function CompanyProfileHeader() {
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

function CompanyProfile() {
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 5 * 1024 * 1024
    ) {
      // Checking if it's an image and is under 5MB
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
          <input type="text" placeholder="GST Number*" className="address-border" />
          <div className="cp-input-with-dropdown">
            <select className="address-border">
              <option value="" disabled selected hidden>
                Company Type*
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            <button className="dropdown-icon-right">
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>

          <input type="text" placeholder="Company ID" className="address-border" /> 
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <input type="text" placeholder="Business Trade Name*" className="address-border" />
          <input type="text" placeholder="Business Legal Name*" className="address-border" />
        </div>

        {/* Third Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <span className="country-code">+91</span>
            <input type="text" placeholder="Mobile Number*"  className="address-border"/>
          </div>
          <input type="email" placeholder="Business Email*" className="address-border"/>
          <div className="cp-input-with-icon">
            <input type="text" placeholder="Industry" className="address-border"/>
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
              <i class="fa fa-apple" aria-hidden="true"></i> {/* Apple logo */}
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

//button list
const ButtonList = () => {
  return (
    <div className="button-list">
      <button className="btn personal-details">Personal Details</button>
      <button className="btn business-info">Business Legal Information</button>
      <button className="btn bank-details">Bank Details</button>
      <button className="btn contact-persons">Contact Persons</button>
    </div>
  );
};
//
function MenuBar() {
  const [activeComponent, setActiveComponent] = useState("Addresses");

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div className="menu-bar-container">
        <button
          className={`menu-bar-button ${
            activeComponent === "Addresses" ? "active" : ""
          }`}
          onClick={() => handleClick("Addresses")}
        >
          Addresses
        </button>
        <button
          className={`menu-bar-button ${
            activeComponent === "PersonalDetails" ? "active" : ""
          }`}
          onClick={() => handleClick("PersonalDetails")}
        >
          Personal Details
        </button>
        <button
          className={`menu-bar-button ${
            activeComponent === "BusinessLegalInformation" ? "active" : ""
          } business-button`}
          onClick={() => handleClick("BusinessLegalInformation")}
        >
          Business Legal Information
        </button>
        <button
          className={`menu-bar-button ${
            activeComponent === "BankDetails" ? "active" : ""
          }`}
          onClick={() => handleClick("BankDetails")}
        >
          Bank Details
        </button>
        <button
          className={`menu-bar-button ${
            activeComponent === "ContactPersons" ? "active" : ""
          }`}
          onClick={() => handleClick("ContactPersons")}
        >
          Contact Persons
        </button>
      </div>
      {activeComponent === "Addresses" && <AddressesComponent />}
      {activeComponent === "PersonalDetails" && <PersonalDetailsComponent />}
      {activeComponent === "BusinessLegalInformation" && (
        <BusinessLegalInfoComponent />
      )}
      {activeComponent === "BankDetails" && <BankDetailsComponent />}
      {activeComponent === "ContactPersons" && <ContactPersonsComponent />}
      <FooterButtons /> {/* Place this right before the closing div */}
    </div>
  );
}

function AddressesComponent() {
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);

  return (
    <div>
      {/* Registered Office Address */}
      <div className="registeredOfficeAddress">
        <h3>Registered Office Address</h3>
        {addressFields(setIsAddressFormVisible)}
      </div>

      {/* Branch Office Address */}
      <div className="branchAddresses">
        <h3>Branch Office Address</h3>
        {addressFields(setIsAddressFormVisible)}
      </div>

      {isAddressFormVisible && (
        <div className="address-form-container">
          <div className="title-bar">Add New Address Type</div>
          <input
            type="text"
            placeholder="Address Name"
            className="address-input"
          />
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
      )}
    </div>
  );
}

function addressFields(setIsAddressFormVisible) {
  const showAddressForm = () => {
    console.log("Button clicked");
    setIsAddressFormVisible(true);
  };

  return (
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
       <div className="cp-input-with-dropdown">
            <select className="address-border">
              <option value="" disabled selected hidden>
                Address Type*
              </option>
              <option value="type1">Office Address/Principle Place of Business</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            <button
              className="dropdown-icon-right"
              onClick={() => {
                console.log("Inline click");
                setIsAddressFormVisible(true);
              }}
            >
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          {/* add button */}
          <button className="button-container">
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
          <div className="cp-input-with-dropdown">
            <select className="address-border">
              <option value="" disabled selected hidden>
                Select Branch
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            <button className="dropdown-icon-right">
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          {/* add button */}
          <button className="button-container">
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
          <div className="cp-input-with-dropdown">
            <select className="address-border">
              <option value="" disabled selected hidden>
                Unit/Division
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            <button className="dropdown-icon-right">
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          {/* add button */}
          <button className="button-container">
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <input type="text" placeholder="Door No*" className="address-border"/>
          <input type="text" placeholder="Building Name" className="address-border"/>
          <input type="text" placeholder="Street Name*" className="address-border"/>
          <input type="text" placeholder="Area/Taluk*" className="address-border"/>
        </div>

        {/* Third Row */}
        <div className="cp-row">
          <input type="text" placeholder="City*" className="address-border" />
            <div className="cp-input-with-icon">
            <input type="text" placeholder="State*" className="search-border" />
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cp-input-with-icon">
            <input type="text" placeholder="District*" className="address-border"/>
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <input type="text" placeholder="PIN Code*" className="address-border"/>
        </div>

        {/* Fourth row */}
        <div className="cp-row">
          <div className="cp-input-with-icon">
            <input type="text" placeholder="Country*" className="address-border" />
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <input type="text" placeholder="GST Number*" className="address-border"/>
          <div className="cp-input-with-icon">
            <input type="text" placeholder="Place of Supply*" className="address-border" />
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalDetailsComponent() {
  return (
    <div>
      {/* Personal Details */}
      <div className="personalDetails">
        <h3 style={{ color: "#9B660E" }}>Personal Details</h3>
        {personalDetailFields()}
      </div>
    </div>
  );
}
function personalDetailFields() {
  return (
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <div className="inputs-container">
              <div className="choosePersonal-container">
                <select>
                  <option value="miss">Miss</option>
                  <option value="miss">Mr.</option>
                  <option value="miss">Mrs.</option>
                  <option value="miss">Dr.</option>
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
              <option value="" disabled selected hidden>
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
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        {/* Fourth Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon" >
            <input type="text" placeholder="Nationality" className="custom-border" /> 
            <i
               class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true" 
            ></i>
           </div>
        
          <div className="cp-input-with-dropdown">
            <select className="custom-border">
              <option
                value=""
                disabled
                selected
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
          <button className="add-button-container">
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function BusinessLegalInfoComponent() {
  return (
    <div>
      {/* Bank Details */}
      <div className="bussinessLegalInformation">
        <h3 style={{ color: "#A3184B" }}>Business Legal Information</h3>
        {businessLegalInfoFields()}
      </div>
    </div>
  );
}
function businessLegalInfoFields() {
  return (
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon">
            <input
              type="text"
              placeholder="GST Number*"
              className="customLegal-border"
            />
          </div>

          <input
            type="text"
            placeholder="Upload GST Certificate"
            className="customLegal-border"
          />
          <input
            type="text"
            placeholder="PAN*"
            className="customLegal-border"
          />
          <input
            type="text"
            placeholder="Upload PAN"
            className="customLegal-border"
          />
        </div>
        {/* + add button */}
        {/* Second Row */}
        <div className="cp-row">
          <input type="text" placeholder="CIN" className="customLegal-border" />
          <input
            type="text"
            placeholder="CIN Certificate.pdf"
            className="customLegal-border"
          />
          <input type="text" placeholder="TAN" className="customLegal-border" />
          <input
            type="text"
            placeholder="TAN Certificate.pdf"
            className="customLegal-border"
          />
        </div>
        {/* Third Row */}
        <div className="cp-row">
          <input
            type="text"
            placeholder="MSME"
            className="customLegal-border"
          />
          <input
            type="text"
            placeholder="MSME Certificate.pdf"
            className="customLegal-border"
          />
          <input
            type="text"
            placeholder="IE Code"
            className="customLegal-border"
          />
          <input
            type="text"
            placeholder="Upload IEC Certificate"
            className="customLegal-border"
          />
        </div>
        {/* Fourth row */}
        <div className="cp-row">
          <div>
            <label>GST Applicable</label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div>
            <label>TDS Deductions</label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <label>TCS Collections</label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function BankDetailsComponent() {
  return (
    <div>
      {/* Bank Details */}
      <div className="bankDetails">
        <h3 style={{ color: "#A666F8" }}>Bank Account Details</h3>
        {bankDetailFields()}
      </div>
    </div>
  );
}
function bankDetailFields() {
  return (
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <div className="inputs-container">
              <div className="chooseBank-container">
                <select>
                  <option value="miss">M/s.</option>
                  <option value="miss">Mr.</option>
                  <option value="miss">Mrs.</option>
                  <option value="miss">Dr.</option>
                </select>
                <span className="dropdown-icon"></span>
              </div>
              <input
                type="text"
                placeholder="Account Name*"
                className="customBank-border"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Account Number*"
            className="customBank-border"
          />
          <div className="cp-input-with-icon">
            <input
              type="text"
              placeholder="IFSC*"
              className="customBank-border"
            />
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <div className="add-button-container">
            <div className="circle">
              <div className="line"></div>
            </div>
          </div>
          <div className="cp-input-with-icon">
            <input
              type="text"
              placeholder="Bank Name*"
              className="customBank-border"
            />
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cp-input-with-icon">
            <input
              type="text"
              placeholder="Branch Name"
              className="customBank-border"
            />
            <i
              class="fa fa-search new-search-icon-inside-input"
              aria-hidden="true"
            ></i>
          </div>
          <div className="cp-input-with-dropdown">
            <select className="customBank-border">
              <option value="" disabled selected hidden>
                Account Type
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
            <button className="dropdown-icon-right">
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>
          <button className="button-container">
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        {/* Third Row */}
        <div className="cp-row">
          <div>
            <input
              type="text"
              placeholder="UPI ID"
              className="customBank-border"
            />
          </div>
        </div>
        <div className="cp-row">
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <label>Set as Primary Account</label>
          </div>
        </div>
        <div className="cp-row">
          <div>
            <button class="upload-addBank">ADD BANK ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPersonsComponent() {
  return (
    <div>
      {/* Contact Details */}
      <div className="contactDetails">
        <h3 style={{ color: "#5C5831" }}>Signing & Contact Person</h3>
        {contactPersonDetailFields()}
      </div>
    </div>
  );
}
function contactPersonDetailFields() {
  // Function to handle file selection
  const handleFileUpload = (event, labelId) => {
    const file = event.target.files[0];
    if (file) {
      // Show the uploaded file name (or any other success message) in the label
      document.getElementById(labelId).innerText = `uploaded successfully`;
    }
  };

  return (
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <span className="country-code">Mrs.</span>
            <input
              type="text"
              placeholder="Person Name*"
              className="customContact-border"
            />
          </div>
          <div className="cp-input-with-dropdown">
            <input
              type="text"
              placeholder="Designation"
              className="customContact-border"
            />
          </div>
          {/* add button */}
          <button className="button-container">
            <div className="add-plus-container">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </button>
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <span className="country-code">+91</span>
            <input
              type="text"
              placeholder="Mobile Number*"
              className="customContact-border"
            />
          </div>

          <div className="cp-input-with-dropdown">
            <input
              type="text"
              placeholder="Email ID"
              className="customContact-border"
            />
          </div>

          <div className="cp-input-with-icon mobile">
            <span className="country-code">0443</span>
            <input
              type="text"
              placeholder="24816100"
              className="customContact-border"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="cp-row">
          <div>
            <label>Digital Signature</label>
            {/* Hidden file input for digital signature */}
            <input
              type="file"
              id="digital-signature-upload"
              style={{ display: "none" }}
              onChange={(event) =>
                handleFileUpload(event, "digital-signature-label")
              }
            />
            {/* Label to show file upload success message */}
            <label
              id="digital-signature-label"
              className="upload-success-msg"
            ></label>
            {/* Button to trigger file input */}
            <button
              className="upload-dg0signature"
              onClick={() =>
                document.getElementById("digital-signature-upload").click()
              }
            >
              <i className="fa fa-upload" aria-hidden="true"></i>
              Upload Digital Signature
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Name of the Person"
              className="customContact-border"
            />
          </div>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            className="customContact-border"
          />
        </div>

        {/* Fourth row */}
        <div className="cp-row">
          <div>
            <label>Signature Image</label>
            {/* Hidden file input for signature image */}
            <input
              type="file"
              id="signature-image-upload"
              style={{ display: "none" }}
              onChange={(event) =>
                handleFileUpload(event, "signature-image-label")
              }
            />
            {/* Label to show file upload success message */}
            <label
              id="signature-image-label"
              className="upload-success-msg"
            ></label>
            {/* Button to trigger file input */}
            <button
              className="upload-dg0signature"
              onClick={() =>
                document.getElementById("signature-image-upload").click()
              }
            >
              <i className="fa fa-upload" aria-hidden="true"></i>
              Upload Signature Image
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Name of the person"
              className="customContact-border"
            />
          </div>
        </div>

        {/* Fifth row */}
        <div className="cp-row">
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div>
            <label>Set as Signing Person</label>
          </div>

          <div>
            <input
              class="sample-sign"
              type="text"
              placeholder="Sample Sign"
              className="customContact-border"
            />
          </div>
        </div>

        {/* sixth row */}
        <div className="cp-row">
          <div>
            <h3 class="ISV">Invoice Sign Option</h3>
          </div>
        </div>

        {/* seventh row */}
        <div className="cp-row">
          <div>
            <label>Digital Signature</label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div>
            <label>Image Signature </label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        {/* eighth row */}
        <div className="cp-row">
          <div>
            <button class="upload-dg0signature">ADD CONTACT PERSON</button>
          </div>
        </div>
      </div>
    </div>
  );

  // const [gender, setGender] = useState('Mrs');
  // const [countryCode, setCountryCode] = useState('+91');
  // const [designation, setDesignation] = useState('Designation');
  // const [digitalSignature, setDigitalSignature] = useState('');
  // const [signatureImage, setSignatureImage] = useState('');
  // return (
  //     <div className="cp-container">
  //         <div className="cp-row1">
  //             <div className="cp-gender">
  //                 <select value={gender} onChange={(e) => setGender(e.target.value)}>
  //                     <option>Mr.</option>
  //                     <option>Mrs.</option>
  //                 </select>
  //                 <input type="text" placeholder="Person Name" />
  //             </div>
  //             <div className="cp-designation">
  //                 <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
  //                     <option>Designation</option>
  //                 </select>
  //             </div>
  //             <button className="cp-addBtn">+</button>
  //         </div>
  //         <div className="cp-row2">
  //             <div className="cp-country">
  //                 <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
  //                     <option>+91</option>
  //                 </select>
  //                 <input type="text" placeholder="9876543210" />
  //             </div>
  //             <input type="text" className="cp-email" placeholder="email id" />
  //             <div className="cp-landline">
  //                 <select>
  //                     <option>0443</option>
  //                 </select>
  //                 <input type="text" />
  //             </div>
  //         </div>
  //         <div className="cp-row3">
  //             <label>Digital signature</label>
  //             <button>upload digital signature</button>
  //             <input type="text" placeholder="Name of the person" />
  //             <input type="date" />
  //         </div>
  //         <div className="cp-row4">
  //             <label>Signature image</label>
  //             <button>upload signature image</button>
  //             <input type="text" placeholder="Name of the person" />
  //         </div>
  //         <div className="cp-row5">
  //             <div className="cp-signingCheckbox">
  //                 <input type="checkbox" id="signingPerson" />
  //                 <label htmlFor="signingPerson">Set as Signing person</label>
  //             </div>
  //             <textarea className="cp-sampleSign" placeholder="sample sign"></textarea>
  //         </div>
  //         <div className="cp-row6">
  //             <label>Invoice Sign option</label>
  //             <div className="cp-signatureCheckbox">
  //                 <input type="checkbox" id="digitalSignature" />
  //                 <label htmlFor="digitalSignature">Digital Signature</label>
  //             </div>
  //             <div className="cp-imageCheckbox">
  //                 <input type="checkbox" id="imageSignature" />
  //                 <label htmlFor="imageSignature">Image Signature</label>
  //             </div>
  //         </div>
  //         <div className="cp-row7">
  //             <button className="cp-addContactBtn">ADD CONTACT PERSON</button>
  //         </div>
  //     </div>
  // );
}

function FooterButtons() {
  return (
    <div className="footer-buttons">
      <button className="save-btn">
        <i className="fa fa-floppy-o" aria-hidden="true"></i>
        Save
      </button>
      <button className="preview-btn">
        <i className="fa fa-eye" aria-hidden="true"></i>
        Preview
      </button>
      <button className="share-btn">
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        Share
      </button>
      <button className="cancel-btn">
        <i className="fa fa-times" aria-hidden="true"></i>
        Cancel
      </button>
    </div>
  );
}

// function ActionButtons() {
//   return <div>ActionButtons Component Here...</div>;
// }

export default App;
