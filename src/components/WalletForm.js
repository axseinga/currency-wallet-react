import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useInputState from "../hooks/useInputState";
import { useDispatch } from "react-redux";
import { addPurchaseAction } from "../modules/wallet/wallet.actions";
import StyledWalletForm from "./styled/WalletForm.styled";
import { getSuggestedRate } from "../modules/api/api.actions";

const WalletForm = (props) => {
    const [currency, handleCurrency, setCurrency, resetCurrency] =
        useInputState("GBP");
    const [amount, handleAmount, setAmount, resetAmount] = useInputState("");
    const currentDate = new Date().toJSON().slice(0, 10);
    const [date, handleDate, setDate, resetDate] = useInputState(currentDate);
    const [rate, handleRate, setRate, resetRate] = useInputState(
        props.rates.suggestedRate
    );

    useEffect(() => {
        dispatch(getSuggestedRate(date, currency));
    }, [currency, date]);

    useEffect(() => {
        setRate(props.rates.suggestedRate);
    }, [props.rates.suggestedRate]);

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
        dispatch(addPurchaseAction(purchase));
        resetCurrency();
        resetAmount();
        resetDate();
        resetRate();
    };

    return (
        <StyledWalletForm>
            <form onSubmit={handleSubmit}>
                <h2>Add new purchase to your wallet</h2>
                <label htmlFor="currency">
                    Select currency:
                    <select
                        name="currency"
                        value={currency}
                        onChange={handleCurrency}
                    >
                        <option value="GBP">GBP</option>
                        <option value="USD">USD</option>
                        <option value="JPY">JPY</option>
                        <option value="CHF">CHF</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="PLN">PLN</option>
                    </select>
                </label>
                <label htmlFor="amount">
                    Select quantity
                    <input
                        type="number"
                        min="1"
                        name="amount"
                        value={amount}
                        onChange={handleAmount}
                    ></input>
                </label>
                <label htmlFor="purchaseDate">
                    Purchase date:
                    <input
                        type="date"
                        name="purchaseDate"
                        min="2000-01-01"
                        max={currentDate}
                        value={date}
                        onChange={handleDate}
                    ></input>
                </label>
                <label htmlFor="purchaseRate">
                    Purchase rate:
                    <input
                        type="number"
                        name="purchaseRate"
                        value={rate}
                        onChange={handleRate}
                    ></input>
                </label>
                <button type="submit">Add purchase</button>
            </form>
        </StyledWalletForm>
    );
};

export default WalletForm;
