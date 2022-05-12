import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToRegister } from "../../routes/coodinator";
import { login } from "../../services/user";

const Login = ({ setRightButtonText }) => {
    useUnprotectedPage();

    const [form, onChange, cleanFields] = useForm({email: "", password: ""});

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();

        login(form, cleanFields, navigate, setRightButtonText);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
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
                
            </form>
            <button onClick={ () => goToRegister( navigate )}>Crie uma conta!</button>
        </div>
    );
};

export default Login;