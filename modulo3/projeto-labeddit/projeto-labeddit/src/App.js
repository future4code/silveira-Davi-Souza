import React, { useState } from "react";
import Router from "./routes/Router";

const App = () => {
  const token = localStorage.getItem("token");
  const [ rightButtonText, setRightButtonText ] = useState( token ? "Logout" : "Entrar");

  return (
    <div>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
    </div>
  );
}

export default App;
