import React from "react";
import Router from "./Routes/Router";
import GlobalState from "./Global/GlobalState";
import Header from "./Components/Header/Header";
import GlobalStyle from "./Constants/GlobalStyle";

const App = () => {
  return (
      <GlobalState>
        <Header/>
        <Router/>
        <GlobalStyle/>
      </GlobalState>
  );
};

export default App;
