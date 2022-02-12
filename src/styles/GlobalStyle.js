import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html, body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Noto Sans KR', sans-serif;
  background-color:#efefef;
}

a {
  text-decoration: none;
}

ol,
ul {
  list-style: none;
}

button {
  background-color: transparent;
  outline: none;
  border: 0;
  &:hover {
    cursor: pointer;
  }
}
`;

export default GlobalStyle;
