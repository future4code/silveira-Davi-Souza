import React from "react";
import { useNavigate } from "react-router-dom";
import { Button_enviar } from "../../Styled";
 

function HomePage() {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <div>
      <h1>LabeX</h1>
      <Button_enviar onClick={() => goToPage("/listTrips")}> Ver Viagens </Button_enviar>
      <Button_enviar onClick={() => goToPage("/login")}> Área de Admin </Button_enviar>
    </div>
  );
}

export default HomePage;