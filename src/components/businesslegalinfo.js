import { useState } from "react";
export default function BusinessLegalInfo() {
  const [inputs, setInputs] = useState({
    gstNumber: "",
    pan: "",
    cin: "",
    tan: "",
    msme: "",
    ieCode: "",
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
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
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
    <div className="bussinessLegalInformation">
      <h3 style={{ color: "#A3184B" }}>Business Legal Information</h3>
      <div className="cp-company-container">
        <div className="cp-column">
          {/* First Row */}

          <div className="cp-row" style={{ display: "flex" }}>
            {/* <div className="cp-input-with-icon floating-label-legal"> */}
            <div className=" cp-input-with-dropdown floating-label-legal">
              <input
                type="text"
                name="gstNumber"
                placeholder="GST Number*"
                className={`customLegal-border ${
                  inputs.gstNumber ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("gstNumber")}
                onBlur={() => handleBlur("gstNumber")}
                value={inputs.gstNumber}
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

            {/* GST START */}
            <input
              type="file"
              id="upload-GSTCertificate-upload"
              style={{ display: "none" }}
              onChange={(event) =>
                "handleFileUpload"(event, "Upload-GSTCertificate-label")
              }
            />
            {/* Label to show file upload success message */}
            <label
              id="Upload-GSTCertificate-label"
              className="upload-success-msg"
            ></label>
            {/* Button to trigger file input */}
            <button
              className="upload-dg0signature-info"
              onClick={() =>
                document.getElementById("upload-GSTCertificate-upload").click()
              }
            >
              <i className="fa fa-upload" aria-hidden="true"></i> &nbsp; Upload
              GST Certificate
            </button>
            {/* GST END */}
            <div className="cp-input-with-dropdown  floating-label-legal">
              <input
                type="text"
                name="pan"
                placeholder="PAN*"
                className={`customLegal-border ${inputs.pan ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("pan")}
                onBlur={() => handleBlur("pan")}
                value={inputs.pan}
              />
              <label
                htmlFor="pan"
                className={focused === "pan" || inputs.pan ? "floating" : ""}
              >
                PAN*
              </label>
            </div>

            <input
              type="file"
              id="upload-PAN-upload"
              style={{ display: "none" }}
              onChange={(event) =>
                "handleFileUpload"(event, "Upload-PAN-label")
              }
            />
            {/* Label to show file upload success message */}
            <label id="Upload-PAN-label" className="upload-success-msg"></label>
            {/* Button to trigger file input */}
            <button
              className="upload-dg0signature-legal"
              onClick={() =>
                document.getElementById("upload-PAN-upload").click()
              }
            >
              <i className="fa fa-upload" aria-hidden="true"></i>&nbsp; Upload
              PAN
            </button>
          </div>

          {/* end */}

          {/* Second Row */}
          <div className="cp-row">
            <div className=" cp-input-with-dropdown floating-label-legal">
              <input
                type="text"
                name="cin"
                placeholder="CIN"
                className={`customLegal-border ${inputs.cin ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("cin")}
                onBlur={() => handleBlur("cin")}
                value={inputs.cin}
              />
              <label
                htmlFor="cin"
                className={focused === "cin" || inputs.cin ? "floating" : ""}
              >
                CIN
              </label>
            </div>

            {/* CIN Certificate Download */}
            <button className="download-button">
              <a
                // href="/path-to-your-cin-certificate.pdf" // Replace with the actual link to the CIN certificate PDF
                download="CIN_Certificate.pdf"
                className="download-dg0signature-legal"
              >
                CIN Certificate.pdf &nbsp;
                <i className="fa fa-download" aria-hidden="true"></i>
              </a>{" "}
              &nbsp;
              <i className="fa fa-share-alt" aria-hidden="true"></i>
            </button>

            <div className=" cp-input-with-dropdown  floating-label-legal">
              <input
                type="text"
                name="tan"
                placeholder="TAN"
                className={`customLegal-border ${inputs.tan ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("tan")}
                onBlur={() => handleBlur("tan")}
                value={inputs.tan}
              />
              <label
                htmlFor="tan"
                className={focused === "tan" || inputs.tan ? "floating" : ""}
              >
                TAN
              </label>
            </div>

            {/* TAN Certificate Download */}
            <button className="download-button">
              <a
                // href="/path-to-your-tan-certificate.pdf" // Replace with the actual link to the TAN certificate PDF
                download="TAN_Certificate.pdf"
                className="download-dg0signature-legal"
              >
                TAN Certificate.pdf &nbsp;
                <i className="fa fa-download" aria-hidden="true"></i>
              </a>{" "}
              &nbsp;
              <span className="separator"></span>
              <i className="fa fa-share-alt" aria-hidden="true"></i>
              <span className="separator"></span>
            </button>
          </div>

          {/* ... remaining code ... */}

          {/* Third Row */}
          <div className="cp-row">
            <div className="cp-input-with-dropdown  floating-label-legal">
              <input
                type="text"
                name="msme"
                placeholder="MSME"
                className={`customLegal-border ${inputs.msme ? "filled" : ""}`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("msme")}
                onBlur={() => handleBlur("msme")}
                value={inputs.msme}
              />
              <label
                htmlFor="msme"
                className={focused === "msme" || inputs.msme ? "floating" : ""}
              >
                MSME
              </label>
            </div>

            <button className="download-button">
              <a
                //href="/path-to-your-cin-certificate.pdf" // Replace with the actual link to the CIN certificate PDF
                download="MSME_Certificate.pdf"
                className="download-dg0signature-legal"
              >
                MSME Certificate.pdf &nbsp;
                <i className="fa fa-download" aria-hidden="true"></i>
              </a>{" "}
              &nbsp;
              <i className="fa fa-share-alt" aria-hidden="true"></i>
            </button>

            <div className=" cp-input-with-dropdown  floating-label-legal">
              <input
                type="text"
                name="iecode"
                placeholder="IE Code"
                className={`customLegal-border ${
                  inputs.iecode ? "filled" : ""
                }`}
                onChange={handleInputChange}
                onFocus={() => handleFocus("iecode")}
                onBlur={() => handleBlur("iecode")}
                value={inputs.iecode}
              />
              <label
                htmlFor="iecode"
                className={
                  focused === "iecode" || inputs.iecode ? "floating" : ""
                }
              >
                IE Code
              </label>
            </div>
            <input
              type="file"
              id="upload-IECCertificate-upload"
              style={{ display: "none" }}
              onChange={(event) =>
                "handleFileUpload"(event, "Upload-IECCertificate-label")
              }
            />
            {/* Label to show file upload success message */}
            <label
              id="Upload-IECCertificate-label"
              className="upload-success-msg"
            ></label>
            {/* Button to trigger file input */}
            <button
              className="upload-dg0signature-legal"
              onClick={() =>
                document.getElementById("upload-IECCertificate-upload").click()
              }
            >
              <i className="fa fa-upload" aria-hidden="true"></i>&nbsp; Upload
              IEC Certificate
            </button>
          </div>

          {/* Fourth row */}
          <div className="cp-row">
            <div>
              <label>GST Applicable</label>
            </div>
            <div>
              <label className="container">
                <input type="checkbox" />
                <span className="checkmark-legal"></span>
              </label>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <label>TDS Deductions</label>
            </div>
            <div>
              <label className="container">
                <input type="checkbox" />
                <span className="checkmark-legal"></span>
              </label>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <label>TCS Collections</label>
            </div>
            <div>
              <label className="container">
                <input type="checkbox" />
                <span className="checkmark-legal"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
