import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./Constants/theme";
import { GlobalStyled } from "./Global/GlobalStyled";
import Router from "./Routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
