import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.dark200};;
  border: .1rem solid ${({theme}) => theme.colors.dark300};
  border-radius: .8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex: 0 0 auto;

  width: 21rem;
  height: 29.2rem;

  padding-inline: 1.2rem;

  position: relative;

  > img {
    width: 8.8rem;
    border-radius: 50%;
  }

  > h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.light300};
    text-align: center;
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

  > .order-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  @media (min-width: 1000px) {
    width: 30.4rem;
    height: 46.2rem;
    gap: 1.5rem;

    > img {
      width: 17.6rem;
    }

    > h3 {
      font-size: 2.4rem;
    }

    > span {
      font-size: 3.2rem;
    }

    > .order-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
  }
`;