import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToRegister } from "../../routes/coodinator";
import { login } from "../../services/user";
import { StyledInput, StyledPage } from "../../Styled";

const Login = ({ setRightButtonText }) => {
    useUnprotectedPage();

    const [ form, onChange, cleanFields ] = useForm({email: "", password: ""});

    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();

        login(form, cleanFields, navigate, setRightButtonText, setIsLoading);
    }

    return (
        <StyledPage>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    name="email"
                    type="email" 
                    value={form.email} 
                    onChange={onChange} 
                    placeholder={"E-mail"}
                    required
                />
                <StyledInput 
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

            </form>
            <button onClick={ () => goToRegister( navigate )}>Crie uma conta!</button>
            {isLoading ? <p>Carregando...</p> : <></>}
        </StyledPage>
    );
};

export default Login;