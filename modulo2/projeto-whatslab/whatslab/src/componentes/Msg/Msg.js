import React from "react";
import styled from "styled-components"

const Campo_msg = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
`
const Text_usuario = styled.p `
    font-size: 0.8rem;
    color: orange;
`

function Msg(props) {
    return <>
        <Campo_msg>
            <Text_usuario>{props.usuario}</Text_usuario>
            <p>{props.texto}</p>
        </Campo_msg>
    </>
}

export default Msg;