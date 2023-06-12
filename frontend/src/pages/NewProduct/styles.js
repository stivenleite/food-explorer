import styled from "styled-components";

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
  margin: 1rem 3.2rem 5.2rem;

  > button {
    color: ${({theme}) => theme.colors.light300};
    font-size: 1.6rem;
    font-weight: 500;

    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;

    margin-bottom: 3rem;
  }

  > form {
    label {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        color: ${({theme}) => theme.colors.light400};
        font-family: 'Roboto', sans-serif;
    }
  }
`;