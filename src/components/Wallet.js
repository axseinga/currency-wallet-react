import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledWallet from "./styled/Wallet.styled";
import Sidebar from "./Sidebar";
import WalletActive from "./WalletActive";
import { fetchCurrentRate } from "../modules/api/api.api";

const Wallet = () => {
    const { data } = useSelector((state) => state.wallet);

    const dispatch = useDispatch();
    /*data.map(
        (purchase) =>
            (purchase.currentRate = dispatch(fetchCurrentRate(purchase.curr)))
    );*/

    return (
        <StyledWallet>
            <Sidebar />
            <WalletActive data={data} />
        </StyledWallet>
    );
};

export default Wallet;
