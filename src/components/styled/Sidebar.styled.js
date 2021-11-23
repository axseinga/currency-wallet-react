import styled from "styled-components";

const StyledSidebar = styled.section`
    height: 100vh;
    width: 10%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #37405a;
    padding: 3rem 1rem;
    color: white;

    & h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    & div {
        display: flex;
        flex-direction: column;

        & button {
            padding: 0.5rem 0;
            margin: 0.2rem 0;
        }
    }
`;

export default StyledSidebar;
