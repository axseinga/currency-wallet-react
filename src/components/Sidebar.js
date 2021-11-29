import React from "react";
import StyledSidebar from "./styled/Sidebar.styled";

const Sidebar = (props) => {
    return (
        <StyledSidebar>
            <h2>Online Wallet</h2>
            <h3>Currency exchange</h3>
            <div>
                <button onClick={() => props.setCurrentPage(1)}>Wallet</button>
                <button onClick={() => props.setCurrentPage(2)}>
                    Add currency
                </button>
                <button onClick={() => props.setCurrentPage(3)}>History</button>
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;
