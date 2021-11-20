import accessKey from "../../config";

const baseUrl = "http://api.exchangeratesapi.io/v1";

export const getCurrentRate = (currency) => {
    const url = `${baseUrl}/latest?access_key=${accessKey}&symbols=${currency}`;

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

export const getRateForDate = (date, currency) => {
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
