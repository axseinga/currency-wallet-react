import accessKey from "../../config";

const baseUrl = "http://api.exchangeratesapi.io/v1";

export const fetchCurrentRates = () => {
    const currency = "USD, JPY, GBP, CHF, CAD, AUD";
    const url = `${baseUrl}/latest?access_key=${accessKey}&symbols=${currency}`;

    return fetch(url)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            throw Error(resp.statusText);
        })
        .then((resp) => {
            const rates = resp.rates;
            console.log(rates);
            return rates;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchRateForDate = (date, currency) => {
    console.log(`to wchodzi do api: ${date}, ${currency}`);
    const url = `${baseUrl}/${date}?access_key=${accessKey}&symbols=${currency}`;

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
