import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
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
    <i className="fa fa-search new-search-icon-inside-input" aria-hidden="true"></i>
    <input type="text" placeholder="Search..." className="new-search-input" />
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
      <CompanyProfileHeader/>
      <CompanyProfile/>
      <MenuBar/>
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
        <input type="radio" id="registered" name="companyType" className="radio-btn" defaultChecked />
        <label htmlFor="registered" className="radio-label">Registered</label>
        <input type="radio" id="unregistered" name="companyType" className="radio-btn" />
        <label htmlFor="unregistered" className="radio-label">Unregistered</label>
      </div>
    </div>
  );
}






function CompanyProfile() {
  return (
    <div className="cp-company-container">
      <div className="cp-column">

        {/* First Row */}
        <div className="cp-row">
          <input type="text" placeholder="GST Number" />
          <div className="cp-input-with-dropdown">
            <input type="text" placeholder="Company Type" />
            <button className="dropdown-icon-right"></button>
          </div>
          <input type="text" placeholder="Company ID" />
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <input type="text" placeholder="Business Trade Name" />
          <input type="text" placeholder="Business Legal Name" />
        </div>

        {/* Third Row */}
        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <span className="country-code">+91</span>
            <input type="text" placeholder="Mobile Number" />
          </div>
          <input type="email" placeholder="Business Email" />
          <div className="cp-input-with-icon">
            <input type="text" placeholder="Industry" />
            <i className="fa fa-search icon-button"></i>
          </div>
        </div>

      </div>

      <div className="cp-label-box">Upload your logo</div>
    </div>
  );
}

function MenuBar() {
  const [activeComponent, setActiveComponent] = useState('Addresses');

  const handleClick = (componentName) => {
      setActiveComponent(componentName);
  }

  return (
      <div>
          <div className="menu-bar-container">
              <button 
                  className={`menu-bar-button ${activeComponent === 'Addresses' ? 'active' : ''}`}
                  onClick={() => handleClick('Addresses')}>
                  Addresses
              </button>
              <button 
                  className={`menu-bar-button ${activeComponent === 'PersonalDetails' ? 'active' : ''}`}
                  onClick={() => handleClick('PersonalDetails')}>
                  Personal Details
              </button>
              <button 
  className={`menu-bar-button ${activeComponent === 'BusinessLegalInformation' ? 'active' : ''} business-button`}
  onClick={() => handleClick('BusinessLegalInformation')}
>
  Business Legal Information
</button>
              <button 
                  className={`menu-bar-button ${activeComponent === 'BankDetails' ? 'active' : ''}`}
                  onClick={() => handleClick('BankDetails')}>
                  Bank Details
              </button>
              <button 
                  className={`menu-bar-button ${activeComponent === 'ContactPersons' ? 'active' : ''}`}
                  onClick={() => handleClick('ContactPersons')}>
                  Contact Persons
              </button>
          </div>

          {activeComponent === 'Addresses' && <AddressesComponent />}
          {activeComponent === 'PersonalDetails' && <PersonalDetailsComponent />}
          {activeComponent === 'BusinessLegalInformation' && <BusinessLegalInfoComponent />}
          {activeComponent === 'BankDetails' && <BankDetailsComponent />}
          {activeComponent === 'ContactPersons' && <ContactPersonsComponent />}
          <FooterButtons /> {/* Place this right before the closing div */}
      </div>
  );
}



function AddressesComponent() {
  return (
    <div>
      {/* Registered Office Address */}
      <div className="registeredOfficeAddress">
        <h3>Registered Office Address</h3>
        {addressFields()}
      </div>

      {/* Branch Office Address */}
      <div className="branchAddresses">
        <h3>Branch Office Address</h3>
        {addressFields()}
      </div>
    </div>
  );
}

function addressFields() {
  return (
    <div className="cp-company-container">
      <div className="cp-column">
        {/* First Row */}
        <div className="cp-row">
          <div className="cp-input-with-dropdown">
            <div className="profile-container">
              <input type="text" placeholder="Address Type" />
              <button className="dropdown-icon-right"></button>
            </div>
          </div>
          <div className="cp-input-with-dropdown">
            <input type="text" placeholder="Select Branch" />
            <button className="dropdown-icon-right"></button>
          </div>
          <div className="cp-input-with-dropdown">
            <input type="text" placeholder="Unit/Division" />
            <button className="dropdown-icon-right"></button>
          </div>
        </div>

        {/* Second Row */}
        <div className="cp-row">
          <input type="text" placeholder="Door No" />
          <input type="text" placeholder="Building Name" />
          <input type="text" placeholder="Street Name" />
          <input type="text" placeholder="Area/Taluk" />
        </div>

        {/* Third Row */}
        <div className="cp-row">
          <input type="text" placeholder="City" />
          <div className="cp-input-with-icon">
            <input type="text" placeholder="State" />
            <i className="fa fa-search icon-button"></i>
          </div>
          <div className="cp-input-with-icon">
            <input type="text" placeholder="District" />
            <i className="fa fa-search icon-button"></i>
          </div>
          <input type="text" placeholder="PIN Code" />
        </div>

        {/* Fourth row */}
        <div className="cp-row">
          <div className="cp-input-with-icon">
            <input type="text" placeholder="Country" />
            <i className="fa fa-search icon-button"></i>
          </div>
          <input type="text" placeholder="GST Number" />
          <div className="cp-input-with-icon">
            <input type="text" placeholder="Place of Supply" />
            <i className="fa fa-search icon-button"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalDetailsComponent() {
  return <div>PersonalDetailsComponent Here...</div>;
}

function BusinessLegalInfoComponent() {
  return <div>BusinessLegalInfo Component Here...</div>;
}

function BankDetailsComponent() {
  return <div>BankAccountDetails Component Here...</div>;
}



function ContactPersonsComponent() {
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
