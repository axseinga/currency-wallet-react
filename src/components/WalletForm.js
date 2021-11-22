import React from "react";
import { v4 as uuidv4 } from "uuid";
import useInputState from "../hooks/useInputState";
import { useDispatch } from "react-redux";
import { addPurchaseAction } from "../modules/wallet/wallet.actions";
import StyledWalletForm from "./styled/WalletForm.styled";

const WalletForm = () => {
    const [currency, handleCurrency, resetCurrency] = useInputState("GBP");
    const [amount, handleAmount, resetAmount] = useInputState("");
    const [date, handleDate, resetDate] = useInputState("2021-11-19");
    const [rate, handleRate, resetRate] = useInputState("");

    const purchase = {
        id: uuidv4(),
        curr: currency,
        amount: amount,
        purchaseDate: date,
        purchasePrice: rate,
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(purchase);
        dispatch(addPurchaseAction(purchase));
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
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                </select>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    min="1"
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
