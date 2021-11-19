const initState = {
    data: [],
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
