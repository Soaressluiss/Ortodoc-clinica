import { createGlobalStyle } from "styled-components";
import { colorBackground } from "./variaveis";


const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  background-color: ${colorBackground};

`
export default GlobalStyle;