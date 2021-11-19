import React from "react";
import StyledWallet from "./styled/Wallet.styled";
import Sidebar from "./Sidebar";
import WalletActive from "./WalletActive";

const Wallet = () => {
    return (
        <StyledWallet>
            <Sidebar />
            <WalletActive />
        </StyledWallet>
    );
};

export default Wallet;
