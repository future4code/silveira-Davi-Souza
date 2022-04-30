import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/urls";
import { Button_enviar, DivStyled } from "../../Styled";

function TripDetailPage() {
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const navigate = useNavigate();

  const goToPage = (page) => navigate(page);

  useEffect( () => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    setIsLoading(true);
    setError(undefined);

    axios.get(`${BASE_URL}/trip/${id}`, headers)
    .then( response => {
      setIsLoading(false);
      setData(response.data.trip);
    })
    .catch( error => {
      setError(error);
      setIsLoading(false);
    });
  }

  const renderCandidates = () => {
    return data.candidates.map( candidate => {
        return <li key={candidate.id}>{candidate.name}</li>
      });
  };

  

  return (
    <DivStyled>
      {console.log("ID:", id)}
      {console.log(data)}
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>Deu erro</h1>}
      {!isLoading && data 
      && (data ? (
        <>
          <h1>{data.name}</h1>
          <div className="page-details">
            <p>Nome: {data.name}</p>
            <p>Descrição: {data.description}</p>
            <p>Planeta: {data.planet}</p>
            <p>Duração: {data.durationInDays}</p>
            <p>Data: {data.date}</p>
          </div>
      </>
      ) : ("Lista não encontrada"))}
      <Button_enviar onClick={() => goToPage(-1)}>Voltar</Button_enviar>
      <h2>Candidatos Pendentes</h2>
      {/* {data.length > 0 ? } */}
      <p>Não há candidatos pendentes</p>
      <h2>Candidatos Aprovados</h2>
      <p>Não há candidatos Aprovados</p>
    </DivStyled>
  );
};

export default TripDetailPage;