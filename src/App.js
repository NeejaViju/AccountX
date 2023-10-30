import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
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
    <div className="navbar">
      <img src="src\Capture.PNG" alt="Logo" className="navbar-logo" />
      
      {/* Add Icon */}
      <div className="add-icon-container">
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </div>

      <div className="navbar-search-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>
      
      <button className="btn voucher-entry">VOUCHER ENTRY</button>
      <button className="btn upgrade">UPGRADE</button>
    

      <i className="fa fa-bell" aria-hidden="true"></i>
      <div className="profile-container">
        
        <select className="profile-dropdown">
          <option>ABC Private Limited</option>
      
        </select>
        <i className="fa fa-cog" aria-hidden="true"></i>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
}



// SideBar Component
function SideBar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
      <div className="sidebar">
          <h3>📊 Dashboard</h3>

          <div 
              className="menu-item master"
              onClick={() => setShowSubmenu(!showSubmenu)}
          >
              🛠 Masters
          </div>

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

          <div className="menu-item">🛒 Sales</div>
          <div className="menu-item">📦 Purchases</div>
          <div className="menu-item">💼 Expenses</div>
          <div className="menu-item">🏦 Banking</div>
          <div className="menu-item">✅ Approvals</div>
          <div className="menu-item">💹 Accounts</div>
          {/* ... Repeat similar divs for the other sections ... */}
          <div className="menu-item">📊 Reports</div>
          <div className="menu-item">📃 e-Way Bills</div>
          <div className="menu-item">📜 e-Invoices</div>
          <div className="menu-item">📋 Task</div>
          <div className="menu-item">🎉 Promotions</div>
          <div className="menu-item">📁 Tax Filings</div>
          <div className="menu-item">📄 Subscriptions</div>
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
    <div className="profile-header">
      <div className="profile-title">Company Profile</div>
      <div className="company-type">
        <span>Company Type</span>
        <input type="radio" id="registered" name="companyType" value="registered" />
        <label htmlFor="registered">Registered</label>
        <input type="radio" id="unregistered" name="companyType" value="unregistered" />
        <label htmlFor="unregistered">Unregistered</label>
      </div>
      <button className="back-btn">← Back</button>
      <button className="save-exit-btn">Save & Exit</button>
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
  return <div>PersonalDetails Component Here...</div>;
}

function BusinessLegalInfoComponent() {
  return <div>BusinessLegalInfo Component Here...</div>;
}

function BankDetailsComponent() {
  return <div>BankAccountDetails Component Here...</div>;
}

function ContactPersonsComponent() {
  return <div>SigningContactPerson Component Here...</div>;
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
