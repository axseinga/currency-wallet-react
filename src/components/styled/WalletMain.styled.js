import styled from "styled-components";

const StyledWalletMain = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        font-size: 2rem;
        margin: 2rem 0;

        & span {
            font-size: 2.5rem;
            color: #2da1ef;
        }
    }

    & li {
        padding: 0.5rem;
    }
`;

export default StyledWalletMain;
