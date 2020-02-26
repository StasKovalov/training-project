import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html, body {
        font-family: 'Gilroy', sans-serif;
    }
`;

export default GlobalStyle;
