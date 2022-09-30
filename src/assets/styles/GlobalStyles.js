import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: border-box;
}
  
body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
`;
