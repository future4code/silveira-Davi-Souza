import styled from "styled-components";
import { Button } from "@mui/material";

export const Main = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CartConfig = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

export const InfoProfile = styled.div `
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    font-size: 1.2rem;
    background-color: lightgray;
    width: 100%;
    padding: 0.5rem 0 0.5rem 1rem;

    p:nth-child(1){
        color: #B8B8B8;
    }
`

export const InfoRestaurant = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    margin: 10px;

    p:nth-child(1){
        color: red;
    }
`

export const CartInfo = styled.div `
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const EmptyCart = styled.div `
    margin: 20%;
    font-size: 2rem;
    text-align: center;
`

export const Payment = styled.div `
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;

    p, label {
        font-size: 1.2rem;
    }
`

export const Freight = styled.p `
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`

export const Total = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 5px 5px 5px 0;
    p:nth-child(2){
        color: red;
        font-size: 1.2rem;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    width: 90%;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    label {
        font-size: 1rem;
        text-transform: uppercase;
        margin-left: 3px;
    }

    input {
        height: 15px;
        /* width: 15%; */
    }
`

export const StyledButton = styled(Button)`
    && {
        color: #000;
        width: 100%;
        background-color: #e8222e;
        margin-top: 1rem;
    }
`

export const DivForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .payment {
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        width: 100%;
        margin-bottom: 1rem;
    }

    hr {
        border: none;
        background-color: black;
        width: 100%;
        height: 1px;
    }
`