import styled from "styled-components";

const StyledWallet = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default StyledWallet;
