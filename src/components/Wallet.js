import React from "react";
import { useSelector } from "react-redux";
import StyledWallet from "./styled/Wallet.styled";
import Sidebar from "./Sidebar";
import WalletActive from "./WalletActive";

const Wallet = () => {
    const { data } = useSelector((state) => state.wallet);
    return (
        <StyledWallet>
            <Sidebar />
            <WalletActive data={data}/>
        </StyledWallet>
    );
};

export default Wallet;
