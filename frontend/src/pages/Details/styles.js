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
    margin: 1.6rem 5.6rem 3rem;

    > button {
        display: flex;
        align-items: center;

        border: none;
        background-color: transparent;

        color: ${({theme}) => theme.colors.light300};
        font-size: 2.4rem;
        font-weight: 500;

        margin-bottom: 1.6rem;
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            margin-bottom: 1.6rem;
        }

        h1 {
            font-size: 2.7rem;
            font-weight: 500;
            color:  ${({theme}) => theme.colors.light300};
        }

        p {
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({theme}) => theme.colors.light300};
            text-align: center;

            margin-block: 2.4rem;
        }
    }

    > .order {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;

        height: 3.8rem;

        margin-top: 4.8rem;

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
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    flex-wrap: wrap;
`;
