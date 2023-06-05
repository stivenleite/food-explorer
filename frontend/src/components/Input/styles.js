import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    border-radius: 0.8rem;
    padding-inline: 1.4rem;

    background-color: ${({theme}) => theme.colors.dark900};

    > input {
        width: 100%;
        height: 4.8rem;

        border: none;
        background-color: transparent;

        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.colors.light300};
        
        &::placeholder{
            color: ${({theme}) => theme.colors.light500};
        }
    }

    > svg {
        margin-right: 1.2rem;
        
        color: ${({theme}) => theme.colors.light500};
    }

`;