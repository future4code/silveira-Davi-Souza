import React, { useState } from "react";
import { DivPass, Form, InputMaterial, Main, StyledButton } from "./styled";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { goToFeed } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail]                 = useState("");
    const [password, setPassword]           = useState("");
    const [showPassword, setShowPassword]   = useState(true);
    const [errEmail, setErrEmail]           = useState("");
    const [errPass, setErrPass]             = useState("");
    const [checkErrEmail, setCheckErrEmail] = useState(false);
    const [checkErrPass, setCheckErrPass]   = useState(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const onSubmitLogin = (event) => {
        event.preventDefault();

        const userLogin = {
            email,
            password
        };

        loginApi(userLogin);

        console.log({email, password});
    };

    const loginApi = async (body) => {
        await axios.post(`${BASE_URL}/login`, body)
            .then(res => {
                console.log(res.data);
                setEmail("");
                setPassword("");
                setErrEmail("");
                setErrPass("");
                setCheckErrEmail(false);
                setCheckErrPass(false);
                localStorage.setItem("token", res.data.token);
                alert(`Boas vindas, ${res.data.user.name}`)
                goToFeed(navigate);
            })
            .catch(error => {
                if(error.response.data.message.includes("Senha incorreta")){
                    setErrPass(error.response.data.message)
                    setCheckErrPass(true);
                }
                else{
                    setErrEmail(error.response.data.message);
                    setCheckErrEmail(true);
                };
                console.log(error.response.data.message);
            });
    };

    return (
        <Main>
            <p>Enter</p>
            <Form onSubmit={onSubmitLogin}>
                <InputMaterial 
                    error={checkErrEmail}
                    helperText={checkErrEmail ? errEmail : ""}
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    type={"email"}
                    value={email}
                    placeholder="email@email.com"
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
                <DivPass>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? errPass : ""}
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        value={password}
                        type={showPassword ? "password" : "text"}
                        placeholder="Mínimo 6 caracteres"
                        onChange={(e)=> setPassword(e.target.value)}
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
                <StyledButton type="submit">Submit</StyledButton>
            </Form>
        </Main>
    );
};

export default Login;