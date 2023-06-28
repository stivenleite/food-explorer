import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
   
    display: flex;
    flex-direction: column;

    > main {
        flex: 1;

        overflow-y: auto;
    }
`;

export const Content = styled.div`
    > button:first-child {
        color: ${({theme}) => theme.colors.light300};
        font-size: 1.6rem;
        font-weight: 500;

        background-color: transparent;
        border: none;

        display: flex;
        align-items: center;
        align-self: flex-start;

        margin-left: -2.5rem;
    }

    margin: 1.5rem 3.5rem 3.5rem;

    display: flex;
    flex-direction: column;
    gap: 2.7rem;

    > h1 {
        font-size: 3.2rem;
        font-weight: 500;
    }

    > span {
        font-size: 2rem;
    }

    > button {
        align-self: flex-end;
    }
`;

export const Items = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    > li {
        display: flex;
        align-items: center;
        gap: 1.3rem;

        img {
            width: 7.2rem;
            border-radius: 50%;
        }

        span h2 {
            font-size: 2rem;
            font-weight: 400;

            span {
                font-family: "Roboto", sans-serif;
                font-size: 1.2rem;
                color: ${({theme}) => theme.colors.light400};
                display: none;
            }
        }

        span button {
            background-color: transparent;
            border: none;

            font-family: "Roboto", sans-serif;
            font-size: 1.2rem;
            color: ${({theme}) => theme.colors.tomato400};
        }
    }
`;