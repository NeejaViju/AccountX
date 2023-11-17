import { useState, useRef, useEffect } from "react";
import uploadIcon from "../icons/Icon feather-upload@2x.png";
// let selCompany = "";
export default function CompanyProfile({ comProfile, selectedCompany }) {
  const [inputs, setInputs] = useState({
    companyName: "",
    companyID: "",
    companyType: "",
    gstNumber: "",
    businessTradeName: "",
    businessLegalName: "",
    mobileNumber: "",
    businessEmail: "",
    industry: "",
    image: ""
  });
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);
  let selCompany = [];

  const loadInputs = () => {
    setInputs({
      companyName: selectedCompany !== "" ? selCompany[0]?.companyName : "",
      companyID: selectedCompany !== "" ? selCompany[0]?.companyID : "",
      companyType: selectedCompany !== "" ? selCompany[0]?.companyType : "",
      gstNumber: selectedCompany !== "" ? selCompany[0]?.gstNumber : "",
      businessTradeName: selectedCompany !== "" ? selCompany[0]?.businessTradeName : "",
      businessLegalName: selectedCompany !== "" ? selCompany[0]?.businessLegalName : "",
      mobileNumber: selectedCompany !== "" ? selCompany[0]?.mobileNumber : "",
      businessEmail: selectedCompany !== "" ? selCompany[0]?.businessEmail : "",
      industry: selectedCompany !== "" ? selCompany[0]?.industry : "",
      image: selectedCompany !== "" ? selCompany[0]?.image : ""
    });
  };

  useEffect(() => {
    loadInputs();
  }, [selectedCompany]);

  // if (selectedCompany === "") return null;

  selCompany = comProfile.filter(company => company._id === selectedCompany);

  // console.log(inputs);

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 5 * 1024 * 1024
    ) {
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
        <div className="cp-row">
          <div className={`floating-label-group ${inputs.gstNumber ? "filled" : ""}`}>
            <input
              type="text"
              name="gstNumber"
              placeholder="Enter GST Number"
              className={`address-border ${inputs.gstNumber ? "has-data" : ""}`}
              onChange={handleInputChange}
              value={inputs.gstNumber}
            />
            <label
              htmlFor="gstNumber"
              className={inputs.gstNumber ? "floating" : ""}
            >
              GST Number*
            </label>
          </div>

          <div className={`cp-input-with-dropdown floating-label-group ${inputs.companyType ? "filled" : ""}`}>
            <select
              name="companyType"
              className={`address-border ${inputs.companyType ? "has-data" : ""}`}
              onChange={handleInputChange}
              value={inputs.companyType}
            >
              <option value="" disabled></option>
              <option value="Type1">Type 1</option>
              <option value="Type2">Type 2</option>
              <option value="Type3">Type 3</option>
            </select>
            <label
              htmlFor="companyType"
              className={inputs.companyType ? "floating" : ""}
            >
              Company Type*
            </label>
            <button className="dropdown-icon-right">
              <i className="fa fa-chevron-down"></i>
            </button>
          </div>

          <div className="cp-row">
            <div className={`floating-label-group ${inputs.companyID ? "filled" : ""}`}>
              <input
                type="text"
                name="companyID"
                placeholder="Company ID"
                className={`address-border ${inputs.companyID ? "has-data" : ""}`}
                onChange={handleInputChange}
                value={inputs.companyID}
              />
              <label
                htmlFor="companyId"
                className={inputs.companyID ? "floating" : ""}
              >
                Company ID
              </label>
            </div>
          </div>
        </div>


        <div className="cp-row">
          <div className={`floating-label-group ${inputs.businessTradeName ? "filled" : ""}`}>
            <input
              type="text"
              name="businessTradeName"
              placeholder="Business Trade Name*"
              className={`address-border ${inputs.businessTradeName ? "has-data" : ""}`}
              onChange={handleInputChange}
              value={inputs.businessTradeName}
              style={{

                paddingRight: "200px"
              }}
            />
            <label
              htmlFor="businessTradeName"
              className={inputs.businessTradeName ? "floating" : ""}
            >
              Business Trade Name*
            </label>
          </div>
          <div className={`floating-label-group ${inputs.businessTradeName ? "filled" : ""}`}>
            <input
              type="text"
              name="businessLegalName"
              placeholder="Business Legal Name*"
              className={`address-border ${inputs.businessTradeName ? "has-data" : ""}`}
              onChange={handleInputChange}
              value={inputs.businessLegalName}
              style={{

                paddingRight: "200px"
              }}
            />

            <label
              htmlFor="businessLegalName"
              className={inputs.businessTradeName ? "floating" : ""}
            >
              Business Legal Name*
            </label>
          </div>
        </div>

        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <div className="inputs-container">
              <div className="mobileNumer-dropdown">
                <select className="mobileDropDown">
                  <option value="miss">+91</option>
                  <option value="miss">+11</option>
                </select>
                <span className="dropdown-icon"></span>
              </div>
            </div>
            <div className={`floating-label-group ${inputs.mobileNumber ? "filled" : ""}`}>
              <input
                name="mobileNumber"
                type="text"
                placeholder="Mobile Number*"
                onChange={handleInputChange}
                value={inputs.mobileNumber}
                className={`address-border ${inputs.mobileNumber ? "has-data" : ""}`}
              />
              <label
                htmlFor="mobileNumber"
                className={inputs.mobileNumber ? "floating" : ""}
              >
                Mobile Number*
              </label>
            </div>
          </div>
          <span className="separator"></span>
          <div className={`cp-input-with-dropdown floating-label-group ${inputs.businessEmail ? "filled" : ""}`}>
            <input
              name="businessEmail"
              type="email"
              placeholder="Business Email*"
              className={`address-border ${inputs.businessEmail ? "has-data" : ""}`}
              value={inputs.businessEmail}
              onChange={handleInputChange}
            />
            <label
              htmlFor="businessEmail"
              className={inputs.businessEmail ? "floating" : ""}
            >
              Business Email*
            </label>
          </div>
          <div className={`cp-input-with-icon ${inputs.industry ? "filled" : ""}`}>
            <div className="floating-label-group">
              <input
                type="text"
                placeholder="Industry"
                className={`address-border ${inputs.industry ? "has-data" : ""}`}
                value={inputs.industry}
                onChange={handleInputChange}
                name="industry" // Make sure to add the name attribute
              />

              <label
                htmlFor="industry" // Use the correct htmlFor value
                className={inputs.industry ? "floating" : ""}
              >
                Industry
              </label>
            </div>
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
              <i className="fa fa-apple" aria-hidden="true"></i>
              <div className="upload-section">
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
