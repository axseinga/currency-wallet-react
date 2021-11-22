import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledWallet from "./styled/Wallet.styled";
import Sidebar from "./Sidebar";
import WalletActive from "./WalletActive";
import { save } from "../modules/api/api.operation";

const Wallet = () => {
    const { data } = useSelector((state) => state.wallet);
    const rates = useSelector((state) => state.api);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(save());
        data.map((purchase) => {
            purchase.currentRate = rates.rates[purchase.curr].toFixed(2);
        });
    }, [data]);

    return (
        <StyledWallet>
            <Sidebar />
            <WalletActive data={data} />
        </StyledWallet>
    );
};

export default Wallet;
