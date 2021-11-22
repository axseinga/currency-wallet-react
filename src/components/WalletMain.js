import React from "react";
import StyledWalletMain from "./styled/WalletMain.styled";

const WalletMain = (props) => {
    const totals = [];
    props.data.forEach((purchase) => {
        const sum = purchase.amount * purchase.currentRate;
        totals.push(sum);
    });
    const total = totals.reduce((a, b) => a + b, 0);
    return (
        <StyledWalletMain>
            <h1>
                You have currencies worth of €{total.toFixed(2)} in your wallet
            </h1>
        </StyledWalletMain>
    );
};

export default WalletMain;
