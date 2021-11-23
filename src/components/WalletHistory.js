import React from "react";
import StyledWalletHistory from "./styled/WalletHistory.styled";

const WalletHistory = (props) => {
    return (
        <StyledWalletHistory>
            <h2>History of your purchases</h2>
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
                        const previousValue = amount * purchasePrice;
                        const percent =
                            ((currentValue - previousValue) / previousValue) *
                            100;
                        return (
                            <tr key={index}>
                                <td>{curr}</td>
                                <td>{amount}</td>
                                <td>{purchaseDate}</td>
                                <td>{purchasePrice}</td>
                                <td>{currentRate}</td>
                                <td>{currentValue.toFixed(0)}</td>
                                <td>
                                    {profitLoss.toFixed(0)} (
                                    {percent.toFixed(2)}%)
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </StyledWalletHistory>
    );
};

export default WalletHistory;
