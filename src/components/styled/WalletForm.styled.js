import styled from "styled-components";

const StyledWalletForm = styled.div`
    color: white;
    font-size: 1.5rem;
    background-color: #37405a;
    margin: 0.5rem 0.2rem;
    padding: 2rem;
    text-align: center;

    & h2 {
        margin: 1rem 0;
    }

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;

        & label {
            min-width: 200px;

            & input,
            select {
                margin-left: 15px;
            }
        }

        & button {
            margin-top: 1rem;
        }
    }
`;

export default StyledWalletForm;
