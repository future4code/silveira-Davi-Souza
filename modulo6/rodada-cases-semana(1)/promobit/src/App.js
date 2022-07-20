import { ThemeProvider } from "@mui/material";
import React from "react";
import Router from "./Routes/Router";
import theme from "./Constants/theme";
import GlobalState from "./Global/GlobalState";
import Details from "./Pages/Details/Details";
import Feed from "./Pages/Feed/Feed";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider>
    // <div>
    //   <Details/>
    //   {/* <Feed/> */}
    // </div>
  );
};

export default App;
