import React, { useState } from "react";
import { DivPass, Form, InputMaterial, Main, StyledButton } from "./styled";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const onSubmitLogin = (event) => {
        event.preventDefault();

        console.log({email, password});
    };

    return (
        <Main>
            <p>Enter</p>
            <Form onSubmit={onSubmitLogin}>
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    type={"email"}
                    placeholder="email@email.com"
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
                <DivPass>
                    <InputMaterial
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
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