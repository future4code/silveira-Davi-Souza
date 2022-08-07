import axios from "axios";
import React from "react";
import { useForm } from "../../Hooks/useForm";
import { Form, InputMaterial, Main, StyledButton } from "./styled";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";
import Header from "../../Components/Header/Header";

const SignupAdress = () => {

    const {form, onChange, clean} = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    });

    const onSubmitForm = (e) => {
        e.preventDefault();

        addAddress();
    };  

    const navigate = useNavigate();

    const addAddress = async () => {
        const token = localStorage.getItem("token");

        await axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: token
            }
        })
            .then( res => {
                localStorage.setItem("token", res.data.token);
                goToFeed(navigate);
            })
            .catch( error => {
                alert(error.response.data.message);
                clean();
            });
    };

    return (
        <Main>
            <Header back/>
            <p className="title">SignupAdress</p>
            <Form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="outlined-basic" 
                    label="Street" 
                    name="street"
                    variant="outlined" 
                    type={"text"}
                    value={form.street}
                    placeholder="Rua / Av."
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="Number" 
                    name="number"
                    variant="outlined" 
                    type={"number"}
                    value={form.number}
                    placeholder="Numero"
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="Complement" 
                    name="complement"
                    variant="outlined" 
                    type={"text"}
                    value={form.complement}
                    placeholder="Apto / Bloco"
                    onChange={onChange}
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="Neighbourhood" 
                    name="neighbourhood"
                    variant="outlined" 
                    type={"text"}
                    value={form.neighbourhood}
                    placeholder="Bairro"
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="City" 
                    name="city"
                    variant="outlined" 
                    type={"text"}
                    value={form.city}
                    placeholder="Cidade"
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic" 
                    label="State" 
                    name="state"
                    variant="outlined" 
                    type={"text"}
                    value={form.state}
                    placeholder="Estado"
                    onChange={onChange}
                    required
                />
                <StyledButton type="submit">Register</StyledButton>
            </Form>
        </Main>
    );
};

export default SignupAdress;