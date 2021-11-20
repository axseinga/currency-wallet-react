import {
    FETCH_CURRENT_RATE_BEGIN,
    FETCH_CURRENT_RATE_SUCCESS,
    FETCH_CURRENT_RATE_FAILURE,
} from "./api.types";

export const fetchCurrentRateBegin = () => ({
    type: FETCH_CURRENT_RATE_BEGIN,
});

export const fetchCurrentRateSuccess = (rate) => ({
    type: FETCH_CURRENT_RATE_SUCCESS,
    payload: { rate },
});

export const fetchCurrentRateFailure = (error) => ({
    type: FETCH_CURRENT_RATE_FAILURE,
    payload: { error },
});
