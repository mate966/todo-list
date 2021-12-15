import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   };

 html {
    font-size: 10px;
 }

 body {
    background-color: #eee;
    font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;
