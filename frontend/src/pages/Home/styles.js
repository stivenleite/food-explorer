import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
     
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
    'header'
    'content'
    'footer'; 

    > main {
        grid-area: content;

        overflow-y: auto;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    > section {
        display: flex;
        flex-direction: column;
        gap: 3rem;


        margin: 6.2rem 0 2.4rem 2.4rem;
    }
`;

export const Banner = styled.div`
    height: 16.4rem;
    width: 100%;

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
    > h2 {
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.light300};

        margin-bottom: 2.4rem;
    }
`;