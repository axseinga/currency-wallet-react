const initState = {
    data: [
        {
            curr: "USD",
            amount: 100,
            purchaseDate: "2021-01-01",
            purchasePrice: 3.74,
        },
        {
            curr: "EUR",
            amount: 300,
            purchaseDate: "2021-01-03",
            purchasePrice: 4.48,
        },
        {
            curr: "PLN",
            amount: 600,
            purchaseDate: "2021-01-04",
            purchasePrice: 1.7,
        },
    ],
};

const walletReducer = (state = initState, action) => {
    return state;
};

export default walletReducer;
