import { SAVE_CURRENT_RATES, SAVE_SUGGESTED_RATE } from "./api.types";
import { fetchCurrentRates, fetchRateForDate } from "./api.api";

export const saveCurrentRates = (rates) => ({
    type: SAVE_CURRENT_RATES,
    payload: { rates },
});

export const saveSuggestedRate = (rate) => ({
    type: SAVE_SUGGESTED_RATE,
    payload: { rate },
});

export const save = () => {
    return function thunk(dispatch, getState) {
        fetchCurrentRates().then((rates) => {
            dispatch(saveCurrentRates(rates));
        });
    };
};

export const getSuggestedRate = (date, currency) => {
    return function thunk(dispatch, getState) {
        fetchRateForDate(date, currency).then((rate) => {
            dispatch(saveSuggestedRate(rate));
        });
    };
};
