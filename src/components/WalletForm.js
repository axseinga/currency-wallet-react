import React from "react";
import StyledWalletForm from "./styled/WalletForm.styled";

const WalletForm = () => {
    return (
        <StyledWalletForm>
            <form>
                <h2>Add new purchase to your wallet</h2>
                <label htmlFor="currency">Currency</label>
                <select name="currency">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                </select>
                <label htmlFor="amount">Amount</label>
                <input type="number"></input>
                <label htmlFor="purchaseDate">Purchase date:</label>
                <input
                    type="date"
                    name="purchaseDate"
                    defaultValue="2021-11-19"
                    min="2000-01-01"
                    max="2021-11-19"
                ></input>
                <label htmlFor="amount">Purchase rate:</label>
                <input type="number"></input>
            </form>
        </StyledWalletForm>
    );
};

export default WalletForm;
