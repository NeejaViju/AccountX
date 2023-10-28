import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


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



// function Addresses() {
//   return <div>Addresses Component Here...</div>;
// }

// function PersonalDetails() {
//   return <div>PersonalDetails Component Here...</div>;
// }

// function BusinessLegalInfo() {
//   return <div>BusinessLegalInfo Component Here...</div>;
// }

// function BankAccountDetails() {
//   return <div>BankAccountDetails Component Here...</div>;
// }

// function SigningContactPerson() {
//   return <div>SigningContactPerson Component Here...</div>;
// }

// function ActionButtons() {
//   return <div>ActionButtons Component Here...</div>;
// }

export default App;
