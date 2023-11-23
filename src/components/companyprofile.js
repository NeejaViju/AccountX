import { useState, useRef, useEffect } from "react";
import uploadIcon from "../icons/Icon feather-upload@2x.png";
import { ReactComponent as CheckCircleIcon } from '../icons/Icon feather-check-circle.svg';


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
    image: "",
  });
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);
  const [inputFocus, setInputFocus] = useState({
    gstNumber: false,
    companyType: false,
    companyID: false,
    // Add similar properties for other input fields
  });

  const loadInputs = () => {
    setInputs({
      companyName: selectedCompany !== "" ? selCompany[0]?.companyName : "",
      companyID: selectedCompany !== "" ? selCompany[0]?.companyID : "",
      companyType: selectedCompany !== "" ? selCompany[0]?.companyType : "",
      gstNumber: selectedCompany !== "" ? selCompany[0]?.gstNumber : "",
      businessTradeName:
        selectedCompany !== "" ? selCompany[0]?.businessTradeName : "",
      businessLegalName:
        selectedCompany !== "" ? selCompany[0]?.businessLegalName : "",
      mobileNumber: selectedCompany !== "" ? selCompany[0]?.mobileNumber : "",
      businessEmail: selectedCompany !== "" ? selCompany[0]?.businessEmail : "",
      industry: selectedCompany !== "" ? selCompany[0]?.industry : "",
      image: selectedCompany !== "" ? selCompany[0]?.image : "",
    });
  };

  useEffect(() => {
    loadInputs();
  }, [selectedCompany]);

  const selCompany = comProfile.filter(
    (company) => company._id === selectedCompany
  );

  //gst validation 
  const [isGstValid, setIsGstValid] = useState(null); // null, true, or false


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "gstNumber") {
      const uppercaseValue = value.toUpperCase();
      // Perform your GST validation logic here and set isGstValid
      const isValid = uppercaseValue.length === 15; // Update with actual validation logic
      setIsGstValid(isValid);

      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: uppercaseValue,
      }));
    } else {
      // Keep other fields as they are
    setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
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

  const getInputClassName = (fieldName) => {
    return `address-border ${inputFocus[fieldName] || inputs[fieldName] ? "has-data" : "empty"
      }`;
  };

  const getLabelClassName = (fieldName) => {
    return `${inputFocus[fieldName] || inputs[fieldName] ? "floating" : ""}`;
  };

  const handleInputFocus = (fieldName) => {
    setInputFocus({ ...inputFocus, [fieldName]: true });
  };

  const handleInputBlur = (fieldName) => {
    setInputFocus({ ...inputFocus, [fieldName]: false });
  };

  return (
    <div className="cp-company-container">
      <div className="cp-column">
        <div className="cp-row">
        <div className={`floating-label-group ${getLabelClassName("gstNumber")}`}>
  <div className="input-icon-container">
    <input
      type="text"
      name="gstNumber"
      placeholder="Enter GST Number"
      className={getInputClassName("gstNumber")}
      onChange={handleInputChange}
      value={inputs.gstNumber}
      maxLength={15}
      onFocus={() => handleInputFocus("gstNumber")}
      onBlur={() => handleInputBlur("gstNumber")}
    />
    <label htmlFor="gstNumber" className={getLabelClassName("gstNumber")}>
      GST Number*
    </label>
    {inputs.gstNumber.length === 15 && (
      <CheckCircleIcon
        className={`gst-validation-icon ${isGstValid ? 'valid' : 'invalid'}`}
      />
    )}
  </div>
</div>

          <div
            className={`cp-input-with-dropdown floating-label-group ${getLabelClassName(
              "companyType"
            )}`}
          >
            <select
              name="companyType"
              className={getInputClassName("companyType")}
              onChange={handleInputChange}
              value={inputs.companyType}
              onFocus={() => handleInputFocus("companyType")}
              onBlur={() => handleInputBlur("companyType")}
              
              >
              <option value="" hidden disabled>Company Type*</option>
              <option value="Type1">Proprietorship</option>
              <option value="Type2">Partnership [Firm]</option>
              <option value="Type3">Private Limited Company</option>
              <option value="Limited Liability Partnership">Limited Liability Partnership</option>
              <option value="Limited Liability Company">Limited Liability Company</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Public Limited Company">Public Limited Company</option>
              <option value="Public Listed Company">Public Listed Company</option>
              <option value="Limited Company">Limited Company</option>
              <option value="Nonprofit">Nonprofit</option>
            </select>
            <label
              htmlFor="companyType"
              className={getLabelClassName("companyType")}
            >
              Company Type*
            </label>
            <button className="dropdown-icon-right">
              <i
                className="fa fa-chevron-down"
                style={{ color: "#127186" }}
              ></i>
            </button>
          </div>

          <div className="cp-row">
            <div
              className={`floating-label-group ${getLabelClassName(
                "companyID"
              )}`}
            >
              <input
                type="text"
                name="companyID"
                placeholder="Company ID"
                className={getInputClassName("companyID")}
                onChange={handleInputChange}
                value={inputs.companyID}
                onFocus={() => handleInputFocus("companyID")}
                onBlur={() => handleInputBlur("companyID")}
              />
              <label
                htmlFor="companyId"
                className={getLabelClassName("companyID")}
              >
                Company ID
              </label>
            </div>
          </div>
        </div>

        <div className="cp-row">
          <div
            className={`floating-label-group ${getLabelClassName(
              "businessTradeName"
            )}`}
          >
            <input
              type="text"
              name="businessTradeName"
              placeholder="Business Trade Name*"
              className={getInputClassName("businessTradeName")}
              onChange={handleInputChange}
              value={inputs.businessTradeName}
              style={{
                paddingRight: "200px",
              }}
              onFocus={() => handleInputFocus("businessTradeName")}
              onBlur={() => handleInputBlur("businessTradeName")}
            />
            <label
              htmlFor="businessTradeName"
              className={getLabelClassName("businessTradeName")}
            >
              Business Trade Name*
            </label>
          </div>
          <div
            className={`floating-label-group ${getLabelClassName(
              "businessLegalName"
            )}`}
          >
            <input
              type="text"
              name="businessLegalName"
              placeholder="Business Legal Name*"
              className={getInputClassName("businessLegalName")}
              onChange={handleInputChange}
              value={inputs.businessLegalName}
              style={{
                paddingRight: "200px",
              }}
              onFocus={() => handleInputFocus("businessLegalName")}
              onBlur={() => handleInputBlur("businessLegalName")}
            />
            <label
              htmlFor="businessLegalName"
              className={getLabelClassName("businessLegalName")}
            >
              Business Legal Name*
            </label>
          </div>
        </div>

        <div className="cp-row">
          <div className="cp-input-with-icon mobile">
            <div className="inputs-container">
              <div className="mobileNumer-dropdown">
                <select className="mobileDropDown" style={{ color: "#127186" }}>
                  <option value="miss">+91</option>
                  <option value="miss">+11</option>
                </select>
                <span className="dropdown-icon"></span>
              </div>
            </div>
            <div
              className={`floating-label-group ${getLabelClassName(
                "mobileNumber"
              )}`}
            >
              <input
                name="mobileNumber"
                type="text"
                placeholder="Mobile Number*"
                onChange={handleInputChange}
                value={inputs.mobileNumber}
                className={getInputClassName("mobileNumber")}
                onFocus={() => handleInputFocus("mobileNumber")}
                onBlur={() => handleInputBlur("mobileNumber")}
              />
              <label
                htmlFor="mobileNumber"
                className={getLabelClassName("mobileNumber")}
              >
                Mobile Number*
              </label>
            </div>
          </div>
          <span className="separator"></span>
          <div
            className={`cp-input-with-dropdown floating-label-group ${getLabelClassName(
              "businessEmail"
            )}`}
          >
            <input
              name="businessEmail"
              type="email"
              placeholder="Business Email*"
              className={getInputClassName("businessEmail")}
              value={inputs.businessEmail}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("businessEmail")}
              onBlur={() => handleInputBlur("businessEmail")}
            />
            <label
              htmlFor="businessEmail"
              className={getLabelClassName("businessEmail")}
            >
              Business Email*
            </label>
          </div>
          <div
            className={`cp-input-with-icon ${getLabelClassName("industry")}`}
          >
            <div className="floating-label-group">
              <input
                type="text"
                placeholder="Industry"
                className={getInputClassName("industry")}
                value={inputs.industry}
                onChange={handleInputChange}
                name="industry"
                onFocus={() => handleInputFocus("industry")}
                onBlur={() => handleInputBlur("industry")}
              />
              <label
                htmlFor="industry"
                className={getLabelClassName("industry")}
              >
                Industry
              </label>
            </div>
            <i
              className="fa fa-search new-search-icon-inside-input"
              style={{ color: "#127186" }}
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
