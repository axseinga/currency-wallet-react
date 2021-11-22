import { SAVE_CURRENT_RATES, SAVE_SUGGESTED_RATE } from "./api.types";

export const saveCurrentRates = (rates) => ({
    type: SAVE_CURRENT_RATES,
    payload: { rates },
});

export const saveSuggestedRate = (rate) => ({
    type: SAVE_SUGGESTED_RATE,
    payload: { rate },
});
