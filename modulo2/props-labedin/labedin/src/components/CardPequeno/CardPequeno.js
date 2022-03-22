import React from "react";
import './CardPequeno.css'
import Styled from 'styled-components'

const Card_pequeno = Styled.div `
    display: flex;
    border: 1px solid black;
    margin-bottom: 10px;
    width: 100%;
`

const Card_pequeno_box = Styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
`
const Image = Styled.img `
    width: 8%;
    margin: 0 10px;
    border-radius: 50%;
`

const Text = Styled.p `
    margin-left: 6px;
`

const CardPequeno = (props) => {
    return <Card_pequeno>
        <Card_pequeno_box>
            <Image src={ props.imagem } />
            <h4>{ props.text_name }</h4>
            <Text>{ props.text }</Text>
        </Card_pequeno_box>
    </Card_pequeno>
}

export default CardPequeno;