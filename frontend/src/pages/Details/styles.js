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
    margin: 1.6rem 5.6rem 3rem;

    > button:first-child {
        color: ${({theme}) => theme.colors.light300};
        font-size: 1.6rem;
        font-weight: 500;

        background-color: transparent;
        border: none;

        display: flex;
        align-items: center;

        margin-bottom: 2rem;
        margin-left: -2rem;
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            margin-bottom: 1.6rem;

            width: 26.4rem;
            height: auto;

            border-radius: 50%;
        }

        .wrapper {
            h1 {
                font-size: 2.7rem;
                font-weight: 500;
                color:  ${({theme}) => theme.colors.light300};
                text-align: center;
            }
    
            p {
                font-size: 1.6rem;
                font-weight: 400;
                color: ${({theme}) => theme.colors.light300};
                text-align: center;
    
                margin-block: 2.4rem;
            }

            > .order {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.6rem;
        
                height: 3.8rem;
        
                > button {
                    width: 18.8rem;
                    height: 100%;
        
                    border: none;
                    border-radius: .4rem;
                    background-color: ${({theme}) => theme.colors.tomato100};
        
                    font-size: 1.4rem;
                    font-weight: 500;
                    color: ${({theme}) => theme.colors.light100};
                }
            }
        }
    }


    @media (min-width: 1000px) {
        margin-inline: auto;
        max-width: 112rem;

        > button:first-child {
            font-size: 24px;
            margin-left: 0;
            margin-bottom: 4.2rem;
        }

        > section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 4.8rem;

        img {
            width: 39rem;
        }

        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: start;

            h1 {
                font-size: 4rem;
            }

            p {
                font-size: 24px;
                text-align: start;
            }

            .order {
                height: 4.8rem;

                > button {
                    font-size: 1.6rem;
                }
            }
        }
        }
    }
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    flex-wrap: wrap;

    margin-bottom: 4.8rem;
`;
