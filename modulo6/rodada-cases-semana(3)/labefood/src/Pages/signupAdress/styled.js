import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export const Main = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 100vh;
    width: 100%;

    .title {
        font-size: 1.8rem;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    height: 55%;
    width: 80%;
    justify-content: space-evenly;
`

export const InputMaterial = styled(TextField)`
    width: 100%;
`

export const StyledButton = styled(Button)`
    && {
        color: #000;
        width: 100%;
        background-color: #e8222e;
    }
`