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

        position: relative;

        h2 {
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.light300};
        } 
    }

    @media (min-width: 600px) {
        > section {
            margin-inline: 9%;

            h2 {
                font-size: 2.2rem;
            }

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

        width: 45%;
    }

    > .rectangle-wrapper {
        position: absolute;
        bottom: 0;
        right: 1rem;

        width: 92%;
        height: 70%;

        background: ${({theme}) => theme.colors.gradient200};
        border-radius: .3rem;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        .text-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            width: 57%;
            
            z-index: 3;

            margin-right: 1rem;

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

    @media (min-width: 600px) {
        height: 27rem;

        overflow: hidden;

        > img {
            margin-bottom: -3rem;

            left: 4rem;

            
        }

        > .rectangle-wrapper {
            width: 82%;
            

            left: 50%;
            transform: translateX(-50%);

            .text-wrapper {
                margin-right: 2rem;

                h1 {
                    font-size: 2.2rem;
                    text-align: end;
                }

                span {
                    font-size: 1.4rem;
                    text-align: end;
                }
            }
        }
    }
`;

export const SliderContainer = styled.div`
    display: flex;
    gap: 1.6rem;
    flex-wrap: nowrap;
    overflow-x: auto;

    -webkit-overflow-scrolling: touch;

    div:last-child {
        margin-right: 2.4rem;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;