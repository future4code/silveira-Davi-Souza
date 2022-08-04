import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./Constants/theme";
import Router from "./Routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
