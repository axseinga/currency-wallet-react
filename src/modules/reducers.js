import { combineReducers } from "redux";
import walletReducer from "./wallet/wallet.reducer";

const reducers = combineReducers({
    wallet: walletReducer,
    /*api: apiReducer,*/
});

export default reducers;
