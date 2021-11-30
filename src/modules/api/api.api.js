const accessKey = process.env.REACT_APP_ACCESS_KEY;

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
            return rates;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchRateForDate = (date, currency) => {
    const url = `${baseUrl}/${date}?access_key=${accessKey}&symbols=${currency}`;

    return fetch(url)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            throw Error(resp.statusText);
        })
        .then((resp) => {
            const rate = resp.rates[currency].toFixed(2);
            return rate;
        })
        .catch((err) => {
            console.error(err);
        });
};
