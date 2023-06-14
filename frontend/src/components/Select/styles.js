import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    width: 100%;
    border-radius: 0.8rem;
    
    background-color: ${({theme}) => theme.colors.dark900};

    select {
        appearance: none;
        outline: none;

        width: 100%;
        height: 4.8rem;

        margin-left: 1.6rem;

        border: none;
        background-color: transparent;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.light500};
        
        option {
            background-color: ${({theme}) => theme.colors.dark900};
            color: ${({theme}) => theme.colors.light300};
        }
       
    }

    select::-ms-expand {
        display: none;
    }

    svg {
        position: absolute;
        right: 1.6rem;
        pointer-events: none;
    }
`;