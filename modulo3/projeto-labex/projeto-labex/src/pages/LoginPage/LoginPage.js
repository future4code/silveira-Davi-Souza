import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../../hooks/UseRequestData.js";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const onChangePassword = (event) => setPassword(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  
  const goToPage = (page) => navigate(page);

  const onSubmit = () => {
    const body = {
      email: email,
      password: password
    };

    axios.post(`${BASE_URL}/login`, body)
    .then( res => {
      localStorage.setItem("token", res.data.token);
      goToPage("/adminHome");
    })
    .catch( error => {
      alert("erro:", error.response.data.message);
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={onChangeEmail} placeholder={"E-mail"} />
      <input value={password} onChange={onChangePassword} placeholder={"E-mail"} />
      <button onClick={() => goToPage(-1)}>Voltar</button>
      <button onClick={onSubmit}>Entrar</button>
    </div>
  );
};

export default LoginPage;