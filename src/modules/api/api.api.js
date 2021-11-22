import accessKey from "../../config";

import {
    fetchCurrentRateBegin,
    fetchCurrentRateSuccess,
    fetchCurrentRateFailure,
} from "./api.actions";

const baseUrl = "http://api.exchangeratesapi.io/v1";

export const fetchCurrentRate = (currency) => {
    const url = `${baseUrl}/latest?access_key=${accessKey}&symbols=${currency}`;

    return function thunk(dispatch, getState) {
        dispatch(fetchCurrentRateBegin());
        return fetch(url)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw Error(resp.statusText);
            })
            .then((resp) => {
                const rate = resp.rates[currency];
                console.log(rate);
                dispatch(fetchCurrentRateSuccess(rate));
                return rate;
            })
            .catch((error) => {
                dispatch(fetchCurrentRateFailure(error));
            });
    };
};

export const fetchRateForDate = (date, currency) => {
    const url = `${baseUrl}/${date}?access_key=${accessKey}?symbols=${currency}`;

    return fetch(url)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            throw Error(resp.statusText);
        })
        .then((resp) => {
            console.log(resp);
            return resp;
        })
        .catch((err) => {
            console.error(err);
        });
};
