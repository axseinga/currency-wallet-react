import React from "react";
import StyledSidebar from "./styled/Sidebar.styled";

const Sidebar = () => {
    return (
        <StyledSidebar>
            To bedzie sidebar
            <button>Wallet</button>
            <button>Add currency</button>
            <button>History</button>
        </StyledSidebar>
    );
};

export default Sidebar;
