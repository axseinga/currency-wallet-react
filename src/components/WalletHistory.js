import React from "react";
import StyledWalletHistory from "./styled/WalletHistory.styled";

const WalletHistory = (props) => {
    return (
        <StyledWalletHistory>
            <h1>History of your purchases</h1>
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>Purchase Date</th>
                        <th>Purchase Rate</th>
                        <th>Current Rate</th>
                        <th>Current Value</th>
                        <th>Profit / Loss</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => {
                        const {
                            curr,
                            amount,
                            purchaseDate,
                            purchasePrice,
                            currentRate,
                        } = row;
                        const currentValue = amount * currentRate;
                        const profitLoss =
                            currentValue - amount * purchasePrice;
                        const percent = profitLoss / 100;
                        console.log(percent);
                        return (
                            <tr key={index}>
                                <td>{curr}</td>
                                <td>{amount}</td>
                                <td>{purchaseDate}</td>
                                <td>{purchasePrice}</td>
                                <td>{currentRate}</td>
                                <td>{currentValue.toFixed(0)}</td>
                                <td>{profitLoss.toFixed(0)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </StyledWalletHistory>
    );
};

export default WalletHistory;
