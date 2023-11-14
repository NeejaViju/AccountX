import React, { useState, useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./style/AddressTypeForm.css";
import "./style/ButtonList.css";

import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import CompanyProfile from "./components/companyprofile";
import MenuBar from "./components/menubar";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// App Component
const URL = 'https://api-accountx.onrender.com/api/profile/getall';
const reqData = () => fetch(URL).then(res => res.json());
function App() {
  const [comProfile, setComProfile] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    reqData().then(data => { setComProfile(data); setSelectedCompany(data[0]._id); });
  }, []);

  return (
    <div className="app">
      {/*  */}
      <NavBar comProfile={comProfile} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <CompanyProfile comProfile={comProfile} selectedCompany={selectedCompany} />
          <MenuBar selectedCompany={selectedCompany} />
        </div>
      </div>
    </div>
  );
}

// MainContent Component
// function MainContent(props) {
//   return (
//     <div className="main-content">
//       <Header />
//       <CompanyProfile comProfile={props.comProfile} selectedCompany={props.selectedCompany} setSelectedCompany={props.setSelectedCompany} />
//       <MenuBar />
//       {/* <ButtonList /> */}
//       {/* <AddUnitDivision /> */}
//       {/* <AddressTypeForm /> */}
//       {/* <AddNewBranch /> */}

//       {/* <AddressBranchForm/> */}
//       {/* <Addresses />
//       <PersonalDetails />
//       <BusinessLegalInfo />
//       <BankAccountDetails />
//       <SigningContactPerson />
//       <ActionButtons /> */}
//     </div>
//   );
// }

// function ActionButtons() {
//   return <div>ActionButtons Component Here...</div>;
// }

export default App;
