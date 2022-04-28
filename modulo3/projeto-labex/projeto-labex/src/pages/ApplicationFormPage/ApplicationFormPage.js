import React from "react";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <select>
        <option></option>
      </select>
      <input/>
      <input/>
      <input/>
      <input/>
      <select>
        <option></option>
      </select>
      <button onClick={() => goToPage(-1)}>Voltar</button>
      <button onClick={""}>Enviar</button>
    </div>
  );
}

export default ApplicationFormPage;