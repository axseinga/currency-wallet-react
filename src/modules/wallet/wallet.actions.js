import { ADD_PURCHASE } from "./wallet.types";

export const addPurchaseAction = (purchase) => {
    return {
        type: ADD_PURCHASE,
        payload: { purchase },
    };
};
