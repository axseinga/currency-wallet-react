import { fetchCurrentRates, fetchRateForDate } from "./api.api";
import { saveCurrentRates, saveSuggestedRate } from "./api.actions";

export const save = () => {
    return async function thunk(dispatch, getState) {
        const rates = await fetchCurrentRates();
        dispatch(saveCurrentRates(rates));
    };
};

export const getSuggestedRate = (date, currency) => {
    return async function thunk(dispatch, getState) {
        const rate = await fetchRateForDate(date, currency);
        dispatch(saveSuggestedRate(rate));
    };
};
