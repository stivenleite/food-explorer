import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    height: 3.2rem;
    width: fit-content;
    
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.colors.light500}` : 'none'};
    border-radius: 1rem;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.colors.light600};
    
    padding: 1.2rem 1.6rem;

    > input {
        width: 7rem;
        
        border: none;
        
        background: transparent;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.light100};

        &::placeholder {
            color: ${({ theme, isNew }) => isNew ? theme.colors.light500 : theme.colors.light100};
        }
    }

    > button {
        display: flex;
        align-items: center;
        
        border: none;

        background-color: transparent;

        svg {
            font-size: 1.2rem;
            color: ${({ theme, isNew }) => isNew ? theme.colors.light500 : theme.colors.light100};
        }
    }
`;