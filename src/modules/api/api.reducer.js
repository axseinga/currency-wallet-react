const initState = {
    rates: {},
};

const apiReducer = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_CURRENT_RATES":
            console.log(action.payload.rates);
            return {
                rates: action.payload.rates,
            };
        default:
            return state;
    }
};

export default apiReducer;
