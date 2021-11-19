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
    switch (action.type) {
        case "ADD_PURCHASE":
            return {
                ...state,
                data: [...state.data, action.payload.purchase],
            };
        default:
            return state;
    }
};

export default walletReducer;
