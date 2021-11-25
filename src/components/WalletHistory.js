import React from "react";
import StyledWalletHistory from "./styled/WalletHistory.styled";

const WalletHistory = (props) => {
    const tableHead = () => {
        const ths = [
            "Currency",
            "Amount",
            "Purchase Date",
            "Purchase Rate",
            "Current Rate",
            "Current Value",
            "Profit / Loss",
        ];

        return ths.map((t) => <th key={t}>{t}</th>);
    };

    const tbody = () => {
        return props.data.map((row, index) => {
            const { curr, amount, purchaseDate, purchasePrice, currentRate } =
                row;
            const currentValue = amount * currentRate;
            const profitLoss = currentValue - amount * purchasePrice;
            const previousValue = amount * purchasePrice;
            const percent =
                ((currentValue - previousValue) / previousValue) * 100;
            return (
                <tr key={index}>
                    <td>{curr}</td>
                    <td>{amount}</td>
                    <td>{purchaseDate}</td>
                    <td>{purchasePrice}</td>
                    <td>{currentRate}</td>
                    <td>{currentValue.toFixed(0)}</td>
                    <td>
                        {profitLoss.toFixed(0)} ({percent.toFixed(2)}%)
                    </td>
                </tr>
            );
        });
    };

    return (
        <StyledWalletHistory>
            <h2>History of your purchases</h2>
            <table>
                <thead>
                    <tr>{tableHead()}</tr>
                </thead>
                <tbody>{tbody()}</tbody>
            </table>
        </StyledWalletHistory>
    );
};

export default WalletHistory;
