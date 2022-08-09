import React, { useEffect, useState } from "react";
import { Form, InputMaterial, Main, StyledButton } from "./styled";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { goToProfile } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const ProfileEdit = () => {
    useProtectedPage();
    const navigate = useNavigate();
    
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cpf, setCpf ] = useState('');

    const getPerson = async () => {
        await axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then(res => {
                setName(res.data.user.name);
                setEmail(res.data.user.email);
                setCpf(res.data.user.cpf);
            })
            .catch(error => {
                alert(error.reponse.data.message);
            });
    };

    const updateProfile = async () => {
        const body = {
            name,
            email,
            cpf
        };

        await axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                alert(error.reponse.data.message);
            });
    };

    useEffect(() => {
        getPerson();
    },[]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        updateProfile();
        goToProfile(navigate);
    };

    const cpfMask = (value) => {
        if(cpf){
            return value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/,"$1.$2")
                .replace(/(\d{3})(\d)/,"$1.$2")
                .replace(/(\d{3})(\d{1,2})/,"$1-$2")
                .replace(/(-\d{2})\d+?$/,"$1");
        };
    };

    return (
        <>
            <Header title={"Endereço"} back/>
            <Main>
                
                <Form onSubmit={onSubmitForm}>
                    <InputMaterial
                        InputLabelProps={{ shrink: true }}
                        id="outlined-basic" 
                        label="Name" 
                        name="name"
                        variant="outlined" 
                        type="text"
                        placeholder="Type your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <InputMaterial
                        InputLabelProps={{ shrink: true }}
                        id="outlined-basic" 
                        label="Email" 
                        name="email"
                        variant="outlined" 
                        type={"email"}
                        value={email}
                        placeholder="email@email.com"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <InputMaterial
                        InputLabelProps={{ shrink: true }}
                        id="outlined-basic" 
                        label="CPF" 
                        name="cpf"
                        variant="outlined" 
                        type={"text"}
                        value={cpfMask(cpf)}
                        placeholder="xxx.xxx.xxx-xx"
                        onChange={e => setCpf(e.target.value)}
                        required
                    />
                    <StyledButton type="submit">Salvar</StyledButton>
                </Form>
            </Main>
        </>
    );
};

export default ProfileEdit;