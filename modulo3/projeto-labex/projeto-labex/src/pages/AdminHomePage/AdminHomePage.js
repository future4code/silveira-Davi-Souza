import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHomePage() {
    const navigate = useNavigate();

    const goToPage = (page) => {
    navigate(page)
    }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <button onClick={() => goToPage(-1)}>Voltar</button>
            <button onClick={() => goToPage("/createTrip")}>Criar Viagem</button>
            <button>Logout</button>
            <p>Lista</p>
        </div>
    );
}

export default AdminHomePage;