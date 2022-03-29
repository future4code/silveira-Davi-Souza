import React from "react";
import styled from "styled-components"

const Campo_msg = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin-left: ${props => {
        if (props.tipo === "eu") {
            return "0"
        } else {
            return "0.8em"
        }
    }};
    margin-right: ${props => {
        if (props.tipo === "eu") {
            return "0.8em"
        } else {
            return "0"
        }
    }};
    margin-bottom: 0.8em;
    background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } 
        else {
            return "#ffffff" // Branco
        }
    }};
    align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};
    padding: 0.5em 0.7em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    word-wrap: break-word;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
`
const Nome_usuario = styled.div `
    display:  ${props => {
        if (props.tipo === "eu") {
            return "none"
        } else {
            return "flex"
        }
    }};
    font-size: 0.6rem;
    color: #9AAC8C;
    font-weight: bold;
`
const Mensagem = styled.div `
    margin-top: 0.2em;
`

function Msg(props) {
    return <>
        <Campo_msg tipo = {props.usuario.toLowerCase()}>
            <Nome_usuario tipo = {props.usuario.toLowerCase()}>{props.usuario.toLowerCase()}</Nome_usuario>
            <Mensagem>{props.texto}</Mensagem>
        </Campo_msg>
    </>
}

export default Msg;