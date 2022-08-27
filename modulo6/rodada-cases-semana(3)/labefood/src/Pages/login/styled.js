import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

export const Main = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 100vh;
    width: 100%;

    p{
        font-size: 1rem;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 80%;
    justify-content: space-evenly;
    margin-bottom: 1rem;
`

export const StyledButton = styled(Button)`
    && {
        color: #000;
        width: 100%;
        background-color: #e8222e;
    }
`

export const DivPass = styled.div `
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
    width: 100%;
`

export const InputMaterial = styled(TextField)`
    width: 100%;
`

export const StyledIcon = styled.div `
    display: flex;
    align-items: center;
    position: absolute;
    right: 1rem;
    height: 100%;
`;