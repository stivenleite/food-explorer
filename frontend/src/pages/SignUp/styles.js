import styled from 'styled-components';

export const Container = styled.div`
    width: 31.6rem;
    margin: 6.6rem auto;

    > img {
        margin-bottom: 3.2rem;
    }

    @media (min-width: 1000px){
        width: 100%;
        height: 100vh;

        margin: 0;
        margin-block: 4rem;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h1 {
        display: none;
    }

    > label {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        color: ${({theme}) => theme.colors.light400};
        font-family: 'Roboto', sans-serif;
    }

    @media (min-width: 1000px) {
        padding: 6.4rem;
        
        background-color: ${({theme}) => theme.colors.dark700};
        border-radius: 1.6rem;
        
        > h1 {
            width: 34.8rem;
            display: flex;
            justify-content: center;

            font-size: 32px;
            font-weight: 500;
            line-height: 140%;
        }
    }
`;