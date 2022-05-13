import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";

const Register = ({ rightButtonText, setRightButtonText }) => {
    useUnprotectedPage();

    const [form, onChange, cleanFields] = useForm({username: "", email: "", password: "" });
  
    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();

        signUp( form, cleanFields, navigate, setRightButtonText, setIsLoading );
    }

    return (
        <div>
            <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input 
                    name="username"
                    type="username" 
                    value={form.username} 
                    onChange={onChange} 
                    placeholder={"Nome"}
                    required
                />
                <input 
                    name="email"
                    type="email" 
                    value={form.email} 
                    onChange={onChange} 
                    placeholder={"E-mail"}
                    required
                />
                <input 
                    name="password"
                    type="password" 
                    value={form.password} 
                    onChange={onChange} 
                    placeholder={"Senha"} 
                    required 
                    pattern={"^.{8,}"}
                    title={"Sua senha deve ter no mínimo 8 caracteres."}
                />
                
                <button>Continuar</button>
                
                {isLoading ? <p>Carregando...</p> : <></>}
            </form>
        </div>
    );
}

export default Register;