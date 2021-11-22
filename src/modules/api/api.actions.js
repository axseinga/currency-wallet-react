import { SAVE_CURRENT_RATES } from "./api.types";

export const saveCurrentRates = (rates) => ({
    type: SAVE_CURRENT_RATES,
    payload: { rates },
});
