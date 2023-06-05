import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({theme}) => theme.colors.dark700};

    img {
        width: 16rem;
    }

    > .menu {
        display: flex;
        align-items: center;

        border: none;
        background-color: transparent;

        img {
            width: 2.4rem;
        }
    }

    > .logo {
        display: flex;
        align-items: center;
        
    }

    > .cart {
        position: relative;

        width: 3.5rem;
        height: 3rem;

        border: none;
        background-color: transparent;

        img {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 2.6rem;
        }

        > .circle {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;

            border-radius: 50%;
            width: 2rem;
            height: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.4rem;
            color: ${({theme}) => theme.colors.light100};

            background-color: ${({theme}) => theme.colors.tomato200};
        }
    }
`;