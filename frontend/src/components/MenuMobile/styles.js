import styled, {css} from "styled-components";

export const Container = styled.section`
    position: absolute;
    z-index: 5;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    opacity: 0;
    pointer-events: none;

    background-color: ${({ theme }) => theme.colors.dark400};

    > header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.6rem;

        height: 7rem;
    
        padding-inline: 2.8rem;
    
        background-color: ${({theme}) => theme.colors.dark700};

        font-family: 'Roboto', sans-serif;
        font-size: 2.2rem;

        button {
            display: flex;
            align-items: center;

            border: none;
            background-color: transparent;
        }
    }

    > main {
        flex: 1;

        margin: 3.6rem 2.8rem 0;
        
        nav {
            margin-top: 3.6rem;
    
            display: flex;
            flex-direction: column;
            
            a {
                font-family: 'Poppins', sans-serif;
                font-size: 2.4rem;
                font-weight: 300;
                color: ${({theme}) => theme.colors.light300};

                padding: 1rem;

                border-bottom: 1px solid ${({theme}) => theme.colors.dark1000};
            }
        }
    }

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `}

`;