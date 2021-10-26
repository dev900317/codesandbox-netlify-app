import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

body {
  color: white;
  background-color: orangered;
}
`;

export default GlobalReset;
