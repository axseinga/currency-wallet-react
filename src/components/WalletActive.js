import React from "react";
import StyledWalletActive from "./styled/WalletActive.styled";
import WalletForm from "./WalletForm";
import WalletHistory from "./WalletHistory";
import WalletMain from "./WalletMain";

const WalletActive = (props) => {
    const showCurrentPage = (currentPage) => {
        if (currentPage === 1) {
            return <WalletMain data={props.data} />;
        }
        if (currentPage === 2) {
            return <WalletForm rates={props.rates} />;
        }
        if (currentPage === 3) {
            return <WalletHistory data={props.data} />;
        }
    };
    return (
        <StyledWalletActive>
            {showCurrentPage(props.currentPage)}
        </StyledWalletActive>
    );
};

export default WalletActive;
