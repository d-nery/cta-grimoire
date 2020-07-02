import { createGlobalStyle } from "styled-components";
import { reset } from "styled-modern-css-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: ${({ theme }) => theme.body.hex()};
    color: ${({ theme }) => theme.text.hex()};
  }

  @font-face {
    font-family: "Avenir";
    src: url("fonts/Avenir-Black.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  };
`;

export default GlobalStyle;
