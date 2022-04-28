import React from "react";
import { useNavigate } from "react-router-dom";
 

function HomePage() {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={() => goToPage("/listTrips")}> Ver Viagens </button>
      <button onClick={() => goToPage("/login")}> Área de Admin </button>
    </div>
  );
}

export default HomePage;