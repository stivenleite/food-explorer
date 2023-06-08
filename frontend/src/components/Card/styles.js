import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;

  background-color: ${({theme}) => theme.colors.dark200};
  border: .1rem solid ${({theme}) => theme.colors.dark300};
  border-radius: .8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  padding-block: 2.4rem;

  position: relative;

  > img {
    width: 8.8rem;
  }

  > h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.light300};
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.cake200};
  }

  > button {
    margin-top: 0.4rem;
  }

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    cursor: pointer;
  }
`;