const initState = {
    currentRate: null,
    loading: false,
    error: null,
};

const apiReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_CURRENT_RATE_BEGIN":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_CURRENT_RATE_SUCCESS":
            console.log(action.payload.rate);
            return {
                ...state,
                loading: false,
                currentRate: action.payload.rate,
            };
        case "FETCH_CURRENT_RATE_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                currentRate: null,
            };
        default:
            return state;
    }
};
