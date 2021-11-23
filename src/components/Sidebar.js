import React from "react";
import StyledSidebar from "./styled/Sidebar.styled";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <h2>Online Wallet</h2>
            <h3>Currency exchange</h3>
            <div>
                <button>Wallet</button>
                <button>Add currency</button>
                <button>History</button>
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;
