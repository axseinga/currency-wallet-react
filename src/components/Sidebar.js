import React from "react";

const Sidebar = () => {
    return (
        <div
            style={{
                border: "1px solid black",
                height: "100vh",
                width: "10%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            To bedzie sidebar
            <button>Wallet</button>
            <button>Add currency</button>
            <button>History</button>
        </div>
    );
};

export default Sidebar;
