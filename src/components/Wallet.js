import React from "react";
import Sidebar from "./Sidebar";
import WalletActive from "./WalletActive";

const Wallet = () => {
    return (
        <div style={{ display: "flex", with: "100vw" }}>
            <Sidebar />
            <WalletActive />
        </div>
    );
};

export default Wallet;
