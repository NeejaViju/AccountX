import { useState } from "react";
import Addresses from "./address";
import PersonalDetails from './personaldetails';
import BusinessLegalInfo from './businesslegalinfo';
import BankDetails from './bankdetails';
import ContactPersonDetails from './contactperson';
import FooterButtons from './footerbuttons';

export default function MenuBar({ selectedCompany }) {

  const [activeComponent, setActiveComponent] = useState("Addresses");

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  if (selectedCompany !== "") {
    return (
      <div>
        <div className="menu-bar-container">
          <button
            className={`menu-bar-button ${activeComponent === "Addresses" ? "active-addresses" : ""
              }`}
            onClick={() => handleClick("Addresses")}
          >
            Addresses
          </button>
          <button
            className={`menu-bar-button ${activeComponent === "PersonalDetails"
              ? "active-personal-details"
              : ""
              }`}
            onClick={() => handleClick("PersonalDetails")}
          >
            Personal Details
          </button>
          <button
            className={`menu-bar-button ${activeComponent === "BusinessLegalInformation"
              ? "active-business"
              : ""
              }`}
            onClick={() => handleClick("BusinessLegalInformation")}
          >
            Business Legal Information
          </button>
          <button
            className={`menu-bar-button ${activeComponent === "BankDetails" ? "active-bank-details" : ""
              }`}
            onClick={() => handleClick("BankDetails")}
          >
            Bank Details
          </button>
          <button
            className={`menu-bar-button ${activeComponent === "ContactPersons" ? "active-contact-persons" : ""
              }`}
            onClick={() => handleClick("ContactPersons")}
          >
            Contact Persons
          </button>
        </div>
        {activeComponent === "Addresses" && <Addresses selectedCompany={selectedCompany} />}
        {activeComponent === "PersonalDetails" && <PersonalDetails />}
        {activeComponent === "BusinessLegalInformation" && <BusinessLegalInfo />}
        {activeComponent === "BankDetails" && <BankDetails />}
        {activeComponent === "ContactPersons" && <ContactPersonDetails />}
        <FooterButtons /> {/* Place this right before the closing div */}
      </div>
    );
  }
}