import { fetchCurrentRates } from "./api.api";
import { saveCurrentRates } from "./api.actions";

export const save = () => {
    return async function thunk(dispatch, getState) {
        const rates = await fetchCurrentRates();
        dispatch(saveCurrentRates(rates));
    };
};
