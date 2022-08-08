const { createContext, useContext } = require("react");

const GlobalStateContext = createContext();
export default GlobalStateContext;

export const useGlobal = () => useContext(GlobalStateContext);

// import React from "react";

// const GlobalStateContext = React.createContext()

// export default GlobalStateContext;