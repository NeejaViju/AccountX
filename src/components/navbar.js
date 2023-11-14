// import { useState } from "react";

export default function NavBar({ comProfile, selectedCompany, setSelectedCompany }) {
    //const [selectedCompany, setSelectedCompany] = useState({});
    const companyChanged = (e) => {
        //const index = e.target.selectedIndex;
        setSelectedCompany(e.target.value);
    }
    //console.log(`ID is ${selectedCompany._id} and Company name is ${selectedCompany.companyName}`);
    return (
        <div className="new-navbar">
            <div className="new-logo">LOGO</div>

            {/* Add Icon */}
            <div className="icon-container new-add-icon-container">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>

            <div className="icon-container new-add-icon-container">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
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

                <select value={selectedCompany._id} className="drop-down-nav-bar" onChange={companyChanged}>
                    {comProfile && comProfile.length > 0 && comProfile.map(comp => {
                        return <option key={comp._id} value={comp._id}>{comp.companyName}</option>
                    })}
                </select>

                <i className="fa fa-cog new-cog-icon" aria-hidden="true"></i>
                <i className="fa fa-bars new-bars-icon" aria-hidden="true"></i>
            </div>
        </div>
    );
}