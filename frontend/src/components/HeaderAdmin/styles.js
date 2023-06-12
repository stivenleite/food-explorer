import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({theme}) => theme.colors.dark700};

   

    > .menu {
        display: flex;
        align-items: center;

        border: none;
        background-color: transparent;

        img {
            width: 2.4rem;
        }
    }

    > .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        width: 89%;

        img {
            width: 16rem;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.colors.cake200};
        }
    }

    
`;