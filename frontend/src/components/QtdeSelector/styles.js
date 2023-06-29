import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    > button {
        display: flex;
        align-items: center;

        border: none;
        background-color: transparent;
        color: ${({theme}) => theme.colors.light100};
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        color: ${({theme}) => theme.colors.light300};
    }

    @media (min-width: 1000px) {
        > span {
            font-size: 2.2rem;
        }
    }
`;