import styled from "styled-components";

export const Container = styled.button`
    width: ${({width}) => width};
    height: ${({height}) => height};

    border: none;
    border-radius: 0.5rem;

    background-color: ${({theme, disabled}) => disabled ? theme.colors.tomato400 : theme.colors.tomato100};
    color: ${({theme}) => theme.colors.light100};

    font-size: 1.4rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    @media (min-width: 1000px) {
        font-size: 2rem;
    }
`;