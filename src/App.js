import React from "react";
import Wallet from "./components/Wallet";

const App = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "lightgray",
            }}
        >
            <Wallet />
        </div>
    );
};

export default App;
