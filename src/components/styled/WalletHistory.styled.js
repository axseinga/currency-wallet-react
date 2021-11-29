import styled from "styled-components";

const StyledWalletHistory = styled.div`
    background-color: lightsteelblue;
    font-size: 1.5rem;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;

    & h2 {
        margin-bottom: 0.5rem;
        text-align: center;
    }

    & table,
    th,
    td {
        border: 1px solid white;
    }

    & th,
    td {
        padding: 0.7rem;
    }

    @media (max-width: 1200px) {
        margin: 2rem 1rem;
        padding: 2rem 4rem;

        & th,
        td {
            padding: 0.3rem;
        }
    }

    @media (max-width: 1000px) {
        margin: 2rem 1rem;
        padding: 2rem 1rem;

        & th,
        td {
            padding: 0.7rem;
        }
    }

    @media (max-width: 900px) {
        margin: 2rem 0;
        font-size: 1rem;

        & th,
        td {
            padding: 0.3rem;
        }
    }
`;

export default StyledWalletHistory;
