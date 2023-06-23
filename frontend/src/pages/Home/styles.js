import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;

    > section {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        margin: 0 0 2.4rem 2.4rem;

        h2 {
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.light300};
        }
    }
`;

export const Banner = styled.div`
    height: 16.4rem;
    width: 100%;

    margin-bottom: 6.2rem;

    position: relative;

    > img {
        position: absolute;
        bottom: 0;
        left: .6rem;
        z-index: 2;
    }

    > .rectangle-wrapper {
        position: absolute;
        bottom: 0;
        right: 1rem;

        width: 87.85%;
        height: 12rem;

        background: ${({theme}) => theme.colors.gradient200};
        border-radius: .3rem;

        .text-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            width: 20.2rem;

            position: absolute;
            right: 1rem;
            top: 3.6rem;
            z-index: 3;


            h1 {
                font-size: 1.8rem;
                font-weight: 600;
            }

            span {
                font-size: 1.2rem;
                font-weight: 400;
            }
        }
    }
`;

export const SliderContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1.6rem;
    overflow: auto;
    white-space: nowrap;

    div:last-child {
        margin-right: 2.4rem;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;