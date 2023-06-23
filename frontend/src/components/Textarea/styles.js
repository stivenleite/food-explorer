import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.2rem;

    padding: 1.4rem;

    background-color: ${({theme}) => theme.colors.dark800};
    border-radius: .8rem;
    border: none;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.light300};

    resize: none;

    &::placeholder{
        color: ${({theme}) => theme.colors.light500};
    }
`;