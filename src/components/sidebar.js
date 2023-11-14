import { useState } from "react";

export default function SideBar() {
    const [showSubmenu, setShowSubmenu] = useState(false);
  
    return (
      <div className="sidebar">
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
      </div>
    );
  }