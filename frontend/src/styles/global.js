import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark400};
        color: ${({ theme }) => theme.colors.light300};
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a, label {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover, label:hover {
        filter: brightness(0.7);
    }
`;