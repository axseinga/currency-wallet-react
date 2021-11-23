const initState = {
    rates: {},
    suggestedRate: null,
};

const apiReducer = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_CURRENT_RATES":
            return {
                ...state,
                rates: action.payload.rates,
            };
        case "SAVE_SUGGESTED_RATE":
            console.log(action.payload.rate);
            return {
                ...state,
                suggestedRate: action.payload.rate,
            };
        default:
            return state;
    }
};

export default apiReducer;
