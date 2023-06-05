import styled from "styled-components";

export const Container = styled.span`
    padding: .4rem .8rem;

    border-radius: .5rem;

    background-color: ${({theme}) => theme.colors.dark1000};

    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({theme}) => theme.colors.light100};
`;