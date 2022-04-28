import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/UseRequestData.js"
import { BASE_URL } from "../../constants/urls.js"

function ListTripsPage() {
  const navigate = useNavigate();
  const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <div>
      <button onClick={() => goToPage(-1)} >Voltar</button>
      <button onClick={() => goToPage("/application")} >Inscrever-se</button>
      <h1>Lista de Vigens</h1>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>Deu erro</h1>}
      {!isLoading &&
        data &&
        (data.length > 0 ? (
          <ul>{data.map(map => {
            return (
              <div key={map.id}>
                <li><button onClick={() => goToPage("/tripDetail")}>{map.planet}</button></li>
              </div>
            )
          })}</ul>
        ) : (
          "Lista não encontrada"
        ))}
    </div>
  );
};

export default ListTripsPage;