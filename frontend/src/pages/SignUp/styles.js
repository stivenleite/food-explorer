import styled from 'styled-components';

export const Container = styled.div`
    width: 31.6rem;
    margin: 6.6rem auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > img {
        margin-bottom: 3.2rem;
    }

    > label {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        color: ${({theme}) => theme.colors.light400};
        font-family: 'Roboto', sans-serif;
    }
`;