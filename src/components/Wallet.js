import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledWallet from "./styled/Wallet.styled";
import Sidebar from "./Sidebar";
import WalletActive from "./WalletActive";
import { fetchCurrentRate } from "../modules/api/api.api";

const Wallet = () => {
    const { data } = useSelector((state) => state.wallet);

    const dispatch = useDispatch();

    const getCurrentRate = useCallback(async (currency) => {
        let currentRate = await dispatch(fetchCurrentRate(currency));
        return currentRate;
    }, []);

    useEffect(() => {
        data.map((purchase) => {
            purchase.currentRate = getCurrentRate(purchase.curr);
        });
        console.log(data);
    });

    return (
        <StyledWallet>
            <Sidebar />
            <WalletActive data={data} />
        </StyledWallet>
    );
};

export default Wallet;
