import React from "react";
import useInputState from "../hooks/useInputState";
import StyledWalletForm from "./styled/WalletForm.styled";

const WalletForm = () => {
    const [currency, handleCurrency, resetCurrency] = useInputState("EUR");
    const [amount, handleAmount, resetAmount] = useInputState("");
    const [date, handleDate, resetDate] = useInputState("2021-11-19");
    const [rate, handleRate, resetRate] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        resetCurrency();
        resetAmount();
        resetDate();
        resetRate();
        console.log("handling submit");
    };

    return (
        <StyledWalletForm>
            <form onSubmit={handleSubmit}>
                <h2>Add new purchase to your wallet</h2>
                <label htmlFor="currency">Currency</label>
                <select
                    name="currency"
                    value={currency}
                    onChange={handleCurrency}
                >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                </select>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleAmount}
                ></input>
                <label htmlFor="purchaseDate">Purchase date:</label>
                <input
                    type="date"
                    name="purchaseDate"
                    min="2000-01-01"
                    max="2021-11-19"
                    value={date}
                    onChange={handleDate}
                ></input>
                <label htmlFor="purchaseRate">Purchase rate:</label>
                <input
                    type="number"
                    name="purchaseRate"
                    value={rate}
                    onChange={handleRate}
                ></input>
                <button type="submit">Add purchase</button>
            </form>
        </StyledWalletForm>
    );
};

export default WalletForm;
