import React from "react";
import StyledWalletActive from "./styled/WalletActive.styled";
import WalletForm from "./WalletForm";
import WalletHistory from "./WalletHistory";
import WalletMain from "./WalletMain";

const WalletActive = (props) => {
    return (
        <StyledWalletActive>
            <WalletMain />
            <WalletForm />
            <WalletHistory data={props.data} />
        </StyledWalletActive>
    );
};

export default WalletActive;
