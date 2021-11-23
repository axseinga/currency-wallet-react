import { fetchCurrentRates, fetchRateForDate } from "./api.api";
import { saveCurrentRates, saveSuggestedRate } from "./api.actions";

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
