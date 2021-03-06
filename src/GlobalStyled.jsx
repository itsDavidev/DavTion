import { createGlobalStyle } from 'styled-components';

const GlobalSyled = createGlobalStyle`
     body {
       position: relative;
       height: 100%;
      margin: 0px ;
    font-family: Cascadia code, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalSyled;
