import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./Constants/theme";
import GlobalState from "./Context/Global/GlobalState";
import { GlobalStyled } from "./Global/GlobalStyled";
import Router from "./Routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
