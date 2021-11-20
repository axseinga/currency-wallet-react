import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./modules/reducers";

const store = createStore(
    reducers,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(thunk))
);

const state = store.getState();

const saveToLocalStorage = (purchasesState) => {
    try {
        const purchases = JSON.stringify(purchasesState);
        localStorage.setItem("purchases", purchases);
    } catch (error) {
        console.log("data was not saved");
    }
};

function loadFromLocalStorage() {
    try {
        const purchases = localStorage.getItem("purchases");
        if (purchases === null) return undefined;
        return JSON.parse(purchases);
    } catch (e) {
        console.log("something went wrong");
        return undefined;
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
