import React from "react";
import StyledWalletMain from "./styled/WalletMain.styled";

const WalletMain = (props) => {
    const totals = [];
    props.data.forEach((purchase) => {
        const sum = purchase.amount * purchase.currentRate;
        totals.push(sum);
    });
    const total = totals.reduce((a, b) => a + b, 0);

    const getCurrenciesInWallet = () => {
        const currInWallet = {};
        props.data.forEach((purchase) => {
            const total = purchase.amount * purchase.currentRate;
            if (!currInWallet[purchase.curr]) {
                currInWallet[purchase.curr] = [];
                currInWallet[purchase.curr].push(total);
            } else {
                currInWallet[purchase.curr].push(total);
            }
        });
        return currInWallet;
    };

    const showCurrienciesInWallet = () => {
        const currInWallet = getCurrenciesInWallet();
        return Object.entries(currInWallet).map(([key, value]) => {
            return (
                <li>
                    You have {key} worth of €
                    {value.reduce((a, b) => a + b, 0).toFixed(2)}
                </li>
            );
        });
    };

    return (
        <StyledWalletMain>
            <h1>
                You have currencies worth of <span>€{total.toFixed(2)}</span> in
                your wallet
            </h1>
            <ul>{showCurrienciesInWallet()}</ul>
        </StyledWalletMain>
    );
};

export default WalletMain;
