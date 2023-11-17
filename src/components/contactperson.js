import { useState } from "react";
import AddNewDesignation from './formComponents/unitdivison';
export default function ContactPersonDetails() {
    // Contact person float

    const [inputs, setInputs] = useState({
        personName: "",
        designation: "",
        mobileNumber: "",
        emailId: "",
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
    // end
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
    // Function to handle file selection
    const handleFileUpload = (event, labelId) => {
        const file = event.target.files[0];
        if (file) {
            // Show the uploaded file name (or any other success message) in the label
            document.getElementById(labelId).innerText = `uploaded successfully`;
        }
    };

    return (
        <div className="contactDetails">
            <h3 style={{ color: "#5C5831" }}>Signing & Contact Person</h3>
            <div className="cp-company-container">
                <div className="cp-column">
                    {/* First Row */}

                    <div className="cp-row">
                        <div className="cp-input-with-icon mobile">
                            <div className="inputs-container">
                                <div className="mobileNumer-dropdown">
                                    <select className="mobileDropDown">
                                    <option value="miss">Miss.</option>
                                    <option value="mr">Mr.</option>
                                    <option value="miss">Mrs.</option>
                                    <option value="miss">Dr.</option>
                                    <option value="miss">Er.</option>
                                    <option value="miss">Prof.</option>
                                    <option value="miss">M/s.</option>
                                    </select>
                                    <span className="dropdown-icon"></span>
                                </div>
                            </div>
                            <input type="text" placeholder="Person Name*" className="" />
                        </div>
                        <span className="separator"></span>
                        {/* Person Name Float */}
                       

                        <div className="cp-input-with-dropdown">
                            <input
                                type="text"
                                placeholder="Designation"
                                className="customContact-border"
                            />
                        </div>
                        {/* add button */}
                        <button
                            className="contact-button-container"
                            onClick={() => toggleComponent("Component6")}
                        >
                            <div className="add-plus-container">
                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            </div>
                        </button>

                        {selectedComponent === "Component6" && (
                            <div onClick={handleFormClick}>
                                <AddNewDesignation />
                            </div>
                        )}
                    </div>

                    {/* Second Row */}
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
                            <input type="text" placeholder="Mobile Number*" className="" />
                        </div>
                        <span className="separator"></span>                      

                        <div className="cp-input-with-dropdown">
                            <div className="cp-input-with-icon floating-label-group">
                                <input
                                    type="text"
                                    name="emailId"
                                    placeholder="Email ID"
                                    className={`address-border ${inputs.emailId ? "filled" : ""}`}
                                    onChange={handleInputChange}
                                    onFocus={() => handleFocus("emailId")}
                                    onBlur={() => handleBlur("emailId")}
                                    value={inputs.emailId}
                                />
                                <label
                                    htmlFor="emailId"
                                    className={
                                        focused === "emailId" || inputs.emailId ? "floating" : ""
                                    }
                                >
                                    Email ID
                                </label>
                            </div>
                        </div>

                        <div className="cp-input-with-icon mobile">
                            <div className="inputs-container">
                                <div className="mobileNumer-dropdown">
                                    <select className="mobileDropDown">
                                        <option value="0443">0443</option>
                                        <option value="0452">0452</option>
                                    </select>
                                    <span className="dropdown-icon"></span>
                                </div>
                            </div>
                            <input type="text" placeholder="24816100" />
                            <span className="separator"></span>
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
                                <i className="fa fa-upload" aria-hidden="true"></i>&nbsp;
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
                                <i className="fa fa-upload" aria-hidden="true"></i>&nbsp;
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
                            <label className="container">
                                <input type="checkbox" />
                                <span className="checkmark-contact"></span>
                            </label>
                        </div>

                        <div>
                            <label>Set as Signing Person</label>
                        </div>

                        <div>
                            <input
                                className="sample-sign"
                                type="text"
                                placeholder="Sample Sign"
                            />
                        </div>
                    </div>

                    {/* sixth row */}
                    <div className="cp-row">
                        <div>
                            <h3 className="ISV">Invoice Sign Option</h3>
                        </div>
                    </div>

                    {/* seventh row */}
                    <div className="cp-row">
                        <div>
                            <label>Digital Signature</label>
                        </div>
                        <div>
                            <label className="container">
                                <input type="checkbox" />
                                <span className="checkmark-contact"></span>
                            </label>
                        </div>

                        <div>
                            <label>Image Signature </label>
                        </div>
                        <div>
                            <label className="container">
                                <input type="checkbox" />
                                <span className="checkmark-contact"></span>
                            </label>
                        </div>
                    </div>

                    {/* eighth row */}
                    <div className="cp-row">
                        <div>
                            <button className="upload-dg0signature">ADD CONTACT PERSON</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );   
}