import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "../../Hooks/useForm";
import { Form, InputMaterial, Main, StyledButton } from "./styled";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../Routes/coordinator";
import Header from "../../Components/Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const AddressEdit = () => {
    useProtectedPage();
    const navigate = useNavigate();

    const {form, onChange, clean, setForm} = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    });

    const getAddress = async () => {
        await axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then(res => {
                setForm({
                    "street": res.data.address.street,
                    "number": res.data.address.number,
                    "neighbourhood": res.data.address.neighbourhood,
                    "city": res.data.address.city,
                    "state": res.data.address.state,
                    "complement": res.data.address.complement
                })
            })
            .catch(error => {
                alert(error.reponse.data.message);
            });
    };

    useEffect(() => {
        getAddress();
    },[]);

    const onSubmitForm = (e) => {
        e.preventDefault();

        addAddress();
    };  

    const addAddress = async () => {
        const token = localStorage.getItem("token");

        await axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: token
            }
        })
            .then( res => {
                localStorage.setItem("token", res.data.token);
                goToProfile(navigate);
            })
            .catch( error => {
                alert(error.response.data.message);
                clean();
            });
    };

    return (
        <>
            <Header back/>
            <Main>
                <Form onSubmit={onSubmitForm}>
                    <InputMaterial
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }} 
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
                        name="state"
                        variant="outlined" 
                        type={"text"}
                        value={form.state}
                        placeholder="Estado"
                        onChange={onChange}
                        required
                    />
                    <StyledButton type="submit">Salvar</StyledButton>
                </Form>
            </Main>
        </>
    )
};

export default AddressEdit;