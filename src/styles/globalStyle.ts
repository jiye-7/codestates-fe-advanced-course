import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
    margin: 0;
  }
`;

export default GlobalStyles;
