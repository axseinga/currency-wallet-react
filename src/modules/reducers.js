import { combineReducers } from "redux";
import walletReducer from "./wallet/wallet.reducer";
import apiReducer from "./api/api.reducer";

const reducers = combineReducers({
    wallet: walletReducer,
    api: apiReducer,
});

export default reducers;
