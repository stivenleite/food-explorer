import styled from 'styled-components';

export const Container = styled.div`

`;

export const Banner = styled.div`
    height: 16.4rem;
    width: 100%;

    position: relative;

    margin-bottom: 6.2rem;

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