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
                    {props.data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.curr}</td>
                            <td>{row.amount}</td>
                            <td>{row.purchaseDate}</td>
                            <td>{row.purchasePrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </StyledWalletHistory>
    );
};

export default WalletHistory;
