# devmentor.pl - React: Redux Enhancement / Currency Wallet

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Video](#video)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The goal was to code the app with the functionality of a currency wallet that calculates the profit or loss of currency exchange. The User can add data (currency, amount, and date of the purchase) about each purchase by filling the form. The current rate is proposed based on the date that the User chooses but can be modified. The main page displays the total of invested money and particular currencies. On the "history" page the User can check the history of purchases with current value and profit/loss calculated. The wallet had to be implemented using React Redux state management with two separate reducers for LocalStorage and currency exchange API.

### Video

### Links

-   Solution URL: [Check out my code](https://github.com/axseinga/currency-wallet-react)
-   Live Site URL: [and see live site here!](https://axseinga-currency-wallet-react.netlify.app/)

## My process

### Built with

-   React
-   Create React app
-   React Hooks
-   React Redux
-   Thunk middleware
-   Styled Components

### What I learned

I had a chance to practice my knowledge with implementing the solution with Redux. During the process, I learned about folders architecture and separating files with actions, API calls, reducers, and types. I learned how to connect them and dispatch actions to the reducer to change the state in the store. I learned about saving data in LocalStorage using Redux store and how to retrieve the same data back to the store after loading the page. I had a chance to get to know and use subscribe method to listen for changes in the store. Because of this challenge, I understand Redux more. I struggled a bit again with the asynchronous side of React and the way the state is updated. To be able to update the current rate based on the date and currency chosen by the User I had to find a way to update it only after the state is updated. After a few unsuccessful attempts, I understood the power of useEffect Hooks and its dependencies and came with the solution:

```
useEffect(() => {
        dispatch(save());
        data.map((purchase) => {
            purchase.currentRate = rates.rates[purchase.curr].toFixed(2);
        });
    }, [data]);
```

### Useful resources

-   [React Redux](https://redux.js.org/introduction/getting-started)
-   [Redux course](https://fullstak.pl/Kurs-Podstawy-Redux/) - polish language, course by Artur Chmaro.
-   [Exchange API](https://exchangeratesapi.io/)

## Author

-   Frontend Mentor - [@Axseinga](https://www.frontendmentor.io/profile/yourusername)
-   LinkedIn - [Agnieszka Urbanowicz](https://www.linkedin.com/in/agnieszka-urbanowicz-051147151/)

## Acknowledgments

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.
