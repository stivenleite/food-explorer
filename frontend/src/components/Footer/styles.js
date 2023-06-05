import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;

    width: 100%;
    height: 7.7rem;

    position: absolute;
    bottom: 0;

    padding: 3rem 2.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;
    color: ${({theme}) => theme.colors.light200};

    background-color: ${({theme}) => theme.colors.dark600};

    > svg {
        width: 11.5rem;

        path {
            fill: ${({theme}) => theme.colors.light700};
        }
    }
`;