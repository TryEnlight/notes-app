import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, h1, h2, h3, h4, p {
  margin: 0;
  color: #191919;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Helvetica Neue', 'Arial', sans-serif;
}
a {
  text-decoration: none;
  color: #2f80ed;
  transition: all 300ms ease;


}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 36px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 18px;
}
*::selection {
  background-color: #e8e8e8;
}

`;

const Header = () => (
  <main>
    <GlobalStyle />
  </main>
);

export default Header;
