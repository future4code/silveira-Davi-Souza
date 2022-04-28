import React from "react";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <div>
      <h1>Criar Viagem</h1>
      <input/>
      <select>
        <option>

        </option>
      </select>
      <input/>
      <input/>
      <input/>
      <button onClick={() => goToPage(-1)}>Voltar</button>
      <button onClick={""}>Criar</button>
    </div>
  );
}

export default CreateTripPage;