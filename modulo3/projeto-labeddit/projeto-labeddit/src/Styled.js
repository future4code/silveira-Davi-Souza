import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const StyledBodyPage = styled.body `
    display: flex;
    width: 100vw;
    min-height: 100vh;
    background-color: darkcyan;
`;

export const StyledPage = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100%;
    background-color: aquamarine;
`;

export const StyledInput = styled.input `
    width: 50px;
    height: 80%;
    border: 1px solid gray;
    border-radius: 2px;
    padding: 10px;
`;