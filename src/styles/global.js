import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; 
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #ddd;
    }
`;
