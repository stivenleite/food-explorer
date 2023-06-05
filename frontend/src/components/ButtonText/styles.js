import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background-color: transparent;

    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.light100};
`;