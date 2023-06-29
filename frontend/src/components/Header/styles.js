import styled, {css} from "styled-components";

export const ContainerMobile = styled.div`
    width: 100%;
    height: 7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-inline: 2.8rem;

    background-color: ${({theme}) => theme.colors.dark700};

    ${({isAdmin}) => isAdmin ? css`
        > .menu {
            display: flex;
            align-items: center;

            border: none;
            background-color: transparent;

            color: ${({theme}) => theme.colors.light100};
        }

        > .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;

            width: 89%;

            img {
                width: 16rem;
            }

            span {
                font-family: 'Roboto', sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                color: ${({theme}) => theme.colors.cake200};
            }
        }
    ` : css`
        img {
            width: 16rem;
        }

        > .menu {
            display: flex;
            align-items: center;

            border: none;
            background-color: transparent;

            color: ${({theme}) => theme.colors.light100};
        }

        > .logo {
            display: flex;
            align-items: center;
            
        }

        > .cart {
            position: relative;

            width: 3.5rem;
            height: 3rem;

            border: none;
            background-color: transparent;

            img {
                position: absolute;
                bottom: 0;
                left: 0;

                width: 2.6rem;
            }

            > .circle {
                position: absolute;
                right: 0;
                top: 0;
                z-index: 1;

                border-radius: 50%;
                width: 2rem;
                height: 2rem;

                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 1.4rem;
                color: ${({theme}) => theme.colors.light100};

                background-color: ${({theme}) => theme.colors.tomato200};
            }
        }
    `}
`;

export const MenuMobile = styled.section`
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

            color: ${({theme}) => theme.colors.light100};
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

export const ContainerDesktop = styled.div`
    width: 100%;
    height: 10.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-inline: 2rem;

    background-color: ${({theme}) => theme.colors.dark600};

    > .content {
        width: 100%;
        max-width: 112rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo-wrapper {
            display: flex;
            align-items: center;

            height: 100%;
            position: relative;

            img {
                width: 19.7rem;
            }

            span {
                font-family: 'Roboto', sans-serif;
                font-size: 1.2rem;
                color: ${({theme}) => theme.colors.cake200};

                position: absolute;
                right: 0;
                bottom: 0;
            }
        }

        div:nth-child(2) {
            max-width: 50rem;
            
            input {
                text-align: center;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;

            width: 21.6rem;
            height: 100%;

            background-color: ${({theme}) => theme.colors.tomato100};
            border: none;
            border-radius: .5rem;

            font-size: 1.4rem;
            color: ${({theme}) => theme.colors.light100};
        }

        svg {
            color: ${({theme}) => theme.colors.light100};
            cursor: pointer;
        }

        svg:hover {
            filter: brightness(0.7);
        }
    }
`;