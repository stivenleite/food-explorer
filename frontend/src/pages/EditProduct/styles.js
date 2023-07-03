import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
     
  display: flex;
  flex-direction: column;

  > main {
      flex: 1;

       overflow-y: auto;
   }
`;

export const Content = styled.div`
  margin: 2rem 3.2rem 5.2rem;

  > button {
    color: ${({theme}) => theme.colors.light300};
    font-size: 1.6rem;
    font-weight: 500;

    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;

    margin-bottom: 2rem;
    margin-left: -2rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    label {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        color: ${({theme}) => theme.colors.light400};
        font-family: 'Roboto', sans-serif;
    }
  }

  .ingredients-wrapper {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;

    background-color: ${({theme}) => theme.colors.dark800};

    width: 100%;

    padding: 1.4rem;

    border-radius: 0.8rem;
  }

  .buttons-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.2rem;

    button:first-child {
      background-color: ${({theme}) => theme.colors.dark800};
    }
  }

  @media (min-width: 1000px) {
    margin-inline: auto;
    max-width: 112rem;

    > button:first-child {
      font-size: 24px;
      margin-left: 0;
      margin-bottom: 2.4rem;
    }

    > form {
      h1 {
        font-size: 3.2rem;
        font-weight: 500;
      }

      .first-wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 3.2rem;
      }

      .second-wrapper {
        display: grid;
        grid-template-columns: 4fr 1fr;
        gap: 3.2rem;

        .ingredients-wrapper {
          padding: .8rem;
          height: fit-content;
        }
      }

      .buttons-wrapper {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 3.2rem;

        button {
          width: fit-content;
          padding-inline: 2.4rem;
          align-self: flex-end; 
        }

      }
    }
  }
`;

export const InputFile = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    width: 100%;
    height: 4.8rem;
    border-radius: 0.8rem;
    padding-inline: 1.4rem;

    background-color: ${({theme}) => theme.colors.dark800};

    > input {
       opacity: 0;
       width: 100%;
       height: 100%;
    }

    > .wrapper {
        display: flex;
        align-items: center;
        gap: .8rem;

        position: absolute;

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.light100};

        > svg {
          font-size: 2.4rem;
        }
    }
`;

export const SelectContainer = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    width: 100%;
    border-radius: 0.8rem;
    
    background-color: ${({theme}) => theme.colors.dark800};

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