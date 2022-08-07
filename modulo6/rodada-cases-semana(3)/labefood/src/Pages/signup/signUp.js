import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { DivPass, Form, InputMaterial, Main, StyledButton } from "./styled";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios"
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToSignupAdress } from "../../Routes/coordinator";
import Header from "../../Components/Header/Header";

const Signup = () => {
    const [showPassword, setShowPassword]   = useState(true);
    const [showCheckPassword, setShowCheckPassword]   = useState(true);
    const [confirmPass, setConfirmPass] = useState("");
    const [checkErrPass, setCheckErrPass]   = useState(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowCheckPassword = () => setShowCheckPassword(!showCheckPassword);

    const {form, onChange, clean} = useForm({
        "name": "",
        "email": "",
        "cpf": "",
        "password": ""
    });

    const onSubmitForm = (e) => {
        e.preventDefault();

        if(form.password !== confirmPass){
            setCheckErrPass(true);
        }
        else{
            setCheckErrPass(false);
            signupApi(form);
            clean();
            setConfirmPass("");
        };
    };

    const signupApi = async (body) => {
        await axios.post(`${BASE_URL}/signup`, body)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                alert(`Boas vindas, ${res.data.user.name}.`)
                goToSignupAdress(navigate);
            })
            .catch(error => {
                alert(error.response.data.message);
                clean();
                setConfirmPass("");
            });
    };

    const cpfMask = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/,"$1.$2")
            .replace(/(\d{3})(\d)/,"$1.$2")
            .replace(/(\d{3})(\d{1,2})/,"$1-$2")
            .replace(/(-\d{2})\d+?$/,"$1");
    };

    return (
        <Main>
            <Header back/>
            <p>Cadastrar</p>
            <Form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="outlined-basic" 
                    label="Name" 
                    name="name"
                    variant="outlined" 
                    type="text"
                    placeholder="Type your name"
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="Email" 
                    name="email"
                    variant="outlined" 
                    type={"email"}
                    value={form.email}
                    placeholder="email@email.com"
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="CPF" 
                    name="cpf"
                    variant="outlined" 
                    type={"text"}
                    value={cpfMask(form.cpf)}
                    placeholder="xxx.xxx.xxx-xx"
                    onChange={onChange}
                    required
                />
                <DivPass>
                    <InputMaterial
                        id="outlined-basic" 
                        label="Password" 
                        name="password"
                        variant="outlined" 
                        type={showPassword ? "password" : "text"}
                        placeholder="Mínimo 6 caracteres"
                        onChange={onChange}
                        value={form.password}
                        inputProps={{minLength: 6, title: "A senha deve conter no mínimo 6 caracteres"}}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPass>
                <DivPass>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? "Deve ser a mesma que a anterior" : ""}
                        id="outlined-basic" 
                        label="Confirm" 
                        variant="outlined" 
                        type={showCheckPassword ? "password" : "text"}
                        placeholder="Mínimo 6 caracteres"
                        onChange={(e) => setConfirmPass(e.target.value) }
                        value={confirmPass}
                        inputProps={{minLength: 6, title: "A senha deve conter no mínimo 6 caracteres"}}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCheckPassword}
                        edge="end"
                    >
                    {showCheckPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPass>
                <StyledButton type="submit">Register</StyledButton>
            </Form>
        </Main>
    );
};

export default Signup;